import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  postIdealProfileAuthLink(
    request: IDealProfiles.PostIdealProfileAuthLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<IdealAuthLinkResponse, IDealProfiles.PostIdealProfileAuthLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default20("/ideal/profile/auth-link"),
        auth: noneAuth,
        body: { kind: "json", value: request.body, schema: idealAuthLinkRequestSchema },
      },
      {
        success: { kind: "json", schema: idealAuthLinkResponseSchema },
        errorFactory: IDealProfiles.PostIdealProfileAuthLinkError,
      },
      options,
    );
  }

  postIdealProfileAuthenticate(
    request: IDealProfiles.PostIdealProfileAuthenticateRequest,
    options?: RequestOptions,
  ): ApiPromise<IdealAuthenticateResponse, IDealProfiles.PostIdealProfileAuthenticateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default20("/ideal/profile/authenticate"),
        auth: noneAuth,
        body: { kind: "json", value: request.body, schema: idealAuthenticateRequestSchema },
      },
      {
        success: { kind: "json", schema: idealAuthenticateResponseSchema },
        errorFactory: IDealProfiles.PostIdealProfileAuthenticateError,
      },
      options,
    );
  }

  postIdealProfileRegister(
    request: IDealProfiles.PostIdealProfileRegisterRequest,
    options?: RequestOptions,
  ): ApiPromise<ProfileRegistrationResponse, IDealProfiles.PostIdealProfileRegisterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default20("/ideal/profile/register"),
        auth: noneAuth,
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

  export class PostIdealProfileAuthLinkError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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

  export class PostIdealProfileAuthenticateError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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

  export class PostIdealProfileRegisterError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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
