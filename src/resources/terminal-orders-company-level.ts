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

export class TerminalOrdersCompanyLevel {
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
   * Returns the billing entities of the company identified in the path and all merchant accounts
   * belonging to the company. A billing entity is a legal entity where we charge orders to. An
   * order for terminal products must contain the ID of a billing entity.
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
   * @throws {@link TerminalOrdersCompanyLevel.GetCompaniesCompanyIdBillingEntitiesError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/companies/{companyId}/billingEntities"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [{ name: "name", value: request.name, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: billingEntitiesResponseSchema },
        errorFactory: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdBillingEntitiesError,
      },
      options,
    );
  }

  /**
   * Get a list of shipping locations
   *
   * @remarks
   * Returns the shipping locations for the company identified in the path and all merchant accounts
   * belonging to the company. A shipping location includes the address where orders can be
   * delivered, and an ID which you need to specify when ordering terminal products.
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
   * @throws {@link TerminalOrdersCompanyLevel.GetCompaniesCompanyIdShippingLocationsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/companies/{companyId}/shippingLocations"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
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
        errorFactory: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdShippingLocationsError,
      },
      options,
    );
  }

  /**
   * Get a list of terminal models
   *
   * @remarks
   * Returns a list of payment terminal models that the company identified in the path has access
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
   * @throws {@link TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalModelsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesCompanyIdTerminalModels(
    request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalModelsRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalModelsResponse, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalModelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/companies/{companyId}/terminalModels"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalModelsResponseSchema },
        errorFactory: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalModelsError,
      },
      options,
    );
  }

  /**
   * Get a list of orders
   *
   * @remarks
   * Returns a lists of terminal products orders for the company identified in the path. To filter
   * the list, use one or more of the query parameters.
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
   * @throws {@link TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesCompanyIdTerminalOrders(
    request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalOrdersResponse, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/companies/{companyId}/terminalOrders"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
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
        errorFactory: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersError,
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
   * @throws {@link TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersOrderIdError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesCompanyIdTerminalOrdersOrderId(
    request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersOrderIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalOrder, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersOrderIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/companies/{companyId}/terminalOrders/{orderId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalOrderSchema },
        errorFactory: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersOrderIdError,
      },
      options,
    );
  }

  /**
   * Get a list of terminal products
   *
   * @remarks
   * Returns a country-specific list of payment terminal packages and parts that the company
   * identified in the path has access to.
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
   * @throws {@link TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalProductsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/companies/{companyId}/terminalProducts"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
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
        errorFactory: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalProductsError,
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
   * @throws {@link TerminalOrdersCompanyLevel.PatchCompaniesCompanyIdTerminalOrdersOrderIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchCompaniesCompanyIdTerminalOrdersOrderId(
    request: TerminalOrdersCompanyLevel.PatchCompaniesCompanyIdTerminalOrdersOrderIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalOrder, TerminalOrdersCompanyLevel.PatchCompaniesCompanyIdTerminalOrdersOrderIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default9("/companies/{companyId}/terminalOrders/{orderId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
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
        errorFactory: TerminalOrdersCompanyLevel.PatchCompaniesCompanyIdTerminalOrdersOrderIdError,
      },
      options,
    );
  }

  /**
   * Create a shipping location
   *
   * @remarks
   * Creates a shipping location for the company identified in the path. A shipping location defines
   * an address where orders can be delivered.
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
   * @throws {@link TerminalOrdersCompanyLevel.PostCompaniesCompanyIdShippingLocationsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCompaniesCompanyIdShippingLocations(
    request: TerminalOrdersCompanyLevel.PostCompaniesCompanyIdShippingLocationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ShippingLocation, TerminalOrdersCompanyLevel.PostCompaniesCompanyIdShippingLocationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/companies/{companyId}/shippingLocations"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => shippingLocationSchema)) },
      },
      {
        success: { kind: "json", schema: shippingLocationSchema },
        errorFactory: TerminalOrdersCompanyLevel.PostCompaniesCompanyIdShippingLocationsError,
      },
      options,
    );
  }

  /**
   * Create an order
   *
   * @remarks
   * Creates an order for payment terminal products for the company identified in the path.
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
   * @throws {@link TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCompaniesCompanyIdTerminalOrders(
    request: TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalOrder, TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/companies/{companyId}/terminalOrders"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
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
        errorFactory: TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersError,
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
   * TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/companies/{companyId}/terminalOrders/{orderId}/cancel"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "orderId", value: request.orderId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the company account. */
    companyId: string;
    /** The name of the billing entity. */
    name?: string;
  };

  export class GetCompaniesCompanyIdBillingEntitiesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdBillingEntitiesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdShippingLocationsRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** The name of the shipping location. */
    name?: string;
    /** The number of locations to skip. */
    offset?: number;
    /** The number of locations to return. */
    limit?: number;
  };

  export class GetCompaniesCompanyIdShippingLocationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdShippingLocationsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdTerminalModelsRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
  };

  export class GetCompaniesCompanyIdTerminalModelsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdTerminalModelsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdTerminalOrdersRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
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

  export class GetCompaniesCompanyIdTerminalOrdersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdTerminalOrdersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdTerminalOrdersOrderIdRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** The unique identifier of the order. */
    orderId: string;
  };

  export class GetCompaniesCompanyIdTerminalOrdersOrderIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdTerminalOrdersOrderIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdTerminalProductsRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /**
     * The country to return products for, in [ISO 3166-1
     * alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **US**
     */
    country: string;
    /**
     * The terminal model to return products for. Use the ID returned in the [GET
     * `/terminalModels`](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/companies/{companyId}/terminalModels)
     * response. For example, **Verifone.M400**
     */
    terminalModelId?: string;
    /** The number of products to skip. */
    offset?: number;
    /** The number of products to return. */
    limit?: number;
  };

  export class GetCompaniesCompanyIdTerminalProductsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdTerminalProductsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchCompaniesCompanyIdTerminalOrdersOrderIdRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** The unique identifier of the order. */
    orderId: string;
    body?: TerminalOrderRequest;
  };

  export class PatchCompaniesCompanyIdTerminalOrdersOrderIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchCompaniesCompanyIdTerminalOrdersOrderIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdShippingLocationsRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    body?: ShippingLocation;
  };

  export class PostCompaniesCompanyIdShippingLocationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdShippingLocationsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdTerminalOrdersRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    body?: TerminalOrderRequest;
  };

  export class PostCompaniesCompanyIdTerminalOrdersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdTerminalOrdersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdTerminalOrdersOrderIdCancelRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** The unique identifier of the order. */
    orderId: string;
  };

  export class PostCompaniesCompanyIdTerminalOrdersOrderIdCancelError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdTerminalOrdersOrderIdCancelError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
