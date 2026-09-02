import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { authorisedCardUsersSchema, type AuthorisedCardUsers } from "../models/authorised-card-users.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import type { Servers } from "../servers.js";

export class AuthorizedCardUsers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(
    request: AuthorizedCardUsers.DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    AuthorizedCardUsers.DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default13("/paymentInstruments/{paymentInstrumentId}/authorisedCardUsers"),
        auth: noneAuth,
        pathParams: [{ name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AuthorizedCardUsers.DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError,
      },
      options,
    );
  }

  getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(
    request: AuthorizedCardUsers.GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AuthorisedCardUsers,
    AuthorizedCardUsers.GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/paymentInstruments/{paymentInstrumentId}/authorisedCardUsers"),
        auth: noneAuth,
        pathParams: [{ name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: authorisedCardUsersSchema },
        errorFactory: AuthorizedCardUsers.GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError,
      },
      options,
    );
  }

  patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(
    request: AuthorizedCardUsers.PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    AuthorizedCardUsers.PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default13("/paymentInstruments/{paymentInstrumentId}/authorisedCardUsers"),
        auth: noneAuth,
        pathParams: [{ name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: authorisedCardUsersSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: AuthorizedCardUsers.PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError,
      },
      options,
    );
  }

  postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(
    request: AuthorizedCardUsers.PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    AuthorizedCardUsers.PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default13("/paymentInstruments/{paymentInstrumentId}/authorisedCardUsers"),
        auth: noneAuth,
        pathParams: [{ name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: authorisedCardUsersSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: AuthorizedCardUsers.PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError,
      },
      options,
    );
  }
}

export namespace AuthorizedCardUsers {
  export type DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest = {
    paymentInstrumentId: string;
  };

  export class DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError> = [
      {
        on: 401,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest = {
    paymentInstrumentId: string;
  };

  export class GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError> = [
      {
        on: 401,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 403,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 404,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest = {
    paymentInstrumentId: string;
    body: AuthorisedCardUsers;
  };

  export class PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError> = [
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
      {
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest = {
    paymentInstrumentId: string;
    body: AuthorisedCardUsers;
  };

  export class PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError> = [
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
      {
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
