import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Make an instant card payout
   *
   * @remarks
   * > This endpoint is **deprecated** and no longer supports new integrations. Do one of the
   * following: >- If you are building a new integration, use the POST
   * [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) endpoint
   * instead. > - If you are already using the Payout API, reach out to your Adyen contact to learn
   * how to migrate to the Transfers API. > > With the Transfers API, you can: > - Handle multiple
   * payout use cases with a single API. > - Use new payout functionalities, such as instant payouts
   * to bank accounts. > - Receive webhooks with more details and defined transfer states. > > For
   * more information about the payout features of the Transfers API, see our
   * [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.
   *
   *
   * With this call, you can pay out to your customers, and funds will be made available within 30
   * minutes on the cardholder's bank account (this is dependent on whether the issuer supports this
   * functionality). Instant card payouts are only supported for Visa and Mastercard cards.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link InstantPayouts.PostPayoutError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPayout(
    request: InstantPayouts.PostPayoutRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutResponse, InstantPayouts.PostPayoutError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/payout"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  export class PostPayoutError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPayoutError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }
}
