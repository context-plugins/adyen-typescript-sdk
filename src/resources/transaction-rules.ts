import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import { transactionRuleInfoSchema, type TransactionRuleInfo } from "../models/transaction-rule-info.js";
import {
  transactionRuleResponseSchema,
  type TransactionRuleResponse,
} from "../models/transaction-rule-response.js";
import { transactionRuleSchema, type TransactionRule } from "../models/transaction-rule.js";
import type { Servers } from "../servers.js";

export class TransactionRules {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteTransactionRulesTransactionRuleId(
    request: TransactionRules.DeleteTransactionRulesTransactionRuleIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionRule, TransactionRules.DeleteTransactionRulesTransactionRuleIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default13("/transactionRules/{transactionRuleId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "transactionRuleId", value: request.transactionRuleId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionRuleSchema },
        errorFactory: TransactionRules.DeleteTransactionRulesTransactionRuleIdError,
      },
      options,
    );
  }

  getTransactionRulesTransactionRuleId(
    request: TransactionRules.GetTransactionRulesTransactionRuleIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionRuleResponse, TransactionRules.GetTransactionRulesTransactionRuleIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/transactionRules/{transactionRuleId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "transactionRuleId", value: request.transactionRuleId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionRuleResponseSchema },
        errorFactory: TransactionRules.GetTransactionRulesTransactionRuleIdError,
      },
      options,
    );
  }

  patchTransactionRulesTransactionRuleId(
    request: TransactionRules.PatchTransactionRulesTransactionRuleIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionRule, TransactionRules.PatchTransactionRulesTransactionRuleIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default13("/transactionRules/{transactionRuleId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "transactionRuleId", value: request.transactionRuleId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => transactionRuleInfoSchema)),
        },
      },
      {
        success: { kind: "json", schema: transactionRuleSchema },
        errorFactory: TransactionRules.PatchTransactionRulesTransactionRuleIdError,
      },
      options,
    );
  }

  postTransactionRules(
    request: TransactionRules.PostTransactionRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionRule, TransactionRules.PostTransactionRulesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default13("/transactionRules"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => transactionRuleInfoSchema)),
        },
      },
      {
        success: { kind: "json", schema: transactionRuleSchema },
        errorFactory: TransactionRules.PostTransactionRulesError,
      },
      options,
    );
  }
}

export namespace TransactionRules {
  export type DeleteTransactionRulesTransactionRuleIdRequest = {
    transactionRuleId: string;
  };

  export class DeleteTransactionRulesTransactionRuleIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<DeleteTransactionRulesTransactionRuleIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetTransactionRulesTransactionRuleIdRequest = {
    transactionRuleId: string;
  };

  export class GetTransactionRulesTransactionRuleIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetTransactionRulesTransactionRuleIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchTransactionRulesTransactionRuleIdRequest = {
    transactionRuleId: string;
    body?: TransactionRuleInfo;
  };

  export class PatchTransactionRulesTransactionRuleIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchTransactionRulesTransactionRuleIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostTransactionRulesRequest = {
    body?: TransactionRuleInfo;
  };

  export class PostTransactionRulesError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostTransactionRulesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
