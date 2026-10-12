import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  approveTransferLimitRequestSchema,
  type ApproveTransferLimitRequest,
} from "../models/approve-transfer-limit-request.js";
import {
  createTransferLimitRequestSchema,
  type CreateTransferLimitRequest,
} from "../models/create-transfer-limit-request.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import { limitStatusSchema, type LimitStatus } from "../models/limit-status.js";
import { scopeSchema, type Scope } from "../models/scope.js";
import {
  transferLimitListResponseSchema,
  type TransferLimitListResponse,
} from "../models/transfer-limit-list-response.js";
import { transferLimitSchema, type TransferLimit } from "../models/transfer-limit.js";
import { transferTypeSchema, type TransferType } from "../models/transfer-type.js";
import type { Servers } from "../servers.js";

export class TransferLimitsBalanceAccountLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Delete a scheduled or pending transfer limit
   *
   * @remarks
   * Delete a scheduled or pending transfer limit using its unique `transferLimitId`. You cannot
   * delete an active limit.
   *
   * @returns No Content - The request has succeeded.
   *
   * @throws {@link
   * TransferLimitsBalanceAccountLevel.DeleteBalanceAccountsIdTransferLimitsTransferLimitIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBalanceAccountsIdTransferLimitsTransferLimitId(
    request: TransferLimitsBalanceAccountLevel.DeleteBalanceAccountsIdTransferLimitsTransferLimitIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    TransferLimitsBalanceAccountLevel.DeleteBalanceAccountsIdTransferLimitsTransferLimitIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default13("/balanceAccounts/{id}/transferLimits/{transferLimitId}"),
        auth: noneAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "transferLimitId", value: request.transferLimitId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory:
          TransferLimitsBalanceAccountLevel.DeleteBalanceAccountsIdTransferLimitsTransferLimitIdError,
      },
      options,
    );
  }

  /**
   * Filter and view the transfer limits
   *
   * @remarks
   * Filter and view the transfer limits configured for a balance account using the balance
   * account's unique `id` and the available query parameters.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceAccountsIdTransferLimits(
    request: TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TransferLimitListResponse,
    TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/balanceAccounts/{id}/transferLimits"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "scope", value: request.scope, schema: s.optional(s.lazy(() => scopeSchema)) },
          {
            name: "transferType",
            value: request.transferType,
            schema: s.optional(s.lazy(() => transferTypeSchema)),
          },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => limitStatusSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transferLimitListResponseSchema },
        errorFactory: TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsError,
      },
      options,
    );
  }

  /**
   * Get all current transfer limits
   *
   * @remarks
   * Get all transfer limits that currently apply to a balance account using the unique `id` of the
   * balance account.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link
   * TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsCurrentError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceAccountsIdTransferLimitsCurrent(
    request: TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TransferLimitListResponse,
    TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsCurrentError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/balanceAccounts/{id}/transferLimits/current"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "scope", value: request.scope, schema: s.optional(s.lazy(() => scopeSchema)) },
          {
            name: "transferType",
            value: request.transferType,
            schema: s.optional(s.lazy(() => transferTypeSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transferLimitListResponseSchema },
        errorFactory: TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsCurrentError,
      },
      options,
    );
  }

  /**
   * Get the details of a transfer limit
   *
   * @remarks
   * Get the details of a transfer limit using its unique `transferLimitId`.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link
   * TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsTransferLimitIdError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceAccountsIdTransferLimitsTransferLimitId(
    request: TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsTransferLimitIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TransferLimit,
    TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsTransferLimitIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/balanceAccounts/{id}/transferLimits/{transferLimitId}"),
        auth: noneAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "transferLimitId", value: request.transferLimitId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transferLimitSchema },
        errorFactory:
          TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsTransferLimitIdError,
      },
      options,
    );
  }

  /**
   * Create a transfer limit
   *
   * @remarks
   * Create a transfer limit for your balance account using the unique `id` of your balance account.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postBalanceAccountsIdTransferLimits(
    request: TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferLimit, TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/balanceAccounts/{id}/transferLimits"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "WWW-Authenticate", value: request.wwwAuthenticate, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createTransferLimitRequestSchema },
      },
      {
        success: { kind: "json", schema: transferLimitSchema },
        errorFactory: TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsError,
      },
      options,
    );
  }

  /**
   * Approve pending transfer limits
   *
   * @remarks
   * Approve transfer limits that are pending SCA authentication.
   *
   * @returns No Content - The request has succeeded.
   *
   * @throws {@link
   * TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsApproveError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postBalanceAccountsIdTransferLimitsApprove(
    request: TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsApproveRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsApproveError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/balanceAccounts/{id}/transferLimits/approve"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "WWW-Authenticate", value: request.wwwAuthenticate, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: approveTransferLimitRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsApproveError,
      },
      options,
    );
  }
}

export namespace TransferLimitsBalanceAccountLevel {
  export type DeleteBalanceAccountsIdTransferLimitsTransferLimitIdRequest = {
    /** The unique identifier of the balance account. */
    id: string;
    /** The unique identifier of the transfer limit. */
    transferLimitId: string;
  };

  export class DeleteBalanceAccountsIdTransferLimitsTransferLimitIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<DeleteBalanceAccountsIdTransferLimitsTransferLimitIdError> = [
      {
        on: 404,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type GetBalanceAccountsIdTransferLimitsRequest = {
    /** The unique identifier of the balance account. */
    id: string;
    /**
     * The scope to which the transfer limit applies. Possible values:
     * * **perTransaction**: you set a maximum amount for each transfer made from the balance
     *   account or balance platform.
     * * **perDay**: you set a maximum total amount for all transfers made from the balance account
     *   or balance platform in a day.
     */
    scope?: Scope;
    /**
     * The type of transfer to which the limit applies. Possible values:
     * * **instant**: the limit applies to transfers with an **instant** priority.
     * * **all**: the limit applies to all transfers, regardless of priority.
     */
    transferType?: TransferType;
    /**
     * The status of the transfer limit. Possible values:
     * * **active**: the limit is currently active.
     * * **inactive**: the limit is currently inactive.
     * * **pendingSCA**: the limit is pending until your user performs SCA.
     * * **scheduled**: the limit is scheduled to become active at a future date.
     */
    status?: LimitStatus;
  };

  export class GetBalanceAccountsIdTransferLimitsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetBalanceAccountsIdTransferLimitsError> = [
      {
        on: 404,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type GetBalanceAccountsIdTransferLimitsCurrentRequest = {
    /** The unique identifier of the balance account. */
    id: string;
    /**
     * The scope to which the transfer limit applies. Possible values:
     * * **perTransaction**: you set a maximum amount for each transfer made from the balance
     *   account or balance platform.
     * * **perDay**: you set a maximum total amount for all transfers made from the balance account
     *   or balance platform in a day.
     */
    scope?: Scope;
    /**
     * The type of transfer to which the limit applies. Possible values:
     * * **instant**: the limit applies to transfers with an **instant** priority.
     * * **all**: the limit applies to all transfers, regardless of priority.
     */
    transferType?: TransferType;
  };

  export class GetBalanceAccountsIdTransferLimitsCurrentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetBalanceAccountsIdTransferLimitsCurrentError> = [
      {
        on: 404,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type GetBalanceAccountsIdTransferLimitsTransferLimitIdRequest = {
    /** The unique identifier of the balance account. */
    id: string;
    /** The unique identifier of the transfer limit. */
    transferLimitId: string;
  };

  export class GetBalanceAccountsIdTransferLimitsTransferLimitIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetBalanceAccountsIdTransferLimitsTransferLimitIdError> = [
      {
        on: 404,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostBalanceAccountsIdTransferLimitsRequest = {
    /** The unique identifier of the balance account. */
    id: string;
    /** Header for authenticating through SCA */
    wwwAuthenticate?: string;
    body: CreateTransferLimitRequest;
  };

  export class PostBalanceAccountsIdTransferLimitsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostBalanceAccountsIdTransferLimitsError> = [
      {
        on: 400,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 401,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostBalanceAccountsIdTransferLimitsApproveRequest = {
    /** The unique identifier of the balance account. */
    id: string;
    /** Header for authenticating using SCA. */
    wwwAuthenticate?: string;
    body: ApproveTransferLimitRequest;
  };

  export class PostBalanceAccountsIdTransferLimitsApproveError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostBalanceAccountsIdTransferLimitsApproveError> = [
      {
        on: 401,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 404,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
