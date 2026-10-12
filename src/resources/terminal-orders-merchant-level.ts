import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Get a list of billing entities
   *
   * @remarks
   * Returns the billing entities of the merchant account identified in the path. A billing entity
   * is a legal entity where we charge orders to. An order for terminal products must contain the ID
   * of a billing entity.
   *
   * To make this request, your API credential must have one of the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal ordering read
   * * Management API—Terminal ordering read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalOrdersMerchantLevel.GetMerchantsMerchantIdBillingEntitiesError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/billingEntities"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [{ name: "name", value: request.name, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: billingEntitiesResponseSchema },
        errorFactory: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdBillingEntitiesError,
      },
      options,
    );
  }

  /**
   * Get a list of shipping locations
   *
   * @remarks
   * Returns the shipping locations for the merchant account identified in the path. A shipping
   * location includes the address where orders can be delivered, and an ID which you need to
   * specify when ordering terminal products.
   *
   * To make this request, your API credential must have one of the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal ordering read
   * * Management API—Terminal ordering read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalOrdersMerchantLevel.GetMerchantsMerchantIdShippingLocationsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/shippingLocations"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: shippingLocationsResponseSchema },
        errorFactory: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdShippingLocationsError,
      },
      options,
    );
  }

  /**
   * Get a list of terminal models
   *
   * @remarks
   * Returns the payment terminal models that the merchant account identified in the path has access
   * to. The response includes the terminal model ID, which can be used as a query parameter when
   * getting a list of terminals or a list of products for ordering.
   *
   * To make this request, your API credential must have one of the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal ordering read
   * * Management API—Terminal ordering read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalModelsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/terminalModels"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalModelsResponseSchema },
        errorFactory: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalModelsError,
      },
      options,
    );
  }

  /**
   * Get a list of orders
   *
   * @remarks
   * Returns a list of terminal products orders for the merchant account identified in the path.
   *
   * To make this request, your API credential must have one of the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal ordering read
   * * Management API—Terminal ordering read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/terminalOrders"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [
          {
            name: "customerOrderReference",
            value: request.customerOrderReference,
            schema: s.optional(s.string()),
          },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalOrdersResponseSchema },
        errorFactory: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersError,
      },
      options,
    );
  }

  /**
   * Get an order
   *
   * @remarks
   * Returns the details of the terminal products order identified in the path.
   *
   * To make this request, your API credential must have one of the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal ordering read
   * * Management API—Terminal ordering read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersOrderIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchantsMerchantIdTerminalOrdersOrderId(
    request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersOrderIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalOrder, TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersOrderIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/terminalOrders/{orderId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalOrderSchema },
        errorFactory: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersOrderIdError,
      },
      options,
    );
  }

  /**
   * Get a list of terminal products
   *
   * @remarks
   * Returns a country-specific list of payment terminal packages and parts that the merchant
   * account identified in the path has access to.
   *
   * To make this request, your API credential must have one of the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal ordering read
   * * Management API—Terminal ordering read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalProductsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/terminalProducts"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "terminalModelId", value: request.terminalModelId, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalProductsResponseSchema },
        errorFactory: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalProductsError,
      },
      options,
    );
  }

  /**
   * Update an order
   *
   * @remarks
   * Updates the terminal products order identified in the path. Updating is only possible while the
   * order has the status **Placed**.
   *
   * The request body only needs to contain what you want to change. However, to update the products
   * in the `items` array, you must provide the entire array. For example, if the array has three
   * items: To remove one item, the array must include the remaining two items. Or to add one item,
   * the array must include all four items.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal ordering read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalOrdersMerchantLevel.PatchMerchantsMerchantIdTerminalOrdersOrderIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/terminalOrders/{orderId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Create a shipping location
   *
   * @remarks
   * Creates a shipping location for the merchant account identified in the path. A shipping
   * location defines an address where orders can be shipped to.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal ordering read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalOrdersMerchantLevel.PostMerchantsMerchantIdShippingLocationsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postMerchantsMerchantIdShippingLocations(
    request: TerminalOrdersMerchantLevel.PostMerchantsMerchantIdShippingLocationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ShippingLocation, TerminalOrdersMerchantLevel.PostMerchantsMerchantIdShippingLocationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/shippingLocations"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => shippingLocationSchema)) },
      },
      {
        success: { kind: "json", schema: shippingLocationSchema },
        errorFactory: TerminalOrdersMerchantLevel.PostMerchantsMerchantIdShippingLocationsError,
      },
      options,
    );
  }

  /**
   * Create an order
   *
   * @remarks
   * Creates an order for payment terminal products for the merchant account identified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal ordering read and write >Requests to the Management API test endpoint
   *   do not create actual orders for test terminals. To order test terminals, you need to [submit
   *   a sales
   *   order](https://docs.adyen.com/point-of-sale/managing-terminals/order-terminals/#sales-order-steps)
   *   in your Customer Area.
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postMerchantsMerchantIdTerminalOrders(
    request: TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalOrder, TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/terminalOrders"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Cancel an order
   *
   * @remarks
   * Cancels the terminal products order identified in the path. Cancelling is only possible while
   * the order has the status **Placed**. To cancel an order, make a POST call without a request
   * body. The response returns the full order details, but with the status changed to
   * **Cancelled**.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal ordering read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/terminalOrders/{orderId}/cancel"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The name of the billing entity. */
    name?: string;
  };

  export class GetMerchantsMerchantIdBillingEntitiesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdBillingEntitiesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdShippingLocationsRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The name of the shipping location. */
    name?: string;
    /** The number of locations to skip. */
    offset?: number;
    /** The number of locations to return. */
    limit?: number;
  };

  export class GetMerchantsMerchantIdShippingLocationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdShippingLocationsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdTerminalModelsRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
  };

  export class GetMerchantsMerchantIdTerminalModelsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

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
    /** Your purchase order number. */
    customerOrderReference?: string;
    /**
     * The order status. Possible values (not case-sensitive): Placed, Confirmed, Cancelled,
     * Shipped, Delivered.
     */
    status?: string;
    /** The number of orders to skip. */
    offset?: number;
    /** The number of orders to return. */
    limit?: number;
  };

  export class GetMerchantsMerchantIdTerminalOrdersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdTerminalOrdersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdTerminalOrdersOrderIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the order. */
    orderId: string;
  };

  export class GetMerchantsMerchantIdTerminalOrdersOrderIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdTerminalOrdersOrderIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdTerminalProductsRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /**
     * The country to return products for, in [ISO 3166-1
     * alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **US**
     */
    country: string;
    /**
     * The terminal model to return products for. Use the ID returned in the [GET
     * `/terminalModels`](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/merchants/{merchantId}/terminalModels)
     * response. For example, **Verifone.M400**
     */
    terminalModelId?: string;
    /** The number of products to skip. */
    offset?: number;
    /** The number of products to return. */
    limit?: number;
  };

  export class GetMerchantsMerchantIdTerminalProductsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdTerminalProductsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdTerminalOrdersOrderIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the order. */
    orderId: string;
    body?: TerminalOrderRequest;
  };

  export class PatchMerchantsMerchantIdTerminalOrdersOrderIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdTerminalOrdersOrderIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdShippingLocationsRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    body?: ShippingLocation;
  };

  export class PostMerchantsMerchantIdShippingLocationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdShippingLocationsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdTerminalOrdersRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    body?: TerminalOrderRequest;
  };

  export class PostMerchantsMerchantIdTerminalOrdersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdTerminalOrdersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdTerminalOrdersOrderIdCancelRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the order. */
    orderId: string;
  };

  export class PostMerchantsMerchantIdTerminalOrdersOrderIdCancelError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdTerminalOrdersOrderIdCancelError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
