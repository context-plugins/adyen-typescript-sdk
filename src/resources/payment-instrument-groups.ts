import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  paymentInstrumentGroupInfoSchema,
  type PaymentInstrumentGroupInfo,
} from "../models/payment-instrument-group-info.js";
import {
  paymentInstrumentGroupSchema,
  type PaymentInstrumentGroup,
} from "../models/payment-instrument-group.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  transactionRulesResponseSchema,
  type TransactionRulesResponse,
} from "../models/transaction-rules-response.js";
import type { Servers } from "../servers.js";

export class PaymentInstrumentGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a payment instrument group
   *
   * @remarks
   * Returns the details of a payment instrument group.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPaymentInstrumentGroupsId(
    request: PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentInstrumentGroup, PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/paymentInstrumentGroups/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentInstrumentGroupSchema },
        errorFactory: PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdError,
      },
      options,
    );
  }

  /**
   * Get all transaction rules for a payment instrument group
   *
   * @remarks
   * Returns a list of all the transaction rules associated with a payment instrument group.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdTransactionRulesError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPaymentInstrumentGroupsIdTransactionRules(
    request: PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdTransactionRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TransactionRulesResponse,
    PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdTransactionRulesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/paymentInstrumentGroups/{id}/transactionRules"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionRulesResponseSchema },
        errorFactory: PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdTransactionRulesError,
      },
      options,
    );
  }

  /**
   * Create a payment instrument group
   *
   * @remarks
   * Creates a payment instrument group to associate and group payment instrument resources
   * together. You can apply a transaction rule to a payment instrument group.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentInstrumentGroups.PostPaymentInstrumentGroupsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentInstrumentGroups(
    request: PaymentInstrumentGroups.PostPaymentInstrumentGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentInstrumentGroup, PaymentInstrumentGroups.PostPaymentInstrumentGroupsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/paymentInstrumentGroups"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paymentInstrumentGroupInfoSchema)),
        },
      },
      {
        success: { kind: "json", schema: paymentInstrumentGroupSchema },
        errorFactory: PaymentInstrumentGroups.PostPaymentInstrumentGroupsError,
      },
      options,
    );
  }
}

export namespace PaymentInstrumentGroups {
  export type GetPaymentInstrumentGroupsIdRequest = {
    /** The unique identifier of the payment instrument group. */
    id: string;
  };

  export class GetPaymentInstrumentGroupsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetPaymentInstrumentGroupsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetPaymentInstrumentGroupsIdTransactionRulesRequest = {
    /** The unique identifier of the payment instrument group. */
    id: string;
  };

  export class GetPaymentInstrumentGroupsIdTransactionRulesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetPaymentInstrumentGroupsIdTransactionRulesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostPaymentInstrumentGroupsRequest = {
    body?: PaymentInstrumentGroupInfo;
  };

  export class PostPaymentInstrumentGroupsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPaymentInstrumentGroupsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
