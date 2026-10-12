import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { serviceError1Schema, type ServiceError1 } from "../models/service-error1.js";
import {
  transferInstrumentInfoSchema,
  type TransferInstrumentInfo,
} from "../models/transfer-instrument-info.js";
import { transferInstrumentSchema, type TransferInstrument } from "../models/transfer-instrument.js";
import type { Servers } from "../servers.js";

export class TransferInstruments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a transfer instrument
   *
   * @remarks
   * Deletes a transfer instrument.
   *
   * Requests to this endpoint are subject to rate limits:
   *
   * - Live environments: 700 requests per 5 seconds.
   *
   * - Test environments: 200 requests per 5 seconds.
   *
   * - Failed requests are subject to a limit of 5 failures per 10 seconds.
   *
   * @returns No Content - look at the actual response code for the status of the request.
   *
   * @throws {@link TransferInstruments.DeleteTransferInstrumentsIdError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTransferInstrumentsId(
    request: TransferInstruments.DeleteTransferInstrumentsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TransferInstruments.DeleteTransferInstrumentsIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default18("/transferInstruments/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TransferInstruments.DeleteTransferInstrumentsIdError,
      },
      options,
    );
  }

  /**
   * Get a transfer instrument
   *
   * @remarks
   * Returns the details of a transfer instrument.
   *
   * Requests to this endpoint are subject to rate limits:
   *
   * - Live environments: 700 requests per 5 seconds.
   *
   * - Test environments: 200 requests per 5 seconds.
   *
   * - Failed requests are subject to a limit of 5 failures per 10 seconds.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TransferInstruments.GetTransferInstrumentsIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTransferInstrumentsId(
    request: TransferInstruments.GetTransferInstrumentsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferInstrument, TransferInstruments.GetTransferInstrumentsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default18("/transferInstruments/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transferInstrumentSchema },
        errorFactory: TransferInstruments.GetTransferInstrumentsIdError,
      },
      options,
    );
  }

  /**
   * Update a transfer instrument
   *
   * @remarks
   * Updates a transfer instrument.
   *
   * Requests to this endpoint are subject to rate limits:
   *
   * - Live environments: 700 requests per 5 seconds.
   *
   * - Test environments: 200 requests per 5 seconds.
   *
   * - Failed requests are subject to a limit of 5 failures per 10 seconds.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TransferInstruments.PatchTransferInstrumentsIdError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchTransferInstrumentsId(
    request: TransferInstruments.PatchTransferInstrumentsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferInstrument, TransferInstruments.PatchTransferInstrumentsIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default18("/transferInstruments/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-requested-verification-code",
            value: request.xRequestedVerificationCode,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => transferInstrumentInfoSchema)),
        },
      },
      {
        success: { kind: "json", schema: transferInstrumentSchema },
        errorFactory: TransferInstruments.PatchTransferInstrumentsIdError,
      },
      options,
    );
  }

  /**
   * Create a transfer instrument
   *
   * @remarks
   * Creates a transfer instrument.
   *
   * A transfer instrument is a bank account that a legal entity owns. Adyen performs verification
   * checks on the transfer instrument as required by payment industry regulations. We inform you of
   * the verification results through webhooks or API responses.
   *
   * When the transfer instrument passes the verification checks, you can start sending funds from
   * the balance platform to the transfer instrument (such as payouts).
   *
   * Requests to this endpoint are subject to rate limits:
   *
   * - Live environments: 700 requests per 5 seconds.
   *
   * - Test environments: 200 requests per 5 seconds.
   *
   * - Failed requests are subject to a limit of 5 failures per 10 seconds.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TransferInstruments.PostTransferInstrumentsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postTransferInstruments(
    request: TransferInstruments.PostTransferInstrumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferInstrument, TransferInstruments.PostTransferInstrumentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default18("/transferInstruments"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [
          {
            name: "x-requested-verification-code",
            value: request.xRequestedVerificationCode,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => transferInstrumentInfoSchema)),
        },
      },
      {
        success: { kind: "json", schema: transferInstrumentSchema },
        errorFactory: TransferInstruments.PostTransferInstrumentsError,
      },
      options,
    );
  }
}

export namespace TransferInstruments {
  export type DeleteTransferInstrumentsIdRequest = {
    /** The unique identifier of the transfer instrument to be deleted. */
    id: string;
  };

  export class DeleteTransferInstrumentsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<DeleteTransferInstrumentsIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type GetTransferInstrumentsIdRequest = {
    /** The unique identifier of the transfer instrument. */
    id: string;
  };

  export class GetTransferInstrumentsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<GetTransferInstrumentsIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PatchTransferInstrumentsIdRequest = {
    /** The unique identifier of the transfer instrument. */
    id: string;
    /**
     * Use the requested verification code 0_0001 to resolve any suberrors associated with the
     * transfer instrument. Requested verification codes can only be used in your test environment.
     */
    xRequestedVerificationCode?: string;
    body?: TransferInstrumentInfo;
  };

  export class PatchTransferInstrumentsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PatchTransferInstrumentsIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostTransferInstrumentsRequest = {
    /**
     * Use a suberror code as your requested verification code. You can include one code at a time
     * in your request header. Requested verification codes can only be used in your test
     * environment.
     */
    xRequestedVerificationCode?: string;
    body?: TransferInstrumentInfo;
  };

  export class PostTransferInstrumentsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostTransferInstrumentsError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
