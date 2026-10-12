import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  approveAssociationRequestSchema,
  type ApproveAssociationRequest,
} from "../models/approve-association-request.js";
import {
  approveAssociationResponseSchema,
  type ApproveAssociationResponse,
} from "../models/approve-association-response.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import {
  listAssociationsResponseSchema,
  type ListAssociationsResponse,
} from "../models/list-associations-response.js";
import {
  removeAssociationRequestSchema,
  type RemoveAssociationRequest,
} from "../models/remove-association-request.js";
import { scaEntityTypeSchema, type ScaEntityType } from "../models/sca-entity-type.js";
import type { Servers } from "../servers.js";

export class ScaAssociationManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Delete association to devices
   *
   * @remarks
   * Deletes one or more SCA associations for a device.
   *
   * @returns No Content - Successful association deletion.
   *
   * @throws {@link ScaAssociationManagement.DeleteScaAssociationsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteScaAssociations(
    request: ScaAssociationManagement.DeleteScaAssociationsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ScaAssociationManagement.DeleteScaAssociationsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default13("/scaAssociations"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "WWW-Authenticate", value: request.wwwAuthenticate, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => removeAssociationRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ScaAssociationManagement.DeleteScaAssociationsError,
      },
      options,
    );
  }

  /**
   * Get a list of devices associated with an entity
   *
   * @remarks
   * Returns a paginated list of the SCA devices associated with a specific entity.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link ScaAssociationManagement.GetScaAssociationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScaAssociations(
    request: ScaAssociationManagement.GetScaAssociationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAssociationsResponse, ScaAssociationManagement.GetScaAssociationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/scaAssociations"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "entityType", value: request.entityType, schema: scaEntityTypeSchema },
          { name: "entityId", value: request.entityId, schema: s.string() },
          { name: "pageSize", value: request.pageSize, schema: s.int() },
          { name: "pageNumber", value: request.pageNumber, schema: s.int() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAssociationsResponseSchema },
        errorFactory: ScaAssociationManagement.GetScaAssociationsError,
      },
      options,
    );
  }

  /**
   * Approve a pending approval association
   *
   * @remarks
   * Approves a previously created association that is in a pending state.
   *
   * @returns OK - Successful approval
   *
   * @throws {@link ScaAssociationManagement.PatchScaAssociationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchScaAssociations(
    request: ScaAssociationManagement.PatchScaAssociationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApproveAssociationResponse, ScaAssociationManagement.PatchScaAssociationsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default13("/scaAssociations"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "WWW-Authenticate", value: request.wwwAuthenticate, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => approveAssociationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: approveAssociationResponseSchema },
        errorFactory: ScaAssociationManagement.PatchScaAssociationsError,
      },
      options,
    );
  }
}

export namespace ScaAssociationManagement {
  export type DeleteScaAssociationsRequest = {
    /** The header for authenticating through SCA. */
    wwwAuthenticate: string;
    body?: RemoveAssociationRequest;
  };

  export class DeleteScaAssociationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<DeleteScaAssociationsError> = [
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
        on: 500,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type GetScaAssociationsRequest = {
    /**
     * The type of entity you want to retrieve a list of associations for.
     *
     * Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**.
     */
    entityType: ScaEntityType;
    /** The unique identifier of the entity. */
    entityId: string;
    /**
     * The number of items to have on a page.
     *
     * Default: **5**.
     */
    pageSize: number;
    /**
     * The index of the page to retrieve. The index of the first page is **0** (zero).
     *
     * Default: **0**.
     */
    pageNumber: number;
  };

  export class GetScaAssociationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetScaAssociationsError> = [
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
        on: 500,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PatchScaAssociationsRequest = {
    /** The header for authenticating through SCA. */
    wwwAuthenticate: string;
    body?: ApproveAssociationRequest;
  };

  export class PatchScaAssociationsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PatchScaAssociationsError> = [
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
        on: 500,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
