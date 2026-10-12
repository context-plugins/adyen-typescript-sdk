import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Get a grant account
   *
   * @remarks
   * Returns the details of the [grant
   * account](https://docs.adyen.com/platforms/capital#grant-account).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link GrantAccounts.GetGrantAccountsIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getGrantAccountsId(
    request: GrantAccounts.GetGrantAccountsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CapitalGrantAccount, GrantAccounts.GetGrantAccountsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/grantAccounts/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: capitalGrantAccountSchema },
        errorFactory: GrantAccounts.GetGrantAccountsIdError,
      },
      options,
    );
  }

  /**
   * Get the information of your grant account
   *
   * @remarks
   * Returns the details of the specified grant account. This account tracks existing grants in your
   * marketplace or platform.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link GrantAccounts.GetGrantAccountsId1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGrantAccountsId1(
    request: GrantAccounts.GetGrantAccountsId1Request,
    options?: RequestOptions,
  ): ApiPromise<GrantAccount, GrantAccounts.GetGrantAccountsId1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default15("/grantAccounts/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
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
    /** The unique identifier of the grant account. */
    id: string;
  };

  export class GetGrantAccountsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetGrantAccountsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetGrantAccountsId1Request = {
    /** The unique identifier of the grant account. */
    id: string;
  };

  export class GetGrantAccountsId1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

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
