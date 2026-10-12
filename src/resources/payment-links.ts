import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { paymentLinkRequestSchema, type PaymentLinkRequest } from "../models/payment-link-request.js";
import { paymentLinkResponseSchema, type PaymentLinkResponse } from "../models/payment-link-response.js";
import { serviceErrorSchema, type ServiceError } from "../models/service-error.js";
import {
  updatePaymentLinkRequestSchema,
  type UpdatePaymentLinkRequest,
} from "../models/update-payment-link-request.js";
import type { Servers } from "../servers.js";

export class PaymentLinks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a payment link
   *
   * @remarks
   * Retrieves the payment link details using the payment link `id`.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentLinks.GetPaymentLinksLinkIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPaymentLinksLinkId(
    request: PaymentLinks.GetPaymentLinksLinkIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentLinkResponse, PaymentLinks.GetPaymentLinksLinkIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/paymentLinks/{linkId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "linkId", value: request.linkId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentLinkResponseSchema },
        errorFactory: PaymentLinks.GetPaymentLinksLinkIdError,
      },
      options,
    );
  }

  /**
   * Update the status of a payment link
   *
   * @remarks
   * Updates the status of a payment link. Use this endpoint to [force the expiry of a payment
   * link](https://docs.adyen.com/online-payments/pay-by-link#update-payment-link-status).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentLinks.PatchPaymentLinksLinkIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchPaymentLinksLinkId(
    request: PaymentLinks.PatchPaymentLinksLinkIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentLinkResponse, PaymentLinks.PatchPaymentLinksLinkIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/paymentLinks/{linkId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "linkId", value: request.linkId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updatePaymentLinkRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: paymentLinkResponseSchema },
        errorFactory: PaymentLinks.PatchPaymentLinksLinkIdError,
      },
      options,
    );
  }

  /**
   * Create a payment link
   *
   * @remarks
   * Creates a payment link to a [Pay by Link](https://docs.adyen.com/unified-commerce/pay-by-link/)
   * page where the shopper can pay. The list of payment methods presented to the shopper depends on
   * the `currency` and `country` parameters sent in the request.
   *
   * For more information, refer to [Pay by Link
   * documentation](https://docs.adyen.com/online-payments/pay-by-link#create-payment-links-through-api).
   *
   * @returns Created - the request has succeeded.
   *
   * @throws {@link PaymentLinks.PostPaymentLinksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentLinks(
    request: PaymentLinks.PostPaymentLinksRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentLinkResponse, PaymentLinks.PostPaymentLinksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/paymentLinks"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paymentLinkRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: paymentLinkResponseSchema },
        errorFactory: PaymentLinks.PostPaymentLinksError,
      },
      options,
    );
  }
}

export namespace PaymentLinks {
  export type GetPaymentLinksLinkIdRequest = {
    /** Unique identifier of the payment link. */
    linkId: string;
  };

  export class GetPaymentLinksLinkIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<GetPaymentLinksLinkIdError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PatchPaymentLinksLinkIdRequest = {
    /** Unique identifier of the payment link. */
    linkId: string;
    body?: UpdatePaymentLinkRequest;
  };

  export class PatchPaymentLinksLinkIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchPaymentLinksLinkIdError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentLinksRequest = {
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: PaymentLinkRequest;
  };

  export class PostPaymentLinksError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPaymentLinksError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }
}
