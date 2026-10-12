import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accountVerificationReportResponseSchema,
  type AccountVerificationReportResponse,
} from "../models/account-verification-report-response.js";
import {
  accountVerificationRoutesRequestSchema,
  type AccountVerificationRoutesRequest,
} from "../models/account-verification-routes-request.js";
import {
  accountVerificationRoutesResponseSchema,
  type AccountVerificationRoutesResponse,
} from "../models/account-verification-routes-response.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import type { Servers } from "../servers.js";

export class AccountVerification {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get account verification report
   *
   * @remarks
   * Get the account verification report using a unique code from a successful open banking
   * connection. This report provides identity verification and bank account details.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link AccountVerification.GetAccountVerificationReportsCodeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountVerificationReportsCode(
    request: AccountVerification.GetAccountVerificationReportsCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AccountVerificationReportResponse,
    AccountVerification.GetAccountVerificationReportsCodeError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default21("/accountVerification/reports/{code}"),
        auth: noneAuth,
        pathParams: [{ name: "code", value: request.code, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountVerificationReportResponseSchema },
        errorFactory: AccountVerification.GetAccountVerificationReportsCodeError,
      },
      options,
    );
  }

  /**
   * Create routes for account verification
   *
   * @remarks
   * Create a list of routes for verifying bank accounts of third-party individuals. Successful
   * connections generate a unique code used for requesting bank reports and verifying identity.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link AccountVerification.PostAccountVerificationRoutesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postAccountVerificationRoutes(
    request: AccountVerification.PostAccountVerificationRoutesRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountVerificationRoutesResponse, AccountVerification.PostAccountVerificationRoutesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default21("/accountVerification/routes"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: accountVerificationRoutesRequestSchema },
      },
      {
        success: { kind: "json", schema: accountVerificationRoutesResponseSchema },
        errorFactory: AccountVerification.PostAccountVerificationRoutesError,
      },
      options,
    );
  }
}

export namespace AccountVerification {
  export type GetAccountVerificationReportsCodeRequest = {
    /**
     * The unique code you receive after a successful open banking flow that is included as a query
     * parameter in the `redirectUrl` callback.
     */
    code: string;
  };

  export class GetAccountVerificationReportsCodeError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetAccountVerificationReportsCodeError> = [
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
        on: 429,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity6",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostAccountVerificationRoutesRequest = {
    body: AccountVerificationRoutesRequest;
  };

  export class PostAccountVerificationRoutesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostAccountVerificationRoutesError> = [
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
        on: 422,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 429,
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
