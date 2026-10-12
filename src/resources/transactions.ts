import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import {
  transactionSearchResponseSchema,
  type TransactionSearchResponse,
} from "../models/transaction-search-response.js";
import { transactionSchema, type Transaction } from "../models/transaction.js";
import type { Servers } from "../servers.js";

export class Transactions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all transactions
   *
   * @remarks
   * >Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your
   * implementation, use the latest version.
   *
   * Returns all the transactions related to a balance account, account holder, or balance platform.
   *
   * When making this request, you must include at least one of the following:
   * - `balanceAccountId`
   * - `accountHolderId`
   * - `balancePlatform`.
   *
   * This endpoint supports cursor-based pagination. The response returns the first page of results,
   * and returns links to the next and previous pages when applicable. You can use the links to page
   * through the results.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Transactions.GetTransactionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTransactions(
    request: Transactions.GetTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionSearchResponse, Transactions.GetTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/transactions"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [
          { name: "createdSince", value: request.createdSince, schema: s.dateTime() },
          { name: "createdUntil", value: request.createdUntil, schema: s.dateTime() },
          { name: "balancePlatform", value: request.balancePlatform, schema: s.optional(s.string()) },
          { name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.optional(s.string()) },
          { name: "accountHolderId", value: request.accountHolderId, schema: s.optional(s.string()) },
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionSearchResponseSchema },
        errorFactory: Transactions.GetTransactionsError,
      },
      options,
    );
  }

  /**
   * Get a transaction
   *
   * @remarks
   * >Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your
   * implementation, use the latest version.
   *
   * Returns a transaction.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Transactions.GetTransactionsIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTransactionsId(
    request: Transactions.GetTransactionsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Transaction, Transactions.GetTransactionsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/transactions/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionSchema },
        errorFactory: Transactions.GetTransactionsIdError,
      },
      options,
    );
  }
}

export namespace Transactions {
  export type GetTransactionsRequest = {
    /**
     * Only include transactions that have been created on or after this point in time. The value
     * must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
     */
    createdSince: Date;
    /**
     * Only include transactions that have been created on or before this point in time. The value
     * must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
     */
    createdUntil: Date;
    /**
     * The unique identifier of the [balance
     * platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id).
     *
     * Required if you don't provide a `balanceAccountId` or `accountHolderId`.
     */
    balancePlatform?: string;
    /**
     * The unique identifier of the [payment
     * instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_).
     *
     * To use this parameter, you must also provide a `balanceAccountId`, `accountHolderId`, or
     * `balancePlatform`.
     *
     * The `paymentInstrumentId` must be related to the `balanceAccountId` or `accountHolderId` that
     * you provide.
     */
    paymentInstrumentId?: string;
    /**
     * The unique identifier of the [account
     * holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id).
     *
     * Required if you don't provide a `balanceAccountId` or `balancePlatform`.
     *
     * If you provide a `balanceAccountId`, the `accountHolderId` must be related to the
     * `balanceAccountId`.
     */
    accountHolderId?: string;
    /**
     * The unique identifier of the [balance
     * account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id).
     *
     * Required if you don't provide an `accountHolderId` or `balancePlatform`.
     *
     * If you provide an `accountHolderId`, the `balanceAccountId` must be related to the
     * `accountHolderId`.
     */
    balanceAccountId?: string;
    /** The `cursor` returned in the links of the previous response. */
    cursor?: string;
    /**
     * Determines the sort order of the returned transactions. The sort order is based on the
     * creation date of the transaction.
     *
     * Possible values:
     *
     *  - **asc**: Ascending order, from oldest to most recent.
     *
     * - **desc**: Descending order, from most recent to oldest.
     *
     * Default value: **asc**.
     */
    sortOrder?: SortOrder;
    /**
     * The number of items returned per page, maximum of 100 items. By default, the response returns
     * 10 items per page.
     */
    limit?: number;
  };

  export class GetTransactionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetTransactionsError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetTransactionsIdRequest = {
    /** The unique identifier of the transaction. */
    id: string;
  };

  export class GetTransactionsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetTransactionsIdError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
