import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  adjustAuthorisationRequestSchema,
  type AdjustAuthorisationRequest,
} from "../models/adjust-authorisation-request.js";
import {
  cancelOrRefundRequestSchema,
  type CancelOrRefundRequest,
} from "../models/cancel-or-refund-request.js";
import { cancelRequestSchema, type CancelRequest } from "../models/cancel-request.js";
import { captureRequestSchema, type CaptureRequest } from "../models/capture-request.js";
import { donationRequestSchema, type DonationRequest } from "../models/donation-request.js";
import { modificationResultSchema, type ModificationResult } from "../models/modification-result.js";
import {
  paymentAmountUpdateRequestSchema,
  type PaymentAmountUpdateRequest,
} from "../models/payment-amount-update-request.js";
import {
  paymentAmountUpdateResponseSchema,
  type PaymentAmountUpdateResponse,
} from "../models/payment-amount-update-response.js";
import { paymentCancelRequestSchema, type PaymentCancelRequest } from "../models/payment-cancel-request.js";
import {
  paymentCancelResponseSchema,
  type PaymentCancelResponse,
} from "../models/payment-cancel-response.js";
import {
  paymentCaptureRequestSchema,
  type PaymentCaptureRequest,
} from "../models/payment-capture-request.js";
import {
  paymentCaptureResponseSchema,
  type PaymentCaptureResponse,
} from "../models/payment-capture-response.js";
import { paymentRefundRequestSchema, type PaymentRefundRequest } from "../models/payment-refund-request.js";
import {
  paymentRefundResponseSchema,
  type PaymentRefundResponse,
} from "../models/payment-refund-response.js";
import {
  paymentReversalRequestSchema,
  type PaymentReversalRequest,
} from "../models/payment-reversal-request.js";
import {
  paymentReversalResponseSchema,
  type PaymentReversalResponse,
} from "../models/payment-reversal-response.js";
import { refundRequestSchema, type RefundRequest } from "../models/refund-request.js";
import { serviceErrorSchema, type ServiceError } from "../models/service-error.js";
import {
  standalonePaymentCancelRequestSchema,
  type StandalonePaymentCancelRequest,
} from "../models/standalone-payment-cancel-request.js";
import {
  standalonePaymentCancelResponseSchema,
  type StandalonePaymentCancelResponse,
} from "../models/standalone-payment-cancel-response.js";
import {
  technicalCancelRequestSchema,
  type TechnicalCancelRequest,
} from "../models/technical-cancel-request.js";
import {
  voidPendingRefundRequestSchema,
  type VoidPendingRefundRequest,
} from "../models/void-pending-refund-request.js";
import type { Servers } from "../servers.js";

