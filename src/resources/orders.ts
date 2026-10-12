import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Create an order
   *
   * @remarks
   * Creates an order to be used for partial payments. Make a POST `/orders` call before making a
   * `/payments` call when processing payments with different payment methods.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Orders.PostOrdersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postOrders(
    request: Orders.PostOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateOrderResponse, Orders.PostOrdersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/orders"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
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

  /**
   * Cancel an order
   *
   * @remarks
   * Cancels an order. Cancellation of an order results in an automatic rollback of all payments
   * made in the order, either by canceling or refunding the payment, depending on the type of
   * payment method.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Orders.PostOrdersCancelError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postOrdersCancel(
    request: Orders.PostOrdersCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelOrderResponse, Orders.PostOrdersCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/orders/cancel"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
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

  /**
   * Get the balance of a gift card
   *
   * @remarks
   * Retrieves the balance remaining on a shopper's gift card. To check a gift card's balance, make
   * a POST `/paymentMethods/balance` call and include the gift card's details inside a
   * `paymentMethod` object.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Orders.PostPaymentMethodsBalanceError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentMethodsBalance(
    request: Orders.PostPaymentMethodsBalanceRequest,
    options?: RequestOptions,
  ): ApiPromise<BalanceCheckResponse, Orders.PostPaymentMethodsBalanceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/paymentMethods/balance"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
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
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: CreateOrderRequest;
  };

  export class PostOrdersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostOrdersError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostOrdersCancelRequest = {
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: CancelOrderRequest;
  };

  export class PostOrdersCancelError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostOrdersCancelError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentMethodsBalanceRequest = {
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: BalanceCheckRequest;
  };

  export class PostPaymentMethodsBalanceError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPaymentMethodsBalanceError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }
}
