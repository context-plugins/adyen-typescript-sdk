import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  paginatedGetCardOrderItemResponseSchema,
  type PaginatedGetCardOrderItemResponse,
} from "../models/paginated-get-card-order-item-response.js";
import {
  paginatedGetCardOrderResponseSchema,
  type PaginatedGetCardOrderResponse,
} from "../models/paginated-get-card-order-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import type { Servers } from "../servers.js";

export class CardOrders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getCardorders(
    request: CardOrders.GetCardordersRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedGetCardOrderResponse, CardOrders.GetCardordersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/cardorders"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        query: [
          { name: "id", value: request.id, schema: s.optional(s.string()) },
          {
            name: "cardManufacturingProfileId",
            value: request.cardManufacturingProfileId,
            schema: s.optional(s.string()),
          },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "txVariantCode", value: request.txVariantCode, schema: s.optional(s.string()) },
          { name: "createdSince", value: request.createdSince, schema: s.optional(s.dateTime()) },
          { name: "createdUntil", value: request.createdUntil, schema: s.optional(s.dateTime()) },
          { name: "lockedSince", value: request.lockedSince, schema: s.optional(s.dateTime()) },
          { name: "lockedUntil", value: request.lockedUntil, schema: s.optional(s.dateTime()) },
          { name: "serviceCenter", value: request.serviceCenter, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedGetCardOrderResponseSchema },
        errorFactory: CardOrders.GetCardordersError,
      },
      options,
    );
  }

  getCardordersIdItems(
    request: CardOrders.GetCardordersIdItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedGetCardOrderItemResponse, CardOrders.GetCardordersIdItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/cardorders/{id}/items"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedGetCardOrderItemResponseSchema },
        errorFactory: CardOrders.GetCardordersIdItemsError,
      },
      options,
    );
  }
}

export namespace CardOrders {
  export type GetCardordersRequest = {
    id?: string;
    cardManufacturingProfileId?: string;
    status?: string;
    txVariantCode?: string;
    createdSince?: Date;
    createdUntil?: Date;
    lockedSince?: Date;
    lockedUntil?: Date;
    serviceCenter?: string;
    offset?: number;
    limit?: number;
  };

  export class GetCardordersError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCardordersError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCardordersIdItemsRequest = {
    id: string;
    offset?: number;
    limit?: number;
  };

  export class GetCardordersIdItemsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCardordersIdItemsError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