export class Modifications {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Change the authorised amount
   *
   * @remarks
   * Allows you to increase or decrease the authorised amount after the initial authorisation has
   * taken place. This functionality enables for example tipping, improving the chances your
   * authorisation will be valid, or charging the shopper when they have already left the merchant
   * premises.
   *
   * > This endpoint is
   * [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle)
   * and is no longer supported for new integrations. > * If you are building a new integration, use
   * the Checkout API
   * [`/payments/{paymentPspReference}/amountUpdates`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/(paymentPspReference)/amountUpdates)
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
   * @throws {@link Modifications.PostAdjustAuthorisationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postAdjustAuthorisation(
    request: Modifications.PostAdjustAuthorisationRequest,
    options?: RequestOptions,
  ): ApiPromise<ModificationResult, Modifications.PostAdjustAuthorisationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/adjustAuthorisation"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => adjustAuthorisationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: modificationResultSchema },
        errorFactory: Modifications.PostAdjustAuthorisationError,
      },
      options,
    );
  }

  /**
   * Cancel an authorisation
   *
   * @remarks
   * Cancels the authorisation hold on a payment, returning a unique reference for this request. You
   * can cancel payments after authorisation only for payment methods that support distinct
   * authorisations and captures.
   *
   * For more information, refer to
   * [Cancel](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/cancel).
   *
   * > This endpoint is
   * [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle)
   * and is no longer supported for new integrations. > * If you are building a new integration, use
   * the Checkout API
   * [`/payments/{paymentPspReference}/cancels`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/(paymentPspReference)/cancels)
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
   * @throws {@link Modifications.PostCancelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCancel(
    request: Modifications.PostCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<ModificationResult, Modifications.PostCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/cancel"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => cancelRequestSchema)) },
      },
      {
        success: { kind: "json", schema: modificationResultSchema },
        errorFactory: Modifications.PostCancelError,
      },
      options,
    );
  }

  /**
   * Cancel or refund a payment
   *
   * @remarks
   * Cancels a payment if it has not been captured yet, or refunds it if it has already been
   * captured. This is useful when it is not certain if the payment has been captured or not (for
   * example, when using auto-capture).
   *
   * Do not use this endpoint for payments that involve:
   *  * [Multiple partial captures](https://docs.adyen.com/online-payments/capture).
   *  * [Split
   *    data](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information)
   *    either at time of payment or capture for Adyen for Platforms.
   *
   * Instead, check if the payment has been captured and make a corresponding
   * [`/refund`](https://docs.adyen.com/api-explorer/#/Payment/refund) or
   * [`/cancel`](https://docs.adyen.com/api-explorer/#/Payment/cancel) call.
   *
   * For more information, refer to [Cancel or
   * refund](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/cancel-or-refund).
   *
   * > This endpoint is
   * [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle)
   * and is no longer supported for new integrations. > * If you are building a new integration, use
   * the Checkout API
   * [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/(paymentPspReference)/reversals)
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
   * @throws {@link Modifications.PostCancelOrRefundError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCancelOrRefund(
    request: Modifications.PostCancelOrRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<ModificationResult, Modifications.PostCancelOrRefundError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/cancelOrRefund"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => cancelOrRefundRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: modificationResultSchema },
        errorFactory: Modifications.PostCancelOrRefundError,
      },
      options,
    );
  }

  /**
   * Cancel an authorised payment
   *
   * @remarks
   * Cancels the authorisation on a payment that has not yet been
   * [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures),
   * and returns a unique reference for this request. You get the outcome of the request
   * asynchronously, in a [**TECHNICAL_CANCEL**
   * webhook](https://docs.adyen.com/online-payments/cancel#cancellation-webhook).
   *
   * If you want to cancel a payment using the
   * [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference),
   * use the
   * [`/payments/{paymentPspReference}/cancels`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/cancels)
   * endpoint instead.
   *
   * If you want to cancel a payment but are not sure whether it has been captured, use the
   * [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals)
   * endpoint instead.
   *
   * For more information, refer to [Cancel](https://docs.adyen.com/online-payments/cancel).
   *
   * @returns Created - the request has been fulfilled and has resulted in one or more new resources
   * being created.
   *
   * @throws {@link Modifications.PostCancelsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCancels(
    request: Modifications.PostCancelsRequest,
    options?: RequestOptions,
  ): ApiPromise<StandalonePaymentCancelResponse, Modifications.PostCancelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cancels"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => standalonePaymentCancelRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: standalonePaymentCancelResponseSchema },
        errorFactory: Modifications.PostCancelsError,
      },
      options,
    );
  }

  /**
   * Capture an authorisation
   *
   * @remarks
   * Captures the authorisation hold on a payment, returning a unique reference for this request.
   * Usually the full authorisation amount is captured, however it's also possible to capture a
   * smaller amount, which results in cancelling the remaining authorisation balance.
   *
   * Payment methods that are captured automatically after authorisation don't need to be captured.
   * However, submitting a capture request on these transactions will not result in double charges.
   * If immediate or delayed auto-capture is enabled, calling the capture method is not necessary.
   *
   * For more information refer to
   * [Capture](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/capture).
   *
   * > This endpoint is
   * [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle)
   * and is no longer supported for new integrations. > * If you are building a new integration, use
   * the Checkout API
   * [`/payments/{paymentPspReference}/captures`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/(paymentPspReference)/captures)
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
   * @throws {@link Modifications.PostCaptureError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCapture(
    request: Modifications.PostCaptureRequest,
    options?: RequestOptions,
  ): ApiPromise<ModificationResult, Modifications.PostCaptureError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/capture"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => captureRequestSchema)) },
      },
      {
        success: { kind: "json", schema: modificationResultSchema },
        errorFactory: Modifications.PostCaptureError,
      },
      options,
    );
  }

  /**
   * Create a donation
   *
   * @remarks
   * Schedules a new payment to be created (including a new authorisation request) for the specified
   * donation using the payment details of the original payment.
   *
   * > This endpoint is
   * [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle)
   * and is no longer supported for new integrations. > * If you are building a new integration, use
   * the Checkout API
   * [`/donations`](https://docs.adyen.com/api-explorer/Checkout/latest/post/donations) endpoint
   * instead. > * If you have an existing integration using this endpoint, reach out to your Adyen
   * contact and [migrate to the Checkout
   * API](https://docs.adyen.com/online-payments/upgrade-your-integration/migrate-to-checkout-api).
   *
   * > The Checkout API enables your [online payments](https://docs.adyen.com/online-payments)
   * integration to accept all supported payment methods, use the latest features, and access more
   * benefits.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Modifications.PostDonateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  postDonate(
    request: Modifications.PostDonateRequest,
    options?: RequestOptions,
  ): ApiPromise<ModificationResult, Modifications.PostDonateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/donate"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => donationRequestSchema)) },
      },
      {
        success: { kind: "json", schema: modificationResultSchema },
        errorFactory: Modifications.PostDonateError,
      },
      options,
    );
  }

  /**
   * Update an authorised amount
   *
   * @remarks
   * Increases or decreases the authorised payment amount and returns a unique reference for this
   * request. You get the outcome of the request asynchronously, in an [**AUTHORISATION_ADJUSTMENT**
   * webhook](https://docs.adyen.com/development-resources/webhooks/webhook-types/#event-codes).
   *
   * You can only update authorised amounts that have not yet been
   * [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures).
   *
   * The amount you specify in the request is the updated amount, which is larger or smaller than
   * the initial authorised amount.
   *
   * For more information, refer to [Authorisation
   * adjustment](https://docs.adyen.com/online-payments/adjust-authorisation#use-cases).
   *
   * @returns Created - the request has been fulfilled and has resulted in one or more new resources
   * being created.
   *
   * @throws {@link Modifications.PostPaymentsPaymentPspReferenceAmountUpdatesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentsPaymentPspReferenceAmountUpdates(
    request: Modifications.PostPaymentsPaymentPspReferenceAmountUpdatesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PaymentAmountUpdateResponse,
    Modifications.PostPaymentsPaymentPspReferenceAmountUpdatesError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payments/{paymentPspReference}/amountUpdates"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "paymentPspReference", value: request.paymentPspReference, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paymentAmountUpdateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: paymentAmountUpdateResponseSchema },
        errorFactory: Modifications.PostPaymentsPaymentPspReferenceAmountUpdatesError,
      },
      options,
    );
  }

  /**
   * Cancel an authorised payment
   *
   * @remarks
   * Cancels the authorisation on a payment that has not yet been
   * [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures),
   * and returns a unique reference for this request. You get the outcome of the request
   * asynchronously, in a [**CANCELLATION**
   * webhook](https://docs.adyen.com/online-payments/cancel#cancellation-webhook).
   *
   * If you want to cancel a payment but don't have the
   * [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference),
   * use the [`/cancels`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/cancels)
   * endpoint instead.
   *
   * If you want to cancel a payment but are not sure whether it has been captured, use the
   * [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals)
   * endpoint instead.
   *
   * For more information, refer to [Cancel](https://docs.adyen.com/online-payments/cancel).
   *
   * @returns Created - the request has been fulfilled and has resulted in one or more new resources
   * being created.
   *
   * @throws {@link Modifications.PostPaymentsPaymentPspReferenceCancelsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentsPaymentPspReferenceCancels(
    request: Modifications.PostPaymentsPaymentPspReferenceCancelsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentCancelResponse, Modifications.PostPaymentsPaymentPspReferenceCancelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payments/{paymentPspReference}/cancels"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "paymentPspReference", value: request.paymentPspReference, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paymentCancelRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: paymentCancelResponseSchema },
        errorFactory: Modifications.PostPaymentsPaymentPspReferenceCancelsError,
      },
      options,
    );
  }

  /**
   * Capture an authorised payment
   *
   * @remarks
   * Captures an authorised payment and returns a unique reference for this request. You get the
   * outcome of the request asynchronously, in a [**CAPTURE**
   * webhook](https://docs.adyen.com/online-payments/capture#capture-notification).
   *
   * You can capture either the full authorised amount or a part of the authorised amount. By
   * default, any unclaimed amount after a partial capture gets cancelled. This does not apply if
   * you enabled multiple partial captures on your account and the payment method supports multiple
   * partial captures.
   *
   * [Automatic capture](https://docs.adyen.com/online-payments/capture#automatic-capture) is the
   * default setting for most payment methods. In these cases, you don't need to make capture
   * requests. However, making capture requests for payments that are captured automatically does
   * not result in double charges.
   *
   * For more information, refer to [Capture](https://docs.adyen.com/online-payments/capture).
   *
   * @returns Created - the request has been fulfilled and has resulted in one or more new resources
   * being created.
   *
   * @throws {@link Modifications.PostPaymentsPaymentPspReferenceCapturesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentsPaymentPspReferenceCaptures(
    request: Modifications.PostPaymentsPaymentPspReferenceCapturesRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentCaptureResponse, Modifications.PostPaymentsPaymentPspReferenceCapturesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payments/{paymentPspReference}/captures"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "paymentPspReference", value: request.paymentPspReference, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paymentCaptureRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: paymentCaptureResponseSchema },
        errorFactory: Modifications.PostPaymentsPaymentPspReferenceCapturesError,
      },
      options,
    );
  }

  /**
   * Refund a captured payment
   *
   * @remarks
   * Refunds a payment that has been
   * [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures),
   * and returns a unique reference for this request. You get the outcome of the request
   * asynchronously, in a [**REFUND**
   * webhook](https://docs.adyen.com/online-payments/refund#refund-webhook).
   *
   * You can refund either the full captured amount or a part of the captured amount. You can also
   * perform multiple partial refunds, as long as their sum doesn't exceed the captured amount.
   *
   * > Some payment methods do not support partial refunds. To learn if a payment method supports
   * partial refunds, refer to the payment method page such as
   * [cards](https://docs.adyen.com/payment-methods/cards#supported-cards),
   * [iDEAL](https://docs.adyen.com/payment-methods/ideal), or
   * [Klarna](https://docs.adyen.com/payment-methods/klarna).
   *
   * If you want to refund a payment but are not sure whether it has been captured, use the
   * [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals)
   * endpoint instead.
   *
   * For more information, refer to [Refund](https://docs.adyen.com/online-payments/refund).
   *
   * @returns Created - the request has been fulfilled and has resulted in one or more new resources
   * being created.
   *
   * @throws {@link Modifications.PostPaymentsPaymentPspReferenceRefundsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentsPaymentPspReferenceRefunds(
    request: Modifications.PostPaymentsPaymentPspReferenceRefundsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentRefundResponse, Modifications.PostPaymentsPaymentPspReferenceRefundsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payments/{paymentPspReference}/refunds"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "paymentPspReference", value: request.paymentPspReference, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paymentRefundRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: paymentRefundResponseSchema },
        errorFactory: Modifications.PostPaymentsPaymentPspReferenceRefundsError,
      },
      options,
    );
  }

  /**
   * Refund or cancel a payment
   *
   * @remarks
   * [Refunds](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/refunds)
   * a payment if it has already been captured, and
   * [cancels](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/cancels)
   * a payment if it has not yet been captured. Returns a unique reference for this request. You get
   * the outcome of the request asynchronously, in a [**CANCEL_OR_REFUND**
   * webhook](https://docs.adyen.com/online-payments/reversal/#cancel-or-refund-webhook).
   *
   * The reversed amount is always the full payment amount. > Do not use this request for payments
   * that involve multiple partial captures.
   *
   * For more information, refer to [Reversal](https://docs.adyen.com/online-payments/reversal).
   *
   * @returns Created - the request has been fulfilled and has resulted in one or more new resources
   * being created.
   *
   * @throws {@link Modifications.PostPaymentsPaymentPspReferenceReversalsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentsPaymentPspReferenceReversals(
    request: Modifications.PostPaymentsPaymentPspReferenceReversalsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentReversalResponse, Modifications.PostPaymentsPaymentPspReferenceReversalsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payments/{paymentPspReference}/reversals"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "paymentPspReference", value: request.paymentPspReference, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paymentReversalRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: paymentReversalResponseSchema },
        errorFactory: Modifications.PostPaymentsPaymentPspReferenceReversalsError,
      },
      options,
    );
  }

  /**
   * Refund a captured payment
   *
   * @remarks
   * Refunds a payment that has previously been captured, returning a unique reference for this
   * request. Refunding can be done on the full captured amount or a partial amount. Multiple
   * (partial) refunds will be accepted as long as their sum doesn't exceed the captured amount.
   * Payments which have been authorised, but not captured, cannot be refunded, use the /cancel
   * method instead.
   *
   * Some payment methods/gateways do not support partial/multiple refunds. A margin above the
   * captured limit can be configured to cover shipping/handling costs.
   *
   * For more information, refer to
   * [Refund](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/refund).
   *
   * > This endpoint is
   * [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle)
   * and is no longer supported for new integrations. > * If you are building a new integration, use
   * the Checkout API
   * [`/payments/{paymentPspReference}/refunds`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/(paymentPspReference)/refunds)
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
   * @throws {@link Modifications.PostRefundError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postRefund(
    request: Modifications.PostRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<ModificationResult, Modifications.PostRefundError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/refund"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => refundRequestSchema)) },
      },
      {
        success: { kind: "json", schema: modificationResultSchema },
        errorFactory: Modifications.PostRefundError,
      },
      options,
    );
  }

  /**
   * Cancel an authorisation using your reference
   *
   * @remarks
   * This endpoint allows you to cancel a payment if you do not have the PSP reference of the
   * original payment request available.
   *
   * In your call, refer to the original payment by using the `reference` that you specified in your
   * payment request.
   *
   * For more information, see [Technical
   * cancel](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/cancel#technical-cancel).
   *
   * > This endpoint is
   * [inactive](https://docs.adyen.com/online-payments/upgrade-your-integration#checkout-api-lifecycle)
   * and is no longer supported for new integrations. > * If you are building a new integration, use
   * the Checkout API [`/cancels`](https://docs.adyen.com/api-explorer/Checkout/latest/post/cancels)
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
   * @throws {@link Modifications.PostTechnicalCancelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postTechnicalCancel(
    request: Modifications.PostTechnicalCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<ModificationResult, Modifications.PostTechnicalCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/technicalCancel"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => technicalCancelRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: modificationResultSchema },
        errorFactory: Modifications.PostTechnicalCancelError,
      },
      options,
    );
  }

  /**
   * Cancel an in-person refund
   *
   * @remarks
   * This endpoint allows you to cancel an unreferenced refund request before it has been completed.
   *
   * In your call, you can refer to the original refund request either by using the
   * `tenderReference`, or the `pspReference`. We recommend implementing based on the
   * `tenderReference`, as this is generated for both offline and online transactions.
   *
   * For more information, refer to [Cancel an unreferenced
   * refund](https://docs.adyen.com/point-of-sale/basic-tapi-integration/refund-payment/cancel-unreferenced).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link Modifications.PostVoidPendingRefundError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postVoidPendingRefund(
    request: Modifications.PostVoidPendingRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<ModificationResult, Modifications.PostVoidPendingRefundError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/voidPendingRefund"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => voidPendingRefundRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: modificationResultSchema },
        errorFactory: Modifications.PostVoidPendingRefundError,
      },
      options,
    );
  }
}

export namespace Modifications {
  export type PostAdjustAuthorisationRequest = {
    body?: AdjustAuthorisationRequest;
  };

  export class PostAdjustAuthorisationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostAdjustAuthorisationError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostCancelRequest = {
    body?: CancelRequest;
  };

  export class PostCancelError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCancelError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostCancelOrRefundRequest = {
    body?: CancelOrRefundRequest;
  };

  export class PostCancelOrRefundError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCancelOrRefundError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostCancelsRequest = {
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: StandalonePaymentCancelRequest;
  };

  export class PostCancelsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCancelsError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostCaptureRequest = {
    body?: CaptureRequest;
  };

  export class PostCaptureError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCaptureError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostDonateRequest = {
    body?: DonationRequest;
  };

  export class PostDonateError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostDonateError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentsPaymentPspReferenceAmountUpdatesRequest = {
    /**
     * The
     * [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference)
     * of the payment.
     */
    paymentPspReference: string;
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: PaymentAmountUpdateRequest;
  };

  export class PostPaymentsPaymentPspReferenceAmountUpdatesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPaymentsPaymentPspReferenceAmountUpdatesError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentsPaymentPspReferenceCancelsRequest = {
    /**
     * The
     * [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference)
     * of the payment that you want to cancel.
     */
    paymentPspReference: string;
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: PaymentCancelRequest;
  };

  export class PostPaymentsPaymentPspReferenceCancelsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPaymentsPaymentPspReferenceCancelsError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentsPaymentPspReferenceCapturesRequest = {
    /**
     * The
     * [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference)
     * of the payment that you want to capture.
     */
    paymentPspReference: string;
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: PaymentCaptureRequest;
  };

  export class PostPaymentsPaymentPspReferenceCapturesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPaymentsPaymentPspReferenceCapturesError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentsPaymentPspReferenceRefundsRequest = {
    /**
     * The
     * [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference)
     * of the payment that you want to refund.
     */
    paymentPspReference: string;
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: PaymentRefundRequest;
  };

  export class PostPaymentsPaymentPspReferenceRefundsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPaymentsPaymentPspReferenceRefundsError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentsPaymentPspReferenceReversalsRequest = {
    /**
     * The
     * [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference)
     * of the payment that you want to reverse.
     */
    paymentPspReference: string;
    /**
     * A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     */
    idempotencyKey?: string;
    body?: PaymentReversalRequest;
  };

  export class PostPaymentsPaymentPspReferenceReversalsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPaymentsPaymentPspReferenceReversalsError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostRefundRequest = {
    body?: RefundRequest;
  };

  export class PostRefundError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostRefundError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostTechnicalCancelRequest = {
    body?: TechnicalCancelRequest;
  };

  export class PostTechnicalCancelError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostTechnicalCancelError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostVoidPendingRefundRequest = {
    body?: VoidPendingRefundRequest;
  };

  export class PostVoidPendingRefundError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError", ServiceError>
      | Declared<"serviceError2", ServiceError>
      | Declared<"serviceError3", ServiceError>
      | Declared<"serviceError4", ServiceError>
      | Declared<"serviceError5", ServiceError>
    >;

    static readonly errors: ErrorDecoders<PostVoidPendingRefundError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }
}
