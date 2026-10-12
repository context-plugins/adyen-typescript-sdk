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

export class AllowedOriginsMerchantLevel {
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
   * AllowedOriginsMerchantLevel.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9(
          "/merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
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
          AllowedOriginsMerchantLevel.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError,
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
   * AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9(
          "/merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins",
        ),
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
        success: { kind: "json", schema: allowedOriginsResponseSchema },
        errorFactory:
          AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError,
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
   * AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9(
          "/merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
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
          AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError,
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
   * AllowedOriginsMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9(
          "/merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** Unique identifier of the API credential. */
    apiCredentialId: string;
    /** Unique identifier of the allowed origin. */
    originId: string;
  };

  export class DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }

  export type GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** Unique identifier of the API credential. */
    apiCredentialId: string;
  };

  export class GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }

  export type GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** Unique identifier of the API credential. */
    apiCredentialId: string;
    /** Unique identifier of the allowed origin. */
    originId: string;
  };

  export class GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }

  export type PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** Unique identifier of the API credential. */
    apiCredentialId: string;
    body?: AllowedOrigin;
  };

  export class PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }
}
