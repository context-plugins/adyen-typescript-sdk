import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  balanceWebhookSettingInfoUpdateSchema,
  type BalanceWebhookSettingInfoUpdate,
} from "../models/balance-webhook-setting-info-update.js";
import {
  balanceWebhookSettingInfoSchema,
  type BalanceWebhookSettingInfo,
} from "../models/balance-webhook-setting-info.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import { webhookSettingSchema, type WebhookSetting } from "../models/unions/webhook-setting.js";
import { webhookSettingsSchema, type WebhookSettings } from "../models/webhook-settings.js";
import type { Servers } from "../servers.js";

export class Balances {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(
    request: Balances.DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    unknown,
    Balances.DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default13(
          "/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "balancePlatformId", value: request.balancePlatformId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
          { name: "settingId", value: request.settingId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: Balances.DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError,
      },
      options,
    );
  }

  getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(
    request: Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    WebhookSettings,
    Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings"),
        auth: noneAuth,
        pathParams: [
          { name: "balancePlatformId", value: request.balancePlatformId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookSettingsSchema },
        errorFactory: Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError,
      },
      options,
    );
  }

  getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(
    request: Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    WebhookSetting,
    Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13(
          "/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "balancePlatformId", value: request.balancePlatformId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
          { name: "settingId", value: request.settingId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookSettingSchema },
        errorFactory: Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError,
      },
      options,
    );
  }

  patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(
    request: Balances.PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    WebhookSetting,
    Balances.PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default13(
          "/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "balancePlatformId", value: request.balancePlatformId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
          { name: "settingId", value: request.settingId, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: balanceWebhookSettingInfoUpdateSchema },
      },
      {
        success: { kind: "json", schema: webhookSettingSchema },
        errorFactory: Balances.PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError,
      },
      options,
    );
  }

  postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(
    request: Balances.PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    WebhookSetting,
    Balances.PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default13("/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings"),
        auth: noneAuth,
        pathParams: [
          { name: "balancePlatformId", value: request.balancePlatformId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: balanceWebhookSettingInfoSchema },
      },
      {
        success: { kind: "json", schema: webhookSettingSchema },
        errorFactory: Balances.PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError,
      },
      options,
    );
  }
}

export namespace Balances {
  export type DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest = {
    balancePlatformId: string;
    webhookId: string;
    settingId: string;
  };

  export class DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError> = [
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

  export type GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRequest = {
    balancePlatformId: string;
    webhookId: string;
  };

  export class GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError> = [
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

  export type GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest = {
    balancePlatformId: string;
    webhookId: string;
    settingId: string;
  };

  export class GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError> = [
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

  export type PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest = {
    balancePlatformId: string;
    webhookId: string;
    settingId: string;
    body: BalanceWebhookSettingInfoUpdate;
  };

  export class PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError> = [
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

  export type PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRequest = {
    balancePlatformId: string;
    webhookId: string;
    body: BalanceWebhookSettingInfo;
  };

  export class PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError> = [
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
}
