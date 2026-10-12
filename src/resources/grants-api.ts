import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { capitalGrantInfoSchema, type CapitalGrantInfo } from "../models/capital-grant-info.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import {
  disbursementInfoUpdateSchema,
  type DisbursementInfoUpdate,
} from "../models/disbursement-info-update.js";
import { disbursementSchema, type Disbursement } from "../models/disbursement.js";
import { disbursementsSchema, type Disbursements } from "../models/disbursements.js";
import { grantSchema, type Grant } from "../models/grant.js";
import { grantsSchema, type Grants } from "../models/grants.js";
import type { Servers } from "../servers.js";

export class GrantsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get the details of a grant
   *
   * @remarks
   * Returns the details of the specified grant.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link GrantsApi.GetGrantsGrantIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGrantsGrantId(
    request: GrantsApi.GetGrantsGrantIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Grant, GrantsApi.GetGrantsGrantIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default15("/grants/{grantId}"),
        auth: noneAuth,
        pathParams: [{ name: "grantId", value: request.grantId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: grantSchema },
        errorFactory: GrantsApi.GetGrantsGrantIdError,
      },
      options,
    );
  }

  /**
   * Get all the disbursements of a grant
   *
   * @remarks
   * Returns the disbursements of a specified grant.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link GrantsApi.GetGrantsGrantIdDisbursementsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGrantsGrantIdDisbursements(
    request: GrantsApi.GetGrantsGrantIdDisbursementsRequest,
    options?: RequestOptions,
  ): ApiPromise<Disbursements, GrantsApi.GetGrantsGrantIdDisbursementsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default15("/grants/{grantId}/disbursements"),
        auth: noneAuth,
        pathParams: [{ name: "grantId", value: request.grantId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disbursementsSchema },
        errorFactory: GrantsApi.GetGrantsGrantIdDisbursementsError,
      },
      options,
    );
  }

  /**
   * Get disbursement details
   *
   * @remarks
   * Returns the details of a disbursement specified in the path.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link GrantsApi.GetGrantsGrantIdDisbursementsDisbursementIdError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGrantsGrantIdDisbursementsDisbursementId(
    request: GrantsApi.GetGrantsGrantIdDisbursementsDisbursementIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Disbursement, GrantsApi.GetGrantsGrantIdDisbursementsDisbursementIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default15("/grants/{grantId}/disbursements/{disbursementId}"),
        auth: noneAuth,
        pathParams: [
          { name: "grantId", value: request.grantId, schema: s.string() },
          { name: "disbursementId", value: request.disbursementId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disbursementSchema },
        errorFactory: GrantsApi.GetGrantsGrantIdDisbursementsDisbursementIdError,
      },
      options,
    );
  }

  /**
   * Get all the grants of an account holder
   *
   * @remarks
   * Returns a list of all the grants of a specific account holder.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link GrantsApi.GetGrants2Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGrants2(
    request: GrantsApi.GetGrants2Request,
    options?: RequestOptions,
  ): ApiPromise<Grants, GrantsApi.GetGrants2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default15("/grants"),
        auth: noneAuth,
        pathParams: [],
        query: [
          {
            name: "counterpartyAccountHolderId",
            value: request.counterpartyAccountHolderId,
            schema: s.string(),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: grantsSchema },
        errorFactory: GrantsApi.GetGrants2Error,
      },
      options,
    );
  }

  /**
   * Update the repayment configuration of a disbursement
   *
   * @remarks
   * Update the percentage of your user's net income that is deducted for repaying the grant.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link GrantsApi.PatchGrantsGrantIdDisbursementsDisbursementIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchGrantsGrantIdDisbursementsDisbursementId(
    request: GrantsApi.PatchGrantsGrantIdDisbursementsDisbursementIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Disbursement, GrantsApi.PatchGrantsGrantIdDisbursementsDisbursementIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default15("/grants/{grantId}/disbursements/{disbursementId}"),
        auth: noneAuth,
        pathParams: [
          { name: "grantId", value: request.grantId, schema: s.string() },
          { name: "disbursementId", value: request.disbursementId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: disbursementInfoUpdateSchema },
      },
      {
        success: { kind: "json", schema: disbursementSchema },
        errorFactory: GrantsApi.PatchGrantsGrantIdDisbursementsDisbursementIdError,
      },
      options,
    );
  }

  /**
   * Make a request for a grant
   *
   * @remarks
   * Make a request for a grant on behalf of an account holder.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link GrantsApi.PostGrants2Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postGrants2(
    request: GrantsApi.PostGrants2Request,
    options?: RequestOptions,
  ): ApiPromise<Grant, GrantsApi.PostGrants2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default15("/grants"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => capitalGrantInfoSchema)) },
      },
      {
        success: { kind: "json", schema: grantSchema },
        errorFactory: GrantsApi.PostGrants2Error,
      },
      options,
    );
  }
}

export namespace GrantsApi {
  export type GetGrantsGrantIdRequest = {
    /** The unique identifier of the grant reference. */
    grantId: string;
  };

  export class GetGrantsGrantIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetGrantsGrantIdError> = [
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

  export type GetGrantsGrantIdDisbursementsRequest = {
    /** The unique identifier of the grant reference. */
    grantId: string;
  };

  export class GetGrantsGrantIdDisbursementsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetGrantsGrantIdDisbursementsError> = [
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

  export type GetGrantsGrantIdDisbursementsDisbursementIdRequest = {
    /** The unique identifier of the grant reference. */
    grantId: string;
    /** The unique identifier of the disbursement. */
    disbursementId: string;
  };

  export class GetGrantsGrantIdDisbursementsDisbursementIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetGrantsGrantIdDisbursementsDisbursementIdError> = [
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

  export type GetGrants2Request = {
    /** The unique identifier of the account holder that received the grants. */
    counterpartyAccountHolderId: string;
  };

  export class GetGrants2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetGrants2Error> = [
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

  export type PatchGrantsGrantIdDisbursementsDisbursementIdRequest = {
    /** The unique identifier of the grant reference. */
    grantId: string;
    /** The unique identifier of the disbursement. */
    disbursementId: string;
    body: DisbursementInfoUpdate;
  };

  export class PatchGrantsGrantIdDisbursementsDisbursementIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PatchGrantsGrantIdDisbursementsDisbursementIdError> = [
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

  export type PostGrants2Request = {
    body?: CapitalGrantInfo;
  };

  export class PostGrants2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostGrants2Error> = [
      {
        on: 422,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
