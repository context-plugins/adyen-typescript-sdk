import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  deleteScaAssociations(
    request: ScaAssociationManagement.DeleteScaAssociationsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ScaAssociationManagement.DeleteScaAssociationsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default13("/scaAssociations"),
        auth: noneAuth,
        headers: [{ name: "WWW-Authenticate", value: request.wwwAuthenticate, schema: s.string() }],
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

  getScaAssociations(
    request: ScaAssociationManagement.GetScaAssociationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAssociationsResponse, ScaAssociationManagement.GetScaAssociationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/scaAssociations"),
        auth: noneAuth,
        query: [
          { name: "entityType", value: request.entityType, schema: scaEntityTypeSchema },
          { name: "entityId", value: request.entityId, schema: s.string() },
          { name: "pageSize", value: request.pageSize, schema: s.number() },
          { name: "pageNumber", value: request.pageNumber, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAssociationsResponseSchema },
        errorFactory: ScaAssociationManagement.GetScaAssociationsError,
      },
      options,
    );
  }

  patchScaAssociations(
    request: ScaAssociationManagement.PatchScaAssociationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApproveAssociationResponse, ScaAssociationManagement.PatchScaAssociationsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default13("/scaAssociations"),
        auth: noneAuth,
        headers: [{ name: "WWW-Authenticate", value: request.wwwAuthenticate, schema: s.string() }],
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
    wwwAuthenticate: string;
    body?: RemoveAssociationRequest;
  };

  export class DeleteScaAssociationsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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
    entityType: ScaEntityType;
    entityId: string;
    pageSize: number;
    pageNumber: number;
  };

  export class GetScaAssociationsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
  > {
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
    wwwAuthenticate: string;
    body?: ApproveAssociationRequest;
  };

  export class PatchScaAssociationsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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
