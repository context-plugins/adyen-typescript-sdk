import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  authenticationResultRequestSchema,
  type AuthenticationResultRequest,
} from "../models/authentication-result-request.js";
import {
  authenticationResultResponseSchema,
  type AuthenticationResultResponse,
} from "../models/authentication-result-response.js";
import { cancelPaymentRequestSchema, type CancelPaymentRequest } from "../models/cancel-payment-request.js";
import {
  cancelPaymentResponseSchema,
  type CancelPaymentResponse,
} from "../models/cancel-payment-response.js";
import { cardDetailsRequestSchema, type CardDetailsRequest } from "../models/card-details-request.js";
import { cardDetailsResponseSchema, type CardDetailsResponse } from "../models/card-details-response.js";
import {
  confirmPaymentRequestSchema,
  type ConfirmPaymentRequest,
} from "../models/confirm-payment-request.js";
import {
  confirmPaymentResponseSchema,
  type ConfirmPaymentResponse,
} from "../models/confirm-payment-response.js";
import {
  createCheckoutSessionRequestSchema,
  type CreateCheckoutSessionRequest,
} from "../models/create-checkout-session-request.js";
import {
  createCheckoutSessionResponseSchema,
  type CreateCheckoutSessionResponse,
} from "../models/create-checkout-session-response.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import {
  idealPaymentDetailsRequestSchema,
  type IdealPaymentDetailsRequest,
} from "../models/ideal-payment-details-request.js";
import {
  paymentDetailsRequestSchema,
  type PaymentDetailsRequest,
} from "../models/payment-details-request.js";
import {
  paymentDetailsResponseSchema,
  type PaymentDetailsResponse,
} from "../models/payment-details-response.js";
import {
  paymentDetailsResponse1Schema,
  type PaymentDetailsResponse1,
} from "../models/payment-details-response1.js";
import {
  paymentMethodsRequestSchema,
  type PaymentMethodsRequest,
} from "../models/payment-methods-request.js";
import {
  paymentMethodsResponseSchema,
  type PaymentMethodsResponse,
} from "../models/payment-methods-response.js";
import { paymentRequestSchema, type PaymentRequest } from "../models/payment-request.js";
import { paymentRequest1Schema, type PaymentRequest1 } from "../models/payment-request1.js";
import { paymentRequest3DSchema, type PaymentRequest3D } from "../models/payment-request3-d.js";
import { paymentRequest3Ds2Schema, type PaymentRequest3Ds2 } from "../models/payment-request3-ds2.js";
import { paymentResponseSchema, type PaymentResponse } from "../models/payment-response.js";
import { paymentResultSchema, type PaymentResult } from "../models/payment-result.js";
import { serviceErrorSchema, type ServiceError } from "../models/service-error.js";
import {
  sessionResultResponseSchema,
  type SessionResultResponse,
} from "../models/session-result-response.js";
import {
  threeDs2ResultRequestSchema,
  type ThreeDs2ResultRequest,
} from "../models/three-ds2-result-request.js";
import {
  threeDs2ResultResponseSchema,
  type ThreeDs2ResultResponse,
} from "../models/three-ds2-result-response.js";
import type { Servers } from "../servers.js";

