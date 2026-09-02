import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  getGrantsGrantId(
    request: GrantsApi.GetGrantsGrantIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Grant, GrantsApi.GetGrantsGrantIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default15("/grants/{grantId}"),
        auth: noneAuth,
        pathParams: [{ name: "grantId", value: request.grantId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: grantSchema },
        errorFactory: GrantsApi.GetGrantsGrantIdError,
      },
      options,
    );
  }

  getGrantsGrantIdDisbursements(
    request: GrantsApi.GetGrantsGrantIdDisbursementsRequest,
    options?: RequestOptions,
  ): ApiPromise<Disbursements, GrantsApi.GetGrantsGrantIdDisbursementsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default15("/grants/{grantId}/disbursements"),
        auth: noneAuth,
        pathParams: [{ name: "grantId", value: request.grantId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disbursementsSchema },
        errorFactory: GrantsApi.GetGrantsGrantIdDisbursementsError,
      },
      options,
    );
  }

  getGrantsGrantIdDisbursementsDisbursementId(
    request: GrantsApi.GetGrantsGrantIdDisbursementsDisbursementIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Disbursement, GrantsApi.GetGrantsGrantIdDisbursementsDisbursementIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default15("/grants/{grantId}/disbursements/{disbursementId}"),
        auth: noneAuth,
        pathParams: [
          { name: "grantId", value: request.grantId, schema: s.string() },
          { name: "disbursementId", value: request.disbursementId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disbursementSchema },
        errorFactory: GrantsApi.GetGrantsGrantIdDisbursementsDisbursementIdError,
      },
      options,
    );
  }

  getGrants2(
    request: GrantsApi.GetGrants2Request,
    options?: RequestOptions,
  ): ApiPromise<Grants, GrantsApi.GetGrants2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default15("/grants"),
        auth: noneAuth,
        query: [
          {
            name: "counterpartyAccountHolderId",
            value: request.counterpartyAccountHolderId,
            schema: s.string(),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: grantsSchema },
        errorFactory: GrantsApi.GetGrants2Error,
      },
      options,
    );
  }

  patchGrantsGrantIdDisbursementsDisbursementId(
    request: GrantsApi.PatchGrantsGrantIdDisbursementsDisbursementIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Disbursement, GrantsApi.PatchGrantsGrantIdDisbursementsDisbursementIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default15("/grants/{grantId}/disbursements/{disbursementId}"),
        auth: noneAuth,
        pathParams: [
          { name: "grantId", value: request.grantId, schema: s.string() },
          { name: "disbursementId", value: request.disbursementId, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: disbursementInfoUpdateSchema },
      },
      {
        success: { kind: "json", schema: disbursementSchema },
        errorFactory: GrantsApi.PatchGrantsGrantIdDisbursementsDisbursementIdError,
      },
      options,
    );
  }

  postGrants2(
    request: GrantsApi.PostGrants2Request,
    options?: RequestOptions,
  ): ApiPromise<Grant, GrantsApi.PostGrants2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default15("/grants"),
        auth: noneAuth,
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
    grantId: string;
  };

  export class GetGrantsGrantIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
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
    grantId: string;
  };

  export class GetGrantsGrantIdDisbursementsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
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
    grantId: string;
    disbursementId: string;
  };

  export class GetGrantsGrantIdDisbursementsDisbursementIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
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
    counterpartyAccountHolderId: string;
  };

  export class GetGrants2Error extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
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
    grantId: string;
    disbursementId: string;
    body: DisbursementInfoUpdate;
  };

  export class PatchGrantsGrantIdDisbursementsDisbursementIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
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

  export class PostGrants2Error extends ResponseError<
    Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<PostGrants2Error> = [
      {
        on: 422,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
