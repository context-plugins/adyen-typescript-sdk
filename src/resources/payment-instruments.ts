import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  getPaymentInstrumentsId(
    request: PaymentInstruments.GetPaymentInstrumentsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentInstrument1, PaymentInstruments.GetPaymentInstrumentsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/paymentInstruments/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentInstrument1Schema },
        errorFactory: PaymentInstruments.GetPaymentInstrumentsIdError,
      },
      options,
    );
  }

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
        url: this.#servers.default13("/paymentInstruments/{id}/networkTokenActivationData"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: networkTokenActivationDataResponseSchema },
        errorFactory: PaymentInstruments.GetPaymentInstrumentsIdNetworkTokenActivationDataError,
      },
      options,
    );
  }

  getPaymentInstrumentsIdNetworkTokens(
    request: PaymentInstruments.GetPaymentInstrumentsIdNetworkTokensRequest,
    options?: RequestOptions,
  ): ApiPromise<ListNetworkTokensResponse, PaymentInstruments.GetPaymentInstrumentsIdNetworkTokensError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/paymentInstruments/{id}/networkTokens"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listNetworkTokensResponseSchema },
        errorFactory: PaymentInstruments.GetPaymentInstrumentsIdNetworkTokensError,
      },
      options,
    );
  }

  getPaymentInstrumentsIdReveal(
    request: PaymentInstruments.GetPaymentInstrumentsIdRevealRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentInstrumentRevealInfo, PaymentInstruments.GetPaymentInstrumentsIdRevealError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/paymentInstruments/{id}/reveal"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentInstrumentRevealInfoSchema },
        errorFactory: PaymentInstruments.GetPaymentInstrumentsIdRevealError,
      },
      options,
    );
  }

  getPaymentInstrumentsIdTransactionRules(
    request: PaymentInstruments.GetPaymentInstrumentsIdTransactionRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionRulesResponse, PaymentInstruments.GetPaymentInstrumentsIdTransactionRulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/paymentInstruments/{id}/transactionRules"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionRulesResponseSchema },
        errorFactory: PaymentInstruments.GetPaymentInstrumentsIdTransactionRulesError,
      },
      options,
    );
  }

  patchPaymentInstrumentsId(
    request: PaymentInstruments.PatchPaymentInstrumentsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdatePaymentInstrument, PaymentInstruments.PatchPaymentInstrumentsIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default13("/paymentInstruments/{id}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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

  postPaymentInstruments(
    request: PaymentInstruments.PostPaymentInstrumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentInstrument1, PaymentInstruments.PostPaymentInstrumentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default13("/paymentInstruments"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
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
        url: this.#servers.default13("/paymentInstruments/{id}/networkTokenActivationData"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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

  postPaymentInstrumentsReveal(
    request: PaymentInstruments.PostPaymentInstrumentsRevealRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentInstrumentRevealResponse, PaymentInstruments.PostPaymentInstrumentsRevealError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default13("/paymentInstruments/reveal"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
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
    id: string;
  };

  export class GetPaymentInstrumentsIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetPaymentInstrumentsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetPaymentInstrumentsIdNetworkTokenActivationDataRequest = {
    id: string;
  };

  export class GetPaymentInstrumentsIdNetworkTokenActivationDataError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetPaymentInstrumentsIdNetworkTokenActivationDataError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetPaymentInstrumentsIdNetworkTokensRequest = {
    id: string;
  };

  export class GetPaymentInstrumentsIdNetworkTokensError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetPaymentInstrumentsIdNetworkTokensError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetPaymentInstrumentsIdRevealRequest = {
    id: string;
  };

  export class GetPaymentInstrumentsIdRevealError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetPaymentInstrumentsIdRevealError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetPaymentInstrumentsIdTransactionRulesRequest = {
    id: string;
  };

  export class GetPaymentInstrumentsIdTransactionRulesError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetPaymentInstrumentsIdTransactionRulesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchPaymentInstrumentsIdRequest = {
    id: string;
    body?: PaymentInstrumentUpdateRequest;
  };

  export class PatchPaymentInstrumentsIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
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

  export class PostPaymentInstrumentsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostPaymentInstrumentsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostPaymentInstrumentsIdNetworkTokenActivationDataRequest = {
    id: string;
    body?: NetworkTokenActivationDataRequest;
  };

  export class PostPaymentInstrumentsIdNetworkTokenActivationDataError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
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

  export class PostPaymentInstrumentsRevealError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostPaymentInstrumentsRevealError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