export class Payments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get the result of a payment session
   *
   * @remarks
   * Returns the status of the payment session with the `sessionId` and `sessionResult` specified in
   * the path.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSessionsSessionId(
    request: Payments.GetSessionsSessionIdRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionResultResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sessions/{sessionId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "sessionId", value: request.sessionId, schema: s.string() }],
        query: [{ name: "sessionResult", value: request.sessionResult, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionResultResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create an authorisation
   *
   * @remarks
   * Creates a payment with a unique reference (`pspReference`) and attempts to obtain an
   * authorisation hold. For cards, this amount can be captured or cancelled later. Non-card payment
   * methods typically don't support this and will automatically capture as part of the
   * authorisation.
   *
   * > This endpoint is
   * [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle)
   * and is no longer supported for new integrations. > * If you are building a new integration, use
   * the Checkout API
   * [`/payments`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments) endpoint
   * instead. > * If you have an existing integration using this endpoint, reach out to your Adyen
   * contact and [migrate to the Checkout
   * API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).
   *
   * >The Checkout API enables your [online payments](https://docs.adyen.com/online-payments)
   * integration to accept all supported payment methods, use the latest features, and access more
   * benefits.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Payments.PostAuthoriseError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postAuthorise(
    request: Payments.PostAuthoriseRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentResult, Payments.PostAuthoriseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/authorise"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => paymentRequest1Schema)) },
      },
      {
        success: { kind: "json", schema: paymentResultSchema },
        errorFactory: Payments.PostAuthoriseError,
      },
      options,
    );
  }

  /**
   * Complete a 3DS authorisation
   *
   * @remarks
   * For an authenticated 3D Secure session, completes the payment authorisation. This endpoint must
   * receive the `md` and `paResponse` parameters that you get from the card issuer after a shopper
   * pays via 3D Secure.
   *
   * > This endpoint is
   * [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle)
   * and is no longer supported for new integrations. > * If you are building a new integration, use
   * the Checkout API
   * [`/payments/details`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/details)
   * endpoint instead. > * If you have an existing integration using this endpoint, reach out to
   * your Adyen contact and [migrate to the Checkout
   * API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).
   *
   * > The Checkout API enables your [online payments](https://docs.adyen.com/online-payments)
   * integration to accept all supported payment methods, use the latest features, and access more
   * benefits.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Payments.PostAuthorise3DError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postAuthorise3D(
    request: Payments.PostAuthorise3DRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentResult, Payments.PostAuthorise3DError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/authorise3d"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => paymentRequest3DSchema)) },
      },
      {
        success: { kind: "json", schema: paymentResultSchema },
        errorFactory: Payments.PostAuthorise3DError,
      },
      options,
    );
  }

  /**
   * Complete a 3DS2 authorisation
   *
   * @remarks
   * For an authenticated 3D Secure 2 session, completes the payment authorisation. This endpoint
   * must receive the `threeDS2Token` and `threeDS2Result` parameters.
   *
   * > This endpoint is
   * [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle)
   * and is no longer supported for new integrations. > * If you are building a new integration, use
   * the Checkout API
   * [`/payments/details`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/details)
   * endpoint instead. > * If you have an existing integration using this endpoint, reach out to
   * your Adyen contact and [migrate to the Checkout
   * API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).
   *
   * >The Checkout API enables your [online payments](https://docs.adyen.com/online-payments)
   * integration to accept all supported payment methods, use the latest features, and access more
   * benefits.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Payments.PostAuthorise3Ds2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postAuthorise3Ds2(
    request: Payments.PostAuthorise3Ds2Request,
    options?: RequestOptions,
  ): ApiPromise<PaymentResult, Payments.PostAuthorise3Ds2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/authorise3ds2"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paymentRequest3Ds2Schema)),
        },
      },
      {
        success: { kind: "json", schema: paymentResultSchema },
        errorFactory: Payments.PostAuthorise3Ds2Error,
      },
      options,
    );
  }

  /**
   * Get the brands and other details of a card
   *
   * @remarks
   * Use this endpoint to get information about the card or network token that enables you to decide
   * on the routing of the transaction and the eligibility of the card for the type of transaction.
   *
   * If you include [your supported
   * brands](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/cardDetails__reqParam_supportedBrands)
   * in the request, the response also tells you if you support each [brand that was identified on
   * the
   * card](https://docs.adyen.com/api-explorer/Checkout/latest/post/cardDetails#responses-200-brands).
   *
   * If you have an API-only integration and collect card data, use this endpoint to find out if the
   * shopper's card is co-bad. For co-badged cards, you must let the shopper choose the brand to pay
   * with if you support both brands.
   *
   * ## Server-side API libraries
   * We provide open-source [server-side API
   * libraries](https://docs.adyen.com/development-resources/libraries/) in several languages:
   * - PHP
   * - Java
   * - Node.js
   * - .NET
   * - Go
   * - Python
   * - Ruby
   * - Apex (beta)
   *
   * See our [integration
   * examples](https://github.com/adyen-examples#%EF%B8%8F-official-integration-examples) for
   * example uses of the libraries.
   *
   * ## Developer resources
   * BIN Lookup API is available through a Postman collection. Click the button below to create a
   * fork, then set the environment variables at **Environments**&nbsp;>&nbsp;**Adyen&nbsp;APIs**.
   *
   * [![Run in
   * Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/25716737-677c7679-a695-4ebb-91da-68b4e7c9228a?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D25716737-677c7679-a695-4ebb-91da-68b4e7c9228a%26entityType%3Dcollection%26workspaceId%3Da8d63f9f-cfc7-4810-90c5-9e0c60030d3e#?env%5BAdyen%20APIs%5D=W3sia2V5IjoiWC1BUEktS2V5IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoic2VjcmV0In0seyJrZXkiOiJZT1VSX01FUkNIQU5UX0FDQ09VTlQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0In0seyJrZXkiOiJZT1VSX0NPTVBBTllfQUNDT1VOVCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6IllPVVJfQkFMQU5DRV9QTEFURk9STSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCardDetails(
    request: Payments.PostCardDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<CardDetailsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cardDetails"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => cardDetailsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: cardDetailsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get the 3DS authentication result
   *
   * @remarks
   * Return the authentication result after doing a 3D Secure authentication only.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Payments.PostGetAuthenticationResultError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postGetAuthenticationResult(
    request: Payments.PostGetAuthenticationResultRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthenticationResultResponse, Payments.PostGetAuthenticationResultError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/getAuthenticationResult"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => authenticationResultRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: authenticationResultResponseSchema },
        errorFactory: Payments.PostGetAuthenticationResultError,
      },
      options,
    );
  }

  /**
   * Get a list of available payment methods
   *
   * @remarks
   * Retrieves the list of available payment methods for the transaction, based on the transaction
   * information like amount, country, and currency.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Payments.PostPaymentMethodsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentMethods(
    request: Payments.PostPaymentMethodsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentMethodsResponse, Payments.PostPaymentMethodsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/paymentMethods"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paymentMethodsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: paymentMethodsResponseSchema },
        errorFactory: Payments.PostPaymentMethodsError,
      },
      options,
    );
  }

  /**
   * Start a transaction
   *
   * @remarks
   * Sends payment parameters (like amount, country, and currency) together with other required
   * input details collected from the shopper. To know more about required parameters for specific
   * payment methods, refer to our [payment method guides](https://docs.adyen.com/payment-methods).
   * The response depends on the [payment
   * flow](https://docs.adyen.com/payment-methods#payment-flow):
   * * For a direct flow, the response includes a `pspReference` and a `resultCode` with the payment
   *   result, for example **Authorised** or **Refused**.
   * * For a redirect or additional action, the response contains an `action` object.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Payments.PostPaymentsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPayments(
    request: Payments.PostPaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentResponse, Payments.PostPaymentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payments"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => paymentRequestSchema)) },
      },
      {
        success: { kind: "json", schema: paymentResponseSchema },
        errorFactory: Payments.PostPaymentsError,
      },
      options,
    );
  }

  /**
   * Cancel payment
   *
   * @remarks
   * Cancels the payment. Returns a URL for user redirection.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link Payments.PostPaymentsCancelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentsCancel(
    request: Payments.PostPaymentsCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelPaymentResponse, Payments.PostPaymentsCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default20("/payments/cancel"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cancelPaymentRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelPaymentResponseSchema },
        errorFactory: Payments.PostPaymentsCancelError,
      },
      options,
    );
  }

  /**
   * Confirm payment
   *
   * @remarks
   * Confirms the payment using Strong Customer Authentication (SCA).
   *
   * To confirm a payment you must make this request two times:
   *
   *     1. Make this request to initiate SCA and receive the WWW-Authenticate header.
   *     2. After the user completes the SCA challenge, make this request again, including the
   *        updated WWW-Authenticate header.
   *
   * The second response provides a redirection URL that guides the user to a payment success or
   * failure page. For more information, see our
   * [documentation](https://docs.adyen.com/business-accounts/send-funds-ideal-integration).
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link Payments.PostPaymentsConfirmError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentsConfirm(
    request: Payments.PostPaymentsConfirmRequest,
    options?: RequestOptions,
  ): ApiPromise<ConfirmPaymentResponse, Payments.PostPaymentsConfirmError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default20("/payments/confirm"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "WWW-Authenticate", value: request.wwwAuthenticate, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: confirmPaymentRequestSchema },
      },
      {
        success: { kind: "json", schema: confirmPaymentResponseSchema },
        errorFactory: Payments.PostPaymentsConfirmError,
      },
      options,
    );
  }

  /**
   * Submit details for a payment
   *
   * @remarks
   * Submits details for a payment created using `/payments`. This step is only needed when no final
   * state has been reached on the `/payments` request, for example when the shopper was redirected
   * to another page to complete the payment.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Payments.PostPaymentsDetailsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentsDetails(
    request: Payments.PostPaymentsDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentDetailsResponse, Payments.PostPaymentsDetailsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payments/details"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paymentDetailsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: paymentDetailsResponseSchema },
        errorFactory: Payments.PostPaymentsDetailsError,
      },
      options,
    );
  }

  /**
   * Retrieve payment details
   *
   * @remarks
   * Returns the details of an open payment, which you must show to the user. Also provides a token
   * required to
   * [confirm](https://docs.adyen.com/api-explorer/a2a-payments/latest/post/payments/confirm) or
   * [cancel](https://docs.adyen.com/api-explorer/a2a-payments/latest/post/payments/cancel) the
   * payment.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link Payments.PostPaymentsDetails1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentsDetails1(
    request: Payments.PostPaymentsDetails1Request,
    options?: RequestOptions,
  ): ApiPromise<PaymentDetailsResponse1, Payments.PostPaymentsDetails1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default20("/payments/details"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: idealPaymentDetailsRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentDetailsResponse1Schema },
        errorFactory: Payments.PostPaymentsDetails1Error,
      },
      options,
    );
  }

  /**
   * Get the 3DS2 authentication result
   *
   * @remarks
   * Retrieves the `threeDS2Result` after doing a 3D Secure 2 authentication only.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Payments.PostRetrieve3Ds2ResultError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postRetrieve3Ds2Result(
    request: Payments.PostRetrieve3Ds2ResultRequest,
    options?: RequestOptions,
  ): ApiPromise<ThreeDs2ResultResponse, Payments.PostRetrieve3Ds2ResultError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/retrieve3ds2Result"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => threeDs2ResultRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: threeDs2ResultResponseSchema },
        errorFactory: Payments.PostRetrieve3Ds2ResultError,
      },
      options,
    );
  }

  /**
   * Create a payment session
   *
   * @remarks
   * Creates a payment session for
   * [Drop-in](https://docs.adyen.com/online-payments/build-your-integration/sessions-flow/?platform=Web&integration=Drop-in),
   * [Components](https://docs.adyen.com/online-payments/build-your-integration/sessions-flow/?platform=Web&integration=Components),
   * and [Hosted
   * Checkout](https://docs.adyen.com/online-payments/build-your-integration/sessions-flow/?platform=Web&integration=Hosted+Checkout)
   * integrations.
   *
   * The response contains encrypted payment session data. The front end then uses the session data
   * to make any required server-side calls for the payment flow.
   *
   * You get the payment outcome asynchronously, in an
   * [AUTHORISATION](https://docs.adyen.com/api-explorer/#/Webhooks/latest/post/AUTHORISATION)
   * webhook.
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
  postSessions(
    request: Payments.PostSessionsRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateCheckoutSessionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sessions"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createCheckoutSessionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createCheckoutSessionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Payments {
  export type GetSessionsSessionIdRequest = {
    /** A unique identifier of the session. */
    sessionId: string;
    /** The `sessionResult` value from the Drop-in or Component. */
    sessionResult: string;
  };

  export type PostAuthoriseRequest = {
    body?: PaymentRequest1;
  };

  export class PostAuthoriseError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostAuthoriseError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostAuthorise3DRequest = {
    body?: PaymentRequest3D;
  };

  export class PostAuthorise3DError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostAuthorise3DError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostAuthorise3Ds2Request = {
    body?: PaymentRequest3Ds2;
  };

  export class PostAuthorise3Ds2Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostAuthorise3Ds2Error> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostCardDetailsRequest = {
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: CardDetailsRequest;
  };

  export type PostGetAuthenticationResultRequest = {
    body?: AuthenticationResultRequest;
  };

  export class PostGetAuthenticationResultError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostGetAuthenticationResultError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentMethodsRequest = {
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: PaymentMethodsRequest;
  };

  export class PostPaymentMethodsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPaymentMethodsError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentsRequest = {
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: PaymentRequest;
  };

  export class PostPaymentsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPaymentsError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentsCancelRequest = {
    body: CancelPaymentRequest;
  };

  export class PostPaymentsCancelError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostPaymentsCancelError> = [
      {
        on: 400,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostPaymentsConfirmRequest = {
    /**
     * Header for authenticating through SCA: Contains information for an SCA challenge for A2A
     * payments.
     */
    wwwAuthenticate?: string;
    body: ConfirmPaymentRequest;
  };

  export class PostPaymentsConfirmError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostPaymentsConfirmError> = [
      {
        on: 400,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 401,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostPaymentsDetailsRequest = {
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: PaymentDetailsRequest;
  };

  export class PostPaymentsDetailsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPaymentsDetailsError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentsDetails1Request = {
    body: IdealPaymentDetailsRequest;
  };

  export class PostPaymentsDetails1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostPaymentsDetails1Error> = [
      {
        on: 400,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostRetrieve3Ds2ResultRequest = {
    body?: ThreeDs2ResultRequest;
  };

  export class PostRetrieve3Ds2ResultError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostRetrieve3Ds2ResultError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostSessionsRequest = {
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: CreateCheckoutSessionRequest;
  };
}
