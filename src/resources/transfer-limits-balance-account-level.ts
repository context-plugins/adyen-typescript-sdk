import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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
        url: this.#servers.default13("/balanceAccounts/{id}/transferLimits/{transferLimitId}"),
        auth: noneAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "transferLimitId", value: request.transferLimitId, schema: s.string() },
        ],
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
        url: this.#servers.default13("/balanceAccounts/{id}/transferLimits"),
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transferLimitListResponseSchema },
        errorFactory: TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsError,
      },
      options,
    );
  }

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
        url: this.#servers.default13("/balanceAccounts/{id}/transferLimits/current"),
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transferLimitListResponseSchema },
        errorFactory: TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsCurrentError,
      },
      options,
    );
  }

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
        url: this.#servers.default13("/balanceAccounts/{id}/transferLimits/{transferLimitId}"),
        auth: noneAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "transferLimitId", value: request.transferLimitId, schema: s.string() },
        ],
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

  postBalanceAccountsIdTransferLimits(
    request: TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferLimit, TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default13("/balanceAccounts/{id}/transferLimits"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "WWW-Authenticate", value: request.wwwAuthenticate, schema: s.optional(s.string()) },
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
        url: this.#servers.default13("/balanceAccounts/{id}/transferLimits/approve"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "WWW-Authenticate", value: request.wwwAuthenticate, schema: s.optional(s.string()) },
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
    id: string;
    transferLimitId: string;
  };

  export class DeleteBalanceAccountsIdTransferLimitsTransferLimitIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
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
    id: string;
    scope?: Scope;
    transferType?: TransferType;
    status?: LimitStatus;
  };

  export class GetBalanceAccountsIdTransferLimitsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
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
    id: string;
    scope?: Scope;
    transferType?: TransferType;
  };

  export class GetBalanceAccountsIdTransferLimitsCurrentError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
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
    id: string;
    transferLimitId: string;
  };

  export class GetBalanceAccountsIdTransferLimitsTransferLimitIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
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
    id: string;
    wwwAuthenticate?: string;
    body: CreateTransferLimitRequest;
  };

  export class PostBalanceAccountsIdTransferLimitsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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
    id: string;
    wwwAuthenticate?: string;
    body: ApproveTransferLimitRequest;
  };

  export class PostBalanceAccountsIdTransferLimitsApproveError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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
