import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Delete a document
   *
   * @remarks
   * Deletes a document.
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
   * @throws {@link Documents.DeleteDocumentsIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDocumentsId(
    request: Documents.DeleteDocumentsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Documents.DeleteDocumentsIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default18("/documents/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Documents.DeleteDocumentsIdError,
      },
      options,
    );
  }

  /**
   * Get a document
   *
   * @remarks
   * Returns a document.
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
   * @throws {@link Documents.GetDocumentsIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDocumentsId(
    request: Documents.GetDocumentsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Document, Documents.GetDocumentsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default18("/documents/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "skipContent", value: request.skipContent, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: documentSchema },
        errorFactory: Documents.GetDocumentsIdError,
      },
      options,
    );
  }

  /**
   * Update a document
   *
   * @remarks
   * Updates a document.
   *
   * >You can upload a maximum of 15 pages for photo IDs.
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
   * @throws {@link Documents.PatchDocumentsIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchDocumentsId(
    request: Documents.PatchDocumentsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Document, Documents.PatchDocumentsIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default18("/documents/{id}"),
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
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => documentSchema)) },
      },
      {
        success: { kind: "json", schema: documentSchema },
        errorFactory: Documents.PatchDocumentsIdError,
      },
      options,
    );
  }

  /**
   * Upload a document for verification checks
   *
   * @remarks
   * Uploads a document for verification checks.
   *
   * Adyen uses the information from the [legal
   * entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities) to run
   * automated verification checks. If these checks fail, you will be notified to provide additional
   * documents.
   *
   * You should only upload documents when Adyen requests additional information for the legal
   * entity.
   *
   * >You can upload a maximum of 15 pages for photo IDs.
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
   * @throws {@link Documents.PostDocumentsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDocuments(
    request: Documents.PostDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<Document, Documents.PostDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default18("/documents"),
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
    /** The unique identifier of the document to be deleted. */
    id: string;
  };

  export class DeleteDocumentsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<DeleteDocumentsIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type GetDocumentsIdRequest = {
    /** The unique identifier of the document. */
    id: string;
    /** Do not load document content while fetching the document. */
    skipContent?: boolean;
  };

  export class GetDocumentsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<GetDocumentsIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PatchDocumentsIdRequest = {
    /** The unique identifier of the document to be updated. */
    id: string;
    /**
     * Use the requested verification code 0_0001 to resolve any suberrors associated with the
     * document. Requested verification codes can only be used in your test environment.
     */
    xRequestedVerificationCode?: string;
    body?: Document;
  };

  export class PatchDocumentsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PatchDocumentsIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostDocumentsRequest = {
    /**
     * Use a suberror code as your requested verification code. You can include one code at a time
     * in your request header. Requested verification codes can only be used in your test
     * environment.
     */
    xRequestedVerificationCode?: string;
    body?: Document;
  };

  export class PostDocumentsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostDocumentsError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
