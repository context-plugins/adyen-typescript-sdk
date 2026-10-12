import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { calculateRateRequestSchema, type CalculateRateRequest } from "../models/calculate-rate-request.js";
import {
  calculateRateResponseSchema,
  type CalculateRateResponse,
} from "../models/calculate-rate-response.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import type { Servers } from "../servers.js";

export class Rates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Calculate amount in a different currency
   *
   * @remarks
   * Returns the calculated amounts and rates required to convert the currency of a transaction.
   *
   * @returns Successful operation
   *
   * @throws {@link Rates.PostRatesCalculateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postRatesCalculate(
    request: Rates.PostRatesCalculateRequest,
    options?: RequestOptions,
  ): ApiPromise<CalculateRateResponse, Rates.PostRatesCalculateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/rates/calculate"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: calculateRateRequestSchema },
      },
      {
        success: { kind: "json", schema: calculateRateResponseSchema },
        errorFactory: Rates.PostRatesCalculateError,
      },
      options,
    );
  }
}

export namespace Rates {
  export type PostRatesCalculateRequest = {
    body: CalculateRateRequest;
  };

  export class PostRatesCalculateError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostRatesCalculateError> = [
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
