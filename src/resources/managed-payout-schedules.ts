import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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
        url: this.#servers.default13("/balanceAccounts/{balanceAccountId}/payoutSchedules/{id}"),
        auth: noneAuth,
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ManagedPayoutSchedules.DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdError,
      },
      options,
    );
  }

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
        url: this.#servers.default13("/balanceAccounts/{balanceAccountId}/payoutSchedules"),
        auth: noneAuth,
        pathParams: [{ name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() }],
        query: [
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 10) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: balanceAccountConfigurationsSchema },
        errorFactory: ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesError,
      },
      options,
    );
  }

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
        url: this.#servers.default13("/balanceAccounts/{balanceAccountId}/payoutSchedules/{id}"),
        auth: noneAuth,
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: balanceAccountConfigurationSchema },
        errorFactory: ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdError,
      },
      options,
    );
  }

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
        url: this.#servers.default13("/balanceAccounts/{balanceAccountId}/payoutSchedules/{id}/executions"),
        auth: noneAuth,
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [
          { name: "offset", value: request.offset, schema: s.number() },
          {
            name: "results",
            value: request.results,
            schema: s.optional(s.array(s.lazy(() => executionResultSchema))),
          },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
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
        url: this.#servers.default13("/balancePlatforms/{balancePlatformId}/payoutSchedules"),
        auth: noneAuth,
        pathParams: [{ name: "balancePlatformId", value: request.balancePlatformId, schema: s.string() }],
        query: [
          { name: "countryCode", value: request.countryCode, schema: s.optional(s.string()) },
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: balancePlatformConfigurationsSchema },
        errorFactory: ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesError,
      },
      options,
    );
  }

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
        url: this.#servers.default13("/balancePlatforms/{balancePlatformId}/payoutSchedules/{id}"),
        auth: noneAuth,
        pathParams: [
          { name: "balancePlatformId", value: request.balancePlatformId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: balancePlatformConfigurationSchema },
        errorFactory: ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdError,
      },
      options,
    );
  }

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
        url: this.#servers.default13("/balanceAccounts/{balanceAccountId}/payoutSchedules/{id}"),
        auth: noneAuth,
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: balanceAccountConfigurationUpdateSchema },
      },
      {
        success: { kind: "json", schema: balanceAccountConfigurationSchema },
        errorFactory: ManagedPayoutSchedules.PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdError,
      },
      options,
    );
  }

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
        url: this.#servers.default13("/balanceAccounts/{balanceAccountId}/payoutSchedules"),
        auth: noneAuth,
        pathParams: [{ name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() }],
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
    balanceAccountId: string;
    id: string;
  };

  export class DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
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
    balanceAccountId: string;
    currency?: string;
    cursor?: string;
    limit?: number;
  };

  export class GetBalanceAccountsBalanceAccountIdPayoutSchedulesError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
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
    balanceAccountId: string;
    id: string;
  };

  export class GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
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
    balanceAccountId: string;
    id: string;
    offset: number;
    results?: ExecutionResult[];
    limit?: number;
  };

  export class GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsError> = [
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
    balancePlatformId: string;
    countryCode?: string;
    currency?: string;
  };

  export class GetBalancePlatformsBalancePlatformIdPayoutSchedulesError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
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
    balancePlatformId: string;
    id: string;
  };

  export class GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
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
    balanceAccountId: string;
    id: string;
    body: BalanceAccountConfigurationUpdate;
  };

  export class PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
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
    balanceAccountId: string;
    body: BalanceAccountConfigurationRequest;
  };

  export class PostBalanceAccountsBalanceAccountIdPayoutSchedulesError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
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
