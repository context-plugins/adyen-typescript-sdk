import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { applePayInfoSchema, type ApplePayInfo } from "../models/apple-pay-info.js";
import { applePayResponseInfoSchema, type ApplePayResponseInfo } from "../models/apple-pay-response-info.js";
import {
  managementPaymentMethodSchema,
  type ManagementPaymentMethod,
} from "../models/management-payment-method.js";
import {
  paymentMethodResponseSchema,
  type PaymentMethodResponse,
} from "../models/payment-method-response.js";
import {
  paymentMethodSetupInfoSchema,
  type PaymentMethodSetupInfo,
} from "../models/payment-method-setup-info.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  updatePaymentMethodInfoSchema,
  type UpdatePaymentMethodInfo,
} from "../models/update-payment-method-info.js";
import type { Servers } from "../servers.js";

export class PaymentMethodsMerchantLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getMerchantsMerchantIdPaymentMethodSettings(
    request: PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PaymentMethodResponse,
    PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/paymentMethodSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [
          { name: "storeId", value: request.storeId, schema: s.optional(s.string()) },
          { name: "businessLineId", value: request.businessLineId, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentMethodResponseSchema },
        errorFactory: PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsError,
      },
      options,
    );
  }

  getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId(
    request: PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ManagementPaymentMethod,
    PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "paymentMethodId", value: request.paymentMethodId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: managementPaymentMethodSchema },
        errorFactory:
          PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError,
      },
      options,
    );
  }

  getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains(
    request: PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApplePayResponseInfo,
    PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9(
          "/merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}/getApplePayDomains",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "paymentMethodId", value: request.paymentMethodId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: applePayResponseInfoSchema },
        errorFactory:
          PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsError,
      },
      options,
    );
  }

  patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId(
    request: PaymentMethodsMerchantLevel.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ManagementPaymentMethod,
    PaymentMethodsMerchantLevel.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "paymentMethodId", value: request.paymentMethodId, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updatePaymentMethodInfoSchema)),
        },
      },
      {
        success: { kind: "json", schema: managementPaymentMethodSchema },
        errorFactory:
          PaymentMethodsMerchantLevel.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError,
      },
      options,
    );
  }

  postMerchantsMerchantIdPaymentMethodSettings(
    request: PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ManagementPaymentMethod,
    PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/merchants/{merchantId}/paymentMethodSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paymentMethodSetupInfoSchema)),
        },
      },
      {
        success: { kind: "json", schema: managementPaymentMethodSchema },
        errorFactory: PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsError,
      },
      options,
    );
  }

  postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains(
    request: PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9(
          "/merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}/addApplePayDomains",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "paymentMethodId", value: request.paymentMethodId, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => applePayInfoSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory:
          PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsError,
      },
      options,
    );
  }
}

export namespace PaymentMethodsMerchantLevel {
  export type GetMerchantsMerchantIdPaymentMethodSettingsRequest = {
    merchantId: string;
    storeId?: string;
    businessLineId?: string;
    pageSize?: number;
    pageNumber?: number;
  };

  export class GetMerchantsMerchantIdPaymentMethodSettingsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
    | Declared<"restServiceError6", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdPaymentMethodSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 429, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError6", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest = {
    merchantId: string;
    paymentMethodId: string;
  };

  export class GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
    | Declared<"restServiceError6", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 429, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError6", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsRequest = {
    merchantId: string;
    paymentMethodId: string;
  };

  export class GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest = {
    merchantId: string;
    paymentMethodId: string;
    body?: UpdatePaymentMethodInfo;
  };

  export class PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
    | Declared<"restServiceError6", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 429, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError6", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdPaymentMethodSettingsRequest = {
    merchantId: string;
    body?: PaymentMethodSetupInfo;
  };

  export class PostMerchantsMerchantIdPaymentMethodSettingsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
    | Declared<"restServiceError6", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdPaymentMethodSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 429, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError6", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsRequest = {
    merchantId: string;
    paymentMethodId: string;
    body?: ApplePayInfo;
  };

  export class PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
    | Declared<"restServiceError6", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 429, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError6", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
