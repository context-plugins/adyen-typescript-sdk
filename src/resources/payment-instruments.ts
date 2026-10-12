import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listNetworkTokensResponseSchema,
  type ListNetworkTokensResponse,
} from "../models/list-network-tokens-response.js";
import {
  networkTokenActivationDataRequestSchema,
  type NetworkTokenActivationDataRequest,
} from "../models/network-token-activation-data-request.js";
import {
  networkTokenActivationDataResponseSchema,
  type NetworkTokenActivationDataResponse,
} from "../models/network-token-activation-data-response.js";
import {
  paymentInstrumentInfoSchema,
  type PaymentInstrumentInfo,
} from "../models/payment-instrument-info.js";
import {
  paymentInstrumentRevealInfoSchema,
  type PaymentInstrumentRevealInfo,
} from "../models/payment-instrument-reveal-info.js";
import {
  paymentInstrumentRevealRequestSchema,
  type PaymentInstrumentRevealRequest,
} from "../models/payment-instrument-reveal-request.js";
import {
  paymentInstrumentRevealResponseSchema,
  type PaymentInstrumentRevealResponse,
} from "../models/payment-instrument-reveal-response.js";
import {
  paymentInstrumentUpdateRequestSchema,
  type PaymentInstrumentUpdateRequest,
} from "../models/payment-instrument-update-request.js";
import { paymentInstrument1Schema, type PaymentInstrument1 } from "../models/payment-instrument1.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  transactionRulesResponseSchema,
  type TransactionRulesResponse,
} from "../models/transaction-rules-response.js";
import {
  updatePaymentInstrumentSchema,
  type UpdatePaymentInstrument,
} from "../models/update-payment-instrument.js";
import type { Servers } from "../servers.js";

