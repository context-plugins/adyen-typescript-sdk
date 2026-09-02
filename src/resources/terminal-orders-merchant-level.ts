import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  billingEntitiesResponseSchema,
  type BillingEntitiesResponse,
} from "../models/billing-entities-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import { shippingLocationSchema, type ShippingLocation } from "../models/shipping-location.js";
import {
  shippingLocationsResponseSchema,
  type ShippingLocationsResponse,
} from "../models/shipping-locations-response.js";
import {
  terminalModelsResponseSchema,
  type TerminalModelsResponse,
} from "../models/terminal-models-response.js";
import { terminalOrderRequestSchema, type TerminalOrderRequest } from "../models/terminal-order-request.js";
import { terminalOrderSchema, type TerminalOrder } from "../models/terminal-order.js";
import {
  terminalOrdersResponseSchema,
  type TerminalOrdersResponse,
} from "../models/terminal-orders-response.js";
import {
  terminalProductsResponseSchema,
  type TerminalProductsResponse,
} from "../models/terminal-products-response.js";
import type { Servers } from "../servers.js";

export class TerminalOrdersMerchantLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getMerchantsMerchantIdBillingEntities(
    request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdBillingEntitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BillingEntitiesResponse,
    TerminalOrdersMerchantLevel.GetMerchantsMerchantIdBillingEntitiesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/billingEntities"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [{ name: "name", value: request.name, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: billingEntitiesResponseSchema },
        errorFactory: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdBillingEntitiesError,
      },
      options,
    );
  }

  getMerchantsMerchantIdShippingLocations(
    request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdShippingLocationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ShippingLocationsResponse,
    TerminalOrdersMerchantLevel.GetMerchantsMerchantIdShippingLocationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/shippingLocations"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: shippingLocationsResponseSchema },
        errorFactory: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdShippingLocationsError,
      },
      options,
    );
  }

  getMerchantsMerchantIdTerminalModels(
    request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalModelsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TerminalModelsResponse,
    TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalModelsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/terminalModels"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalModelsResponseSchema },
        errorFactory: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalModelsError,
      },
      options,
    );
  }

  getMerchantsMerchantIdTerminalOrders(
    request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TerminalOrdersResponse,
    TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/terminalOrders"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [
          {
            name: "customerOrderReference",
            value: request.customerOrderReference,
            schema: s.optional(s.string()),
          },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalOrdersResponseSchema },
        errorFactory: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersError,
      },
      options,
    );
  }

  getMerchantsMerchantIdTerminalOrdersOrderId(
    request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersOrderIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalOrder, TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersOrderIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/terminalOrders/{orderId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalOrderSchema },
        errorFactory: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersOrderIdError,
      },
      options,
    );
  }

  getMerchantsMerchantIdTerminalProducts(
    request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalProductsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TerminalProductsResponse,
    TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalProductsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/terminalProducts"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "terminalModelId", value: request.terminalModelId, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalProductsResponseSchema },
        errorFactory: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalProductsError,
      },
      options,
    );
  }

  patchMerchantsMerchantIdTerminalOrdersOrderId(
    request: TerminalOrdersMerchantLevel.PatchMerchantsMerchantIdTerminalOrdersOrderIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TerminalOrder,
    TerminalOrdersMerchantLevel.PatchMerchantsMerchantIdTerminalOrdersOrderIdError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/merchants/{merchantId}/terminalOrders/{orderId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => terminalOrderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: terminalOrderSchema },
        errorFactory: TerminalOrdersMerchantLevel.PatchMerchantsMerchantIdTerminalOrdersOrderIdError,
      },
      options,
    );
  }

  postMerchantsMerchantIdShippingLocations(
    request: TerminalOrdersMerchantLevel.PostMerchantsMerchantIdShippingLocationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ShippingLocation, TerminalOrdersMerchantLevel.PostMerchantsMerchantIdShippingLocationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/merchants/{merchantId}/shippingLocations"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => shippingLocationSchema)) },
      },
      {
        success: { kind: "json", schema: shippingLocationSchema },
        errorFactory: TerminalOrdersMerchantLevel.PostMerchantsMerchantIdShippingLocationsError,
      },
      options,
    );
  }

  postMerchantsMerchantIdTerminalOrders(
    request: TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalOrder, TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/merchants/{merchantId}/terminalOrders"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => terminalOrderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: terminalOrderSchema },
        errorFactory: TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersError,
      },
      options,
    );
  }

  postMerchantsMerchantIdTerminalOrdersOrderIdCancel(
    request: TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TerminalOrder,
    TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/merchants/{merchantId}/terminalOrders/{orderId}/cancel"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalOrderSchema },
        errorFactory: TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelError,
      },
      options,
    );
  }
}

export namespace TerminalOrdersMerchantLevel {
  export type GetMerchantsMerchantIdBillingEntitiesRequest = {
    merchantId: string;
    name?: string;
  };

  export class GetMerchantsMerchantIdBillingEntitiesError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdBillingEntitiesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdShippingLocationsRequest = {
    merchantId: string;
    name?: string;
    offset?: number;
    limit?: number;
  };

  export class GetMerchantsMerchantIdShippingLocationsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdShippingLocationsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdTerminalModelsRequest = {
    merchantId: string;
  };

  export class GetMerchantsMerchantIdTerminalModelsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdTerminalModelsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdTerminalOrdersRequest = {
    merchantId: string;
    customerOrderReference?: string;
    status?: string;
    offset?: number;
    limit?: number;
  };

  export class GetMerchantsMerchantIdTerminalOrdersError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdTerminalOrdersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdTerminalOrdersOrderIdRequest = {
    merchantId: string;
    orderId: string;
  };

  export class GetMerchantsMerchantIdTerminalOrdersOrderIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdTerminalOrdersOrderIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdTerminalProductsRequest = {
    merchantId: string;
    country: string;
    terminalModelId?: string;
    offset?: number;
    limit?: number;
  };

  export class GetMerchantsMerchantIdTerminalProductsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdTerminalProductsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdTerminalOrdersOrderIdRequest = {
    merchantId: string;
    orderId: string;
    body?: TerminalOrderRequest;
  };

  export class PatchMerchantsMerchantIdTerminalOrdersOrderIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdTerminalOrdersOrderIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdShippingLocationsRequest = {
    merchantId: string;
    body?: ShippingLocation;
  };

  export class PostMerchantsMerchantIdShippingLocationsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdShippingLocationsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdTerminalOrdersRequest = {
    merchantId: string;
    body?: TerminalOrderRequest;
  };

  export class PostMerchantsMerchantIdTerminalOrdersError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdTerminalOrdersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdTerminalOrdersOrderIdCancelRequest = {
    merchantId: string;
    orderId: string;
  };

  export class PostMerchantsMerchantIdTerminalOrdersOrderIdCancelError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdTerminalOrdersOrderIdCancelError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
