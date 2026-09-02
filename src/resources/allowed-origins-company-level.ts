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

export class AllowedOriginsCompanyLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
    request: AllowedOriginsCompanyLevel.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    AllowedOriginsCompanyLevel.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default9(
          "/companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
          { name: "originId", value: request.originId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory:
          AllowedOriginsCompanyLevel.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError,
      },
      options,
    );
  }

  getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(
    request: AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AllowedOriginsResponse,
    AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: allowedOriginsResponseSchema },
        errorFactory:
          AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError,
      },
      options,
    );
  }

  getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
    request: AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AllowedOrigin,
    AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9(
          "/companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
          { name: "originId", value: request.originId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: allowedOriginSchema },
        errorFactory:
          AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError,
      },
      options,
    );
  }

  postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(
    request: AllowedOriginsCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AllowedOrigin,
    AllowedOriginsCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => allowedOriginSchema)) },
      },
      {
        success: { kind: "json", schema: allowedOriginSchema },
        errorFactory:
          AllowedOriginsCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError,
      },
      options,
    );
  }
}

export namespace AllowedOriginsCompanyLevel {
  export type DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest = {
    companyId: string;
    apiCredentialId: string;
    originId: string;
  };

  export class DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest = {
    companyId: string;
    apiCredentialId: string;
  };

  export class GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest = {
    companyId: string;
    apiCredentialId: string;
    originId: string;
  };

  export class GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest = {
    companyId: string;
    apiCredentialId: string;
    body?: AllowedOrigin;
  };

  export class PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
