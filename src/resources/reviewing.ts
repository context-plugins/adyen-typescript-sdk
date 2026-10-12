import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { modifyRequestSchema, type ModifyRequest } from "../models/modify-request.js";
import { modifyResponseSchema, type ModifyResponse } from "../models/modify-response.js";
import { serviceErrorSchema, type ServiceError } from "../models/service-error.js";
import type { Servers } from "../servers.js";

export class Reviewing {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Confirm a payout
   *
   * @remarks
   * > This endpoint is **deprecated** and no longer supports new integrations. Do one of the
   * following: >- If you are building a new integration, use the [Transfers
   * API](https://docs.adyen.com/api-explorer/transfers/latest/overview) instead. > - If you are
   * already using the Payout API, reach out to your Adyen contact to learn how to migrate to the
   * Transfers API. > > With the Transfers API, you can: > - Handle multiple payout use cases with a
   * single API. > - Use new payout functionalities, such as instant payouts to bank accounts. > -
   * Receive webhooks with more details and defined transfer states. > > For more information about
   * the payout features of the Transfers API, see our
   * [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.
   *
   *
   * Confirms a previously submitted payout.
   *
   * To cancel a payout, use the `/declineThirdParty` endpoint.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Reviewing.PostConfirmThirdPartyError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postConfirmThirdParty(
    request: Reviewing.PostConfirmThirdPartyRequest,
    options?: RequestOptions,
  ): ApiPromise<ModifyResponse, Reviewing.PostConfirmThirdPartyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/confirmThirdParty"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => modifyRequestSchema)) },
      },
      {
        success: { kind: "json", schema: modifyResponseSchema },
        errorFactory: Reviewing.PostConfirmThirdPartyError,
      },
      options,
    );
  }

  /**
   * Cancel a payout
   *
   * @remarks
   * > This endpoint is **deprecated** and no longer supports new integrations. Do one of the
   * following: >- If you are building a new integration, use the [Transfers
   * API](https://docs.adyen.com/api-explorer/transfers/latest/overview) instead. > - If you are
   * already using the Payout API, reach out to your Adyen contact to learn how to migrate to the
   * Transfers API. > > With the Transfers API, you can: > - Handle multiple payout use cases with a
   * single API. > - Use new payout functionalities, such as instant payouts to bank accounts. > -
   * Receive webhooks with more details and defined transfer states. > > For more information about
   * the payout features of the Transfers API, see our
   * [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.
   *
   *
   * Cancels a previously submitted payout.
   *
   * To confirm and send a payout, use the `/confirmThirdParty` endpoint.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Reviewing.PostDeclineThirdPartyError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDeclineThirdParty(
    request: Reviewing.PostDeclineThirdPartyRequest,
    options?: RequestOptions,
  ): ApiPromise<ModifyResponse, Reviewing.PostDeclineThirdPartyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/declineThirdParty"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => modifyRequestSchema)) },
      },
      {
        success: { kind: "json", schema: modifyResponseSchema },
        errorFactory: Reviewing.PostDeclineThirdPartyError,
      },
      options,
    );
  }
}

export namespace Reviewing {
  export type PostConfirmThirdPartyRequest = {
    body?: ModifyRequest;
  };

  export class PostConfirmThirdPartyError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostConfirmThirdPartyError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostDeclineThirdPartyRequest = {
    body?: ModifyRequest;
  };

  export class PostDeclineThirdPartyError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostDeclineThirdPartyError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }
}
