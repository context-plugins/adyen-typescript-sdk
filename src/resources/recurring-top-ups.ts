import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(
    request: RecurringTopUps.DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRequest,
    options?: RequestOptions,
  ): ApiPromise<unknown, RecurringTopUps.DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default13("/balanceAccounts/{balanceAccountId}/recurringTopUps/{topUpId}"),
        auth: noneAuth,
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "topUpId", value: request.topUpId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: RecurringTopUps.DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError,
      },
      options,
    );
  }

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
        url: this.#servers.default13("/balanceAccounts/{balanceAccountId}/recurringTopUps"),
        auth: noneAuth,
        pathParams: [{ name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 10) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recurringTopUpsResultSchema },
        errorFactory: RecurringTopUps.GetBalanceAccountsBalanceAccountIdRecurringTopUpsError,
      },
      options,
    );
  }

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
        url: this.#servers.default13("/balanceAccounts/{balanceAccountId}/recurringTopUps/{topUpId}"),
        auth: noneAuth,
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "topUpId", value: request.topUpId, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: patchableCreateRecurringTopUpSchema },
      },
      {
        success: { kind: "json", schema: recurringTopUpSchema },
        errorFactory: RecurringTopUps.PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError,
      },
      options,
    );
  }

  postBalanceAccountsBalanceAccountIdRecurringTopUps(
    request: RecurringTopUps.PostBalanceAccountsBalanceAccountIdRecurringTopUpsRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringTopUp, RecurringTopUps.PostBalanceAccountsBalanceAccountIdRecurringTopUpsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default13("/balanceAccounts/{balanceAccountId}/recurringTopUps"),
        auth: noneAuth,
        pathParams: [{ name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() }],
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
    balanceAccountId: string;
    topUpId: string;
  };

  export class DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError> = [
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
    balanceAccountId: string;
    limit?: number;
    cursor?: string;
  };

  export class GetBalanceAccountsBalanceAccountIdRecurringTopUpsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
  > {
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
    balanceAccountId: string;
    topUpId: string;
    body: PatchableCreateRecurringTopUp;
  };

  export class PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
  > {
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
    balanceAccountId: string;
    body: CreateRecurringTopUp;
  };

  export class PostBalanceAccountsBalanceAccountIdRecurringTopUpsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
  > {
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
