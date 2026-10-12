import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  applePaySessionRequestSchema,
  type ApplePaySessionRequest,
} from "../models/apple-pay-session-request.js";
import {
  applePaySessionResponseSchema,
  type ApplePaySessionResponse,
} from "../models/apple-pay-session-response.js";
import {
  checkoutErrorResponseEntitySchema,
  type CheckoutErrorResponseEntity,
} from "../models/checkout-error-response-entity.js";
import {
  paypalUpdateOrderRequestSchema,
  type PaypalUpdateOrderRequest,
} from "../models/paypal-update-order-request.js";
import {
  paypalUpdateOrderResponseSchema,
  type PaypalUpdateOrderResponse,
} from "../models/paypal-update-order-response.js";
import { serviceErrorSchema, type ServiceError } from "../models/service-error.js";
import { utilityRequestSchema, type UtilityRequest } from "../models/utility-request.js";
import { utilityResponseSchema, type UtilityResponse } from "../models/utility-response.js";
import {
  validateShopperIdRequestSchema,
  type ValidateShopperIdRequest,
} from "../models/validate-shopper-id-request.js";
import {
  validateShopperIdResponseSchema,
  type ValidateShopperIdResponse,
} from "../models/validate-shopper-id-response.js";
import type { Servers } from "../servers.js";

export class Utility {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get an Apple Pay session
   *
   * @remarks
   * You need to use this endpoint if you have an API-only integration with Apple Pay which uses
   * Adyen's Apple Pay certificate.
   *
   * The endpoint returns the Apple Pay session data which you need to complete the [Apple Pay
   * session
   * validation](https://docs.adyen.com/payment-methods/apple-pay/api-only?tab=adyen-certificate-validation_1#complete-apple-pay-session-validation).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApplePaySessions(
    request: Utility.PostApplePaySessionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApplePaySessionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/applePay/sessions"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => applePaySessionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: applePaySessionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create originKey values for domains
   *
   * @remarks
   * This operation takes the origin domains and returns a JSON object containing the corresponding
   * origin keys for the domains. > If you're still using origin key for your Web Drop-in or
   * Components integration, we recommend [switching to client
   * key](https://docs.adyen.com/development-resources/client-side-authentication/migrate-from-origin-key-to-client-key).
   * This allows you to use a single key for all origins, add or remove origins without generating a
   * new key, and detect the card type from the number entered in your payment form.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Utility.PostOriginKeysError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  postOriginKeys(
    request: Utility.PostOriginKeysRequest,
    options?: RequestOptions,
  ): ApiPromise<UtilityResponse, Utility.PostOriginKeysError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/originKeys"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => utilityRequestSchema)) },
      },
      {
        success: { kind: "json", schema: utilityResponseSchema },
        errorFactory: Utility.PostOriginKeysError,
      },
      options,
    );
  }

  /**
   * Updates the order for PayPal Express Checkout
   *
   * @remarks
   * Updates the order for PayPal Express Checkout. This can be used to update the PayPal lightbox
   * with an updated amount and delivery methods based on the delivery address.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Utility.PostPaypalUpdateOrderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaypalUpdateOrder(
    request: Utility.PostPaypalUpdateOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<PaypalUpdateOrderResponse, Utility.PostPaypalUpdateOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/paypal/updateOrder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paypalUpdateOrderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: paypalUpdateOrderResponseSchema },
        errorFactory: Utility.PostPaypalUpdateOrderError,
      },
      options,
    );
  }

  /**
   * Validates shopper Id
   *
   * @remarks
   * Validates the shopperId.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Utility.PostValidateShopperIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postValidateShopperId(
    request: Utility.PostValidateShopperIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ValidateShopperIdResponse, Utility.PostValidateShopperIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/validateShopperId"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: validateShopperIdRequestSchema },
      },
      {
        success: { kind: "json", schema: validateShopperIdResponseSchema },
        errorFactory: Utility.PostValidateShopperIdError,
      },
      options,
    );
  }
}

export namespace Utility {
  export type PostApplePaySessionsRequest = {
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: ApplePaySessionRequest;
  };

  export type PostOriginKeysRequest = {
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: UtilityRequest;
  };

  export class PostOriginKeysError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostOriginKeysError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaypalUpdateOrderRequest = {
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: PaypalUpdateOrderRequest;
  };

  export class PostPaypalUpdateOrderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPaypalUpdateOrderError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostValidateShopperIdRequest = {
    body: ValidateShopperIdRequest;
  };

  export class PostValidateShopperIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"checkoutErrorResponseEntity", CheckoutErrorResponseEntity>
      | Declared<"checkoutErrorResponseEntity2", CheckoutErrorResponseEntity>
      | Declared<"checkoutErrorResponseEntity3", CheckoutErrorResponseEntity>
      | Declared<"checkoutErrorResponseEntity4", CheckoutErrorResponseEntity>
      | Declared<"checkoutErrorResponseEntity5", CheckoutErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostValidateShopperIdError> = [
      {
        on: 400,
        kind: "checkoutErrorResponseEntity",
        decode: { kind: "json", schema: checkoutErrorResponseEntitySchema },
      },
      {
        on: 401,
        kind: "checkoutErrorResponseEntity2",
        decode: { kind: "json", schema: checkoutErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "checkoutErrorResponseEntity3",
        decode: { kind: "json", schema: checkoutErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "checkoutErrorResponseEntity4",
        decode: { kind: "json", schema: checkoutErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "checkoutErrorResponseEntity5",
        decode: { kind: "json", schema: checkoutErrorResponseEntitySchema },
      },
    ];
  }
}
