import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import { listMandatesResponseSchema, type ListMandatesResponse } from "../models/list-mandates-response.js";
import { mandateUpdateSchema, type MandateUpdate } from "../models/mandate-update.js";
import { mandate1Schema, type Mandate1 } from "../models/mandate1.js";
import type { Servers } from "../servers.js";

export class DirectDebitMandates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get a list of mandates
   *
   * @remarks
   * Returns a list of all [direct debit
   * mandates](https://docs.adyen.com/business-accounts/accept-direct-debits-uk) created for a
   * business account.
   *
   * @returns OK - The request has succeeded
   *
   * @throws {@link DirectDebitMandates.GetMandatesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMandates(
    request: DirectDebitMandates.GetMandatesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMandatesResponse, DirectDebitMandates.GetMandatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/mandates"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.optional(s.string()) },
          { name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMandatesResponseSchema },
        errorFactory: DirectDebitMandates.GetMandatesError,
      },
      options,
    );
  }

  /**
   * Get a specific mandate
   *
   * @remarks
   * Returns the details of the specified [direct debit
   * mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk).
   *
   * @returns OK - The request has succeeded
   *
   * @throws {@link DirectDebitMandates.GetMandatesMandateIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMandatesMandateId(
    request: DirectDebitMandates.GetMandatesMandateIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Mandate1, DirectDebitMandates.GetMandatesMandateIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/mandates/{mandateId}"),
        auth: noneAuth,
        pathParams: [{ name: "mandateId", value: request.mandateId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mandate1Schema },
        errorFactory: DirectDebitMandates.GetMandatesMandateIdError,
      },
      options,
    );
  }

  /**
   * Amend a mandate
   *
   * @remarks
   * Amend the specified [direct debit
   * mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk).
   *
   * @returns Accepted - The request has been accepted
   *
   * @throws {@link DirectDebitMandates.PatchMandatesMandateIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchMandatesMandateId(
    request: DirectDebitMandates.PatchMandatesMandateIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DirectDebitMandates.PatchMandatesMandateIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default13("/mandates/{mandateId}"),
        auth: noneAuth,
        pathParams: [{ name: "mandateId", value: request.mandateId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: mandateUpdateSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: DirectDebitMandates.PatchMandatesMandateIdError,
      },
      options,
    );
  }

  /**
   * Cancel a mandate
   *
   * @remarks
   * Cancel a specified [direct debit
   * mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk).
   *
   * @returns Accepted - The request has been accepted
   *
   * @throws {@link DirectDebitMandates.PostMandatesMandateIdCancelError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postMandatesMandateIdCancel(
    request: DirectDebitMandates.PostMandatesMandateIdCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DirectDebitMandates.PostMandatesMandateIdCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/mandates/{mandateId}/cancel"),
        auth: noneAuth,
        pathParams: [{ name: "mandateId", value: request.mandateId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DirectDebitMandates.PostMandatesMandateIdCancelError,
      },
      options,
    );
  }
}

export namespace DirectDebitMandates {
  export type GetMandatesRequest = {
    /** The unique identifier of the balance account linked to the payment instrument. */
    balanceAccountId?: string;
    /** The unique identifier of the payment instrument linked to the mandate. */
    paymentInstrumentId?: string;
    /** The pagination cursor returned in a previous GET `/mandates` request. */
    cursor?: string;
  };

  export class GetMandatesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetMandatesError> = [
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

  export type GetMandatesMandateIdRequest = {
    /** The unique identifier of the mandate. */
    mandateId: string;
  };

  export class GetMandatesMandateIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetMandatesMandateIdError> = [
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
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PatchMandatesMandateIdRequest = {
    /** The unique identifier of the mandate. */
    mandateId: string;
    body: MandateUpdate;
  };

  export class PatchMandatesMandateIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PatchMandatesMandateIdError> = [
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
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostMandatesMandateIdCancelRequest = {
    /** The unique identifier of the mandate. */
    mandateId: string;
  };

  export class PostMandatesMandateIdCancelError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostMandatesMandateIdCancelError> = [
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
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
