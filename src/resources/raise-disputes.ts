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
import { disputeRequestSchema, type DisputeRequest } from "../models/dispute-request.js";
import { disputeResponseSchema, type DisputeResponse } from "../models/dispute-response.js";
import {
  patchableDisputeRequestSchema,
  type PatchableDisputeRequest,
} from "../models/patchable-dispute-request.js";
import type { Servers } from "../servers.js";

export class RaiseDisputes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get a list of raised disputes
   *
   * @remarks
   * Returns a list of raised disputes that match the query parameters.
   *
   * This endpoint supports cursor-based pagination. The response returns the first page of results,
   * and returns links to the next page when applicable. You can use the links to page through the
   * results. The response also returns links to the previous page when applicable.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link RaiseDisputes.GetDisputesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDisputes(
    request: RaiseDisputes.GetDisputesRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputeResponse[][], RaiseDisputes.GetDisputesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default23("/disputes"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "paymentInstrument", value: request.paymentInstrument, schema: s.optional(s.string()) },
          { name: "createdSince", value: request.createdSince, schema: s.optional(s.string()) },
          { name: "createdUntil", value: request.createdUntil, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.array(s.lazy(() => disputeResponseSchema))) },
        errorFactory: RaiseDisputes.GetDisputesError,
      },
      options,
    );
  }

  /**
   * Get dispute by ID
   *
   * @remarks
   * Get a raised dispute by ID.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link RaiseDisputes.GetDisputesIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDisputesId(
    request: RaiseDisputes.GetDisputesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputeResponse, RaiseDisputes.GetDisputesIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default23("/disputes/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disputeResponseSchema },
        errorFactory: RaiseDisputes.GetDisputesIdError,
      },
      options,
    );
  }

  /**
   * Update a raised dispute
   *
   * @remarks
   * Update information related to a raised dispute, or change a dispute's status from **draft** to
   * **submitted** or **closed**.
   *
   * **Note:** Changing the status of a dispute to **submitted** or **closed** is a final action.
   * You cannot make updates to a **submitted** or **closed** dispute. Make sure to upload all
   * supporting attachments using the `POST /disputes/{id}/attachments` endpoint before you submit a
   * dispute. When you update a dispute to **submitted**, Adyen sends the raised dispute to the card
   * scheme for review and acquirer defense. When you update a raised dispute to **closed**, Adyen
   * closes the dispute, and the dispute is no longer eligible for review by the card scheme.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link RaiseDisputes.PatchDisputesIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchDisputesId(
    request: RaiseDisputes.PatchDisputesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputeResponse, RaiseDisputes.PatchDisputesIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default23("/disputes/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => patchableDisputeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: disputeResponseSchema },
        errorFactory: RaiseDisputes.PatchDisputesIdError,
      },
      options,
    );
  }

  /**
   * Raise a dispute
   *
   * @remarks
   * Raise a dispute for an underlying transaction, providing a dispute type and the amount you want
   * to dispute.
   *
   * Raising a dispute returns a dispute ID, which you can use to update details about the dispute,
   * provide supporting documentation, close the dispute, or submit the dispute for a chargeback.
   * You can also use the dispute ID to view the status of the dispute.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link RaiseDisputes.PostDisputesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDisputes(
    request: RaiseDisputes.PostDisputesRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputeResponse, RaiseDisputes.PostDisputesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default23("/disputes"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: disputeRequestSchema },
      },
      {
        success: { kind: "json", schema: disputeResponseSchema },
        errorFactory: RaiseDisputes.PostDisputesError,
      },
      options,
    );
  }
}

export namespace RaiseDisputes {
  export type GetDisputesRequest = {
    /**
     * The current status of the dispute.
     *
     * Possible values: **draft**, **submitted**, **closed**, **won**, **chargeback**,
     * **secondPresentment**.
     */
    status?: string;
    /** The unique identifier of the payment instrument. */
    paymentInstrument?: string;
    /**
     * Only include disputes that have been created on or after this point in time. The value must
     * be in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601\) format. For example,
     * 2021-05-30T15:07:40Z.
     */
    createdSince?: string;
    /**
     * Only include disputes that have been created on or before this point in time. The value must
     * be in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601\) format. For example,
     * **2021-05-30T15:07:40Z**.
     */
    createdUntil?: string;
    /** The number of items that you want to skip. */
    offset?: string;
    /**
     * The number of items returned per page, maximum of 500 items. By default, the response returns
     * 100 items per page.
     */
    limit?: string;
  };

  export class GetDisputesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetDisputesError> = [
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
    ];
  }

  export type GetDisputesIdRequest = {
    /** The unique identifier of the raised dispute. */
    id: string;
  };

  export class GetDisputesIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetDisputesIdError> = [
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
    ];
  }

  export type PatchDisputesIdRequest = {
    /** The unique identifier of the raised dispute. */
    id: string;
    body?: PatchableDisputeRequest;
  };

  export class PatchDisputesIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PatchDisputesIdError> = [
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
    ];
  }

  export type PostDisputesRequest = {
    body: DisputeRequest;
  };

  export class PostDisputesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostDisputesError> = [
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
    ];
  }
}
