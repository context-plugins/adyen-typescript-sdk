import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  payoutSettingsRequestSchema,
  type PayoutSettingsRequest,
} from "../models/payout-settings-request.js";
import {
  payoutSettingsResponseSchema,
  type PayoutSettingsResponse,
} from "../models/payout-settings-response.js";
import { payoutSettingsSchema, type PayoutSettings } from "../models/payout-settings.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  updatePayoutSettingsRequestSchema,
  type UpdatePayoutSettingsRequest,
} from "../models/update-payout-settings-request.js";
import type { Servers } from "../servers.js";

export class PayoutSettingsMerchantLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a payout setting
   *
   * @remarks
   * Deletes the payout setting identified in the path.
   *
   * Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your
   * Adyen contact will set up your access.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   *
   * * Management API—Payout account settings read and write
   *
   * @returns No Content - look at the actual response code for the status of the request.
   *
   * @throws {@link
   * PayoutSettingsMerchantLevel.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId(
    request: PayoutSettingsMerchantLevel.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    PayoutSettingsMerchantLevel.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/payoutSettings/{payoutSettingsId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "payoutSettingsId", value: request.payoutSettingsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory:
          PayoutSettingsMerchantLevel.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError,
      },
      options,
    );
  }

  /**
   * Get a list of payout settings
   *
   * @remarks
   * Returns the list of payout settings for the merchant account identified in the path.
   *
   * Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your
   * Adyen contact will set up your access.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Payout account settings read
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchantsMerchantIdPayoutSettings(
    request: PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PayoutSettingsResponse,
    PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/payoutSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: payoutSettingsResponseSchema },
        errorFactory: PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsError,
      },
      options,
    );
  }

  /**
   * Get a payout setting
   *
   * @remarks
   * Returns the payout setting identified in the path.
   *
   * Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your
   * Adyen contact will set up your access.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Payout account settings read
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchantsMerchantIdPayoutSettingsPayoutSettingsId(
    request: PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PayoutSettings,
    PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/payoutSettings/{payoutSettingsId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "payoutSettingsId", value: request.payoutSettingsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: payoutSettingsSchema },
        errorFactory: PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError,
      },
      options,
    );
  }

  /**
   * Update a payout setting
   *
   * @remarks
   * Updates the payout setting identified in the path. You can enable or disable the payout
   * setting.
   *
   * Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your
   * Adyen contact will set up your access.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   *
   * * Management API—Payout account settings read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * PayoutSettingsMerchantLevel.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId(
    request: PayoutSettingsMerchantLevel.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PayoutSettings,
    PayoutSettingsMerchantLevel.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/payoutSettings/{payoutSettingsId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "payoutSettingsId", value: request.payoutSettingsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updatePayoutSettingsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: payoutSettingsSchema },
        errorFactory: PayoutSettingsMerchantLevel.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError,
      },
      options,
    );
  }

  /**
   * Add a payout setting
   *
   * @remarks
   * Sends a request to add a payout setting for the merchant account specified in the path. A
   * payout setting links the merchant account to the [transfer
   * instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments)
   * that contains the details of the payout bank account. Adyen verifies the bank account before
   * allowing and enabling the payout setting.
   *
   * If you're accepting payments in multiple currencies, you may add multiple payout settings for
   * the merchant account.
   *
   * Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your
   * Adyen contact will set up your access.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   *
   * * Management API—Payout account settings read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PayoutSettingsMerchantLevel.PostMerchantsMerchantIdPayoutSettingsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postMerchantsMerchantIdPayoutSettings(
    request: PayoutSettingsMerchantLevel.PostMerchantsMerchantIdPayoutSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutSettings, PayoutSettingsMerchantLevel.PostMerchantsMerchantIdPayoutSettingsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/payoutSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => payoutSettingsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: payoutSettingsSchema },
        errorFactory: PayoutSettingsMerchantLevel.PostMerchantsMerchantIdPayoutSettingsError,
      },
      options,
    );
  }
}

export namespace PayoutSettingsMerchantLevel {
  export type DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the payout setting. */
    payoutSettingsId: string;
  };

  export class DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdPayoutSettingsRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
  };

  export class GetMerchantsMerchantIdPayoutSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdPayoutSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the payout setting. */
    payoutSettingsId: string;
  };

  export class GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the payout setting. */
    payoutSettingsId: string;
    body?: UpdatePayoutSettingsRequest;
  };

  export class PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdPayoutSettingsRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    body?: PayoutSettingsRequest;
  };

  export class PostMerchantsMerchantIdPayoutSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdPayoutSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
