import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { balanceCheckRequestSchema, type BalanceCheckRequest } from "../models/balance-check-request.js";
import { balanceCheckResponseSchema, type BalanceCheckResponse } from "../models/balance-check-response.js";
import { cancelOrderRequestSchema, type CancelOrderRequest } from "../models/cancel-order-request.js";
import { cancelOrderResponseSchema, type CancelOrderResponse } from "../models/cancel-order-response.js";
import { createOrderRequestSchema, type CreateOrderRequest } from "../models/create-order-request.js";
import { createOrderResponseSchema, type CreateOrderResponse } from "../models/create-order-response.js";
import { serviceErrorSchema, type ServiceError } from "../models/service-error.js";
import type { Servers } from "../servers.js";

export class Orders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  postOrders(
    request: Orders.PostOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateOrderResponse, Orders.PostOrdersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/orders"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createOrderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createOrderResponseSchema },
        errorFactory: Orders.PostOrdersError,
      },
      options,
    );
  }

  postOrdersCancel(
    request: Orders.PostOrdersCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelOrderResponse, Orders.PostOrdersCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/orders/cancel"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => cancelOrderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: cancelOrderResponseSchema },
        errorFactory: Orders.PostOrdersCancelError,
      },
      options,
    );
  }

  postPaymentMethodsBalance(
    request: Orders.PostPaymentMethodsBalanceRequest,
    options?: RequestOptions,
  ): ApiPromise<BalanceCheckResponse, Orders.PostPaymentMethodsBalanceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/paymentMethods/balance"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => balanceCheckRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: balanceCheckResponseSchema },
        errorFactory: Orders.PostPaymentMethodsBalanceError,
      },
      options,
    );
  }
}

export namespace Orders {
  export type PostOrdersRequest = {
    idempotencyKey?: string;
    body?: CreateOrderRequest;
  };

  export class PostOrdersError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostOrdersError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostOrdersCancelRequest = {
    idempotencyKey?: string;
    body?: CancelOrderRequest;
  };

  export class PostOrdersCancelError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostOrdersCancelError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentMethodsBalanceRequest = {
    idempotencyKey?: string;
    body?: BalanceCheckRequest;
  };

  export class PostPaymentMethodsBalanceError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostPaymentMethodsBalanceError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }
}
