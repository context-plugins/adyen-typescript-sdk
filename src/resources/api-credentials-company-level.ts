import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { companyApiCredentialSchema, type CompanyApiCredential } from "../models/company-api-credential.js";
import {
  createCompanyApiCredentialRequestSchema,
  type CreateCompanyApiCredentialRequest,
} from "../models/create-company-api-credential-request.js";
import {
  createCompanyApiCredentialResponseSchema,
  type CreateCompanyApiCredentialResponse,
} from "../models/create-company-api-credential-response.js";
import {
  listCompanyApiCredentialsResponseSchema,
  type ListCompanyApiCredentialsResponse,
} from "../models/list-company-api-credentials-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  updateCompanyApiCredentialRequestSchema,
  type UpdateCompanyApiCredentialRequest,
} from "../models/update-company-api-credential-request.js";
import type { Servers } from "../servers.js";

export class ApiCredentialsCompanyLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getCompaniesCompanyIdApiCredentials(
    request: ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListCompanyApiCredentialsResponse,
    ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/apiCredentials"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCompanyApiCredentialsResponseSchema },
        errorFactory: ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsError,
      },
      options,
    );
  }

  getCompaniesCompanyIdApiCredentialsApiCredentialId(
    request: ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CompanyApiCredential,
    ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/apiCredentials/{apiCredentialId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyApiCredentialSchema },
        errorFactory: ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdError,
      },
      options,
    );
  }

  patchCompaniesCompanyIdApiCredentialsApiCredentialId(
    request: ApiCredentialsCompanyLevel.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CompanyApiCredential,
    ApiCredentialsCompanyLevel.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/companies/{companyId}/apiCredentials/{apiCredentialId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateCompanyApiCredentialRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: companyApiCredentialSchema },
        errorFactory: ApiCredentialsCompanyLevel.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdError,
      },
      options,
    );
  }

  postCompaniesCompanyIdApiCredentials(
    request: ApiCredentialsCompanyLevel.PostCompaniesCompanyIdApiCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CreateCompanyApiCredentialResponse,
    ApiCredentialsCompanyLevel.PostCompaniesCompanyIdApiCredentialsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/companies/{companyId}/apiCredentials"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createCompanyApiCredentialRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createCompanyApiCredentialResponseSchema },
        errorFactory: ApiCredentialsCompanyLevel.PostCompaniesCompanyIdApiCredentialsError,
      },
      options,
    );
  }
}

export namespace ApiCredentialsCompanyLevel {
  export type GetCompaniesCompanyIdApiCredentialsRequest = {
    companyId: string;
    pageNumber?: number;
    pageSize?: number;
  };

  export class GetCompaniesCompanyIdApiCredentialsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdApiCredentialsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdApiCredentialsApiCredentialIdRequest = {
    companyId: string;
    apiCredentialId: string;
  };

  export class GetCompaniesCompanyIdApiCredentialsApiCredentialIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdApiCredentialsApiCredentialIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchCompaniesCompanyIdApiCredentialsApiCredentialIdRequest = {
    companyId: string;
    apiCredentialId: string;
    body?: UpdateCompanyApiCredentialRequest;
  };

  export class PatchCompaniesCompanyIdApiCredentialsApiCredentialIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchCompaniesCompanyIdApiCredentialsApiCredentialIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdApiCredentialsRequest = {
    companyId: string;
    body?: CreateCompanyApiCredentialRequest;
  };

  export class PostCompaniesCompanyIdApiCredentialsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdApiCredentialsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
