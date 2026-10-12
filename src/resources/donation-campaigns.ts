import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  campaignStatusTransitionSchema,
  type CampaignStatusTransition,
} from "../models/campaign-status-transition.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import {
  donationCampaignRequestSchema,
  type DonationCampaignRequest,
} from "../models/donation-campaign-request.js";
import {
  donationCampaignUpdateSchema,
  type DonationCampaignUpdate,
} from "../models/donation-campaign-update.js";
import { donationCampaign1Schema, type DonationCampaign1 } from "../models/donation-campaign1.js";
import {
  listDonationCampaignsResponseSchema,
  type ListDonationCampaignsResponse,
} from "../models/list-donation-campaigns-response.js";
import {
  listNonprofitsRequestSchema,
  type ListNonprofitsRequest,
} from "../models/list-nonprofits-request.js";
import {
  listNonprofitsResponseSchema,
  type ListNonprofitsResponse,
} from "../models/list-nonprofits-response.js";
import type { Servers } from "../servers.js";

export class DonationCampaigns {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a donation campaign
   *
   * @remarks
   * Removes the donation campaign specified in the path. This request is only allowed if the
   * campaign has the status **inactive**.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Campaign Management read and write
   *
   * @returns No Content - the request has been successfully processed, but there is no additional
   * content.
   *
   * @throws {@link
   * DonationCampaigns.DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCompaniesCompanyIdCampaignManagementDonationCampaignId(
    request: DonationCampaigns.DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    DonationCampaigns.DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default9("/companies/{companyId}/campaignManagement/{donationCampaignId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "donationCampaignId", value: request.donationCampaignId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DonationCampaigns.DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError,
      },
      options,
    );
  }

