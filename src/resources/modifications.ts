import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  postAdjustAuthorisation(
    request: Modifications.PostAdjustAuthorisationRequest,
    options?: RequestOptions,
  ): ApiPromise<ModificationResult, Modifications.PostAdjustAuthorisationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default1("/adjustAuthorisation"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postCancel(
    request: Modifications.PostCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<ModificationResult, Modifications.PostCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default1("/cancel"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => cancelRequestSchema)) },
      },
      {
        success: { kind: "json", schema: modificationResultSchema },
        errorFactory: Modifications.PostCancelError,
      },
      options,
    );
  }

  postCancelOrRefund(
    request: Modifications.PostCancelOrRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<ModificationResult, Modifications.PostCancelOrRefundError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default1("/cancelOrRefund"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postCancels(
    request: Modifications.PostCancelsRequest,
    options?: RequestOptions,
  ): ApiPromise<StandalonePaymentCancelResponse, Modifications.PostCancelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cancels"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postCapture(
    request: Modifications.PostCaptureRequest,
    options?: RequestOptions,
  ): ApiPromise<ModificationResult, Modifications.PostCaptureError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default1("/capture"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => captureRequestSchema)) },
      },
      {
        success: { kind: "json", schema: modificationResultSchema },
        errorFactory: Modifications.PostCaptureError,
      },
      options,
    );
  }

  postDonate(
    request: Modifications.PostDonateRequest,
    options?: RequestOptions,
  ): ApiPromise<ModificationResult, Modifications.PostDonateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default1("/donate"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => donationRequestSchema)) },
      },
      {
        success: { kind: "json", schema: modificationResultSchema },
        errorFactory: Modifications.PostDonateError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/payments/{paymentPspReference}/amountUpdates"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "paymentPspReference", value: request.paymentPspReference, schema: s.string() }],
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

  postPaymentsPaymentPspReferenceCancels(
    request: Modifications.PostPaymentsPaymentPspReferenceCancelsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentCancelResponse, Modifications.PostPaymentsPaymentPspReferenceCancelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payments/{paymentPspReference}/cancels"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "paymentPspReference", value: request.paymentPspReference, schema: s.string() }],
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

  postPaymentsPaymentPspReferenceCaptures(
    request: Modifications.PostPaymentsPaymentPspReferenceCapturesRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentCaptureResponse, Modifications.PostPaymentsPaymentPspReferenceCapturesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payments/{paymentPspReference}/captures"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "paymentPspReference", value: request.paymentPspReference, schema: s.string() }],
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

  postPaymentsPaymentPspReferenceRefunds(
    request: Modifications.PostPaymentsPaymentPspReferenceRefundsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentRefundResponse, Modifications.PostPaymentsPaymentPspReferenceRefundsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payments/{paymentPspReference}/refunds"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "paymentPspReference", value: request.paymentPspReference, schema: s.string() }],
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

  postPaymentsPaymentPspReferenceReversals(
    request: Modifications.PostPaymentsPaymentPspReferenceReversalsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentReversalResponse, Modifications.PostPaymentsPaymentPspReferenceReversalsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payments/{paymentPspReference}/reversals"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "paymentPspReference", value: request.paymentPspReference, schema: s.string() }],
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

  postRefund(
    request: Modifications.PostRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<ModificationResult, Modifications.PostRefundError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default1("/refund"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => refundRequestSchema)) },
      },
      {
        success: { kind: "json", schema: modificationResultSchema },
        errorFactory: Modifications.PostRefundError,
      },
      options,
    );
  }

  postTechnicalCancel(
    request: Modifications.PostTechnicalCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<ModificationResult, Modifications.PostTechnicalCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default1("/technicalCancel"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postVoidPendingRefund(
    request: Modifications.PostVoidPendingRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<ModificationResult, Modifications.PostVoidPendingRefundError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default1("/voidPendingRefund"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  export class PostAdjustAuthorisationError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostCancelError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostCancelOrRefundError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostCancelOrRefundError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostCancelsRequest = {
    idempotencyKey?: string;
    body?: StandalonePaymentCancelRequest;
  };

  export class PostCancelsError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostCaptureError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostDonateError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostDonateError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentsPaymentPspReferenceAmountUpdatesRequest = {
    paymentPspReference: string;
    idempotencyKey?: string;
    body?: PaymentAmountUpdateRequest;
  };

  export class PostPaymentsPaymentPspReferenceAmountUpdatesError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostPaymentsPaymentPspReferenceAmountUpdatesError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentsPaymentPspReferenceCancelsRequest = {
    paymentPspReference: string;
    idempotencyKey?: string;
    body?: PaymentCancelRequest;
  };

  export class PostPaymentsPaymentPspReferenceCancelsError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostPaymentsPaymentPspReferenceCancelsError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentsPaymentPspReferenceCapturesRequest = {
    paymentPspReference: string;
    idempotencyKey?: string;
    body?: PaymentCaptureRequest;
  };

  export class PostPaymentsPaymentPspReferenceCapturesError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostPaymentsPaymentPspReferenceCapturesError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentsPaymentPspReferenceRefundsRequest = {
    paymentPspReference: string;
    idempotencyKey?: string;
    body?: PaymentRefundRequest;
  };

  export class PostPaymentsPaymentPspReferenceRefundsError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostPaymentsPaymentPspReferenceRefundsError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentsPaymentPspReferenceReversalsRequest = {
    paymentPspReference: string;
    idempotencyKey?: string;
    body?: PaymentReversalRequest;
  };

  export class PostPaymentsPaymentPspReferenceReversalsError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostRefundError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostTechnicalCancelError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostVoidPendingRefundError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostVoidPendingRefundError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }
}
