import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  authenticationSessionRequestSchema,
  type AuthenticationSessionRequest,
} from "../models/authentication-session-request.js";
import {
  authenticationSessionResponseSchema,
  type AuthenticationSessionResponse,
} from "../models/authentication-session-response.js";
import {
  certificateLoadingRequestSchema,
  type CertificateLoadingRequest,
} from "../models/certificate-loading-request.js";
import {
  certificateLoadingResponseSchema,
  type CertificateLoadingResponse,
} from "../models/certificate-loading-response.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import type { Servers } from "../servers.js";

export class SessionAuthentication {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a communication session
   *
   * @remarks
   * Establishes a secure communication session between the Mobile SDK and the Adyen payments
   * platform, through mutual authentication. The request sends a setup token that identifies the
   * SDK and the device. The response returns a session token that the SDK can use to authenticate
   * responses received from the Adyen payments platform.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link SessionAuthentication.PostAuthCertificateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postAuthCertificate(
    request: SessionAuthentication.PostAuthCertificateRequest,
    options?: RequestOptions,
  ): ApiPromise<CertificateLoadingResponse, SessionAuthentication.PostAuthCertificateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default25("/auth/certificate"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-API-Key", value: request.xApiKey, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => certificateLoadingRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: certificateLoadingResponseSchema },
        errorFactory: SessionAuthentication.PostAuthCertificateError,
      },
      options,
    );
  }

  /**
   * Create a session token
   *
   * @remarks
   * Creates a session token that is required to integrate
   * [components](https://docs.adyen.com/platforms/components-overview).
   *
   * The response contains encrypted session data. The front end then uses the session data to make
   * the required server-side calls for the component.
   *
   * To create a token, you must meet specific requirements. These requirements vary depending on
   * the type of component. For more information, see the documentation for
   * [Onboarding](https://docs.adyen.com/platforms/onboard-users/components) and [Platform
   * Experience](https://docs.adyen.com/platforms/build-user-dashboards) components.
   *
   * @returns Successful operation
   *
   * @throws {@link SessionAuthentication.PostSessions2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postSessions2(
    request: SessionAuthentication.PostSessions2Request,
    options?: RequestOptions,
  ): ApiPromise<AuthenticationSessionResponse, SessionAuthentication.PostSessions2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default17("/sessions"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: authenticationSessionRequestSchema },
      },
      {
        success: { kind: "json", schema: authenticationSessionResponseSchema },
        errorFactory: SessionAuthentication.PostSessions2Error,
      },
      options,
    );
  }
}

export namespace SessionAuthentication {
  export type PostAuthCertificateRequest = {
    /** The API key to authenticate API requests. */
    xApiKey?: string;
    body?: CertificateLoadingRequest;
  };

  export class PostAuthCertificateError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostAuthCertificateError> = [
      {
        on: 400,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 401,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostSessions2Request = {
    body: AuthenticationSessionRequest;
  };

  export class PostSessions2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostSessions2Error> = [
      {
        on: 400,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 401,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
