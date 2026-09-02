import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  deleteTransferInstrumentsId(
    request: TransferInstruments.DeleteTransferInstrumentsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TransferInstruments.DeleteTransferInstrumentsIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default18("/transferInstruments/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TransferInstruments.DeleteTransferInstrumentsIdError,
      },
      options,
    );
  }

  getTransferInstrumentsId(
    request: TransferInstruments.GetTransferInstrumentsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferInstrument, TransferInstruments.GetTransferInstrumentsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default18("/transferInstruments/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transferInstrumentSchema },
        errorFactory: TransferInstruments.GetTransferInstrumentsIdError,
      },
      options,
    );
  }

  patchTransferInstrumentsId(
    request: TransferInstruments.PatchTransferInstrumentsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferInstrument, TransferInstruments.PatchTransferInstrumentsIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default18("/transferInstruments/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          {
            name: "x-requested-verification-code",
            value: request.xRequestedVerificationCode,
            schema: s.optional(s.string()),
          },
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

  postTransferInstruments(
    request: TransferInstruments.PostTransferInstrumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferInstrument, TransferInstruments.PostTransferInstrumentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default18("/transferInstruments"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [
          {
            name: "x-requested-verification-code",
            value: request.xRequestedVerificationCode,
            schema: s.optional(s.string()),
          },
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
    id: string;
  };

  export class DeleteTransferInstrumentsIdError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<DeleteTransferInstrumentsIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type GetTransferInstrumentsIdRequest = {
    id: string;
  };

  export class GetTransferInstrumentsIdError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<GetTransferInstrumentsIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PatchTransferInstrumentsIdRequest = {
    id: string;
    xRequestedVerificationCode?: string;
    body?: TransferInstrumentInfo;
  };

  export class PatchTransferInstrumentsIdError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PatchTransferInstrumentsIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostTransferInstrumentsRequest = {
    xRequestedVerificationCode?: string;
    body?: TransferInstrumentInfo;
  };

  export class PostTransferInstrumentsError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostTransferInstrumentsError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
