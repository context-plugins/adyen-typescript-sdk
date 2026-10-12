import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  balanceSweepConfigurationsResponseSchema,
  type BalanceSweepConfigurationsResponse,
} from "../models/balance-sweep-configurations-response.js";
import {
  createSweepConfigurationV2Schema,
  type CreateSweepConfigurationV2,
} from "../models/create-sweep-configuration-v2.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import { sweepConfigurationV2Schema, type SweepConfigurationV2 } from "../models/sweep-configuration-v2.js";
import {
  updateSweepConfigurationV2Schema,
  type UpdateSweepConfigurationV2,
} from "../models/update-sweep-configuration-v2.js";
import type { Servers } from "../servers.js";

export class CustomPayoutSchedulesSweeps {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a sweep
   *
   * @remarks
   * Deletes a sweep for a balance account.
   *
   * @returns No Content - look at the actual response code for the status of the request.
   *
   * @throws {@link
   * CustomPayoutSchedulesSweeps.DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBalanceAccountsBalanceAccountIdSweepsSweepId(
    request: CustomPayoutSchedulesSweeps.DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    CustomPayoutSchedulesSweeps.DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default13("/balanceAccounts/{balanceAccountId}/sweeps/{sweepId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "sweepId", value: request.sweepId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CustomPayoutSchedulesSweeps.DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError,
      },
      options,
    );
  }

  /**
   * Get all sweeps for a balance account
   *
   * @remarks
   * Returns a list of the sweeps configured for a balance account.
   *
   * To fetch multiple pages, use the query parameters. For example, to limit the page to 5 sweeps
   * and to skip the first 10, use `/balanceAccounts/{balanceAccountId}/sweeps?limit=5&offset=10`.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceAccountsBalanceAccountIdSweeps(
    request: CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BalanceSweepConfigurationsResponse,
    CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/balanceAccounts/{balanceAccountId}/sweeps"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() }],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: balanceSweepConfigurationsResponseSchema },
        errorFactory: CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsError,
      },
      options,
    );
  }

  /**
   * Get a sweep
   *
   * @remarks
   * Returns a sweep.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsSweepIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceAccountsBalanceAccountIdSweepsSweepId(
    request: CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsSweepIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SweepConfigurationV2,
    CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsSweepIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/balanceAccounts/{balanceAccountId}/sweeps/{sweepId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "sweepId", value: request.sweepId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sweepConfigurationV2Schema },
        errorFactory: CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsSweepIdError,
      },
      options,
    );
  }

  /**
   * Update a sweep
   *
   * @remarks
   * Updates a sweep. When updating a sweep resource, note that if a request parameter is not
   * provided, the parameter is left unchanged.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * CustomPayoutSchedulesSweeps.PatchBalanceAccountsBalanceAccountIdSweepsSweepIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchBalanceAccountsBalanceAccountIdSweepsSweepId(
    request: CustomPayoutSchedulesSweeps.PatchBalanceAccountsBalanceAccountIdSweepsSweepIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SweepConfigurationV2,
    CustomPayoutSchedulesSweeps.PatchBalanceAccountsBalanceAccountIdSweepsSweepIdError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default13("/balanceAccounts/{balanceAccountId}/sweeps/{sweepId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "sweepId", value: request.sweepId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateSweepConfigurationV2Schema)),
        },
      },
      {
        success: { kind: "json", schema: sweepConfigurationV2Schema },
        errorFactory: CustomPayoutSchedulesSweeps.PatchBalanceAccountsBalanceAccountIdSweepsSweepIdError,
      },
      options,
    );
  }

  /**
   * Create a sweep
   *
   * @remarks
   * Creates a sweep that results in moving funds from or to a balance account.
   *
   * A sweep pulls in or pushes out funds based on a defined schedule, amount, currency, and a
   * source or a destination.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link CustomPayoutSchedulesSweeps.PostBalanceAccountsBalanceAccountIdSweepsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postBalanceAccountsBalanceAccountIdSweeps(
    request: CustomPayoutSchedulesSweeps.PostBalanceAccountsBalanceAccountIdSweepsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SweepConfigurationV2,
    CustomPayoutSchedulesSweeps.PostBalanceAccountsBalanceAccountIdSweepsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/balanceAccounts/{balanceAccountId}/sweeps"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createSweepConfigurationV2Schema)),
        },
      },
      {
        success: { kind: "json", schema: sweepConfigurationV2Schema },
        errorFactory: CustomPayoutSchedulesSweeps.PostBalanceAccountsBalanceAccountIdSweepsError,
      },
      options,
    );
  }
}

export namespace CustomPayoutSchedulesSweeps {
  export type DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdRequest = {
    /** The unique identifier of the balance account. */
    balanceAccountId: string;
    /** The unique identifier of the sweep. */
    sweepId: string;
  };

  export class DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetBalanceAccountsBalanceAccountIdSweepsRequest = {
    /** The unique identifier of the balance account. */
    balanceAccountId: string;
    /** The number of items that you want to skip. */
    offset?: number;
    /**
     * The number of items returned per page, maximum 100 items. By default, the response returns 10
     * items per page.
     */
    limit?: number;
  };

  export class GetBalanceAccountsBalanceAccountIdSweepsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetBalanceAccountsBalanceAccountIdSweepsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetBalanceAccountsBalanceAccountIdSweepsSweepIdRequest = {
    /** The unique identifier of the balance account. */
    balanceAccountId: string;
    /** The unique identifier of the sweep. */
    sweepId: string;
  };

  export class GetBalanceAccountsBalanceAccountIdSweepsSweepIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetBalanceAccountsBalanceAccountIdSweepsSweepIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchBalanceAccountsBalanceAccountIdSweepsSweepIdRequest = {
    /** The unique identifier of the balance account. */
    balanceAccountId: string;
    /** The unique identifier of the sweep. */
    sweepId: string;
    body?: UpdateSweepConfigurationV2;
  };

  export class PatchBalanceAccountsBalanceAccountIdSweepsSweepIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchBalanceAccountsBalanceAccountIdSweepsSweepIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostBalanceAccountsBalanceAccountIdSweepsRequest = {
    /** The unique identifier of the balance account. */
    balanceAccountId: string;
    body?: CreateSweepConfigurationV2;
  };

  export class PostBalanceAccountsBalanceAccountIdSweepsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostBalanceAccountsBalanceAccountIdSweepsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
