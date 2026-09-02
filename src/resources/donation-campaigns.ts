import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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
        url: this.#servers.default9("/companies/{companyId}/campaignManagement/{donationCampaignId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "donationCampaignId", value: request.donationCampaignId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DonationCampaigns.DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError,
      },
      options,
    );
  }

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
        url: this.#servers.default9(
          "/companies/{companyId}/campaignManagement/accountHolders/{accountHolderId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "accountHolderId", value: request.accountHolderId, schema: s.string() },
        ],
        query: [
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "pageNumber", value: request.pageNumber, schema: s.defaulted(s.number(), 1) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.number(), 10) },
        ],
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
        url: this.#servers.default9("/companies/{companyId}/campaignManagement/{donationCampaignId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "donationCampaignId", value: request.donationCampaignId, schema: s.string() },
        ],
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

  postCompaniesCompanyIdCampaignManagement(
    request: DonationCampaigns.PostCompaniesCompanyIdCampaignManagementRequest,
    options?: RequestOptions,
  ): ApiPromise<DonationCampaign1, DonationCampaigns.PostCompaniesCompanyIdCampaignManagementError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/companies/{companyId}/campaignManagement"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
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
        url: this.#servers.default9(
          "/companies/{companyId}/campaignManagement/{donationCampaignId}/status/{status}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "donationCampaignId", value: request.donationCampaignId, schema: s.string() },
          { name: "status", value: request.status, schema: campaignStatusTransitionSchema },
        ],
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

  postCompaniesCompanyIdNonprofits(
    request: DonationCampaigns.PostCompaniesCompanyIdNonprofitsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListNonprofitsResponse, DonationCampaigns.PostCompaniesCompanyIdNonprofitsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/companies/{companyId}/nonprofits"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [
          { name: "searchTerm", value: request.searchTerm, schema: s.optional(s.string()) },
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.number(), 10) },
          { name: "goal", value: request.goal, schema: s.optional(s.array(s.string())) },
        ],
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
    companyId: string;
    donationCampaignId: string;
  };

  export class DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError> = [
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
    companyId: string;
    accountHolderId: string;
    status?: string;
    pageNumber?: number;
    pageSize?: number;
  };

  export class GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdError> = [
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
    companyId: string;
    donationCampaignId: string;
    body?: DonationCampaignUpdate;
  };

  export class PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdError> = [
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
    companyId: string;
    body?: DonationCampaignRequest;
  };

  export class PostCompaniesCompanyIdCampaignManagementError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
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
    companyId: string;
    donationCampaignId: string;
    status: CampaignStatusTransition;
  };

  export class PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusError> = [
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
    companyId: string;
    searchTerm?: string;
    pageNumber?: number;
    pageSize?: number;
    goal?: string[];
    body?: ListNonprofitsRequest;
  };

  export class PostCompaniesCompanyIdNonprofitsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
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
