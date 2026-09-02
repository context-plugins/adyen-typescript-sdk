import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { capitalGrantAccountSchema, type CapitalGrantAccount } from "../models/capital-grant-account.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import { grantAccountSchema, type GrantAccount } from "../models/grant-account.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import type { Servers } from "../servers.js";

export class GrantAccounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getGrantAccountsId(
    request: GrantAccounts.GetGrantAccountsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CapitalGrantAccount, GrantAccounts.GetGrantAccountsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/grantAccounts/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: capitalGrantAccountSchema },
        errorFactory: GrantAccounts.GetGrantAccountsIdError,
      },
      options,
    );
  }

  getGrantAccountsId1(
    request: GrantAccounts.GetGrantAccountsId1Request,
    options?: RequestOptions,
  ): ApiPromise<GrantAccount, GrantAccounts.GetGrantAccountsId1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default15("/grantAccounts/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: grantAccountSchema },
        errorFactory: GrantAccounts.GetGrantAccountsId1Error,
      },
      options,
    );
  }
}

export namespace GrantAccounts {
  export type GetGrantAccountsIdRequest = {
    id: string;
  };

  export class GetGrantAccountsIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetGrantAccountsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetGrantAccountsId1Request = {
    id: string;
  };

  export class GetGrantAccountsId1Error extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<GetGrantAccountsId1Error> = [
      {
        on: 404,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