export class PaymentInstruments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a payment instrument
   *
   * @remarks
   * Returns the details of a payment instrument.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentInstruments.GetPaymentInstrumentsIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPaymentInstrumentsId(
    request: PaymentInstruments.GetPaymentInstrumentsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentInstrument1, PaymentInstruments.GetPaymentInstrumentsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/paymentInstruments/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentInstrument1Schema },
        errorFactory: PaymentInstruments.GetPaymentInstrumentsIdError,
      },
      options,
    );
  }

  /**
   * Get network token activation data
   *
   * @remarks
   * Get the network token activation data for a payment instrument.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentInstruments.GetPaymentInstrumentsIdNetworkTokenActivationDataError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPaymentInstrumentsIdNetworkTokenActivationData(
    request: PaymentInstruments.GetPaymentInstrumentsIdNetworkTokenActivationDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    NetworkTokenActivationDataResponse,
    PaymentInstruments.GetPaymentInstrumentsIdNetworkTokenActivationDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/paymentInstruments/{id}/networkTokenActivationData"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: networkTokenActivationDataResponseSchema },
        errorFactory: PaymentInstruments.GetPaymentInstrumentsIdNetworkTokenActivationDataError,
      },
      options,
    );
  }

  /**
   * List network tokens
   *
   * @remarks
   * List the network tokens connected to a payment instrument.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentInstruments.GetPaymentInstrumentsIdNetworkTokensError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPaymentInstrumentsIdNetworkTokens(
    request: PaymentInstruments.GetPaymentInstrumentsIdNetworkTokensRequest,
    options?: RequestOptions,
  ): ApiPromise<ListNetworkTokensResponse, PaymentInstruments.GetPaymentInstrumentsIdNetworkTokensError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/paymentInstruments/{id}/networkTokens"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listNetworkTokensResponseSchema },
        errorFactory: PaymentInstruments.GetPaymentInstrumentsIdNetworkTokensError,
      },
      options,
    );
  }

  /**
   * Get the PAN of a payment instrument
   *
   * @remarks
   * Returns the primary account number (PAN) of a payment instrument.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service#api-permissions):
   *
   * * Balance Platform BCL PCI role
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentInstruments.GetPaymentInstrumentsIdRevealError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPaymentInstrumentsIdReveal(
    request: PaymentInstruments.GetPaymentInstrumentsIdRevealRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentInstrumentRevealInfo, PaymentInstruments.GetPaymentInstrumentsIdRevealError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/paymentInstruments/{id}/reveal"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentInstrumentRevealInfoSchema },
        errorFactory: PaymentInstruments.GetPaymentInstrumentsIdRevealError,
      },
      options,
    );
  }

  /**
   * Get all transaction rules for a payment instrument
   *
   * @remarks
   * Returns a list of transaction rules associated with a payment instrument.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentInstruments.GetPaymentInstrumentsIdTransactionRulesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPaymentInstrumentsIdTransactionRules(
    request: PaymentInstruments.GetPaymentInstrumentsIdTransactionRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionRulesResponse, PaymentInstruments.GetPaymentInstrumentsIdTransactionRulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/paymentInstruments/{id}/transactionRules"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionRulesResponseSchema },
        errorFactory: PaymentInstruments.GetPaymentInstrumentsIdTransactionRulesError,
      },
      options,
    );
  }

  /**
   * Update a payment instrument
   *
   * @remarks
   * Updates a payment instrument. Once a payment instrument is already active, you can only update
   * its status. However, for cards created with **inactive** status, you can still update the
   * balance account associated with the card.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentInstruments.PatchPaymentInstrumentsIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchPaymentInstrumentsId(
    request: PaymentInstruments.PatchPaymentInstrumentsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdatePaymentInstrument, PaymentInstruments.PatchPaymentInstrumentsIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default13("/paymentInstruments/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paymentInstrumentUpdateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updatePaymentInstrumentSchema },
        errorFactory: PaymentInstruments.PatchPaymentInstrumentsIdError,
      },
      options,
    );
  }

  /**
   * Create a payment instrument
   *
   * @remarks
   * Creates a payment instrument to issue a physical card, a virtual card, or a business account to
   * your user.
   *
   * For more information, refer to [Issue cards](https://docs.adyen.com/issuing/create-cards) or
   * [Issue business accounts](https://docs.adyen.com/platforms/business-accounts).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentInstruments.PostPaymentInstrumentsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentInstruments(
    request: PaymentInstruments.PostPaymentInstrumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentInstrument1, PaymentInstruments.PostPaymentInstrumentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/paymentInstruments"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paymentInstrumentInfoSchema)),
        },
      },
      {
        success: { kind: "json", schema: paymentInstrument1Schema },
        errorFactory: PaymentInstruments.PostPaymentInstrumentsError,
      },
      options,
    );
  }

  /**
   * Create network token provisioning data
   *
   * @remarks
   * Create provisioning data for a network token. Use the provisioning data to add a user's payment
   * instrument to their digital wallet.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentInstruments.PostPaymentInstrumentsIdNetworkTokenActivationDataError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentInstrumentsIdNetworkTokenActivationData(
    request: PaymentInstruments.PostPaymentInstrumentsIdNetworkTokenActivationDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    NetworkTokenActivationDataResponse,
    PaymentInstruments.PostPaymentInstrumentsIdNetworkTokenActivationDataError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/paymentInstruments/{id}/networkTokenActivationData"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => networkTokenActivationDataRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: networkTokenActivationDataResponseSchema },
        errorFactory: PaymentInstruments.PostPaymentInstrumentsIdNetworkTokenActivationDataError,
      },
      options,
    );
  }

  /**
   * Reveal the data of a payment instrument
   *
   * @remarks
   * Returns the encrypted data of a specified payment instrument. These data include:
   *
   * - The primary account number (PAN)
   * - The card verification code (CVC)
   * - The expiry date
   *
   * You can decrypt the data to reveal it in your user interface.
   *
   * To make this request, your API credential must have the following role:
   * * Bank Issuing PAN Reveal Webservice role
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentInstruments.PostPaymentInstrumentsRevealError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentInstrumentsReveal(
    request: PaymentInstruments.PostPaymentInstrumentsRevealRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentInstrumentRevealResponse, PaymentInstruments.PostPaymentInstrumentsRevealError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/paymentInstruments/reveal"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paymentInstrumentRevealRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: paymentInstrumentRevealResponseSchema },
        errorFactory: PaymentInstruments.PostPaymentInstrumentsRevealError,
      },
      options,
    );
  }
}

export namespace PaymentInstruments {
  export type GetPaymentInstrumentsIdRequest = {
    /** The unique identifier of the payment instrument. */
    id: string;
  };

  export class GetPaymentInstrumentsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetPaymentInstrumentsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetPaymentInstrumentsIdNetworkTokenActivationDataRequest = {
    /** The unique identifier of the payment instrument. */
    id: string;
  };

  export class GetPaymentInstrumentsIdNetworkTokenActivationDataError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetPaymentInstrumentsIdNetworkTokenActivationDataError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetPaymentInstrumentsIdNetworkTokensRequest = {
    /** The unique identifier of the payment instrument. */
    id: string;
  };

  export class GetPaymentInstrumentsIdNetworkTokensError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetPaymentInstrumentsIdNetworkTokensError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetPaymentInstrumentsIdRevealRequest = {
    /** The unique identifier of the payment instrument. */
    id: string;
  };

  export class GetPaymentInstrumentsIdRevealError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetPaymentInstrumentsIdRevealError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetPaymentInstrumentsIdTransactionRulesRequest = {
    /** The unique identifier of the payment instrument. */
    id: string;
  };

  export class GetPaymentInstrumentsIdTransactionRulesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetPaymentInstrumentsIdTransactionRulesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchPaymentInstrumentsIdRequest = {
    /** The unique identifier of the payment instrument. */
    id: string;
    body?: PaymentInstrumentUpdateRequest;
  };

  export class PatchPaymentInstrumentsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchPaymentInstrumentsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostPaymentInstrumentsRequest = {
    body?: PaymentInstrumentInfo;
  };

  export class PostPaymentInstrumentsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPaymentInstrumentsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostPaymentInstrumentsIdNetworkTokenActivationDataRequest = {
    /** The unique identifier of the payment instrument. */
    id: string;
    body?: NetworkTokenActivationDataRequest;
  };

  export class PostPaymentInstrumentsIdNetworkTokenActivationDataError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPaymentInstrumentsIdNetworkTokenActivationDataError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostPaymentInstrumentsRevealRequest = {
    body?: PaymentInstrumentRevealRequest;
  };

  export class PostPaymentInstrumentsRevealError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPaymentInstrumentsRevealError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
