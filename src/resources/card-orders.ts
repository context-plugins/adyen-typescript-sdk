import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Get a list of card orders
   *
   * @remarks
   * Returns a paginated list of card orders.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link CardOrders.GetCardordersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCardorders(
    request: CardOrders.GetCardordersRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedGetCardOrderResponse, CardOrders.GetCardordersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/cardorders"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
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
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedGetCardOrderResponseSchema },
        errorFactory: CardOrders.GetCardordersError,
      },
      options,
    );
  }

  /**
   * Get card order items
   *
   * @remarks
   * Returns the item list of a specific card order.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link CardOrders.GetCardordersIdItemsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCardordersIdItems(
    request: CardOrders.GetCardordersIdItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedGetCardOrderItemResponse, CardOrders.GetCardordersIdItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/cardorders/{id}/items"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
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
    /** The unique identifier of the card order. */
    id?: string;
    /** The unique identifier of the card manufacturer profile. */
    cardManufacturingProfileId?: string;
    /** The status of the card order. */
    status?: string;
    /**
     * The unique code of the card manufacturer profile.
     *
     * Possible values: **mcmaestro**, **mc**, **visa**, **mcdebit**.
     */
    txVariantCode?: string;
    /**
     * Only include card orders that have been created on or after this point in time. The value
     * must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
     */
    createdSince?: Date;
    /**
     * Only include card orders that have been created on or before this point in time. The value
     * must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
     */
    createdUntil?: Date;
    /**
     * Only include card orders that have been locked on or after this point in time. The value must
     * be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
     */
    lockedSince?: Date;
    /**
     * Only include card orders that have been locked on or before this point in time. The value
     * must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
     */
    lockedUntil?: Date;
    /** The service center at which the card is issued. The value is case-sensitive. */
    serviceCenter?: string;
    /**
     * Specifies the position of an element in a list of card orders. The response includes a list
     * of card orders that starts at the specified offset.
     *
     * **Default:** 0, which means that the response contains all the elements in the list of card
     * orders.
     */
    offset?: number;
    /** The number of card orders returned per page. **Default:** 10. */
    limit?: number;
  };

  export class GetCardordersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCardordersError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCardordersIdItemsRequest = {
    /** The unique identifier of the card order. */
    id: string;
    /**
     * Specifies the position of an element in a list of card orders. The response includes a list
     * of card order items that starts at the specified offset.
     *
     * **Default:** 0, which means that the response contains all the elements in the list of card
     * order items.
     */
    offset?: number;
    /** The number of card order items returned per page. **Default:** 10. */
    limit?: number;
  };

  export class GetCardordersIdItemsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCardordersIdItemsError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