  /**
   * Get the donation campaigns for an account holder
   *
   * @remarks
   * Returns a paginated list of donation campaigns associated with the account holder specified in
   * the path. You can filter the list by campaign status.
   *
   * To make this request, your API credential must have one of the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Campaign Management read
   * * Management API—Campaign Management read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * DonationCampaigns.GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId(
    request: DonationCampaigns.GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListDonationCampaignsResponse,
    DonationCampaigns.GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9(
          "/companies/{companyId}/campaignManagement/accountHolders/{accountHolderId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "accountHolderId", value: request.accountHolderId, schema: s.string() },
        ],
        query: [
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "pageNumber", value: request.pageNumber, schema: s.defaulted(s.int(), 1) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDonationCampaignsResponseSchema },
        errorFactory:
          DonationCampaigns.GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdError,
      },
      options,
    );
  }

  /**
   * Update a donation campaign
   *
   * @remarks
   * Updates the properties of the donation campaign specified in the path. Note the following
   * restrictions:
   *
   * * You cannot use a PATCH request to update the campaign status. To activate or end a campaign,
   *   make a POST request to the `/campaignManagement/{campaignId}/status/{status}` endpoint.
   * * You get a validation error if you add account holders that are not compatible with the
   *   nonprofit.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Campaign Management read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * DonationCampaigns.PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchCompaniesCompanyIdCampaignManagementDonationCampaignId(
    request: DonationCampaigns.PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DonationCampaign1,
    DonationCampaigns.PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default9("/companies/{companyId}/campaignManagement/{donationCampaignId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "donationCampaignId", value: request.donationCampaignId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => donationCampaignUpdateSchema)),
        },
      },
      {
        success: { kind: "json", schema: donationCampaign1Schema },
        errorFactory: DonationCampaigns.PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdError,
      },
      options,
    );
  }

  /**
   * Create a donation campaign
   *
   * @remarks
   * Creates a new donation campaign, to give shoppers the option to donate to a nonprofit
   * organization when making a payment. A campaign can be for online payments, in-person payments,
   * or both online and in-person payments.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Campaign Management read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link DonationCampaigns.PostCompaniesCompanyIdCampaignManagementError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCompaniesCompanyIdCampaignManagement(
    request: DonationCampaigns.PostCompaniesCompanyIdCampaignManagementRequest,
    options?: RequestOptions,
  ): ApiPromise<DonationCampaign1, DonationCampaigns.PostCompaniesCompanyIdCampaignManagementError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/companies/{companyId}/campaignManagement"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => donationCampaignRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: donationCampaign1Schema },
        errorFactory: DonationCampaigns.PostCompaniesCompanyIdCampaignManagementError,
      },
      options,
    );
  }

  /**
   * Activate or end a donation campaign
   *
   * @remarks
   * Starts or stops the donation campaign specified in the path, by providing a path parameter. Use
   * the path parameter **activate** to start an inactive campaign, or **end** to stop an active
   * campaign. Other status transitions are not allowed.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Campaign Management read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * DonationCampaigns.PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatus(
    request: DonationCampaigns.PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DonationCampaign1,
    DonationCampaigns.PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9(
          "/companies/{companyId}/campaignManagement/{donationCampaignId}/status/{status}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "donationCampaignId", value: request.donationCampaignId, schema: s.string() },
          { name: "status", value: request.status, schema: campaignStatusTransitionSchema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: donationCampaign1Schema },
        errorFactory:
          DonationCampaigns.PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusError,
      },
      options,
    );
  }

  /**
   * Get a list of nonprofits
   *
   * @remarks
   * Returns a list of supported nonprofit organizations to choose from when creating a donation
   * campaign. The list only contains nonprofits that are compatible with all the account holders
   * specified in the request.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link DonationCampaigns.PostCompaniesCompanyIdNonprofitsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCompaniesCompanyIdNonprofits(
    request: DonationCampaigns.PostCompaniesCompanyIdNonprofitsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListNonprofitsResponse, DonationCampaigns.PostCompaniesCompanyIdNonprofitsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/companies/{companyId}/nonprofits"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [
          { name: "searchTerm", value: request.searchTerm, schema: s.optional(s.string()) },
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "goal", value: request.goal, schema: s.optional(s.array(s.string())) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listNonprofitsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listNonprofitsResponseSchema },
        errorFactory: DonationCampaigns.PostCompaniesCompanyIdNonprofitsError,
      },
      options,
    );
  }
}

export namespace DonationCampaigns {
  export type DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** The unique identifier of the donation campaign to be deleted. */
    donationCampaignId: string;
  };

  export class DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError> =
      [
        {
          on: 400,
          kind: "defaultErrorResponseEntity",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 401,
          kind: "defaultErrorResponseEntity2",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 403,
          kind: "defaultErrorResponseEntity3",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 422,
          kind: "defaultErrorResponseEntity4",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 500,
          kind: "defaultErrorResponseEntity5",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
      ];
  }

  export type GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** The unique identifier of the account holder. */
    accountHolderId: string;
    /**
     * The campaign status to return campaigns that match. Allowed values: **inactive**, **active**,
     * or **ended**.
     */
    status?: string;
    /** The number of the page to fetch. @default 1 */
    pageNumber?: number;
    /**
     * The number of items to have on a page, maximum 100. The default is 10 items on a page.
     *
     * @default 10
     */
    pageSize?: number;
  };

  export class GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdError> =
      [
        {
          on: 400,
          kind: "defaultErrorResponseEntity",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 401,
          kind: "defaultErrorResponseEntity2",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 403,
          kind: "defaultErrorResponseEntity3",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 422,
          kind: "defaultErrorResponseEntity4",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 500,
          kind: "defaultErrorResponseEntity5",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
      ];
  }

  export type PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** The unique identifier of the donation campaign to be updated. */
    donationCampaignId: string;
    body?: DonationCampaignUpdate;
  };

  export class PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdError> =
      [
        {
          on: 400,
          kind: "defaultErrorResponseEntity",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 401,
          kind: "defaultErrorResponseEntity2",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 403,
          kind: "defaultErrorResponseEntity3",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 422,
          kind: "defaultErrorResponseEntity4",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 500,
          kind: "defaultErrorResponseEntity5",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
      ];
  }

  export type PostCompaniesCompanyIdCampaignManagementRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    body?: DonationCampaignRequest;
  };

  export class PostCompaniesCompanyIdCampaignManagementError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdCampaignManagementError> = [
      {
        on: 400,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 401,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** The unique identifier of the donation campaign to activate or end. */
    donationCampaignId: string;
    /** The desired status change. Possible values: **activate** or **end**. */
    status: CampaignStatusTransition;
  };

  export class PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusError> =
      [
        {
          on: 400,
          kind: "defaultErrorResponseEntity",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 401,
          kind: "defaultErrorResponseEntity2",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 403,
          kind: "defaultErrorResponseEntity3",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 422,
          kind: "defaultErrorResponseEntity4",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 500,
          kind: "defaultErrorResponseEntity5",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
      ];
  }

  export type PostCompaniesCompanyIdNonprofitsRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /**
     * A query to return nonprofit organizations for, maximum 100 characters. For example,
     * `&searchTerm=clean%20water`.
     */
    searchTerm?: string;
    /** The number of the page to fetch. */
    pageNumber?: number;
    /**
     * The number of items to have on a page, maximum 100. The default is 10 items on a page.
     *
     * @default 10
     */
    pageSize?: number;
    /**
     * One or more United Nations Sustainable Development Goals to return nonprofit organizations
     * for. Format: `unsdg_<number>`, for example, `&goal=unsdg_6&goal=unsdg_2`.
     */
    goal?: string[];
    body?: ListNonprofitsRequest;
  };

  export class PostCompaniesCompanyIdNonprofitsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdNonprofitsError> = [
      {
        on: 400,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 401,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
