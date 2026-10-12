import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  deleteBankAccountRequestSchema,
  type DeleteBankAccountRequest,
} from "../models/delete-bank-account-request.js";
import {
  deleteLegalArrangementRequestSchema,
  type DeleteLegalArrangementRequest,
} from "../models/delete-legal-arrangement-request.js";
import {
  deletePayoutMethodRequestSchema,
  type DeletePayoutMethodRequest,
} from "../models/delete-payout-method-request.js";
import {
  deleteShareholderRequestSchema,
  type DeleteShareholderRequest,
} from "../models/delete-shareholder-request.js";
import {
  deleteSignatoriesRequestSchema,
  type DeleteSignatoriesRequest,
} from "../models/delete-signatories-request.js";
import { genericResponseSchema, type GenericResponse } from "../models/generic-response.js";
import {
  getUploadedDocumentsRequestSchema,
  type GetUploadedDocumentsRequest,
} from "../models/get-uploaded-documents-request.js";
import {
  getUploadedDocumentsResponseSchema,
  type GetUploadedDocumentsResponse,
} from "../models/get-uploaded-documents-response.js";
import {
  performVerificationRequestSchema,
  type PerformVerificationRequest,
} from "../models/perform-verification-request.js";
import { serviceError1Schema, type ServiceError1 } from "../models/service-error1.js";
import {
  updateAccountHolderResponseSchema,
  type UpdateAccountHolderResponse,
} from "../models/update-account-holder-response.js";
import {
  uploadDocumentRequestSchema,
  type UploadDocumentRequest,
} from "../models/upload-document-request.js";
import type { Servers } from "../servers.js";

export class Verification {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Trigger verification
   *
   * @remarks
   * Triggers the verification of an account holder even if the checks are not yet required for the
   * volume that they are currently processing.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Verification.PostCheckAccountHolderError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCheckAccountHolder(
    request: Verification.PostCheckAccountHolderRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericResponse, Verification.PostCheckAccountHolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/checkAccountHolder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => performVerificationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: genericResponseSchema },
        errorFactory: Verification.PostCheckAccountHolderError,
      },
      options,
    );
  }

  /**
   * Delete bank accounts
   *
   * @remarks
   * Deletes bank accounts associated with an account holder.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Verification.PostDeleteBankAccountsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDeleteBankAccounts(
    request: Verification.PostDeleteBankAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericResponse, Verification.PostDeleteBankAccountsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/deleteBankAccounts"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteBankAccountRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: genericResponseSchema },
        errorFactory: Verification.PostDeleteBankAccountsError,
      },
      options,
    );
  }

  /**
   * Delete legal arrangements
   *
   * @remarks
   * Deletes legal arrangements and/or legal arrangement entities associated with an account holder.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Verification.PostDeleteLegalArrangementsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDeleteLegalArrangements(
    request: Verification.PostDeleteLegalArrangementsRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericResponse, Verification.PostDeleteLegalArrangementsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/deleteLegalArrangements"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteLegalArrangementRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: genericResponseSchema },
        errorFactory: Verification.PostDeleteLegalArrangementsError,
      },
      options,
    );
  }

  /**
   * Delete payout methods
   *
   * @remarks
   * Deletes payout methods associated with an account holder.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Verification.PostDeletePayoutMethodsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDeletePayoutMethods(
    request: Verification.PostDeletePayoutMethodsRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericResponse, Verification.PostDeletePayoutMethodsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/deletePayoutMethods"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deletePayoutMethodRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: genericResponseSchema },
        errorFactory: Verification.PostDeletePayoutMethodsError,
      },
      options,
    );
  }

  /**
   * Delete shareholders
   *
   * @remarks
   * Deletes shareholders associated with an account holder.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Verification.PostDeleteShareholdersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDeleteShareholders(
    request: Verification.PostDeleteShareholdersRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericResponse, Verification.PostDeleteShareholdersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/deleteShareholders"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteShareholderRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: genericResponseSchema },
        errorFactory: Verification.PostDeleteShareholdersError,
      },
      options,
    );
  }

  /**
   * Delete signatories
   *
   * @remarks
   * Deletes signatories associated with an account holder.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Verification.PostDeleteSignatoriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDeleteSignatories(
    request: Verification.PostDeleteSignatoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericResponse, Verification.PostDeleteSignatoriesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/deleteSignatories"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteSignatoriesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: genericResponseSchema },
        errorFactory: Verification.PostDeleteSignatoriesError,
      },
      options,
    );
  }

  /**
   * Get documents
   *
   * @remarks
   * Returns documents that were previously uploaded for an account holder. Adyen uses the documents
   * during the [verification
   * process](https://docs.adyen.com/classic-platforms/verification-process).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Verification.PostGetUploadedDocumentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postGetUploadedDocuments(
    request: Verification.PostGetUploadedDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetUploadedDocumentsResponse, Verification.PostGetUploadedDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/getUploadedDocuments"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => getUploadedDocumentsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getUploadedDocumentsResponseSchema },
        errorFactory: Verification.PostGetUploadedDocumentsError,
      },
      options,
    );
  }

  /**
   * Upload a document
   *
   * @remarks
   * Uploads a document for an account holder. Adyen uses the documents during the [verification
   * process](https://docs.adyen.com/classic-platforms/verification-process).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Verification.PostUploadDocumentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postUploadDocument(
    request: Verification.PostUploadDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateAccountHolderResponse, Verification.PostUploadDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/uploadDocument"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => uploadDocumentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateAccountHolderResponseSchema },
        errorFactory: Verification.PostUploadDocumentError,
      },
      options,
    );
  }
}

export namespace Verification {
  export type PostCheckAccountHolderRequest = {
    body?: PerformVerificationRequest;
  };

  export class PostCheckAccountHolderError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostCheckAccountHolderError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostDeleteBankAccountsRequest = {
    body?: DeleteBankAccountRequest;
  };

  export class PostDeleteBankAccountsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostDeleteBankAccountsError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostDeleteLegalArrangementsRequest = {
    body?: DeleteLegalArrangementRequest;
  };

  export class PostDeleteLegalArrangementsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostDeleteLegalArrangementsError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostDeletePayoutMethodsRequest = {
    body?: DeletePayoutMethodRequest;
  };

  export class PostDeletePayoutMethodsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostDeletePayoutMethodsError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostDeleteShareholdersRequest = {
    body?: DeleteShareholderRequest;
  };

  export class PostDeleteShareholdersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostDeleteShareholdersError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostDeleteSignatoriesRequest = {
    body?: DeleteSignatoriesRequest;
  };

  export class PostDeleteSignatoriesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostDeleteSignatoriesError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostGetUploadedDocumentsRequest = {
    body?: GetUploadedDocumentsRequest;
  };

  export class PostGetUploadedDocumentsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostGetUploadedDocumentsError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostUploadDocumentRequest = {
    body?: UploadDocumentRequest;
  };

  export class PostUploadDocumentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostUploadDocumentError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
