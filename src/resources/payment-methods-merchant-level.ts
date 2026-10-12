import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Get all payment methods
   *
   * @remarks
   * Returns details for all payment methods of the merchant account identified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Payment methods read
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/paymentMethodSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [
          { name: "storeId", value: request.storeId, schema: s.optional(s.string()) },
          { name: "businessLineId", value: request.businessLineId, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentMethodResponseSchema },
        errorFactory: PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsError,
      },
      options,
    );
  }

  /**
   * Get payment method details
   *
   * @remarks
   * Returns details for the merchant account and the payment method identified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Payment methods read
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9(
          "/merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "paymentMethodId", value: request.paymentMethodId, schema: s.string() },
        ],
        query: [],
        headers: [],
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

  /**
   * Get Apple Pay domains
   *
   * @remarks
   * Returns all Apple Pay domains that are registered with the merchant account and the payment
   * method identified in the path. For more information, see [Apple Pay
   * documentation](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#register-merchant-domain).
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Payment methods read
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9(
          "/merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}/getApplePayDomains",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "paymentMethodId", value: request.paymentMethodId, schema: s.string() },
        ],
        query: [],
        headers: [],
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

  /**
   * Update a payment method
   *
   * @remarks
   * Updates payment method details for the merchant account and the payment method identified in
   * the path. Depending the payment method
   * [`type`](https://docs.adyen.com/api-explorer/Management/latest/patch/merchants/_merchantId_/paymentMethodSettings#request-type),
   * you may need to send an additional object required for the payment method.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Payment methods read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * PaymentMethodsMerchantLevel.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9(
          "/merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "paymentMethodId", value: request.paymentMethodId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Request a payment method
   *
   * @remarks
   * Sends a request to add a new payment method to the merchant account identified in the path.
   * Depending the payment method
   * [`type`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings#request-type),
   * you may need to send an additional object required for the payment method.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Payment methods read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/paymentMethodSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Add an Apple Pay domain
   *
   * @remarks
   * Adds the new domain to the list of Apple Pay domains that are registered with the merchant
   * account and the payment method identified in the path. For more information, see [Apple Pay
   * documentation](https://docs.adyen.com/payment-methods/apple-pay/web-drop-in/?tab=adyen-certificate-live_1#going-live).
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Payment methods read and write
   *
   * @returns No Content - look at the actual response code for the status of the request.
   *
   * @throws {@link
   * PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9(
          "/merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}/addApplePayDomains",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "paymentMethodId", value: request.paymentMethodId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the store for which to return the payment methods. */
    storeId?: string;
    /** The unique identifier of the Business Line for which to return the payment methods. */
    businessLineId?: string;
    /** The number of items to have on a page, maximum 100. The default is 10 items on a page. */
    pageSize?: number;
    /** The number of the page to fetch. */
    pageNumber?: number;
  };

  export class GetMerchantsMerchantIdPaymentMethodSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
      | Declared<"restServiceError6", RestServiceError>
    >;

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
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the payment method. */
    paymentMethodId: string;
  };

  export class GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
      | Declared<"restServiceError6", RestServiceError>
    >;

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
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the payment method. */
    paymentMethodId: string;
  };

  export class GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }

  export type PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the payment method. */
    paymentMethodId: string;
    body?: UpdatePaymentMethodInfo;
  };

  export class PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
      | Declared<"restServiceError6", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 429, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError6", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }

  export type PostMerchantsMerchantIdPaymentMethodSettingsRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    body?: PaymentMethodSetupInfo;
  };

  export class PostMerchantsMerchantIdPaymentMethodSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
      | Declared<"restServiceError6", RestServiceError>
    >;

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
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the payment method. */
    paymentMethodId: string;
    body?: ApplePayInfo;
  };

  export class PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
      | Declared<"restServiceError6", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 429, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError6", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }
}
