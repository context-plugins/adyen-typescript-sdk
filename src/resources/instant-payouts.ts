import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { payoutRequestSchema, type PayoutRequest } from "../models/payout-request.js";
import { payoutResponseSchema, type PayoutResponse } from "../models/payout-response.js";
import { serviceErrorSchema, type ServiceError } from "../models/service-error.js";
import type { Servers } from "../servers.js";

export class InstantPayouts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  postPayout(
    request: InstantPayouts.PostPayoutRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutResponse, InstantPayouts.PostPayoutError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default3("/payout"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => payoutRequestSchema)) },
      },
      {
        success: { kind: "json", schema: payoutResponseSchema },
        errorFactory: InstantPayouts.PostPayoutError,
      },
      options,
    );
  }
}

export namespace InstantPayouts {
  export type PostPayoutRequest = {
    body?: PayoutRequest;
  };

  export class PostPayoutError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostPayoutError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }
}
