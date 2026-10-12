import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createCompanyWebhookRequestSchema,
  type CreateCompanyWebhookRequest,
} from "../models/create-company-webhook-request.js";
import {
  generateHmacKeyResponseSchema,
  type GenerateHmacKeyResponse,
} from "../models/generate-hmac-key-response.js";
import { listWebhooksResponseSchema, type ListWebhooksResponse } from "../models/list-webhooks-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  testCompanyWebhookRequestSchema,
  type TestCompanyWebhookRequest,
} from "../models/test-company-webhook-request.js";
import { testWebhookResponseSchema, type TestWebhookResponse } from "../models/test-webhook-response.js";
import {
  updateCompanyWebhookRequestSchema,
  type UpdateCompanyWebhookRequest,
} from "../models/update-company-webhook-request.js";
import { webhookSchema, type Webhook } from "../models/webhook.js";
import type { Servers } from "../servers.js";

export class WebhooksCompanyLevel {
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
   * @throws {@link WebhooksCompanyLevel.DeleteCompaniesCompanyIdWebhooksWebhookIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCompaniesCompanyIdWebhooksWebhookId(
    request: WebhooksCompanyLevel.DeleteCompaniesCompanyIdWebhooksWebhookIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhooksCompanyLevel.DeleteCompaniesCompanyIdWebhooksWebhookIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default9("/companies/{companyId}/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhooksCompanyLevel.DeleteCompaniesCompanyIdWebhooksWebhookIdError,
      },
      options,
    );
  }

  /**
   * List all webhooks
   *
   * @remarks
   * Lists all webhook configurations for the company account.
   *
   * To make this request, your API credential must have one of the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Webhooks read
   * * Management API—Webhooks read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesCompanyIdWebhooks(
    request: WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWebhooksResponse, WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/companies/{companyId}/webhooks"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWebhooksResponseSchema },
        errorFactory: WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksError,
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
   * @throws {@link WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksWebhookIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesCompanyIdWebhooksWebhookId(
    request: WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksWebhookIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksWebhookIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/companies/{companyId}/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookSchema },
        errorFactory: WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksWebhookIdError,
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
   * @throws {@link WebhooksCompanyLevel.PatchCompaniesCompanyIdWebhooksWebhookIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchCompaniesCompanyIdWebhooksWebhookId(
    request: WebhooksCompanyLevel.PatchCompaniesCompanyIdWebhooksWebhookIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksCompanyLevel.PatchCompaniesCompanyIdWebhooksWebhookIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default9("/companies/{companyId}/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateCompanyWebhookRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: webhookSchema },
        errorFactory: WebhooksCompanyLevel.PatchCompaniesCompanyIdWebhooksWebhookIdError,
      },
      options,
    );
  }

  /**
   * Set up a webhook
   *
   * @remarks
   * Subscribe to receive webhook notifications about events related to your company account. You
   * can add basic authentication to make sure the data is secure.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Webhooks read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCompaniesCompanyIdWebhooks(
    request: WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/companies/{companyId}/webhooks"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createCompanyWebhookRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: webhookSchema },
        errorFactory: WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksError,
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
   * @throws {@link WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac(
    request: WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GenerateHmacKeyResponse,
    WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/companies/{companyId}/webhooks/{webhookId}/generateHmac"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: generateHmacKeyResponseSchema },
        errorFactory: WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError,
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
   * We send sample notifications for maximum 20 of the merchant accounts that the webhook is
   * configured for. If the webhook is configured for more than 20 merchant accounts, use the
   * `merchantIds` array to specify a subset of the merchant accounts for which to send test
   * notifications.
   *
   * We send four test notifications for each event code you choose. They cover success and failure
   * scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in
   * the merchant accounts. For custom notifications, we only send the specified custom
   * notification.
   *
   * The response describes the result of the test. The `status` field tells you if the test was
   * successful or not. You can use the other response fields to troubleshoot unsuccessful tests.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Webhooks read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdTestError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCompaniesCompanyIdWebhooksWebhookIdTest(
    request: WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdTestRequest,
    options?: RequestOptions,
  ): ApiPromise<TestWebhookResponse, WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdTestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/companies/{companyId}/webhooks/{webhookId}/test"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => testCompanyWebhookRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: testWebhookResponseSchema },
        errorFactory: WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdTestError,
      },
      options,
    );
  }
}

export namespace WebhooksCompanyLevel {
  export type DeleteCompaniesCompanyIdWebhooksWebhookIdRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** Unique identifier of the webhook configuration. */
    webhookId: string;
  };

  export class DeleteCompaniesCompanyIdWebhooksWebhookIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<DeleteCompaniesCompanyIdWebhooksWebhookIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdWebhooksRequest = {
    /**
     * Unique identifier of the [company
     * account](https://docs.adyen.com/account/account-structure#company-account).
     */
    companyId: string;
    /** The number of the page to fetch. */
    pageNumber?: number;
    /** The number of items to have on a page, maximum 100. The default is 10 items on a page. */
    pageSize?: number;
  };

  export class GetCompaniesCompanyIdWebhooksError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdWebhooksError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdWebhooksWebhookIdRequest = {
    /**
     * Unique identifier of the [company
     * account](https://docs.adyen.com/account/account-structure#company-account).
     */
    companyId: string;
    /** Unique identifier of the webhook configuration. */
    webhookId: string;
  };

  export class GetCompaniesCompanyIdWebhooksWebhookIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdWebhooksWebhookIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchCompaniesCompanyIdWebhooksWebhookIdRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** Unique identifier of the webhook configuration. */
    webhookId: string;
    body?: UpdateCompanyWebhookRequest;
  };

  export class PatchCompaniesCompanyIdWebhooksWebhookIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchCompaniesCompanyIdWebhooksWebhookIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdWebhooksRequest = {
    /**
     * Unique identifier of the [company
     * account](https://docs.adyen.com/account/account-structure#company-account).
     */
    companyId: string;
    body?: CreateCompanyWebhookRequest;
  };

  export class PostCompaniesCompanyIdWebhooksError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdWebhooksError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** Unique identifier of the webhook configuration. */
    webhookId: string;
  };

  export class PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdWebhooksWebhookIdTestRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** Unique identifier of the webhook configuration. */
    webhookId: string;
    body?: TestCompanyWebhookRequest;
  };

  export class PostCompaniesCompanyIdWebhooksWebhookIdTestError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdWebhooksWebhookIdTestError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
