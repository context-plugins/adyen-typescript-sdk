import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { apiCredentialSchema, type ApiCredential } from "../models/api-credential.js";
import {
  createApiCredentialResponseSchema,
  type CreateApiCredentialResponse,
} from "../models/create-api-credential-response.js";
import {
  createMerchantApiCredentialRequestSchema,
  type CreateMerchantApiCredentialRequest,
} from "../models/create-merchant-api-credential-request.js";
import {
  listMerchantApiCredentialsResponseSchema,
  type ListMerchantApiCredentialsResponse,
} from "../models/list-merchant-api-credentials-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  updateMerchantApiCredentialRequestSchema,
  type UpdateMerchantApiCredentialRequest,
} from "../models/update-merchant-api-credential-request.js";
import type { Servers } from "../servers.js";

export class ApiCredentialsMerchantLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getMerchantsMerchantIdApiCredentials(
    request: ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListMerchantApiCredentialsResponse,
    ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/apiCredentials"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMerchantApiCredentialsResponseSchema },
        errorFactory: ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsError,
      },
      options,
    );
  }

  getMerchantsMerchantIdApiCredentialsApiCredentialId(
    request: ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiCredential,
    ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/apiCredentials/{apiCredentialId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiCredentialSchema },
        errorFactory: ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdError,
      },
      options,
    );
  }

  patchMerchantsMerchantIdApiCredentialsApiCredentialId(
    request: ApiCredentialsMerchantLevel.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiCredential,
    ApiCredentialsMerchantLevel.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/merchants/{merchantId}/apiCredentials/{apiCredentialId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateMerchantApiCredentialRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiCredentialSchema },
        errorFactory: ApiCredentialsMerchantLevel.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdError,
      },
      options,
    );
  }

  postMerchantsMerchantIdApiCredentials(
    request: ApiCredentialsMerchantLevel.PostMerchantsMerchantIdApiCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CreateApiCredentialResponse,
    ApiCredentialsMerchantLevel.PostMerchantsMerchantIdApiCredentialsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/merchants/{merchantId}/apiCredentials"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createMerchantApiCredentialRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createApiCredentialResponseSchema },
        errorFactory: ApiCredentialsMerchantLevel.PostMerchantsMerchantIdApiCredentialsError,
      },
      options,
    );
  }
}

export namespace ApiCredentialsMerchantLevel {
  export type GetMerchantsMerchantIdApiCredentialsRequest = {
    merchantId: string;
    pageNumber?: number;
    pageSize?: number;
  };

  export class GetMerchantsMerchantIdApiCredentialsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdApiCredentialsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdApiCredentialsApiCredentialIdRequest = {
    merchantId: string;
    apiCredentialId: string;
  };

  export class GetMerchantsMerchantIdApiCredentialsApiCredentialIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdApiCredentialsApiCredentialIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdApiCredentialsApiCredentialIdRequest = {
    merchantId: string;
    apiCredentialId: string;
    body?: UpdateMerchantApiCredentialRequest;
  };

  export class PatchMerchantsMerchantIdApiCredentialsApiCredentialIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdApiCredentialsApiCredentialIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdApiCredentialsRequest = {
    merchantId: string;
    body?: CreateMerchantApiCredentialRequest;
  };

  export class PostMerchantsMerchantIdApiCredentialsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdApiCredentialsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
