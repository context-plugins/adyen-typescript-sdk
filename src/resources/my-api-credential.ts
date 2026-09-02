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
import {
  createAllowedOriginRequestSchema,
  type CreateAllowedOriginRequest,
} from "../models/create-allowed-origin-request.js";
import {
  generateClientKeyResponseSchema,
  type GenerateClientKeyResponse,
} from "../models/generate-client-key-response.js";
import { meApiCredentialSchema, type MeApiCredential } from "../models/me-api-credential.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import type { Servers } from "../servers.js";

export class MyApiCredential {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteMeAllowedOriginsOriginId(
    request: MyApiCredential.DeleteMeAllowedOriginsOriginIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MyApiCredential.DeleteMeAllowedOriginsOriginIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default9("/me/allowedOrigins/{originId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "originId", value: request.originId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MyApiCredential.DeleteMeAllowedOriginsOriginIdError,
      },
      options,
    );
  }

  getMe(options?: RequestOptions): ApiPromise<MeApiCredential, MyApiCredential.GetMeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/me"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: meApiCredentialSchema },
        errorFactory: MyApiCredential.GetMeError,
      },
      options,
    );
  }

  getMeAllowedOrigins(
    options?: RequestOptions,
  ): ApiPromise<AllowedOriginsResponse, MyApiCredential.GetMeAllowedOriginsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/me/allowedOrigins"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: allowedOriginsResponseSchema },
        errorFactory: MyApiCredential.GetMeAllowedOriginsError,
      },
      options,
    );
  }

  getMeAllowedOriginsOriginId(
    request: MyApiCredential.GetMeAllowedOriginsOriginIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AllowedOrigin, MyApiCredential.GetMeAllowedOriginsOriginIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/me/allowedOrigins/{originId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "originId", value: request.originId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: allowedOriginSchema },
        errorFactory: MyApiCredential.GetMeAllowedOriginsOriginIdError,
      },
      options,
    );
  }

  postMeAllowedOrigins(
    request: MyApiCredential.PostMeAllowedOriginsRequest,
    options?: RequestOptions,
  ): ApiPromise<AllowedOrigin, MyApiCredential.PostMeAllowedOriginsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/me/allowedOrigins"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createAllowedOriginRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: allowedOriginSchema },
        errorFactory: MyApiCredential.PostMeAllowedOriginsError,
      },
      options,
    );
  }

  postMeGenerateClientKey(
    options?: RequestOptions,
  ): ApiPromise<GenerateClientKeyResponse, MyApiCredential.PostMeGenerateClientKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/me/generateClientKey"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: generateClientKeyResponseSchema },
        errorFactory: MyApiCredential.PostMeGenerateClientKeyError,
      },
      options,
    );
  }
}

export namespace MyApiCredential {
  export type DeleteMeAllowedOriginsOriginIdRequest = {
    originId: string;
  };

  export class DeleteMeAllowedOriginsOriginIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<DeleteMeAllowedOriginsOriginIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export class GetMeError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMeError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export class GetMeAllowedOriginsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMeAllowedOriginsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMeAllowedOriginsOriginIdRequest = {
    originId: string;
  };

  export class GetMeAllowedOriginsOriginIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMeAllowedOriginsOriginIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMeAllowedOriginsRequest = {
    body?: CreateAllowedOriginRequest;
  };

  export class PostMeAllowedOriginsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMeAllowedOriginsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export class PostMeGenerateClientKeyError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMeGenerateClientKeyError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
