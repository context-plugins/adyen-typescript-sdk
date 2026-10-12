import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { closeAccountRequestSchema, type CloseAccountRequest } from "../models/close-account-request.js";
import { closeAccountResponseSchema, type CloseAccountResponse } from "../models/close-account-response.js";
import { createAccountRequestSchema, type CreateAccountRequest } from "../models/create-account-request.js";
import {
  createAccountResponseSchema,
  type CreateAccountResponse,
} from "../models/create-account-response.js";
import { serviceError1Schema, type ServiceError1 } from "../models/service-error1.js";
import { updateAccountRequestSchema, type UpdateAccountRequest } from "../models/update-account-request.js";
import {
  updateAccountResponseSchema,
  type UpdateAccountResponse,
} from "../models/update-account-response.js";
import type { Servers } from "../servers.js";

export class Accounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Close an account
   *
   * @remarks
   * Closes an account. If an account is closed, you cannot process transactions, pay out its funds,
   * or reopen it. If payments are made to a closed account, the payments are sent to your liable
   * account.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Accounts.PostCloseAccountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCloseAccount(
    request: Accounts.PostCloseAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<CloseAccountResponse, Accounts.PostCloseAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/closeAccount"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => closeAccountRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: closeAccountResponseSchema },
        errorFactory: Accounts.PostCloseAccountError,
      },
      options,
    );
  }

  /**
   * Create an account
   *
   * @remarks
   * Creates an account under an account holder. An account holder can have [multiple
   * accounts](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#create-additional-accounts).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Accounts.PostCreateAccountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCreateAccount(
    request: Accounts.PostCreateAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateAccountResponse, Accounts.PostCreateAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/createAccount"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createAccountRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createAccountResponseSchema },
        errorFactory: Accounts.PostCreateAccountError,
      },
      options,
    );
  }

  /**
   * Update an account
   *
   * @remarks
   * Updates the description or payout schedule of an account.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Accounts.PostUpdateAccountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postUpdateAccount(
    request: Accounts.PostUpdateAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateAccountResponse, Accounts.PostUpdateAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/updateAccount"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateAccountRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateAccountResponseSchema },
        errorFactory: Accounts.PostUpdateAccountError,
      },
      options,
    );
  }
}

export namespace Accounts {
  export type PostCloseAccountRequest = {
    body?: CloseAccountRequest;
  };

  export class PostCloseAccountError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostCloseAccountError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostCreateAccountRequest = {
    body?: CreateAccountRequest;
  };

  export class PostCreateAccountError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostCreateAccountError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostUpdateAccountRequest = {
    body?: UpdateAccountRequest;
  };

  export class PostUpdateAccountError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostUpdateAccountError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
