import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  getSessionsSessionId(
    request: Payments.GetSessionsSessionIdRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionResultResponse, ResponseError> {
    return this.#rawClient.execute<SessionResultResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/sessions/{sessionId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "sessionId", value: request.sessionId, schema: s.string() }],
        query: [{ name: "sessionResult", value: request.sessionResult, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionResultResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  postAuthorise(
    request: Payments.PostAuthoriseRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentResult, Payments.PostAuthoriseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default1("/authorise"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => paymentRequest1Schema)) },
      },
      {
        success: { kind: "json", schema: paymentResultSchema },
        errorFactory: Payments.PostAuthoriseError,
      },
      options,
    );
  }

  postAuthorise3D(
    request: Payments.PostAuthorise3DRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentResult, Payments.PostAuthorise3DError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default1("/authorise3d"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => paymentRequest3DSchema)) },
      },
      {
        success: { kind: "json", schema: paymentResultSchema },
        errorFactory: Payments.PostAuthorise3DError,
      },
      options,
    );
  }

  postAuthorise3Ds2(
    request: Payments.PostAuthorise3Ds2Request,
    options?: RequestOptions,
  ): ApiPromise<PaymentResult, Payments.PostAuthorise3Ds2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default1("/authorise3ds2"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postCardDetails(
    request: Payments.PostCardDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<CardDetailsResponse, ResponseError> {
    return this.#rawClient.execute<CardDetailsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/cardDetails"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => cardDetailsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: cardDetailsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  postGetAuthenticationResult(
    request: Payments.PostGetAuthenticationResultRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthenticationResultResponse, Payments.PostGetAuthenticationResultError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default1("/getAuthenticationResult"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postPaymentMethods(
    request: Payments.PostPaymentMethodsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentMethodsResponse, Payments.PostPaymentMethodsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/paymentMethods"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postPayments(
    request: Payments.PostPaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentResponse, Payments.PostPaymentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payments"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postPaymentsCancel(
    request: Payments.PostPaymentsCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelPaymentResponse, Payments.PostPaymentsCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default20("/payments/cancel"),
        auth: noneAuth,
        body: { kind: "json", value: request.body, schema: cancelPaymentRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelPaymentResponseSchema },
        errorFactory: Payments.PostPaymentsCancelError,
      },
      options,
    );
  }

  postPaymentsConfirm(
    request: Payments.PostPaymentsConfirmRequest,
    options?: RequestOptions,
  ): ApiPromise<ConfirmPaymentResponse, Payments.PostPaymentsConfirmError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default20("/payments/confirm"),
        auth: noneAuth,
        headers: [
          { name: "WWW-Authenticate", value: request.wwwAuthenticate, schema: s.optional(s.string()) },
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

  postPaymentsDetails(
    request: Payments.PostPaymentsDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentDetailsResponse, Payments.PostPaymentsDetailsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payments/details"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postPaymentsDetails1(
    request: Payments.PostPaymentsDetails1Request,
    options?: RequestOptions,
  ): ApiPromise<PaymentDetailsResponse1, Payments.PostPaymentsDetails1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default20("/payments/details"),
        auth: noneAuth,
        body: { kind: "json", value: request.body, schema: idealPaymentDetailsRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentDetailsResponse1Schema },
        errorFactory: Payments.PostPaymentsDetails1Error,
      },
      options,
    );
  }

  postRetrieve3Ds2Result(
    request: Payments.PostRetrieve3Ds2ResultRequest,
    options?: RequestOptions,
  ): ApiPromise<ThreeDs2ResultResponse, Payments.PostRetrieve3Ds2ResultError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default1("/retrieve3ds2Result"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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

  postSessions(
    request: Payments.PostSessionsRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateCheckoutSessionResponse, ResponseError> {
    return this.#rawClient.execute<CreateCheckoutSessionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/sessions"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createCheckoutSessionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createCheckoutSessionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Payments {
  export type GetSessionsSessionIdRequest = {
    sessionId: string;
    sessionResult: string;
  };

  export type PostAuthoriseRequest = {
    body?: PaymentRequest1;
  };

  export class PostAuthoriseError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostAuthorise3DError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostAuthorise3Ds2Error extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostAuthorise3Ds2Error> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostCardDetailsRequest = {
    idempotencyKey?: string;
    body?: CardDetailsRequest;
  };

  export type PostGetAuthenticationResultRequest = {
    body?: AuthenticationResultRequest;
  };

  export class PostGetAuthenticationResultError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostGetAuthenticationResultError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentMethodsRequest = {
    idempotencyKey?: string;
    body?: PaymentMethodsRequest;
  };

  export class PostPaymentMethodsError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostPaymentMethodsError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentsRequest = {
    idempotencyKey?: string;
    body?: PaymentRequest;
  };

  export class PostPaymentsError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostPaymentsCancelError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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
    wwwAuthenticate?: string;
    body: ConfirmPaymentRequest;
  };

  export class PostPaymentsConfirmError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
  > {
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
    idempotencyKey?: string;
    body?: PaymentDetailsRequest;
  };

  export class PostPaymentsDetailsError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
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

  export class PostPaymentsDetails1Error extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
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

  export class PostRetrieve3Ds2ResultError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostRetrieve3Ds2ResultError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostSessionsRequest = {
    idempotencyKey?: string;
    body?: CreateCheckoutSessionRequest;
  };
}
