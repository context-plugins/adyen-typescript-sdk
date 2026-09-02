import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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
        url: this.#servers.default13("/balanceAccounts/{balanceAccountId}/sweeps/{sweepId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "sweepId", value: request.sweepId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CustomPayoutSchedulesSweeps.DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError,
      },
      options,
    );
  }

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
        url: this.#servers.default13("/balanceAccounts/{balanceAccountId}/sweeps"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() }],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.number()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: balanceSweepConfigurationsResponseSchema },
        errorFactory: CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsError,
      },
      options,
    );
  }

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
        url: this.#servers.default13("/balanceAccounts/{balanceAccountId}/sweeps/{sweepId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "sweepId", value: request.sweepId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sweepConfigurationV2Schema },
        errorFactory: CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsSweepIdError,
      },
      options,
    );
  }

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
        url: this.#servers.default13("/balanceAccounts/{balanceAccountId}/sweeps/{sweepId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() },
          { name: "sweepId", value: request.sweepId, schema: s.string() },
        ],
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
        url: this.#servers.default13("/balanceAccounts/{balanceAccountId}/sweeps"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "balanceAccountId", value: request.balanceAccountId, schema: s.string() }],
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
    balanceAccountId: string;
    sweepId: string;
  };

  export class DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetBalanceAccountsBalanceAccountIdSweepsRequest = {
    balanceAccountId: string;
    offset?: number;
    limit?: number;
  };

  export class GetBalanceAccountsBalanceAccountIdSweepsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetBalanceAccountsBalanceAccountIdSweepsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetBalanceAccountsBalanceAccountIdSweepsSweepIdRequest = {
    balanceAccountId: string;
    sweepId: string;
  };

  export class GetBalanceAccountsBalanceAccountIdSweepsSweepIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetBalanceAccountsBalanceAccountIdSweepsSweepIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchBalanceAccountsBalanceAccountIdSweepsSweepIdRequest = {
    balanceAccountId: string;
    sweepId: string;
    body?: UpdateSweepConfigurationV2;
  };

  export class PatchBalanceAccountsBalanceAccountIdSweepsSweepIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchBalanceAccountsBalanceAccountIdSweepsSweepIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostBalanceAccountsBalanceAccountIdSweepsRequest = {
    balanceAccountId: string;
    body?: CreateSweepConfigurationV2;
  };

  export class PostBalanceAccountsBalanceAccountIdSweepsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostBalanceAccountsBalanceAccountIdSweepsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
