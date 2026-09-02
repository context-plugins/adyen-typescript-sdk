import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  postRatesCalculate(
    request: Rates.PostRatesCalculateRequest,
    options?: RequestOptions,
  ): ApiPromise<CalculateRateResponse, Rates.PostRatesCalculateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default7("/rates/calculate"),
        auth: noneAuth,
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

  export class PostRatesCalculateError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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
