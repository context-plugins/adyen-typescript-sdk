import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  getPaymentLinksLinkId(
    request: PaymentLinks.GetPaymentLinksLinkIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentLinkResponse, PaymentLinks.GetPaymentLinksLinkIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/paymentLinks/{linkId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "linkId", value: request.linkId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentLinkResponseSchema },
        errorFactory: PaymentLinks.GetPaymentLinksLinkIdError,
      },
      options,
    );
  }

  patchPaymentLinksLinkId(
    request: PaymentLinks.PatchPaymentLinksLinkIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentLinkResponse, PaymentLinks.PatchPaymentLinksLinkIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default("/paymentLinks/{linkId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "linkId", value: request.linkId, schema: s.string() }],
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

  postPaymentLinks(
    request: PaymentLinks.PostPaymentLinksRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentLinkResponse, PaymentLinks.PostPaymentLinksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/paymentLinks"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
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
    linkId: string;
  };

  export class GetPaymentLinksLinkIdError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<GetPaymentLinksLinkIdError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PatchPaymentLinksLinkIdRequest = {
    linkId: string;
    body?: UpdatePaymentLinkRequest;
  };

  export class PatchPaymentLinksLinkIdError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchPaymentLinksLinkIdError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }

  export type PostPaymentLinksRequest = {
    idempotencyKey?: string;
    body?: PaymentLinkRequest;
  };

  export class PostPaymentLinksError extends ResponseError<
    | Declared<"serviceError", ServiceError>
    | Declared<"serviceError2", ServiceError>
    | Declared<"serviceError3", ServiceError>
    | Declared<"serviceError4", ServiceError>
    | Declared<"serviceError5", ServiceError>
  > {
    static readonly errors: ErrorDecoders<PostPaymentLinksError> = [
      { on: 400, kind: "serviceError", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 401, kind: "serviceError2", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 403, kind: "serviceError3", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 422, kind: "serviceError4", decode: { kind: "json", schema: serviceErrorSchema } },
      { on: 500, kind: "serviceError5", decode: { kind: "json", schema: serviceErrorSchema } },
    ];
  }
}
