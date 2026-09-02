import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { capitalGrantInfoSchema, type CapitalGrantInfo } from "../models/capital-grant-info.js";
import { capitalGrantSchema, type CapitalGrant } from "../models/capital-grant.js";
import { capitalGrantsSchema, type CapitalGrants } from "../models/capital-grants.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import type { Servers } from "../servers.js";

export class Capital {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getGrants(
    request: Capital.GetGrantsRequest,
    options?: RequestOptions,
  ): ApiPromise<CapitalGrants, Capital.GetGrantsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default14("/grants"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        query: [
          {
            name: "counterpartyAccountHolderId",
            value: request.counterpartyAccountHolderId,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: capitalGrantsSchema },
        errorFactory: Capital.GetGrantsError,
      },
      options,
    );
  }

  getGrantsId(
    request: Capital.GetGrantsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CapitalGrant, Capital.GetGrantsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default14("/grants/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: capitalGrantSchema },
        errorFactory: Capital.GetGrantsIdError,
      },
      options,
    );
  }

  postGrants(
    request: Capital.PostGrantsRequest,
    options?: RequestOptions,
  ): ApiPromise<CapitalGrant, Capital.PostGrantsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default14("/grants"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => capitalGrantInfoSchema)) },
      },
      {
        success: { kind: "json", schema: capitalGrantSchema },
        errorFactory: Capital.PostGrantsError,
      },
      options,
    );
  }
}

export namespace Capital {
  export type GetGrantsRequest = {
    counterpartyAccountHolderId?: string;
  };

  export class GetGrantsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
    | Declared<"restServiceError6", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetGrantsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 404, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError6", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetGrantsIdRequest = {
    id: string;
  };

  export class GetGrantsIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
    | Declared<"restServiceError6", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetGrantsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 404, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError6", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostGrantsRequest = {
    idempotencyKey?: string;
    body?: CapitalGrantInfo;
  };

  export class PostGrantsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
    | Declared<"restServiceError6", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostGrantsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 404, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError6", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
