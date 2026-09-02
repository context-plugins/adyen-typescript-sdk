import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { documentSchema, type Document } from "../models/document.js";
import { serviceError1Schema, type ServiceError1 } from "../models/service-error1.js";
import type { Servers } from "../servers.js";

export class Documents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteDocumentsId(
    request: Documents.DeleteDocumentsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Documents.DeleteDocumentsIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default18("/documents/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Documents.DeleteDocumentsIdError,
      },
      options,
    );
  }

  getDocumentsId(
    request: Documents.GetDocumentsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Document, Documents.GetDocumentsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default18("/documents/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "skipContent", value: request.skipContent, schema: s.optional(s.boolean()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: documentSchema },
        errorFactory: Documents.GetDocumentsIdError,
      },
      options,
    );
  }

  patchDocumentsId(
    request: Documents.PatchDocumentsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Document, Documents.PatchDocumentsIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default18("/documents/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          {
            name: "x-requested-verification-code",
            value: request.xRequestedVerificationCode,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => documentSchema)) },
      },
      {
        success: { kind: "json", schema: documentSchema },
        errorFactory: Documents.PatchDocumentsIdError,
      },
      options,
    );
  }

  postDocuments(
    request: Documents.PostDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<Document, Documents.PostDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default18("/documents"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [
          {
            name: "x-requested-verification-code",
            value: request.xRequestedVerificationCode,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => documentSchema)) },
      },
      {
        success: { kind: "json", schema: documentSchema },
        errorFactory: Documents.PostDocumentsError,
      },
      options,
    );
  }
}

export namespace Documents {
  export type DeleteDocumentsIdRequest = {
    id: string;
  };

  export class DeleteDocumentsIdError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<DeleteDocumentsIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type GetDocumentsIdRequest = {
    id: string;
    skipContent?: boolean;
  };

  export class GetDocumentsIdError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<GetDocumentsIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PatchDocumentsIdRequest = {
    id: string;
    xRequestedVerificationCode?: string;
    body?: Document;
  };

  export class PatchDocumentsIdError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PatchDocumentsIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostDocumentsRequest = {
    xRequestedVerificationCode?: string;
    body?: Document;
  };

  export class PostDocumentsError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostDocumentsError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
