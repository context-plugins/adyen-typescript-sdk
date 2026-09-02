import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  getDisputes(
    request: RaiseDisputes.GetDisputesRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputeResponse[][], RaiseDisputes.GetDisputesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default23("/disputes"),
        auth: noneAuth,
        query: [
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "paymentInstrument", value: request.paymentInstrument, schema: s.optional(s.string()) },
          { name: "createdSince", value: request.createdSince, schema: s.optional(s.string()) },
          { name: "createdUntil", value: request.createdUntil, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.array(s.lazy(() => disputeResponseSchema))) },
        errorFactory: RaiseDisputes.GetDisputesError,
      },
      options,
    );
  }

  getDisputesId(
    request: RaiseDisputes.GetDisputesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputeResponse, RaiseDisputes.GetDisputesIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default23("/disputes/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disputeResponseSchema },
        errorFactory: RaiseDisputes.GetDisputesIdError,
      },
      options,
    );
  }

  patchDisputesId(
    request: RaiseDisputes.PatchDisputesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputeResponse, RaiseDisputes.PatchDisputesIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default23("/disputes/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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

  postDisputes(
    request: RaiseDisputes.PostDisputesRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputeResponse, RaiseDisputes.PostDisputesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default23("/disputes"),
        auth: noneAuth,
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
    status?: string;
    paymentInstrument?: string;
    createdSince?: string;
    createdUntil?: string;
    offset?: string;
    limit?: string;
  };

  export class GetDisputesError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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
    id: string;
  };

  export class GetDisputesIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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
    id: string;
    body?: PatchableDisputeRequest;
  };

  export class PatchDisputesIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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

  export class PostDisputesError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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
