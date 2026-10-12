import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Delete an allowed origin
   *
   * @remarks
   * Removes the [allowed
   * origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
   * identified in the path. As soon as an allowed origin is removed, we no longer accept
   * client-side requests from that domain.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—API credentials read and write
   *
   * @returns No Content - look at the actual response code for the status of the request.
   *
   * @throws {@link
   * AllowedOriginsCompanyLevel.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9(
          "/companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
          { name: "originId", value: request.originId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Get a list of allowed origins
   *
   * @remarks
   * Returns the list of [allowed
   * origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
   * for the API credential identified in the path.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—API credentials read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9(
          "/companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins",
        ),
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
        success: { kind: "json", schema: allowedOriginsResponseSchema },
        errorFactory:
          AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError,
      },
      options,
    );
  }

  /**
   * Get an allowed origin
   *
   * @remarks
   * Returns the [allowed
   * origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
   * identified in the path.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—API credentials read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9(
          "/companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
          { name: "originId", value: request.originId, schema: s.string() },
        ],
        query: [],
        headers: [],
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

  /**
   * Create an allowed origin
   *
   * @remarks
   * Adds a new [allowed
   * origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
   * to the API credential's list of allowed origins.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—API credentials read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * AllowedOriginsCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9(
          "/companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the company account. */
    companyId: string;
    /** Unique identifier of the API credential. */
    apiCredentialId: string;
    /** Unique identifier of the allowed origin. */
    originId: string;
  };

  export class DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }

  export type GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** Unique identifier of the API credential. */
    apiCredentialId: string;
  };

  export class GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }

  export type GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** Unique identifier of the API credential. */
    apiCredentialId: string;
    /** Unique identifier of the allowed origin. */
    originId: string;
  };

  export class GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }

  export type PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** Unique identifier of the API credential. */
    apiCredentialId: string;
    body?: AllowedOrigin;
  };

  export class PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }
}
