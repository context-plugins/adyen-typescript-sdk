import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Delete the authorized users for a card.
   *
   * @remarks
   * Deletes the list of authorized users assigned to a card.
   *
   * @returns Successful operation
   *
   * @throws {@link
   * AuthorizedCardUsers.DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default13("/paymentInstruments/{paymentInstrumentId}/authorisedCardUsers"),
        auth: noneAuth,
        pathParams: [{ name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AuthorizedCardUsers.DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError,
      },
      options,
    );
  }

  /**
   * Get authorized users for a card.
   *
   * @remarks
   * Returns the authorized users for a card.
   *
   * @returns Successful operation
   *
   * @throws {@link
   * AuthorizedCardUsers.GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default13("/paymentInstruments/{paymentInstrumentId}/authorisedCardUsers"),
        auth: noneAuth,
        pathParams: [{ name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: authorisedCardUsersSchema },
        errorFactory: AuthorizedCardUsers.GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError,
      },
      options,
    );
  }

  /**
   * Update the authorized users for a card.
   *
   * @remarks
   * Updates the list of authorized users for a card.
   *
   * >This request replaces all existing authorized users for the card.
   *
   * @returns Successful operation
   *
   * @throws {@link
   * AuthorizedCardUsers.PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default13("/paymentInstruments/{paymentInstrumentId}/authorisedCardUsers"),
        auth: noneAuth,
        pathParams: [{ name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: authorisedCardUsersSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: AuthorizedCardUsers.PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError,
      },
      options,
    );
  }

  /**
   * Create authorized users for a card.
   *
   * @remarks
   * Assigns authorized users to a card. Users must have the **authorisedPaymentInstrumentUser**
   * capability to be able to use the card.
   *
   * @returns Successful operation
   *
   * @throws {@link
   * AuthorizedCardUsers.PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default13("/paymentInstruments/{paymentInstrumentId}/authorisedCardUsers"),
        auth: noneAuth,
        pathParams: [{ name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  export class DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError> =
      [
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

  export class GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError> =
      [
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

  export class PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError> =
      [
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

  export class PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError> =
      [
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
