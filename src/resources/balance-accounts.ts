import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  getBalanceAccountsId(
    request: BalanceAccounts.GetBalanceAccountsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<BalanceAccount, BalanceAccounts.GetBalanceAccountsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/balanceAccounts/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: balanceAccountSchema },
        errorFactory: BalanceAccounts.GetBalanceAccountsIdError,
      },
      options,
    );
  }

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
        url: this.#servers.default13("/balanceAccounts/{id}/paymentInstruments"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedPaymentInstrumentsResponseSchema },
        errorFactory: BalanceAccounts.GetBalanceAccountsIdPaymentInstrumentsError,
      },
      options,
    );
  }

  getBalanceAccountsIdTransactionRules(
    request: BalanceAccounts.GetBalanceAccountsIdTransactionRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionRulesResponse, BalanceAccounts.GetBalanceAccountsIdTransactionRulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/balanceAccounts/{id}/transactionRules"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionRulesResponseSchema },
        errorFactory: BalanceAccounts.GetBalanceAccountsIdTransactionRulesError,
      },
      options,
    );
  }

  patchBalanceAccountsId(
    request: BalanceAccounts.PatchBalanceAccountsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<BalanceAccount, BalanceAccounts.PatchBalanceAccountsIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default13("/balanceAccounts/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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

  postBalanceAccounts(
    request: BalanceAccounts.PostBalanceAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<BalanceAccount, BalanceAccounts.PostBalanceAccountsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default13("/balanceAccounts"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
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
    id: string;
  };

  export class GetBalanceAccountsIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetBalanceAccountsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetBalanceAccountsIdPaymentInstrumentsRequest = {
    id: string;
    offset?: number;
    limit?: number;
    status?: string;
  };

  export class GetBalanceAccountsIdPaymentInstrumentsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetBalanceAccountsIdPaymentInstrumentsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetBalanceAccountsIdTransactionRulesRequest = {
    id: string;
  };

  export class GetBalanceAccountsIdTransactionRulesError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetBalanceAccountsIdTransactionRulesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchBalanceAccountsIdRequest = {
    id: string;
    body?: BalanceAccountUpdateRequest;
  };

  export class PatchBalanceAccountsIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
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

  export class PostBalanceAccountsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostBalanceAccountsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
