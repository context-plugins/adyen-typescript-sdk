import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Get a list of API credentials
   *
   * @remarks
   * Returns the list of [API
   * credentials](https://docs.adyen.com/development-resources/api-credentials) for the company
   * account. The list is grouped into pages as defined by the query parameters.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—API credentials read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/companies/{companyId}/apiCredentials"),
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
        success: { kind: "json", schema: listCompanyApiCredentialsResponseSchema },
        errorFactory: ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsError,
      },
      options,
    );
  }

  /**
   * Get an API credential
   *
   * @remarks
   * Returns the [API credential](https://docs.adyen.com/development-resources/api-credentials)
   * identified in the path.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—API credentials read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/companies/{companyId}/apiCredentials/{apiCredentialId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyApiCredentialSchema },
        errorFactory: ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdError,
      },
      options,
    );
  }

  /**
   * Update an API credential.
   *
   * @remarks
   * Changes the API credential's roles, merchant account access, or allowed origins. The request
   * has the new values for the fields you want to change. The response contains the full updated
   * API credential, including the new values from the request.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—API credentials read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * ApiCredentialsCompanyLevel.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/companies/{companyId}/apiCredentials/{apiCredentialId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Create an API credential.
   *
   * @remarks
   * Creates an [API credential](https://docs.adyen.com/development-resources/api-credentials) for
   * the company account identified in the path. In the request, you can specify which merchant
   * accounts the new API credential will have access to, as well as its roles and allowed origins.
   *
   * The response includes several types of authentication details:
   * * [API
   *   key](https://docs.adyen.com/development-resources/api-authentication#api-key-authentication):
   *   used for API request authentication.
   * * [Client
   *   key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works):
   *   public key used for client-side authentication.
   * * [Username and
   *   password](https://docs.adyen.com/development-resources/api-authentication#using-basic-authentication):
   *   used for basic authentication.
   *
   * > Make sure you store the API key securely in your system. You won't be able to retrieve it
   * later.
   *
   * If your API key is lost or compromised, you need to [generate a new API
   * key](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/apiCredentials/{apiCredentialId}/generateApiKey).
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—API credentials read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ApiCredentialsCompanyLevel.PostCompaniesCompanyIdApiCredentialsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/companies/{companyId}/apiCredentials"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the company account. */
    companyId: string;
    /** The number of the page to fetch. */
    pageNumber?: number;
    /** The number of items to have on a page, maximum 100. The default is 10 items on a page. */
    pageSize?: number;
  };

  export class GetCompaniesCompanyIdApiCredentialsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdApiCredentialsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdApiCredentialsApiCredentialIdRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** Unique identifier of the API credential. */
    apiCredentialId: string;
  };

  export class GetCompaniesCompanyIdApiCredentialsApiCredentialIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdApiCredentialsApiCredentialIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchCompaniesCompanyIdApiCredentialsApiCredentialIdRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** Unique identifier of the API credential. */
    apiCredentialId: string;
    body?: UpdateCompanyApiCredentialRequest;
  };

  export class PatchCompaniesCompanyIdApiCredentialsApiCredentialIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchCompaniesCompanyIdApiCredentialsApiCredentialIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdApiCredentialsRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    body?: CreateCompanyApiCredentialRequest;
  };

  export class PostCompaniesCompanyIdApiCredentialsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdApiCredentialsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
