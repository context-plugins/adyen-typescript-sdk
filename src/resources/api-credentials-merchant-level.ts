import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Get a list of API credentials
   *
   * @remarks
   * Returns the list of [API
   * credentials](https://docs.adyen.com/development-resources/api-credentials) for the merchant
   * account. The list is grouped into pages as defined by the query parameters.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—API credentials read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/apiCredentials"),
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
        success: { kind: "json", schema: listMerchantApiCredentialsResponseSchema },
        errorFactory: ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsError,
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
   * ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/apiCredentials/{apiCredentialId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiCredentialSchema },
        errorFactory: ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdError,
      },
      options,
    );
  }

  /**
   * Update an API credential
   *
   * @remarks
   * Changes the API credential's roles, or allowed origins. The request has the new values for the
   * fields you want to change. The response contains the full updated API credential, including the
   * new values from the request.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—API credentials read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * ApiCredentialsMerchantLevel.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/apiCredentials/{apiCredentialId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Create an API credential
   *
   * @remarks
   * Creates an [API credential](https://docs.adyen.com/development-resources/api-credentials) for
   * the company account identified in the path. In the request, you can specify the roles and
   * allowed origins for the new API credential.
   *
   * The response includes the:
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
   * key](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateApiKey).
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—API credentials read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ApiCredentialsMerchantLevel.PostMerchantsMerchantIdApiCredentialsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/apiCredentials"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The number of the page to fetch. */
    pageNumber?: number;
    /** The number of items to have on a page, maximum 100. The default is 10 items on a page. */
    pageSize?: number;
  };

  export class GetMerchantsMerchantIdApiCredentialsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdApiCredentialsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdApiCredentialsApiCredentialIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** Unique identifier of the API credential. */
    apiCredentialId: string;
  };

  export class GetMerchantsMerchantIdApiCredentialsApiCredentialIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdApiCredentialsApiCredentialIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdApiCredentialsApiCredentialIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** Unique identifier of the API credential. */
    apiCredentialId: string;
    body?: UpdateMerchantApiCredentialRequest;
  };

  export class PatchMerchantsMerchantIdApiCredentialsApiCredentialIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdApiCredentialsApiCredentialIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdApiCredentialsRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    body?: CreateMerchantApiCredentialRequest;
  };

  export class PostMerchantsMerchantIdApiCredentialsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdApiCredentialsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
