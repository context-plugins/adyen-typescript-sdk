import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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
        url: this.#servers.default9("/merchants/{merchantId}/payoutSettings/{payoutSettingsId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "payoutSettingsId", value: request.payoutSettingsId, schema: s.string() },
        ],
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
        url: this.#servers.default9("/merchants/{merchantId}/payoutSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: payoutSettingsResponseSchema },
        errorFactory: PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsError,
      },
      options,
    );
  }

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
        url: this.#servers.default9("/merchants/{merchantId}/payoutSettings/{payoutSettingsId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "payoutSettingsId", value: request.payoutSettingsId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: payoutSettingsSchema },
        errorFactory: PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError,
      },
      options,
    );
  }

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
        url: this.#servers.default9("/merchants/{merchantId}/payoutSettings/{payoutSettingsId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "payoutSettingsId", value: request.payoutSettingsId, schema: s.string() },
        ],
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

  postMerchantsMerchantIdPayoutSettings(
    request: PayoutSettingsMerchantLevel.PostMerchantsMerchantIdPayoutSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutSettings, PayoutSettingsMerchantLevel.PostMerchantsMerchantIdPayoutSettingsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/merchants/{merchantId}/payoutSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
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
    merchantId: string;
    payoutSettingsId: string;
  };

  export class DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdPayoutSettingsRequest = {
    merchantId: string;
  };

  export class GetMerchantsMerchantIdPayoutSettingsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdPayoutSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest = {
    merchantId: string;
    payoutSettingsId: string;
  };

  export class GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest = {
    merchantId: string;
    payoutSettingsId: string;
    body?: UpdatePayoutSettingsRequest;
  };

  export class PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdPayoutSettingsRequest = {
    merchantId: string;
    body?: PayoutSettingsRequest;
  };

  export class PostMerchantsMerchantIdPayoutSettingsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdPayoutSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
