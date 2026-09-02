import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  getTransactions(
    request: Transactions.GetTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionSearchResponse, Transactions.GetTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default14("/transactions"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        query: [
          { name: "createdSince", value: request.createdSince, schema: s.dateTime() },
          { name: "createdUntil", value: request.createdUntil, schema: s.dateTime() },
          { name: "balancePlatform", value: request.balancePlatform, schema: s.optional(s.string()) },
          { name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.optional(s.string()) },
          { name: "accountHolderId", value: request.accountHolderId, schema: s.optional(s.string()) },
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionSearchResponseSchema },
        errorFactory: Transactions.GetTransactionsError,
      },
      options,
    );
  }

  getTransactionsId(
    request: Transactions.GetTransactionsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Transaction, Transactions.GetTransactionsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default14("/transactions/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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
    createdSince: Date;
    createdUntil: Date;
    balancePlatform?: string;
    paymentInstrumentId?: string;
    accountHolderId?: string;
    balanceAccountId?: string;
    cursor?: string;
    sortOrder?: SortOrder;
    limit?: number;
  };

  export class GetTransactionsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetTransactionsError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetTransactionsIdRequest = {
    id: string;
  };

  export class GetTransactionsIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetTransactionsIdError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
