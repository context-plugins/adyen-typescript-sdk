import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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
   * TransferLimitsBalancePlatformLevel.DeleteBalancePlatformsIdTransferLimitsTransferLimitIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default13("/balancePlatforms/{id}/transferLimits/{transferLimitId}"),
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
          TransferLimitsBalancePlatformLevel.DeleteBalancePlatformsIdTransferLimitsTransferLimitIdError,
      },
      options,
    );
  }

  /**
   * Filter and view the transfer limits
   *
   * @remarks
   * Filter and view the transfer limits configured for your balance platform using the balance
   * platform's unique `id` and the available query parameters.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default13("/balancePlatforms/{id}/transferLimits"),
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
        errorFactory: TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsError,
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
   * TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsTransferLimitIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default13("/balancePlatforms/{id}/transferLimits/{transferLimitId}"),
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
          TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsTransferLimitIdError,
      },
      options,
    );
  }

  /**
   * Create a transfer limit
   *
   * @remarks
   * Create a transfer limit for your balance platform using the unique `id` of your balance
   * platform.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link TransferLimitsBalancePlatformLevel.PostBalancePlatformsIdTransferLimitsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postBalancePlatformsIdTransferLimits(
    request: TransferLimitsBalancePlatformLevel.PostBalancePlatformsIdTransferLimitsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferLimit, TransferLimitsBalancePlatformLevel.PostBalancePlatformsIdTransferLimitsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/balancePlatforms/{id}/transferLimits"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the balance platform. */
    id: string;
    /** The unique identifier of the transfer limit. */
    transferLimitId: string;
  };

  export class DeleteBalancePlatformsIdTransferLimitsTransferLimitIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

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
    /** The unique identifier of the balance platform. */
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

  export class GetBalancePlatformsIdTransferLimitsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

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
    /** The unique identifier of the balance platform. */
    id: string;
    /** The unique identifier of the transfer limit. */
    transferLimitId: string;
  };

  export class GetBalancePlatformsIdTransferLimitsTransferLimitIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

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
    /** The unique identifier of the balance platform. */
    id: string;
    body: CreateTransferLimitRequest;
  };

  export class PostBalancePlatformsIdTransferLimitsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

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
