import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { modifyRequestSchema, type ModifyRequest } from "../models/modify-request.js";
import { modifyResponseSchema, type ModifyResponse } from "../models/modify-response.js";
import { serviceErrorSchema, type ServiceError } from "../models/service-error.js";
import type { Servers } from "../servers.js";

export class Reviewing {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  postConfirmThirdParty(
    request: Reviewing.PostConfirmThirdPartyRequest,
    options?: RequestOptions,
  ): ApiPromise<ModifyResponse, Reviewing.PostConfirmThirdPartyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default3("/confirmThirdParty"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => modifyRequestSchema)) },
      },
      {
        success: { kind: "json", schema: modifyResponseSchema },
        errorFactory: Reviewing.PostConfirmThirdPartyError,
      },
      options,
    );
  }

  postDeclineThirdParty(
    request: Reviewing.PostDeclineThirdPartyRequest,
    options?: RequestOptions,
  ): ApiPromise<ModifyResponse, Reviewing.PostDeclineThirdPartyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default3("/declineThirdParty"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => modifyRequestSchema)) },
      },
      {
        success: { kind: "json", schema: modifyResponseSchema },
        errorFactory: Reviewing.PostDeclineThirdPartyError,
      },
      options,
    );
  }
}

export namespace Reviewing {
  export type PostConfirmThirdPartyRequest = {
    body?: ModifyRequest;
  };

  export class PostConfirmThirdPartyError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostConfirmThirdPartyError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostDeclineThirdPartyRequest = {
    body?: ModifyRequest;
  };

  export class PostDeclineThirdPartyError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostDeclineThirdPartyError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }
}
