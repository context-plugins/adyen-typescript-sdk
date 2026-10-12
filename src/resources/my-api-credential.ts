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

  /**
   * Remove allowed origin
   *
   * @remarks
   * Removes the [allowed
   * origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
   * specified in the path. The API key from the request is used to identify the [API
   * credential](https://docs.adyen.com/development-resources/api-credentials).
   *
   * You can make this request with any of the Management API roles.
   *
   * @returns No Content - look at the actual response code for the status of the request.
   *
   * @throws {@link MyApiCredential.DeleteMeAllowedOriginsOriginIdError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMeAllowedOriginsOriginId(
    request: MyApiCredential.DeleteMeAllowedOriginsOriginIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MyApiCredential.DeleteMeAllowedOriginsOriginIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default9("/me/allowedOrigins/{originId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "originId", value: request.originId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MyApiCredential.DeleteMeAllowedOriginsOriginIdError,
      },
      options,
    );
  }

  /**
   * Get API credential details
   *
   * @remarks
   * Returns your [API credential](https://docs.adyen.com/development-resources/api-credentials)
   * details based on the API Key you used in the request.
   *
   * You can make this request with any of the Management API roles.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link MyApiCredential.GetMeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMe(options?: RequestOptions): ApiPromise<MeApiCredential, MyApiCredential.GetMeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/me"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: meApiCredentialSchema },
        errorFactory: MyApiCredential.GetMeError,
      },
      options,
    );
  }

  /**
   * Get allowed origins
   *
   * @remarks
   * Returns the list of [allowed
   * origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
   * of your [API credential](https://docs.adyen.com/development-resources/api-credentials) based on
   * the API key you used in the request.
   *
   * You can make this request with any of the Management API roles.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link MyApiCredential.GetMeAllowedOriginsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMeAllowedOrigins(
    options?: RequestOptions,
  ): ApiPromise<AllowedOriginsResponse, MyApiCredential.GetMeAllowedOriginsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/me/allowedOrigins"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: allowedOriginsResponseSchema },
        errorFactory: MyApiCredential.GetMeAllowedOriginsError,
      },
      options,
    );
  }

  /**
   * Get allowed origin details
   *
   * @remarks
   * Returns the details of the [allowed
   * origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
   * specified in the path. The API key from the request is used to identify the [API
   * credential](https://docs.adyen.com/development-resources/api-credentials).
   *
   * You can make this request with any of the Management API roles.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link MyApiCredential.GetMeAllowedOriginsOriginIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMeAllowedOriginsOriginId(
    request: MyApiCredential.GetMeAllowedOriginsOriginIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AllowedOrigin, MyApiCredential.GetMeAllowedOriginsOriginIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/me/allowedOrigins/{originId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "originId", value: request.originId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: allowedOriginSchema },
        errorFactory: MyApiCredential.GetMeAllowedOriginsOriginIdError,
      },
      options,
    );
  }

  /**
   * Add allowed origin
   *
   * @remarks
   * Adds an allowed origin to the list of [allowed
   * origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
   * of your API credential. The API key from the request is used to identify the [API
   * credential](https://docs.adyen.com/development-resources/api-credentials).
   *
   * You can make this request with any of the Management API roles.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link MyApiCredential.PostMeAllowedOriginsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postMeAllowedOrigins(
    request: MyApiCredential.PostMeAllowedOriginsRequest,
    options?: RequestOptions,
  ): ApiPromise<AllowedOrigin, MyApiCredential.PostMeAllowedOriginsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/me/allowedOrigins"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Generate a client key
   *
   * @remarks
   * Generates a new [client
   * key](https://docs.adyen.com/development-resources/client-side-authentication/) used to
   * authenticate requests from your payment environment. You can use the new client key a few
   * minutes after generating it. The old client key stops working 24 hours after generating a new
   * one.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—API credentials read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link MyApiCredential.PostMeGenerateClientKeyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postMeGenerateClientKey(
    options?: RequestOptions,
  ): ApiPromise<GenerateClientKeyResponse, MyApiCredential.PostMeGenerateClientKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/me/generateClientKey"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** Unique identifier of the allowed origin. */
    originId: string;
  };

  export class DeleteMeAllowedOriginsOriginIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<DeleteMeAllowedOriginsOriginIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export class GetMeError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMeError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export class GetMeAllowedOriginsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMeAllowedOriginsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMeAllowedOriginsOriginIdRequest = {
    /** Unique identifier of the allowed origin. */
    originId: string;
  };

  export class GetMeAllowedOriginsOriginIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

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

  export class PostMeAllowedOriginsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMeAllowedOriginsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export class PostMeGenerateClientKeyError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMeGenerateClientKeyError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
