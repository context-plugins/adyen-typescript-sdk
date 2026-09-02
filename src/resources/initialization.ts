import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { serviceErrorSchema, type ServiceError } from "../models/service-error.js";
import {
  storeDetailAndSubmitRequestSchema,
  type StoreDetailAndSubmitRequest,
} from "../models/store-detail-and-submit-request.js";
import {
  storeDetailAndSubmitResponseSchema,
  type StoreDetailAndSubmitResponse,
} from "../models/store-detail-and-submit-response.js";
import { storeDetailRequestSchema, type StoreDetailRequest } from "../models/store-detail-request.js";
import { storeDetailResponseSchema, type StoreDetailResponse } from "../models/store-detail-response.js";
import { submitRequestSchema, type SubmitRequest } from "../models/submit-request.js";
import { submitResponseSchema, type SubmitResponse } from "../models/submit-response.js";
import type { Servers } from "../servers.js";

export class Initialization {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  postStoreDetail(
    request: Initialization.PostStoreDetailRequest,
    options?: RequestOptions,
  ): ApiPromise<StoreDetailResponse, Initialization.PostStoreDetailError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default3("/storeDetail"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => storeDetailRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storeDetailResponseSchema },
        errorFactory: Initialization.PostStoreDetailError,
      },
      options,
    );
  }

  postStoreDetailAndSubmitThirdParty(
    request: Initialization.PostStoreDetailAndSubmitThirdPartyRequest,
    options?: RequestOptions,
  ): ApiPromise<StoreDetailAndSubmitResponse, Initialization.PostStoreDetailAndSubmitThirdPartyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default3("/storeDetailAndSubmitThirdParty"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => storeDetailAndSubmitRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storeDetailAndSubmitResponseSchema },
        errorFactory: Initialization.PostStoreDetailAndSubmitThirdPartyError,
      },
      options,
    );
  }

  postSubmitThirdParty(
    request: Initialization.PostSubmitThirdPartyRequest,
    options?: RequestOptions,
  ): ApiPromise<SubmitResponse, Initialization.PostSubmitThirdPartyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default3("/submitThirdParty"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => submitRequestSchema)) },
      },
      {
        success: { kind: "json", schema: submitResponseSchema },
        errorFactory: Initialization.PostSubmitThirdPartyError,
      },
      options,
    );
  }
}

export namespace Initialization {
  export type PostStoreDetailRequest = {
    body?: StoreDetailRequest;
  };

  export class PostStoreDetailError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostStoreDetailError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostStoreDetailAndSubmitThirdPartyRequest = {
    body?: StoreDetailAndSubmitRequest;
  };

  export class PostStoreDetailAndSubmitThirdPartyError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostStoreDetailAndSubmitThirdPartyError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostSubmitThirdPartyRequest = {
    body?: SubmitRequest;
  };

  export class PostSubmitThirdPartyError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostSubmitThirdPartyError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }
}
