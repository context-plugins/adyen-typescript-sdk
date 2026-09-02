import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
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

export class TransferLimitsBalancePlatformLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  deleteBalancePlatformsIdTransferLimitsTransferLimitId(
    request: TransferLimitsBalancePlatformLevel.DeleteBalancePlatformsIdTransferLimitsTransferLimitIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    TransferLimitsBalancePlatformLevel.DeleteBalancePlatformsIdTransferLimitsTransferLimitIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default13("/balancePlatforms/{id}/transferLimits/{transferLimitId}"),
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
          TransferLimitsBalancePlatformLevel.DeleteBalancePlatformsIdTransferLimitsTransferLimitIdError,
      },
      options,
    );
  }

  getBalancePlatformsIdTransferLimits(
    request: TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TransferLimitListResponse,
    TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/balancePlatforms/{id}/transferLimits"),
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
        errorFactory: TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsError,
      },
      options,
    );
  }

  getBalancePlatformsIdTransferLimitsTransferLimitId(
    request: TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsTransferLimitIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TransferLimit,
    TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsTransferLimitIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/balancePlatforms/{id}/transferLimits/{transferLimitId}"),
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
          TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsTransferLimitIdError,
      },
      options,
    );
  }

  postBalancePlatformsIdTransferLimits(
    request: TransferLimitsBalancePlatformLevel.PostBalancePlatformsIdTransferLimitsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferLimit, TransferLimitsBalancePlatformLevel.PostBalancePlatformsIdTransferLimitsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default13("/balancePlatforms/{id}/transferLimits"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTransferLimitRequestSchema },
      },
      {
        success: { kind: "json", schema: transferLimitSchema },
        errorFactory: TransferLimitsBalancePlatformLevel.PostBalancePlatformsIdTransferLimitsError,
      },
      options,
    );
  }
}

export namespace TransferLimitsBalancePlatformLevel {
  export type DeleteBalancePlatformsIdTransferLimitsTransferLimitIdRequest = {
    id: string;
    transferLimitId: string;
  };

  export class DeleteBalancePlatformsIdTransferLimitsTransferLimitIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<DeleteBalancePlatformsIdTransferLimitsTransferLimitIdError> = [
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

  export type GetBalancePlatformsIdTransferLimitsRequest = {
    id: string;
    scope?: Scope;
    transferType?: TransferType;
    status?: LimitStatus;
  };

  export class GetBalancePlatformsIdTransferLimitsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<GetBalancePlatformsIdTransferLimitsError> = [
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

  export type GetBalancePlatformsIdTransferLimitsTransferLimitIdRequest = {
    id: string;
    transferLimitId: string;
  };

  export class GetBalancePlatformsIdTransferLimitsTransferLimitIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<GetBalancePlatformsIdTransferLimitsTransferLimitIdError> = [
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

  export type PostBalancePlatformsIdTransferLimitsRequest = {
    id: string;
    body: CreateTransferLimitRequest;
  };

  export class PostBalancePlatformsIdTransferLimitsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<PostBalancePlatformsIdTransferLimitsError> = [
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
}
