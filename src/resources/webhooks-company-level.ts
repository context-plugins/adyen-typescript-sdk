import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  deleteCompaniesCompanyIdWebhooksWebhookId(
    request: WebhooksCompanyLevel.DeleteCompaniesCompanyIdWebhooksWebhookIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhooksCompanyLevel.DeleteCompaniesCompanyIdWebhooksWebhookIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default9("/companies/{companyId}/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhooksCompanyLevel.DeleteCompaniesCompanyIdWebhooksWebhookIdError,
      },
      options,
    );
  }

  getCompaniesCompanyIdWebhooks(
    request: WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWebhooksResponse, WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/webhooks"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWebhooksResponseSchema },
        errorFactory: WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksError,
      },
      options,
    );
  }

  getCompaniesCompanyIdWebhooksWebhookId(
    request: WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksWebhookIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksWebhookIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookSchema },
        errorFactory: WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksWebhookIdError,
      },
      options,
    );
  }

  patchCompaniesCompanyIdWebhooksWebhookId(
    request: WebhooksCompanyLevel.PatchCompaniesCompanyIdWebhooksWebhookIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksCompanyLevel.PatchCompaniesCompanyIdWebhooksWebhookIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/companies/{companyId}/webhooks/{webhookId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
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

  postCompaniesCompanyIdWebhooks(
    request: WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksRequest,
    options?: RequestOptions,
  ): ApiPromise<Webhook, WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/companies/{companyId}/webhooks"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
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
        url: this.#servers.default9("/companies/{companyId}/webhooks/{webhookId}/generateHmac"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: generateHmacKeyResponseSchema },
        errorFactory: WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError,
      },
      options,
    );
  }

  postCompaniesCompanyIdWebhooksWebhookIdTest(
    request: WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdTestRequest,
    options?: RequestOptions,
  ): ApiPromise<TestWebhookResponse, WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdTestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/companies/{companyId}/webhooks/{webhookId}/test"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "webhookId", value: request.webhookId, schema: s.string() },
        ],
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
    companyId: string;
    webhookId: string;
  };

  export class DeleteCompaniesCompanyIdWebhooksWebhookIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<DeleteCompaniesCompanyIdWebhooksWebhookIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdWebhooksRequest = {
    companyId: string;
    pageNumber?: number;
    pageSize?: number;
  };

  export class GetCompaniesCompanyIdWebhooksError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdWebhooksError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdWebhooksWebhookIdRequest = {
    companyId: string;
    webhookId: string;
  };

  export class GetCompaniesCompanyIdWebhooksWebhookIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdWebhooksWebhookIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchCompaniesCompanyIdWebhooksWebhookIdRequest = {
    companyId: string;
    webhookId: string;
    body?: UpdateCompanyWebhookRequest;
  };

  export class PatchCompaniesCompanyIdWebhooksWebhookIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchCompaniesCompanyIdWebhooksWebhookIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdWebhooksRequest = {
    companyId: string;
    body?: CreateCompanyWebhookRequest;
  };

  export class PostCompaniesCompanyIdWebhooksError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdWebhooksError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRequest = {
    companyId: string;
    webhookId: string;
  };

  export class PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdWebhooksWebhookIdTestRequest = {
    companyId: string;
    webhookId: string;
    body?: TestCompanyWebhookRequest;
  };

  export class PostCompaniesCompanyIdWebhooksWebhookIdTestError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdWebhooksWebhookIdTestError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
