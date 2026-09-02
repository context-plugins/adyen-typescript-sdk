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

  getMandates(
    request: DirectDebitMandates.GetMandatesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMandatesResponse, DirectDebitMandates.GetMandatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/mandates"),
        auth: noneAuth,
        query: [
          { name: "balanceAccountId", value: request.balanceAccountId, schema: s.optional(s.string()) },
          { name: "paymentInstrumentId", value: request.paymentInstrumentId, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMandatesResponseSchema },
        errorFactory: DirectDebitMandates.GetMandatesError,
      },
      options,
    );
  }

  getMandatesMandateId(
    request: DirectDebitMandates.GetMandatesMandateIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Mandate1, DirectDebitMandates.GetMandatesMandateIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/mandates/{mandateId}"),
        auth: noneAuth,
        pathParams: [{ name: "mandateId", value: request.mandateId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mandate1Schema },
        errorFactory: DirectDebitMandates.GetMandatesMandateIdError,
      },
      options,
    );
  }

  patchMandatesMandateId(
    request: DirectDebitMandates.PatchMandatesMandateIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DirectDebitMandates.PatchMandatesMandateIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default13("/mandates/{mandateId}"),
        auth: noneAuth,
        pathParams: [{ name: "mandateId", value: request.mandateId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: mandateUpdateSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: DirectDebitMandates.PatchMandatesMandateIdError,
      },
      options,
    );
  }

  postMandatesMandateIdCancel(
    request: DirectDebitMandates.PostMandatesMandateIdCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DirectDebitMandates.PostMandatesMandateIdCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default13("/mandates/{mandateId}/cancel"),
        auth: noneAuth,
        pathParams: [{ name: "mandateId", value: request.mandateId, schema: s.string() }],
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
    balanceAccountId?: string;
    paymentInstrumentId?: string;
    cursor?: string;
  };

  export class GetMandatesError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
  > {
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
    mandateId: string;
  };

  export class GetMandatesMandateIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
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
    mandateId: string;
    body: MandateUpdate;
  };

  export class PatchMandatesMandateIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
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
    mandateId: string;
  };

  export class PostMandatesMandateIdCancelError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
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
