import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { serviceErrorSchema, type ServiceError } from "../models/service-error.js";
import {
  storeDetailAndSubmitRequestSchema,
  type StoreDetailAndSubmitRequest,
} from "../models/store-detail-and-submit-request.js";
import {
  storeDetailAndSubmitResponseSchema,
  type StoreDetailAndSubmitResponse,
} from "../models/store-detail-and-submit-response.js";
import { storeDetailRequestSchema, type StoreDetailRequest } from "../models/store-detail-request.js";
import { storeDetailResponseSchema, type StoreDetailResponse } from "../models/store-detail-response.js";
import { submitRequestSchema, type SubmitRequest } from "../models/submit-request.js";
import { submitResponseSchema, type SubmitResponse } from "../models/submit-response.js";
import type { Servers } from "../servers.js";

export class Initialization {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Store payout details
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
   * Stores payment details under the `PAYOUT` recurring contract. These payment details can be used
   * later to submit a payout via the `/submitThirdParty` call.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Initialization.PostStoreDetailError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postStoreDetail(
    request: Initialization.PostStoreDetailRequest,
    options?: RequestOptions,
  ): ApiPromise<StoreDetailResponse, Initialization.PostStoreDetailError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/storeDetail"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => storeDetailRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storeDetailResponseSchema },
        errorFactory: Initialization.PostStoreDetailError,
      },
      options,
    );
  }

  /**
   * Store details and submit a payout
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
   * Submits a payout and stores its details for subsequent payouts.
   *
   * The submitted payout must be confirmed or declined either by a reviewer or via
   * `/confirmThirdParty` or `/declineThirdParty` calls.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Initialization.PostStoreDetailAndSubmitThirdPartyError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postStoreDetailAndSubmitThirdParty(
    request: Initialization.PostStoreDetailAndSubmitThirdPartyRequest,
    options?: RequestOptions,
  ): ApiPromise<StoreDetailAndSubmitResponse, Initialization.PostStoreDetailAndSubmitThirdPartyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/storeDetailAndSubmitThirdParty"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => storeDetailAndSubmitRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storeDetailAndSubmitResponseSchema },
        errorFactory: Initialization.PostStoreDetailAndSubmitThirdPartyError,
      },
      options,
    );
  }

  /**
   * Submit a payout
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
   * Submits a payout using the previously stored payment details. To store payment details, use the
   * `/storeDetail` API call.
   *
   * The submitted payout must be confirmed or declined either by a reviewer or via
   * `/confirmThirdParty` or `/declineThirdParty` calls.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Initialization.PostSubmitThirdPartyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postSubmitThirdParty(
    request: Initialization.PostSubmitThirdPartyRequest,
    options?: RequestOptions,
  ): ApiPromise<SubmitResponse, Initialization.PostSubmitThirdPartyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/submitThirdParty"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => submitRequestSchema)) },
      },
      {
        success: { kind: "json", schema: submitResponseSchema },
        errorFactory: Initialization.PostSubmitThirdPartyError,
      },
      options,
    );
  }
}

export namespace Initialization {
  export type PostStoreDetailRequest = {
    body?: StoreDetailRequest;
  };

  export class PostStoreDetailError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostStoreDetailError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostStoreDetailAndSubmitThirdPartyRequest = {
    body?: StoreDetailAndSubmitRequest;
  };

  export class PostStoreDetailAndSubmitThirdPartyError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostStoreDetailAndSubmitThirdPartyError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostSubmitThirdPartyRequest = {
    body?: SubmitRequest;
  };

  export class PostSubmitThirdPartyError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostSubmitThirdPartyError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }
}
