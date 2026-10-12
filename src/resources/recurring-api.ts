import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  checkoutForwardRequestSchema,
  type CheckoutForwardRequest,
} from "../models/checkout-forward-request.js";
import {
  checkoutForwardResponseSchema,
  type CheckoutForwardResponse,
} from "../models/checkout-forward-response.js";
import {
  listStoredPaymentMethodsResponseSchema,
  type ListStoredPaymentMethodsResponse,
} from "../models/list-stored-payment-methods-response.js";
import {
  storedPaymentMethodRequestSchema,
  type StoredPaymentMethodRequest,
} from "../models/stored-payment-method-request.js";
import {
  storedPaymentMethodResourceSchema,
  type StoredPaymentMethodResource,
} from "../models/stored-payment-method-resource.js";
import type { Servers } from "../servers.js";

export class RecurringApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a token for stored payment details
   *
   * @remarks
   * Deletes the token identified in the path. The token can no longer be used with payment
   * requests.
   *
   * @returns No Content - look at the actual response code for the status of the request.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteStoredPaymentMethodsStoredPaymentMethodId(
    request: RecurringApi.DeleteStoredPaymentMethodsStoredPaymentMethodIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/storedPaymentMethods/{storedPaymentMethodId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "storedPaymentMethodId", value: request.storedPaymentMethodId, schema: s.string() },
        ],
        query: [
          { name: "shopperReference", value: request.shopperReference, schema: s.string() },
          { name: "merchantAccount", value: request.merchantAccount, schema: s.string() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get tokens for stored payment details
   *
   * @remarks
   * Lists the tokens for stored payment details for the shopper identified in the path, if there
   * are any available. The token ID can be used with payment requests for the shopper's payment. A
   * summary of the stored details is included.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStoredPaymentMethods(
    request: RecurringApi.GetStoredPaymentMethodsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListStoredPaymentMethodsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/storedPaymentMethods"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [
          { name: "shopperReference", value: request.shopperReference, schema: s.optional(s.string()) },
          { name: "merchantAccount", value: request.merchantAccount, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listStoredPaymentMethodsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Forward stored payment details
   *
   * @remarks
   * Forwards the payment details you stored with Adyen to a third-party that you specify and
   * returns the response from the third-party. Supports forwarding stored card details or [network
   * tokens](https://docs.adyen.com/online-payments/network-tokenization). For more information, see
   * [Forward stored payment
   * details](https://docs.adyen.com/online-payments/tokenization/forward-payment-details).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postForward(
    request: RecurringApi.PostForwardRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckoutForwardResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/forward"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => checkoutForwardRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: checkoutForwardResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a token to store payment details
   *
   * @remarks
   * Creates a token to store the shopper's payment details. This token can be used for the
   * shopper's future payments.
   *
   * @returns Created - the request has been fulfilled and has resulted in one or more new resources
   * being created.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postStoredPaymentMethods(
    request: RecurringApi.PostStoredPaymentMethodsRequest,
    options?: RequestOptions,
  ): ApiPromise<StoredPaymentMethodResource, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/storedPaymentMethods"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => storedPaymentMethodRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storedPaymentMethodResourceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace RecurringApi {
  export type DeleteStoredPaymentMethodsStoredPaymentMethodIdRequest = {
    /** The unique identifier of the token. */
    storedPaymentMethodId: string;
    /**
     * Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum
     * length: 3 characters. > Your reference must not include personally identifiable information
     * (PII), for example name or email address.
     */
    shopperReference: string;
    /** Your merchant account. */
    merchantAccount: string;
  };

  export type GetStoredPaymentMethodsRequest = {
    /**
     * Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum
     * length: 3 characters. > Your reference must not include personally identifiable information
     * (PII), for example name or email address.
     */
    shopperReference?: string;
    /** Your merchant account. */
    merchantAccount?: string;
  };

  export type PostForwardRequest = {
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: CheckoutForwardRequest;
  };

  export type PostStoredPaymentMethodsRequest = {
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: StoredPaymentMethodRequest;
  };
}
