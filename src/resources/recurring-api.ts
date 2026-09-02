import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  checkoutForwardRequestSchema,
  type CheckoutForwardRequest,
} from "../models/checkout-forward-request.js";
import {
  checkoutForwardResponseSchema,
  type CheckoutForwardResponse,
} from "../models/checkout-forward-response.js";
import {
  listStoredPaymentMethodsResponseSchema,
  type ListStoredPaymentMethodsResponse,
} from "../models/list-stored-payment-methods-response.js";
import {
  storedPaymentMethodRequestSchema,
  type StoredPaymentMethodRequest,
} from "../models/stored-payment-method-request.js";
import {
  storedPaymentMethodResourceSchema,
  type StoredPaymentMethodResource,
} from "../models/stored-payment-method-resource.js";
import type { Servers } from "../servers.js";

export class RecurringApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteStoredPaymentMethodsStoredPaymentMethodId(
    request: RecurringApi.DeleteStoredPaymentMethodsStoredPaymentMethodIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/storedPaymentMethods/{storedPaymentMethodId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "storedPaymentMethodId", value: request.storedPaymentMethodId, schema: s.string() },
        ],
        query: [
          { name: "shopperReference", value: request.shopperReference, schema: s.string() },
          { name: "merchantAccount", value: request.merchantAccount, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getStoredPaymentMethods(
    request: RecurringApi.GetStoredPaymentMethodsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListStoredPaymentMethodsResponse, ResponseError> {
    return this.#rawClient.execute<ListStoredPaymentMethodsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/storedPaymentMethods"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        query: [
          { name: "shopperReference", value: request.shopperReference, schema: s.optional(s.string()) },
          { name: "merchantAccount", value: request.merchantAccount, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listStoredPaymentMethodsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  postForward(
    request: RecurringApi.PostForwardRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckoutForwardResponse, ResponseError> {
    return this.#rawClient.execute<CheckoutForwardResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/forward"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => checkoutForwardRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: checkoutForwardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  postStoredPaymentMethods(
    request: RecurringApi.PostStoredPaymentMethodsRequest,
    options?: RequestOptions,
  ): ApiPromise<StoredPaymentMethodResource, ResponseError> {
    return this.#rawClient.execute<StoredPaymentMethodResource, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/storedPaymentMethods"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => storedPaymentMethodRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storedPaymentMethodResourceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace RecurringApi {
  export type DeleteStoredPaymentMethodsStoredPaymentMethodIdRequest = {
    storedPaymentMethodId: string;
    shopperReference: string;
    merchantAccount: string;
  };

  export type GetStoredPaymentMethodsRequest = {
    shopperReference?: string;
    merchantAccount?: string;
  };

  export type PostForwardRequest = {
    idempotencyKey?: string;
    body?: CheckoutForwardRequest;
  };

  export type PostStoredPaymentMethodsRequest = {
    idempotencyKey?: string;
    body?: StoredPaymentMethodRequest;
  };
}
