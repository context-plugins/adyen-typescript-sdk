import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Delete a transaction rule
   *
   * @remarks
   * Deletes a transaction rule.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TransactionRules.DeleteTransactionRulesTransactionRuleIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTransactionRulesTransactionRuleId(
    request: TransactionRules.DeleteTransactionRulesTransactionRuleIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionRule, TransactionRules.DeleteTransactionRulesTransactionRuleIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default13("/transactionRules/{transactionRuleId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "transactionRuleId", value: request.transactionRuleId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionRuleSchema },
        errorFactory: TransactionRules.DeleteTransactionRulesTransactionRuleIdError,
      },
      options,
    );
  }

  /**
   * Get a transaction rule
   *
   * @remarks
   * Returns the details of a transaction rule.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TransactionRules.GetTransactionRulesTransactionRuleIdError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTransactionRulesTransactionRuleId(
    request: TransactionRules.GetTransactionRulesTransactionRuleIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionRuleResponse, TransactionRules.GetTransactionRulesTransactionRuleIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/transactionRules/{transactionRuleId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "transactionRuleId", value: request.transactionRuleId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionRuleResponseSchema },
        errorFactory: TransactionRules.GetTransactionRulesTransactionRuleIdError,
      },
      options,
    );
  }

  /**
   * Update a transaction rule
   *
   * @remarks
   * Updates a transaction rule.
   *
   * * To update only the status of a transaction rule, send only the `status` parameter. All other
   *   parameters not provided in the request are left unchanged.
   *
   * * When updating any other parameter, you need to send all existing resource parameters. If you
   *   omit a parameter in the request, that parameter is removed from the resource.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TransactionRules.PatchTransactionRulesTransactionRuleIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchTransactionRulesTransactionRuleId(
    request: TransactionRules.PatchTransactionRulesTransactionRuleIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionRule, TransactionRules.PatchTransactionRulesTransactionRuleIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default13("/transactionRules/{transactionRuleId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "transactionRuleId", value: request.transactionRuleId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Create a transaction rule
   *
   * @remarks
   * Creates a [transaction rule](https://docs.adyen.com/issuing/transaction-rules). When your user
   * makes a transaction with their Adyen-issued card, the transaction is allowed or declined based
   * on the conditions and outcome defined in the transaction rule. You can apply the transaction
   * rule to several cards, such as all the cards in your platform, or to a specific card. For use
   * cases, see [examples](https://docs.adyen.com/issuing/transaction-rules/examples).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TransactionRules.PostTransactionRulesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postTransactionRules(
    request: TransactionRules.PostTransactionRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionRule, TransactionRules.PostTransactionRulesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/transactionRules"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the transaction rule. */
    transactionRuleId: string;
  };

  export class DeleteTransactionRulesTransactionRuleIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<DeleteTransactionRulesTransactionRuleIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetTransactionRulesTransactionRuleIdRequest = {
    /** The unique identifier of the transaction rule. */
    transactionRuleId: string;
  };

  export class GetTransactionRulesTransactionRuleIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetTransactionRulesTransactionRuleIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchTransactionRulesTransactionRuleIdRequest = {
    /** The unique identifier of the transaction rule. */
    transactionRuleId: string;
    body?: TransactionRuleInfo;
  };

  export class PatchTransactionRulesTransactionRuleIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

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

  export class PostTransactionRulesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostTransactionRulesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
