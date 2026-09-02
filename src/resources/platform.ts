import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  getBalancePlatformsId(
    request: Platform.GetBalancePlatformsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<BalancePlatform, Platform.GetBalancePlatformsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/balancePlatforms/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: balancePlatformSchema },
        errorFactory: Platform.GetBalancePlatformsIdError,
      },
      options,
    );
  }

  getBalancePlatformsIdAccountHolders(
    request: Platform.GetBalancePlatformsIdAccountHoldersRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedAccountHoldersResponse, Platform.GetBalancePlatformsIdAccountHoldersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/balancePlatforms/{id}/accountHolders"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedAccountHoldersResponseSchema },
        errorFactory: Platform.GetBalancePlatformsIdAccountHoldersError,
      },
      options,
    );
  }

  getBalancePlatformsIdTransactionRules(
    request: Platform.GetBalancePlatformsIdTransactionRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionRulesResponse, Platform.GetBalancePlatformsIdTransactionRulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/balancePlatforms/{id}/transactionRules"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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
    id: string;
  };

  export class GetBalancePlatformsIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetBalancePlatformsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetBalancePlatformsIdAccountHoldersRequest = {
    id: string;
    offset?: number;
    limit?: number;
  };

  export class GetBalancePlatformsIdAccountHoldersError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetBalancePlatformsIdAccountHoldersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetBalancePlatformsIdTransactionRulesRequest = {
    id: string;
  };

  export class GetBalancePlatformsIdTransactionRulesError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetBalancePlatformsIdTransactionRulesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
