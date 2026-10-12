import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Delete a balance webhook setting by id
   *
   * @remarks
   * Deletes a balance webhook setting that contains the conditions for triggering [balance
   * webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).
   *
   * @returns No Content - the request has been successfully processed, but there is no additional
   * content.
   *
   * @throws {@link
   * Balances.DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default13(
          "/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "balancePlatformId", value: request.balancePlatformId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
          { name: "settingId", value: request.settingId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: Balances.DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError,
      },
      options,
    );
  }

  /**
   * Get all balance webhook settings
   *
   * @remarks
   * Returns all balance webhook settings configured for triggering [balance
   * webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default13(
          "/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "balancePlatformId", value: request.balancePlatformId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookSettingsSchema },
        errorFactory: Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError,
      },
      options,
    );
  }

  /**
   * Get a balance webhook setting by id
   *
   * @remarks
   * Returns the details of a specific balance webhook setting configured for triggering [balance
   * webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default13(
          "/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "balancePlatformId", value: request.balancePlatformId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
          { name: "settingId", value: request.settingId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookSettingSchema },
        errorFactory: Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError,
      },
      options,
    );
  }

  /**
   * Update a balance webhook setting by id
   *
   * @remarks
   * Updates the conditions the balance change needs to meet for Adyen to send a [balance
   * webhook](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * Balances.PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default13(
          "/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "balancePlatformId", value: request.balancePlatformId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
          { name: "settingId", value: request.settingId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: balanceWebhookSettingInfoUpdateSchema },
      },
      {
        success: { kind: "json", schema: webhookSettingSchema },
        errorFactory: Balances.PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError,
      },
      options,
    );
  }

  /**
   * Create a balance webhook setting
   *
   * @remarks
   * Configures the criteria for triggering [balance
   * webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/1/post/balancePlatform.balanceAccount.balance.updated).
   *
   * Adyen sends balance webhooks to notify you of balance changes in your balance platform. They
   * can be triggered when the balance reaches, exceeds, or drops below a specific value in a
   * specific currency.
   *
   * You can get notified about balance changes in your entire balance platform, in the balance
   * accounts of a specific user, or a specific balance account. The hierarchy between the webhook
   * settings are based on the following business logic:
   *
   * * Settings on a higher level apply to all lower level resources (balance platform > account
   *   holder > balance acocunt).
   *
   * * The most granular setting overrides higher level settings (balance account > account holder >
   *   balance platform).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Balances.PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default13(
          "/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "balancePlatformId", value: request.balancePlatformId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the balance platform. */
    balancePlatformId: string;
    /** The unique identifier of the balance webhook. */
    webhookId: string;
    /** The unique identifier of the balance webhook setting. */
    settingId: string;
  };

  export class DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError> =
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

  export type GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRequest = {
    /** The unique identifier of the balance platform. */
    balancePlatformId: string;
    /** The unique identifier of the balance webhook. */
    webhookId: string;
  };

  export class GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError> =
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

  export type GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest = {
    /** The unique identifier of the balance platform. */
    balancePlatformId: string;
    /** The unique identifier of the balance webhook. */
    webhookId: string;
    /** The unique identifier of the balance webhook setting. */
    settingId: string;
  };

  export class GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError> =
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

  export type PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest = {
    /** The unique identifier of the balance platform. */
    balancePlatformId: string;
    /** The unique identifier of the balance webhook. */
    webhookId: string;
    /** The unique identifier of the balance webhook setting. */
    settingId: string;
    body: BalanceWebhookSettingInfoUpdate;
  };

  export class PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError> =
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

  export type PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRequest = {
    /** The unique identifier of the balance platform. */
    balancePlatformId: string;
    /** The unique identifier of the balance webhook. */
    webhookId: string;
    body: BalanceWebhookSettingInfo;
  };

  export class PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError> =
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
}
