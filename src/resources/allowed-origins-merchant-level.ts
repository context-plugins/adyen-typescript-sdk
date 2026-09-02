import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { allowedOriginSchema, type AllowedOrigin } from "../models/allowed-origin.js";
import {
  allowedOriginsResponseSchema,
  type AllowedOriginsResponse,
} from "../models/allowed-origins-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import type { Servers } from "../servers.js";

export class AllowedOriginsMerchantLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
    request: AllowedOriginsMerchantLevel.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    AllowedOriginsMerchantLevel.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default9(
          "/merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
          { name: "originId", value: request.originId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory:
          AllowedOriginsMerchantLevel.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError,
      },
      options,
    );
  }

  getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(
    request: AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AllowedOriginsResponse,
    AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9(
          "/merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: allowedOriginsResponseSchema },
        errorFactory:
          AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError,
      },
      options,
    );
  }

  getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
    request: AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AllowedOrigin,
    AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9(
          "/merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
          { name: "originId", value: request.originId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: allowedOriginSchema },
        errorFactory:
          AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError,
      },
      options,
    );
  }

  postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(
    request: AllowedOriginsMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AllowedOrigin,
    AllowedOriginsMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9(
          "/merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => allowedOriginSchema)) },
      },
      {
        success: { kind: "json", schema: allowedOriginSchema },
        errorFactory:
          AllowedOriginsMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError,
      },
      options,
    );
  }
}

export namespace AllowedOriginsMerchantLevel {
  export type DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest = {
    merchantId: string;
    apiCredentialId: string;
    originId: string;
  };

  export class DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest = {
    merchantId: string;
    apiCredentialId: string;
  };

  export class GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest = {
    merchantId: string;
    apiCredentialId: string;
    originId: string;
  };

  export class GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest = {
    merchantId: string;
    apiCredentialId: string;
    body?: AllowedOrigin;
  };

  export class PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
