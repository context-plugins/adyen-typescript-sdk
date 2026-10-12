import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createMerchantRequestSchema,
  type CreateMerchantRequest,
} from "../models/create-merchant-request.js";
import {
  createMerchantResponseSchema,
  type CreateMerchantResponse,
} from "../models/create-merchant-response.js";
import { listMerchantResponseSchema, type ListMerchantResponse } from "../models/list-merchant-response.js";
import { merchantSchema, type Merchant } from "../models/merchant.js";
import {
  requestActivationResponseSchema,
  type RequestActivationResponse,
} from "../models/request-activation-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import type { Servers } from "../servers.js";

export class AccountMerchantLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a list of merchant accounts
   *
   * @remarks
   * Returns the list of merchant accounts that your API credential has access to. The list is
   * grouped into pages as defined by the query parameters.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Account read
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountMerchantLevel.GetMerchantsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchants(
    request: AccountMerchantLevel.GetMerchantsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMerchantResponse, AccountMerchantLevel.GetMerchantsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/merchants"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMerchantResponseSchema },
        errorFactory: AccountMerchantLevel.GetMerchantsError,
      },
      options,
    );
  }

  /**
   * Get a merchant account
   *
   * @remarks
   * Returns the merchant account specified in the path. Your API credential must have access to the
   * merchant account.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Account read
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountMerchantLevel.GetMerchantsMerchantIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchantsMerchantId(
    request: AccountMerchantLevel.GetMerchantsMerchantIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Merchant, AccountMerchantLevel.GetMerchantsMerchantIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: merchantSchema },
        errorFactory: AccountMerchantLevel.GetMerchantsMerchantIdError,
      },
      options,
    );
  }

  /**
   * Create a merchant account
   *
   * @remarks
   * Creates a merchant account for the company account specified in the request.
   *
   * Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your
   * Adyen contact will set up your access.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Accounts read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountMerchantLevel.PostMerchantsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postMerchants(
    request: AccountMerchantLevel.PostMerchantsRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateMerchantResponse, AccountMerchantLevel.PostMerchantsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/merchants"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createMerchantRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createMerchantResponseSchema },
        errorFactory: AccountMerchantLevel.PostMerchantsError,
      },
      options,
    );
  }

  /**
   * Request to activate a merchant account
   *
   * @remarks
   * Sends a request to activate the merchant account identified in the path.
   *
   * You get the result of the activation asynchronously through a
   * [`merchant.updated`](https://docs.adyen.com/api-explorer/ManagementNotification/latest/post/merchant.updated)
   * webhook. Once the merchant account is activated, you can start using it to accept payments and
   * payouts.
   *
   * Use this endpoint if your integration requires it, such as Adyen for Platforms Manage. Your
   * Adyen contact will set up your access.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Accounts read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AccountMerchantLevel.PostMerchantsMerchantIdActivateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postMerchantsMerchantIdActivate(
    request: AccountMerchantLevel.PostMerchantsMerchantIdActivateRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestActivationResponse, AccountMerchantLevel.PostMerchantsMerchantIdActivateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/activate"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: requestActivationResponseSchema },
        errorFactory: AccountMerchantLevel.PostMerchantsMerchantIdActivateError,
      },
      options,
    );
  }
}

export namespace AccountMerchantLevel {
  export type GetMerchantsRequest = {
    /** The number of the page to fetch. */
    pageNumber?: number;
    /** The number of items to have on a page, maximum 100. The default is 10 items on a page. */
    pageSize?: number;
  };

  export class GetMerchantsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
  };

  export class GetMerchantsMerchantIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsRequest = {
    body?: CreateMerchantRequest;
  };

  export class PostMerchantsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMerchantsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdActivateRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
  };

  export class PostMerchantsMerchantIdActivateError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdActivateError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
