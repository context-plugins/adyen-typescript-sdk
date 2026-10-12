import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { cashOutInfoSchema, type CashOutInfo } from "../models/cash-out-info.js";
import { cashOutSchema, type CashOut } from "../models/cash-out.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import type { Servers } from "../servers.js";

export class CashOutApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Initiate a cashout
   *
   * @remarks
   * Initiates a [cashout](https://docs.adyen.com/platforms/cash-out-instantly) request.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link CashOutApi.PostCashoutsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCashouts(
    request: CashOutApi.PostCashoutsRequest,
    options?: RequestOptions,
  ): ApiPromise<CashOut, CashOutApi.PostCashoutsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default14("/cashouts"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cashOutInfoSchema },
      },
      {
        success: { kind: "json", schema: cashOutSchema },
        errorFactory: CashOutApi.PostCashoutsError,
      },
      options,
    );
  }
}

export namespace CashOutApi {
  export type PostCashoutsRequest = {
    body: CashOutInfo;
  };

  export class PostCashoutsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity6", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity7", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostCashoutsError> = [
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
        on: 404,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 429,
        kind: "defaultErrorResponseEntity6",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity7",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
