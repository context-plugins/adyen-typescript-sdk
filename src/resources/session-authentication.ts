import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  postAuthCertificate(
    request: SessionAuthentication.PostAuthCertificateRequest,
    options?: RequestOptions,
  ): ApiPromise<CertificateLoadingResponse, SessionAuthentication.PostAuthCertificateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default25("/auth/certificate"),
        auth: noneAuth,
        headers: [{ name: "X-API-Key", value: request.xApiKey, schema: s.optional(s.string()) }],
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

  postSessions2(
    request: SessionAuthentication.PostSessions2Request,
    options?: RequestOptions,
  ): ApiPromise<AuthenticationSessionResponse, SessionAuthentication.PostSessions2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default17("/sessions"),
        auth: noneAuth,
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
    xApiKey?: string;
    body?: CertificateLoadingRequest;
  };

  export class PostAuthCertificateError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
  > {
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

  export class PostSessions2Error extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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
