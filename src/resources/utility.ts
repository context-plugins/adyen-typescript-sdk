import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  postApplePaySessions(
    request: Utility.PostApplePaySessionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApplePaySessionResponse, ResponseError> {
    return this.#rawClient.execute<ApplePaySessionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/applePay/sessions"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => applePaySessionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: applePaySessionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  postOriginKeys(
    request: Utility.PostOriginKeysRequest,
    options?: RequestOptions,
  ): ApiPromise<UtilityResponse, Utility.PostOriginKeysError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/originKeys"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postPaypalUpdateOrder(
    request: Utility.PostPaypalUpdateOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<PaypalUpdateOrderResponse, Utility.PostPaypalUpdateOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/paypal/updateOrder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postValidateShopperId(
    request: Utility.PostValidateShopperIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ValidateShopperIdResponse, Utility.PostValidateShopperIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/validateShopperId"),
        auth: noneAuth,
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
    idempotencyKey?: string;
    body?: ApplePaySessionRequest;
  };

  export type PostOriginKeysRequest = {
    idempotencyKey?: string;
    body?: UtilityRequest;
  };

  export class PostOriginKeysError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostOriginKeysError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaypalUpdateOrderRequest = {
    idempotencyKey?: string;
    body?: PaypalUpdateOrderRequest;
  };

  export class PostPaypalUpdateOrderError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostValidateShopperIdError extends ResponseError<
    | Declared<"checkoutErrorResponseEntity", CheckoutErrorResponseEntity>
    | Declared<"checkoutErrorResponseEntity2", CheckoutErrorResponseEntity>
    | Declared<"checkoutErrorResponseEntity3", CheckoutErrorResponseEntity>
    | Declared<"checkoutErrorResponseEntity4", CheckoutErrorResponseEntity>
    | Declared<"checkoutErrorResponseEntity5", CheckoutErrorResponseEntity>
  > {
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
