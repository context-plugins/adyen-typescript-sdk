import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { balancePlatformSchema, type BalancePlatform } from "../models/balance-platform.js";
import {
  paginatedAccountHoldersResponseSchema,
  type PaginatedAccountHoldersResponse,
} from "../models/paginated-account-holders-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  transactionRulesResponseSchema,
  type TransactionRulesResponse,
} from "../models/transaction-rules-response.js";
import type { Servers } from "../servers.js";

export class Platform {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a balance platform
   *
   * @remarks
   * Returns a balance platform.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Platform.GetBalancePlatformsIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalancePlatformsId(
    request: Platform.GetBalancePlatformsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<BalancePlatform, Platform.GetBalancePlatformsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/balancePlatforms/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: balancePlatformSchema },
        errorFactory: Platform.GetBalancePlatformsIdError,
      },
      options,
    );
  }

  /**
   * Get all account holders under a balance platform
   *
   * @remarks
   * Returns a paginated list of all the account holders that belong to the balance platform. To
   * fetch multiple pages, use the query parameters.
   *
   * For example, to limit the page to 5 account holders and to skip the first 20, use
   * `/balancePlatforms/{id}/accountHolders?limit=5&offset=20`.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Platform.GetBalancePlatformsIdAccountHoldersError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalancePlatformsIdAccountHolders(
    request: Platform.GetBalancePlatformsIdAccountHoldersRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedAccountHoldersResponse, Platform.GetBalancePlatformsIdAccountHoldersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/balancePlatforms/{id}/accountHolders"),
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
        success: { kind: "json", schema: paginatedAccountHoldersResponseSchema },
        errorFactory: Platform.GetBalancePlatformsIdAccountHoldersError,
      },
      options,
    );
  }

  /**
   * Get all transaction rules for a balance platform
   *
   * @remarks
   * Returns a list of transaction rules associated with a balance platform.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Platform.GetBalancePlatformsIdTransactionRulesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalancePlatformsIdTransactionRules(
    request: Platform.GetBalancePlatformsIdTransactionRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionRulesResponse, Platform.GetBalancePlatformsIdTransactionRulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/balancePlatforms/{id}/transactionRules"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionRulesResponseSchema },
        errorFactory: Platform.GetBalancePlatformsIdTransactionRulesError,
      },
      options,
    );
  }
}

export namespace Platform {
  export type GetBalancePlatformsIdRequest = {
    /** The unique identifier of the balance platform. */
    id: string;
  };

  export class GetBalancePlatformsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetBalancePlatformsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetBalancePlatformsIdAccountHoldersRequest = {
    /** The unique identifier of the balance platform. */
    id: string;
    /** The number of items that you want to skip. */
    offset?: number;
    /**
     * The number of items returned per page, maximum 100 items. By default, the response returns 10
     * items per page.
     */
    limit?: number;
  };

  export class GetBalancePlatformsIdAccountHoldersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetBalancePlatformsIdAccountHoldersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetBalancePlatformsIdTransactionRulesRequest = {
    /** The unique identifier of the balance platform. */
    id: string;
  };

  export class GetBalancePlatformsIdTransactionRulesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetBalancePlatformsIdTransactionRulesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
