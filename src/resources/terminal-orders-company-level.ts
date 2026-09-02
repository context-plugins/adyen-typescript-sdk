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

export class TerminalOrdersCompanyLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getCompaniesCompanyIdBillingEntities(
    request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdBillingEntitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BillingEntitiesResponse,
    TerminalOrdersCompanyLevel.GetCompaniesCompanyIdBillingEntitiesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/billingEntities"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [{ name: "name", value: request.name, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: billingEntitiesResponseSchema },
        errorFactory: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdBillingEntitiesError,
      },
      options,
    );
  }

  getCompaniesCompanyIdShippingLocations(
    request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdShippingLocationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ShippingLocationsResponse,
    TerminalOrdersCompanyLevel.GetCompaniesCompanyIdShippingLocationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/shippingLocations"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: shippingLocationsResponseSchema },
        errorFactory: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdShippingLocationsError,
      },
      options,
    );
  }

  getCompaniesCompanyIdTerminalModels(
    request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalModelsRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalModelsResponse, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalModelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/terminalModels"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalModelsResponseSchema },
        errorFactory: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalModelsError,
      },
      options,
    );
  }

  getCompaniesCompanyIdTerminalOrders(
    request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalOrdersResponse, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/terminalOrders"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
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
        errorFactory: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersError,
      },
      options,
    );
  }

  getCompaniesCompanyIdTerminalOrdersOrderId(
    request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersOrderIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalOrder, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersOrderIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/terminalOrders/{orderId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalOrderSchema },
        errorFactory: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersOrderIdError,
      },
      options,
    );
  }

  getCompaniesCompanyIdTerminalProducts(
    request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalProductsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TerminalProductsResponse,
    TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalProductsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/terminalProducts"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
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
        errorFactory: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalProductsError,
      },
      options,
    );
  }

  patchCompaniesCompanyIdTerminalOrdersOrderId(
    request: TerminalOrdersCompanyLevel.PatchCompaniesCompanyIdTerminalOrdersOrderIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalOrder, TerminalOrdersCompanyLevel.PatchCompaniesCompanyIdTerminalOrdersOrderIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/companies/{companyId}/terminalOrders/{orderId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
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
        errorFactory: TerminalOrdersCompanyLevel.PatchCompaniesCompanyIdTerminalOrdersOrderIdError,
      },
      options,
    );
  }

  postCompaniesCompanyIdShippingLocations(
    request: TerminalOrdersCompanyLevel.PostCompaniesCompanyIdShippingLocationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ShippingLocation, TerminalOrdersCompanyLevel.PostCompaniesCompanyIdShippingLocationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/companies/{companyId}/shippingLocations"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => shippingLocationSchema)) },
      },
      {
        success: { kind: "json", schema: shippingLocationSchema },
        errorFactory: TerminalOrdersCompanyLevel.PostCompaniesCompanyIdShippingLocationsError,
      },
      options,
    );
  }

  postCompaniesCompanyIdTerminalOrders(
    request: TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalOrder, TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/companies/{companyId}/terminalOrders"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => terminalOrderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: terminalOrderSchema },
        errorFactory: TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersError,
      },
      options,
    );
  }

  postCompaniesCompanyIdTerminalOrdersOrderIdCancel(
    request: TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TerminalOrder,
    TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/companies/{companyId}/terminalOrders/{orderId}/cancel"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalOrderSchema },
        errorFactory: TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelError,
      },
      options,
    );
  }
}

export namespace TerminalOrdersCompanyLevel {
  export type GetCompaniesCompanyIdBillingEntitiesRequest = {
    companyId: string;
    name?: string;
  };

  export class GetCompaniesCompanyIdBillingEntitiesError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdBillingEntitiesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdShippingLocationsRequest = {
    companyId: string;
    name?: string;
    offset?: number;
    limit?: number;
  };

  export class GetCompaniesCompanyIdShippingLocationsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdShippingLocationsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdTerminalModelsRequest = {
    companyId: string;
  };

  export class GetCompaniesCompanyIdTerminalModelsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdTerminalModelsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdTerminalOrdersRequest = {
    companyId: string;
    customerOrderReference?: string;
    status?: string;
    offset?: number;
    limit?: number;
  };

  export class GetCompaniesCompanyIdTerminalOrdersError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdTerminalOrdersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdTerminalOrdersOrderIdRequest = {
    companyId: string;
    orderId: string;
  };

  export class GetCompaniesCompanyIdTerminalOrdersOrderIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdTerminalOrdersOrderIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdTerminalProductsRequest = {
    companyId: string;
    country: string;
    terminalModelId?: string;
    offset?: number;
    limit?: number;
  };

  export class GetCompaniesCompanyIdTerminalProductsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdTerminalProductsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchCompaniesCompanyIdTerminalOrdersOrderIdRequest = {
    companyId: string;
    orderId: string;
    body?: TerminalOrderRequest;
  };

  export class PatchCompaniesCompanyIdTerminalOrdersOrderIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchCompaniesCompanyIdTerminalOrdersOrderIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdShippingLocationsRequest = {
    companyId: string;
    body?: ShippingLocation;
  };

  export class PostCompaniesCompanyIdShippingLocationsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdShippingLocationsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdTerminalOrdersRequest = {
    companyId: string;
    body?: TerminalOrderRequest;
  };

  export class PostCompaniesCompanyIdTerminalOrdersError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdTerminalOrdersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdTerminalOrdersOrderIdCancelRequest = {
    companyId: string;
    orderId: string;
  };

  export class PostCompaniesCompanyIdTerminalOrdersOrderIdCancelError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdTerminalOrdersOrderIdCancelError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
