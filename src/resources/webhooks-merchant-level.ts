import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  deleteMerchantsMerchantIdWebhooksWebhookId(
    request: WebhooksMerchantLevel.DeleteMerchantsMerchantIdWebhooksWebhookIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhooksMerchantLevel.DeleteMerchantsMerchantIdWebhooksWebhookIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default9("/merchants/{merchantId}/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhooksMerchantLevel.DeleteMerchantsMerchantIdWebhooksWebhookIdError,
      },
      options,
    );
  }

  getMerchantsMerchantIdWebhooks(
    request: WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWebhooksResponse, WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/webhooks"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWebhooksResponseSchema },
        errorFactory: WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksError,
      },
      options,
    );
  }

  getMerchantsMerchantIdWebhooksWebhookId(
    request: WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksWebhookIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksWebhookIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookSchema },
        errorFactory: WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksWebhookIdError,
      },
      options,
    );
  }

  patchMerchantsMerchantIdWebhooksWebhookId(
    request: WebhooksMerchantLevel.PatchMerchantsMerchantIdWebhooksWebhookIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksMerchantLevel.PatchMerchantsMerchantIdWebhooksWebhookIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/merchants/{merchantId}/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
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

  postMerchantsMerchantIdWebhooks(
    request: WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/merchants/{merchantId}/webhooks"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
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
        url: this.#servers.default9("/merchants/{merchantId}/webhooks/{webhookId}/generateHmac"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: generateHmacKeyResponseSchema },
        errorFactory: WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError,
      },
      options,
    );
  }

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
        url: this.#servers.default9("/merchants/{merchantId}/webhooks/{webhookId}/test"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
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
    merchantId: string;
    webhookId: string;
  };

  export class DeleteMerchantsMerchantIdWebhooksWebhookIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<DeleteMerchantsMerchantIdWebhooksWebhookIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdWebhooksRequest = {
    merchantId: string;
    pageNumber?: number;
    pageSize?: number;
  };

  export class GetMerchantsMerchantIdWebhooksError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdWebhooksError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdWebhooksWebhookIdRequest = {
    merchantId: string;
    webhookId: string;
  };

  export class GetMerchantsMerchantIdWebhooksWebhookIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdWebhooksWebhookIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdWebhooksWebhookIdRequest = {
    merchantId: string;
    webhookId: string;
    body?: UpdateMerchantWebhookRequest;
  };

  export class PatchMerchantsMerchantIdWebhooksWebhookIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdWebhooksWebhookIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdWebhooksRequest = {
    merchantId: string;
    body?: CreateMerchantWebhookRequest;
  };

  export class PostMerchantsMerchantIdWebhooksError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdWebhooksError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacRequest = {
    merchantId: string;
    webhookId: string;
  };

  export class PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdWebhooksWebhookIdTestRequest = {
    merchantId: string;
    webhookId: string;
    body?: TestWebhookRequest;
  };

  export class PostMerchantsMerchantIdWebhooksWebhookIdTestError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdWebhooksWebhookIdTestError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
