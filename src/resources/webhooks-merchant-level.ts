import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createMerchantWebhookRequestSchema,
  type CreateMerchantWebhookRequest,
} from "../models/create-merchant-webhook-request.js";
import {
  generateHmacKeyResponseSchema,
  type GenerateHmacKeyResponse,
} from "../models/generate-hmac-key-response.js";
import { listWebhooksResponseSchema, type ListWebhooksResponse } from "../models/list-webhooks-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import { testWebhookRequestSchema, type TestWebhookRequest } from "../models/test-webhook-request.js";
import { testWebhookResponseSchema, type TestWebhookResponse } from "../models/test-webhook-response.js";
import {
  updateMerchantWebhookRequestSchema,
  type UpdateMerchantWebhookRequest,
} from "../models/update-merchant-webhook-request.js";
import { webhookSchema, type Webhook } from "../models/webhook.js";
import type { Servers } from "../servers.js";

export class WebhooksMerchantLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Remove a webhook
   *
   * @remarks
   * Remove the configuration for the webhook identified in the path.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Webhooks read and write
   *
   * @returns No Content - look at the actual response code for the status of the request.
   *
   * @throws {@link WebhooksMerchantLevel.DeleteMerchantsMerchantIdWebhooksWebhookIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMerchantsMerchantIdWebhooksWebhookId(
    request: WebhooksMerchantLevel.DeleteMerchantsMerchantIdWebhooksWebhookIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhooksMerchantLevel.DeleteMerchantsMerchantIdWebhooksWebhookIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhooksMerchantLevel.DeleteMerchantsMerchantIdWebhooksWebhookIdError,
      },
      options,
    );
  }

  /**
   * List all webhooks
   *
   * @remarks
   * Lists all webhook configurations for the merchant account.
   *
   * > This call does not return webhook configurations for the company account to which the
   * specified merchant account belongs. You can see these in your Customer Area under
   * **Developers** > **Webhooks**.
   *
   * To make this request, your API credential must have one of the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Webhooks read
   * * Management API—Webhooks read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchantsMerchantIdWebhooks(
    request: WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWebhooksResponse, WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/webhooks"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWebhooksResponseSchema },
        errorFactory: WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksError,
      },
      options,
    );
  }

  /**
   * Get a webhook
   *
   * @remarks
   * Returns the configuration for the webhook identified in the path.
   *
   * To make this request, your API credential must have one of the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Webhooks read
   * * Management API—Webhooks read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksWebhookIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchantsMerchantIdWebhooksWebhookId(
    request: WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksWebhookIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksWebhookIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookSchema },
        errorFactory: WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksWebhookIdError,
      },
      options,
    );
  }

  /**
   * Update a webhook
   *
   * @remarks
   * Make changes to the configuration of the webhook identified in the path. The request contains
   * the new values you want to have in the webhook configuration. The response contains the full
   * configuration for the webhook, which includes the new values from the request.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Webhooks read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link WebhooksMerchantLevel.PatchMerchantsMerchantIdWebhooksWebhookIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchMerchantsMerchantIdWebhooksWebhookId(
    request: WebhooksMerchantLevel.PatchMerchantsMerchantIdWebhooksWebhookIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksMerchantLevel.PatchMerchantsMerchantIdWebhooksWebhookIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateMerchantWebhookRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: webhookSchema },
        errorFactory: WebhooksMerchantLevel.PatchMerchantsMerchantIdWebhooksWebhookIdError,
      },
      options,
    );
  }

  /**
   * Set up a webhook
   *
   * @remarks
   * Subscribe to receive webhook notifications about events related to your merchant account. You
   * can add basic authentication to make sure the data is secure.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Webhooks read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postMerchantsMerchantIdWebhooks(
    request: WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/webhooks"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createMerchantWebhookRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: webhookSchema },
        errorFactory: WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksError,
      },
      options,
    );
  }

  /**
   * Generate an HMAC key
   *
   * @remarks
   * Returns an [HMAC key](https://en.wikipedia.org/wiki/HMAC) for the webhook identified in the
   * path. This key allows you to check the integrity and the origin of the notifications you
   * receive.By creating an HMAC key, you start receiving [HMAC-signed
   * notifications](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures#enable-hmac-signatures)
   * from Adyen. Find out more about how to [verify HMAC
   * signatures](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures).
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Webhooks read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac(
    request: WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GenerateHmacKeyResponse,
    WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/webhooks/{webhookId}/generateHmac"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: generateHmacKeyResponseSchema },
        errorFactory: WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError,
      },
      options,
    );
  }

  /**
   * Test a webhook
   *
   * @remarks
   * Sends sample notifications to test if the webhook is set up correctly.
   *
   * We send four test notifications for each event code you choose. They cover success and failure
   * scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in
   * the merchant accounts. For custom notifications, we only send the specified custom
   * notification.
   *
   * The response describes the result of the test. The `status` field tells you if the test was
   * successful or not. You can use the other fields to troubleshoot unsuccessful tests.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Webhooks read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdTestError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postMerchantsMerchantIdWebhooksWebhookIdTest(
    request: WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdTestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TestWebhookResponse,
    WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdTestError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/webhooks/{webhookId}/test"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => testWebhookRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: testWebhookResponseSchema },
        errorFactory: WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdTestError,
      },
      options,
    );
  }
}

export namespace WebhooksMerchantLevel {
  export type DeleteMerchantsMerchantIdWebhooksWebhookIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** Unique identifier of the webhook configuration. */
    webhookId: string;
  };

  export class DeleteMerchantsMerchantIdWebhooksWebhookIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<DeleteMerchantsMerchantIdWebhooksWebhookIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdWebhooksRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The number of the page to fetch. */
    pageNumber?: number;
    /** The number of items to have on a page, maximum 100. The default is 10 items on a page. */
    pageSize?: number;
  };

  export class GetMerchantsMerchantIdWebhooksError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdWebhooksError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdWebhooksWebhookIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** Unique identifier of the webhook configuration. */
    webhookId: string;
  };

  export class GetMerchantsMerchantIdWebhooksWebhookIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdWebhooksWebhookIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdWebhooksWebhookIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** Unique identifier of the webhook configuration. */
    webhookId: string;
    body?: UpdateMerchantWebhookRequest;
  };

  export class PatchMerchantsMerchantIdWebhooksWebhookIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdWebhooksWebhookIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdWebhooksRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    body?: CreateMerchantWebhookRequest;
  };

  export class PostMerchantsMerchantIdWebhooksError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdWebhooksError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    webhookId: string;
  };

  export class PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdWebhooksWebhookIdTestRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** Unique identifier of the webhook configuration. */
    webhookId: string;
    body?: TestWebhookRequest;
  };

  export class PostMerchantsMerchantIdWebhooksWebhookIdTestError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdWebhooksWebhookIdTestError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
