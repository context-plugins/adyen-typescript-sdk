import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import { idealAuthLinkRequestSchema, type IdealAuthLinkRequest } from "../models/ideal-auth-link-request.js";
import {
  idealAuthLinkResponseSchema,
  type IdealAuthLinkResponse,
} from "../models/ideal-auth-link-response.js";
import {
  idealAuthenticateRequestSchema,
  type IdealAuthenticateRequest,
} from "../models/ideal-authenticate-request.js";
import {
  idealAuthenticateResponseSchema,
  type IdealAuthenticateResponse,
} from "../models/ideal-authenticate-response.js";
import {
  profileRegistrationRequestSchema,
  type ProfileRegistrationRequest,
} from "../models/profile-registration-request.js";
import {
  profileRegistrationResponseSchema,
  type ProfileRegistrationResponse,
} from "../models/profile-registration-response.js";
import type { Servers } from "../servers.js";

export class IDealProfiles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Manage an iDEAL profile
   *
   * @remarks
   * Manage an already registered iDEAL profile. Generates a redirection URL to manage the iDEAL
   * profile linked to the account holder from the request.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link IDealProfiles.PostIdealProfileAuthLinkError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postIdealProfileAuthLink(
    request: IDealProfiles.PostIdealProfileAuthLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<IdealAuthLinkResponse, IDealProfiles.PostIdealProfileAuthLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default20("/ideal/profile/auth-link"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: idealAuthLinkRequestSchema },
      },
      {
        success: { kind: "json", schema: idealAuthLinkResponseSchema },
        errorFactory: IDealProfiles.PostIdealProfileAuthLinkError,
      },
      options,
    );
  }

  /**
   * Authenticate iDEAL profile
   *
   * @remarks
   * Generates an redirection URL to finish the authentication flow when requested by iDEAL. Before
   * calling this endpoint, make sure that your user has completed multi-factor authentication.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link IDealProfiles.PostIdealProfileAuthenticateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postIdealProfileAuthenticate(
    request: IDealProfiles.PostIdealProfileAuthenticateRequest,
    options?: RequestOptions,
  ): ApiPromise<IdealAuthenticateResponse, IDealProfiles.PostIdealProfileAuthenticateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default20("/ideal/profile/authenticate"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: idealAuthenticateRequestSchema },
      },
      {
        success: { kind: "json", schema: idealAuthenticateResponseSchema },
        errorFactory: IDealProfiles.PostIdealProfileAuthenticateError,
      },
      options,
    );
  }

  /**
   * Register an iDEAL profile
   *
   * @remarks
   * Register a new iDEAL profile. The profile is linked to the account holder and payment
   * instruments included in the request. The user must be redirected to the URL in the response to
   * finish their IDEAL profile registration.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link IDealProfiles.PostIdealProfileRegisterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postIdealProfileRegister(
    request: IDealProfiles.PostIdealProfileRegisterRequest,
    options?: RequestOptions,
  ): ApiPromise<ProfileRegistrationResponse, IDealProfiles.PostIdealProfileRegisterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default20("/ideal/profile/register"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: profileRegistrationRequestSchema },
      },
      {
        success: { kind: "json", schema: profileRegistrationResponseSchema },
        errorFactory: IDealProfiles.PostIdealProfileRegisterError,
      },
      options,
    );
  }
}

export namespace IDealProfiles {
  export type PostIdealProfileAuthLinkRequest = {
    body: IdealAuthLinkRequest;
  };

  export class PostIdealProfileAuthLinkError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostIdealProfileAuthLinkError> = [
      {
        on: 400,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostIdealProfileAuthenticateRequest = {
    body: IdealAuthenticateRequest;
  };

  export class PostIdealProfileAuthenticateError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostIdealProfileAuthenticateError> = [
      {
        on: 400,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostIdealProfileRegisterRequest = {
    body: ProfileRegistrationRequest;
  };

  export class PostIdealProfileRegisterError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostIdealProfileRegisterError> = [
      {
        on: 400,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
