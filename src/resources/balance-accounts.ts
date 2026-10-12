import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { balanceAccountInfoSchema, type BalanceAccountInfo } from "../models/balance-account-info.js";
import {
  balanceAccountUpdateRequestSchema,
  type BalanceAccountUpdateRequest,
} from "../models/balance-account-update-request.js";
import { balanceAccountSchema, type BalanceAccount } from "../models/balance-account.js";
import {
  paginatedPaymentInstrumentsResponseSchema,
  type PaginatedPaymentInstrumentsResponse,
} from "../models/paginated-payment-instruments-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  transactionRulesResponseSchema,
  type TransactionRulesResponse,
} from "../models/transaction-rules-response.js";
import type { Servers } from "../servers.js";

export class BalanceAccounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a balance account
   *
   * @remarks
   * Returns a balance account and its balances for the default currency and other currencies with a
   * non-zero balance.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link BalanceAccounts.GetBalanceAccountsIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceAccountsId(
    request: BalanceAccounts.GetBalanceAccountsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<BalanceAccount, BalanceAccounts.GetBalanceAccountsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/balanceAccounts/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: balanceAccountSchema },
        errorFactory: BalanceAccounts.GetBalanceAccountsIdError,
      },
      options,
    );
  }

  /**
   * Get payment instruments linked to a balance account
   *
   * @remarks
   * Returns a paginated list of the payment instruments associated with a balance account.
   *
   * To fetch multiple pages, use the query parameters.For example, to limit the page to 3 payment
   * instruments which are in active status and to skip the first 6, use
   * `/balanceAccounts/{id}/paymentInstruments?limit=3&offset=6&status=active`.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link BalanceAccounts.GetBalanceAccountsIdPaymentInstrumentsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceAccountsIdPaymentInstruments(
    request: BalanceAccounts.GetBalanceAccountsIdPaymentInstrumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PaginatedPaymentInstrumentsResponse,
    BalanceAccounts.GetBalanceAccountsIdPaymentInstrumentsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/balanceAccounts/{id}/paymentInstruments"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedPaymentInstrumentsResponseSchema },
        errorFactory: BalanceAccounts.GetBalanceAccountsIdPaymentInstrumentsError,
      },
      options,
    );
  }

  /**
   * Get all transaction rules for a balance account
   *
   * @remarks
   * Returns a list of transaction rules associated with a balance account.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link BalanceAccounts.GetBalanceAccountsIdTransactionRulesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceAccountsIdTransactionRules(
    request: BalanceAccounts.GetBalanceAccountsIdTransactionRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionRulesResponse, BalanceAccounts.GetBalanceAccountsIdTransactionRulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/balanceAccounts/{id}/transactionRules"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionRulesResponseSchema },
        errorFactory: BalanceAccounts.GetBalanceAccountsIdTransactionRulesError,
      },
      options,
    );
  }

  /**
   * Update a balance account
   *
   * @remarks
   * Updates a balance account.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link BalanceAccounts.PatchBalanceAccountsIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchBalanceAccountsId(
    request: BalanceAccounts.PatchBalanceAccountsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<BalanceAccount, BalanceAccounts.PatchBalanceAccountsIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default13("/balanceAccounts/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => balanceAccountUpdateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: balanceAccountSchema },
        errorFactory: BalanceAccounts.PatchBalanceAccountsIdError,
      },
      options,
    );
  }

  /**
   * Create a balance account
   *
   * @remarks
   * Creates a balance account that holds the funds of the associated account holder.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link BalanceAccounts.PostBalanceAccountsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postBalanceAccounts(
    request: BalanceAccounts.PostBalanceAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<BalanceAccount, BalanceAccounts.PostBalanceAccountsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/balanceAccounts"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => balanceAccountInfoSchema)),
        },
      },
      {
        success: { kind: "json", schema: balanceAccountSchema },
        errorFactory: BalanceAccounts.PostBalanceAccountsError,
      },
      options,
    );
  }
}

export namespace BalanceAccounts {
  export type GetBalanceAccountsIdRequest = {
    /** The unique identifier of the balance account. */
    id: string;
  };

  export class GetBalanceAccountsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetBalanceAccountsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetBalanceAccountsIdPaymentInstrumentsRequest = {
    /** The unique identifier of the balance account. */
    id: string;
    /** The number of items that you want to skip. */
    offset?: number;
    /**
     * The number of items returned per page, maximum 100 items. By default, the response returns 10
     * items per page.
     */
    limit?: number;
    /**
     * The status of the payment instruments that you want to get. By default, the response includes
     * payment instruments with any status.
     */
    status?: string;
  };

  export class GetBalanceAccountsIdPaymentInstrumentsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetBalanceAccountsIdPaymentInstrumentsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetBalanceAccountsIdTransactionRulesRequest = {
    /** The unique identifier of the balance account. */
    id: string;
  };

  export class GetBalanceAccountsIdTransactionRulesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetBalanceAccountsIdTransactionRulesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchBalanceAccountsIdRequest = {
    /** The unique identifier of the balance account. */
    id: string;
    body?: BalanceAccountUpdateRequest;
  };

  export class PatchBalanceAccountsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchBalanceAccountsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostBalanceAccountsRequest = {
    body?: BalanceAccountInfo;
  };

  export class PostBalanceAccountsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostBalanceAccountsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
