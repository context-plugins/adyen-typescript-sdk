import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  balanceAccountConfigurationRequestSchema,
  type BalanceAccountConfigurationRequest,
} from "../models/balance-account-configuration-request.js";
import {
  balanceAccountConfigurationUpdateSchema,
  type BalanceAccountConfigurationUpdate,
} from "../models/balance-account-configuration-update.js";
import {
  balanceAccountConfigurationSchema,
  type BalanceAccountConfiguration,
} from "../models/balance-account-configuration.js";
import {
  balanceAccountConfigurationsSchema,
  type BalanceAccountConfigurations,
} from "../models/balance-account-configurations.js";
import {
  balancePlatformConfigurationSchema,
  type BalancePlatformConfiguration,
} from "../models/balance-platform-configuration.js";
import {
  balancePlatformConfigurationsSchema,
  type BalancePlatformConfigurations,
} from "../models/balance-platform-configurations.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import { executionResultSchema, type ExecutionResult } from "../models/execution-result.js";
import {
  payoutScheduleExecutionsSchema,
  type PayoutScheduleExecutions,
} from "../models/payout-schedule-executions.js";
import type { Servers } from "../servers.js";

export class ManagedPayoutSchedules {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Delete a managed payout schedule on a balance account
   *
   * @remarks
   * Delete a payout schedule applied to a balance account.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link
   * ManagedPayoutSchedules.DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBalanceAccountsBalanceAccountIdPayoutSchedulesId(
    request: ManagedPayoutSchedules.DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    ManagedPayoutSchedules.DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default13("/balanceAccounts/{balanceAccountId}/payoutSchedules/{id}"),
        auth: noneAuth,
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ManagedPayoutSchedules.DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdError,
      },
      options,
    );
  }

  /**
   * Get all managed payout schedules on a balance account
   *
   * @remarks
   * Returns a list of all managed payout schedules that are configured on a balance account. You
   * can use query parameters to filter the elements that are returned in the list.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceAccountsBalanceAccountIdPayoutSchedules(
    request: ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BalanceAccountConfigurations,
    ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/balanceAccounts/{balanceAccountId}/payoutSchedules"),
        auth: noneAuth,
        pathParams: [{ name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() }],
        query: [
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: balanceAccountConfigurationsSchema },
        errorFactory: ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesError,
      },
      options,
    );
  }

  /**
   * Get a specific managed payout schedule on a balance account
   *
   * @remarks
   * Returns the specified payout schedule.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceAccountsBalanceAccountIdPayoutSchedulesId(
    request: ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BalanceAccountConfiguration,
    ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/balanceAccounts/{balanceAccountId}/payoutSchedules/{id}"),
        auth: noneAuth,
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: balanceAccountConfigurationSchema },
        errorFactory: ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdError,
      },
      options,
    );
  }

  /**
   * View executions of a managed payout schedule
   *
   * @remarks
   * View information about the executions of a managed payout schedule on the specified balance
   * account. An execution is an attempt to make a payout according to the payout schedule.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link
   * ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions(
    request: ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PayoutScheduleExecutions,
    ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13(
          "/balanceAccounts/{balanceAccountId}/payoutSchedules/{id}/executions",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [
          { name: "offset", value: request.offset, schema: s.int() },
          {
            name: "results",
            value: request.results,
            schema: s.optional(s.array(s.lazy(() => executionResultSchema))),
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: payoutScheduleExecutionsSchema },
        errorFactory:
          ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsError,
      },
      options,
    );
  }

  /**
   * Get all managed payout schedules on your balance platform
   *
   * @remarks
   * Returns a list of all the payout schedules that are configured for your balance platform. You
   * can use query parameters to filter the elements that are returned in the list.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalancePlatformsBalancePlatformIdPayoutSchedules(
    request: ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BalancePlatformConfigurations,
    ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/balancePlatforms/{balancePlatformId}/payoutSchedules"),
        auth: noneAuth,
        pathParams: [{ name: "balancePlatformId", value: request.balancePlatformId, schema: s.string() }],
        query: [
          { name: "countryCode", value: request.countryCode, schema: s.optional(s.string()) },
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: balancePlatformConfigurationsSchema },
        errorFactory: ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesError,
      },
      options,
    );
  }

  /**
   * Get a specific managed payout schedule on your balance platform
   *
   * @remarks
   * Returns the specified managed payout schedule configured on your balance platform.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link
   * ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalancePlatformsBalancePlatformIdPayoutSchedulesId(
    request: ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BalancePlatformConfiguration,
    ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/balancePlatforms/{balancePlatformId}/payoutSchedules/{id}"),
        auth: noneAuth,
        pathParams: [
          { name: "balancePlatformId", value: request.balancePlatformId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: balancePlatformConfigurationSchema },
        errorFactory: ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdError,
      },
      options,
    );
  }

  /**
   * Update a managed payout schedule on a balance account
   *
   * @remarks
   * Update a managed payout schedule applied to a balance account. If an optional parameter is not
   * included in the request, it remains unchanged.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link
   * ManagedPayoutSchedules.PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchBalanceAccountsBalanceAccountIdPayoutSchedulesId(
    request: ManagedPayoutSchedules.PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BalanceAccountConfiguration,
    ManagedPayoutSchedules.PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default13("/balanceAccounts/{balanceAccountId}/payoutSchedules/{id}"),
        auth: noneAuth,
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: balanceAccountConfigurationUpdateSchema },
      },
      {
        success: { kind: "json", schema: balanceAccountConfigurationSchema },
        errorFactory: ManagedPayoutSchedules.PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdError,
      },
      options,
    );
  }

  /**
   * Apply a managed payout schedule to a balance account
   *
   * @remarks
   * Apply a managed payout schedule to a balance account. This payout schedule is based on an
   * existing payout schedule in your balance platform.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link ManagedPayoutSchedules.PostBalanceAccountsBalanceAccountIdPayoutSchedulesError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postBalanceAccountsBalanceAccountIdPayoutSchedules(
    request: ManagedPayoutSchedules.PostBalanceAccountsBalanceAccountIdPayoutSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BalanceAccountConfiguration,
    ManagedPayoutSchedules.PostBalanceAccountsBalanceAccountIdPayoutSchedulesError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/balanceAccounts/{balanceAccountId}/payoutSchedules"),
        auth: noneAuth,
        pathParams: [{ name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: balanceAccountConfigurationRequestSchema },
      },
      {
        success: { kind: "json", schema: balanceAccountConfigurationSchema },
        errorFactory: ManagedPayoutSchedules.PostBalanceAccountsBalanceAccountIdPayoutSchedulesError,
      },
      options,
    );
  }
}

export namespace ManagedPayoutSchedules {
  export type DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdRequest = {
    /** The unique identifier of the balance account. */
    balanceAccountId: string;
    /** The unique identifier of the payout schedule applied to the balance account. */
    id: string;
  };

  export class DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdError> = [
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
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type GetBalanceAccountsBalanceAccountIdPayoutSchedulesRequest = {
    /** The unique identifier of the balance account. */
    balanceAccountId: string;
    /**
     * The three-character [ISO currency
     * code](https://docs.adyen.com/development-resources/currency-codes) of the currency used in
     * the payout schedule.
     */
    currency?: string;
    /** The `cursor` returned in the links of the previous response. */
    cursor?: string;
    /**
     * The number of items returned per page, maximum of 100 items. By default, the response returns
     * 10 items per page.
     *
     * @default 10
     */
    limit?: number;
  };

  export class GetBalanceAccountsBalanceAccountIdPayoutSchedulesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetBalanceAccountsBalanceAccountIdPayoutSchedulesError> = [
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
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdRequest = {
    /** The unique identifier of the balance account. */
    balanceAccountId: string;
    /** The unique identifier of the payout schedule for the balance account. */
    id: string;
  };

  export class GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdError> = [
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
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsRequest = {
    /** The unique identifier of the balance account. */
    balanceAccountId: string;
    /** The unique identifier of the payout schedule on the balance account. */
    id: string;
    /**
     * The page number to be returned.
     *
     * Default: **1**
     */
    offset: number;
    /**
     * Contains a list of payout statuses. If included, the response returns only executed payouts
     * that currently have one of the specified statuses.
     *
     * Possible statuses:
     * - **succeeded**: The payout was sent successfully.
     * - **failed**: The payout was not sent due to an error.
     * - **skipped**: The payout was not triggered as expected.
     */
    results?: ExecutionResult[];
    /**
     * The number of items returned per page.
     *
     * Default: **10**
     */
    limit?: number;
  };

  export class GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsError> =
      [
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
          on: 422,
          kind: "defaultErrorResponseEntity4",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
        {
          on: 500,
          kind: "defaultErrorResponseEntity5",
          decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
        },
      ];
  }

  export type GetBalancePlatformsBalancePlatformIdPayoutSchedulesRequest = {
    /** The unique identifier of the balance platform. */
    balancePlatformId: string;
    /**
     * The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country
     * code of the country to which the payout configuration applies.
     */
    countryCode?: string;
    /**
     * The three-character [ISO currency
     * code](https://docs.adyen.com/development-resources/currency-codes) of the currency used in
     * the payout configuration.
     */
    currency?: string;
  };

  export class GetBalancePlatformsBalancePlatformIdPayoutSchedulesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetBalancePlatformsBalancePlatformIdPayoutSchedulesError> = [
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
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdRequest = {
    /** The unique identifier of the balance platform. */
    balancePlatformId: string;
    /** The unique identifier of the payout configuration for your balance platform. */
    id: string;
  };

  export class GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdError> = [
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
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdRequest = {
    /** The unique identifier of the balance account. */
    balanceAccountId: string;
    /** The unique identifier of the payout schedule applied to the balance account. */
    id: string;
    body: BalanceAccountConfigurationUpdate;
  };

  export class PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdError> = [
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
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostBalanceAccountsBalanceAccountIdPayoutSchedulesRequest = {
    /** The unique identifier of the balance account. */
    balanceAccountId: string;
    body: BalanceAccountConfigurationRequest;
  };

  export class PostBalanceAccountsBalanceAccountIdPayoutSchedulesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostBalanceAccountsBalanceAccountIdPayoutSchedulesError> = [
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
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
