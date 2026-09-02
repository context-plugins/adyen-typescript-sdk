import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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
        url: this.#servers.default21("/accountVerification/reports/{code}"),
        auth: noneAuth,
        pathParams: [{ name: "code", value: request.code, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountVerificationReportResponseSchema },
        errorFactory: AccountVerification.GetAccountVerificationReportsCodeError,
      },
      options,
    );
  }

  postAccountVerificationRoutes(
    request: AccountVerification.PostAccountVerificationRoutesRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountVerificationRoutesResponse, AccountVerification.PostAccountVerificationRoutesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default21("/accountVerification/routes"),
        auth: noneAuth,
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
    code: string;
  };

  export class GetAccountVerificationReportsCodeError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
  > {
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

  export class PostAccountVerificationRoutesError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
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
