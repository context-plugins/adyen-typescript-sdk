import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createRecurringTopUpSchema, type CreateRecurringTopUp } from "../models/create-recurring-top-up.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import {
  patchableCreateRecurringTopUpSchema,
  type PatchableCreateRecurringTopUp,
} from "../models/patchable-create-recurring-top-up.js";
import { recurringTopUpSchema, type RecurringTopUp } from "../models/recurring-top-up.js";
import {
  recurringTopUpsResultSchema,
  type RecurringTopUpsResult,
} from "../models/recurring-top-ups-result.js";
import type { Servers } from "../servers.js";

export class RecurringTopUps {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Delete a recurring top up
   *
   * @remarks
   * Delete a recurring top up configuration by `topUpId`.
   *
   * For more information, refer to [Manage recurring
   * top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/manage-recurring-top-ups).
   *
   * @returns No Content - the request has been successfully processed, but there is no additional
   * content.
   *
   * @throws {@link
   * RecurringTopUps.DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(
    request: RecurringTopUps.DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRequest,
    options?: RequestOptions,
  ): ApiPromise<unknown, RecurringTopUps.DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default13("/balanceAccounts/{balanceAccountId}/recurringTopUps/{topUpId}"),
        auth: noneAuth,
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "topUpId", value: request.topUpId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: RecurringTopUps.DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError,
      },
      options,
    );
  }

  /**
   * Get recurring top ups for a specific balanceAccountId
   *
   * @remarks
   * View all recurring top ups configured for a specific `balanceAccountId`.
   *
   * For more information, refer to [Manage recurring
   * top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/manage-recurring-top-ups).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link RecurringTopUps.GetBalanceAccountsBalanceAccountIdRecurringTopUpsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceAccountsBalanceAccountIdRecurringTopUps(
    request: RecurringTopUps.GetBalanceAccountsBalanceAccountIdRecurringTopUpsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    RecurringTopUpsResult,
    RecurringTopUps.GetBalanceAccountsBalanceAccountIdRecurringTopUpsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/balanceAccounts/{balanceAccountId}/recurringTopUps"),
        auth: noneAuth,
        pathParams: [{ name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recurringTopUpsResultSchema },
        errorFactory: RecurringTopUps.GetBalanceAccountsBalanceAccountIdRecurringTopUpsError,
      },
      options,
    );
  }

  /**
   * Update a RecurringTopUp
   *
   * @remarks
   * Update the configuration of an existing recurring top up.
   *
   * For more information, refer to [Manage recurring
   * top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/manage-recurring-top-ups).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link RecurringTopUps.PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(
    request: RecurringTopUps.PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    RecurringTopUp,
    RecurringTopUps.PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default13("/balanceAccounts/{balanceAccountId}/recurringTopUps/{topUpId}"),
        auth: noneAuth,
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "topUpId", value: request.topUpId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: patchableCreateRecurringTopUpSchema },
      },
      {
        success: { kind: "json", schema: recurringTopUpSchema },
        errorFactory: RecurringTopUps.PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError,
      },
      options,
    );
  }

  /**
   * Create recurring top up
   *
   * @remarks
   * Create a recurring top up configuration.
   *
   * For more information, refer to [Create recurring
   * top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/create-recurring-top-ups).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link RecurringTopUps.PostBalanceAccountsBalanceAccountIdRecurringTopUpsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postBalanceAccountsBalanceAccountIdRecurringTopUps(
    request: RecurringTopUps.PostBalanceAccountsBalanceAccountIdRecurringTopUpsRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringTopUp, RecurringTopUps.PostBalanceAccountsBalanceAccountIdRecurringTopUpsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/balanceAccounts/{balanceAccountId}/recurringTopUps"),
        auth: noneAuth,
        pathParams: [{ name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createRecurringTopUpSchema },
      },
      {
        success: { kind: "json", schema: recurringTopUpSchema },
        errorFactory: RecurringTopUps.PostBalanceAccountsBalanceAccountIdRecurringTopUpsError,
      },
      options,
    );
  }
}

export namespace RecurringTopUps {
  export type DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRequest = {
    /** The unique identifier of the balance account. */
    balanceAccountId: string;
    /** The unique identifier of the recurring top-up you want to delete. */
    topUpId: string;
  };

  export class DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError> =
      [
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
          on: 403,
          kind: "defaultErrorResponseEntity3",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 404,
          kind: "defaultErrorResponseEntity4",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 422,
          kind: "defaultErrorResponseEntity5",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 500,
          kind: "defaultErrorResponseEntity6",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
      ];
  }

  export type GetBalanceAccountsBalanceAccountIdRecurringTopUpsRequest = {
    /** The unique identifier of the balance account. */
    balanceAccountId: string;
    /** The number of items to return per page. Value must be between 1 and 100. @default 10 */
    limit?: number;
    /**
     * The cursor used for pagination. Required if you want to see the next or previous page of
     * results.
     */
    cursor?: string;
  };

  export class GetBalanceAccountsBalanceAccountIdRecurringTopUpsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetBalanceAccountsBalanceAccountIdRecurringTopUpsError> = [
      {
        on: 401,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 404,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRequest = {
    /** The unique identifier of the balance account. */
    balanceAccountId: string;
    /** The unique identifier of the recurring top-up you want to update. */
    topUpId: string;
    body: PatchableCreateRecurringTopUp;
  };

  export class PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError> = [
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
        on: 403,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostBalanceAccountsBalanceAccountIdRecurringTopUpsRequest = {
    /** The unique identifier of the balance account. */
    balanceAccountId: string;
    body: CreateRecurringTopUp;
  };

  export class PostBalanceAccountsBalanceAccountIdRecurringTopUpsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostBalanceAccountsBalanceAccountIdRecurringTopUpsError> = [
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
        on: 403,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
