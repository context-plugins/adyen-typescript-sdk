import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { boardingTokenRequestSchema, type BoardingTokenRequest } from "../models/boarding-token-request.js";
import {
  boardingTokenResponseSchema,
  type BoardingTokenResponse,
} from "../models/boarding-token-response.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import { paymentsAppResponseSchema, type PaymentsAppResponse } from "../models/payments-app-response.js";
import type { Servers } from "../servers.js";

export class PaymentsApp {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  getMerchantsMerchantIdPaymentsApps(
    request: PaymentsApp.GetMerchantsMerchantIdPaymentsAppsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentsAppResponse, PaymentsApp.GetMerchantsMerchantIdPaymentsAppsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default26("/merchants/{merchantId}/paymentsApps"),
        auth: noneAuth,
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [
          { name: "statuses", value: request.statuses, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 10) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentsAppResponseSchema },
        errorFactory: PaymentsApp.GetMerchantsMerchantIdPaymentsAppsError,
      },
      options,
    );
  }

  getMerchantsMerchantIdStoresStoreIdPaymentsApps(
    request: PaymentsApp.GetMerchantsMerchantIdStoresStoreIdPaymentsAppsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentsAppResponse, PaymentsApp.GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default26("/merchants/{merchantId}/stores/{storeId}/paymentsApps"),
        auth: noneAuth,
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "storeId", value: request.storeId, schema: s.string() },
        ],
        query: [
          { name: "statuses", value: request.statuses, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.number(), 10) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.number(), 0) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentsAppResponseSchema },
        errorFactory: PaymentsApp.GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError,
      },
      options,
    );
  }

  postMerchantsMerchantIdGeneratePaymentsAppBoardingToken(
    request: PaymentsApp.PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BoardingTokenResponse,
    PaymentsApp.PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default26("/merchants/{merchantId}/generatePaymentsAppBoardingToken"),
        auth: noneAuth,
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: boardingTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: boardingTokenResponseSchema },
        errorFactory: PaymentsApp.PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError,
      },
      options,
    );
  }

  postMerchantsMerchantIdPaymentsAppsInstallationIdRevoke(
    request: PaymentsApp.PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeRequest,
    options?: RequestOptions,
  ): ApiPromise<unknown, PaymentsApp.PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default26("/merchants/{merchantId}/paymentsApps/{installationId}/revoke"),
        auth: noneAuth,
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "installationId", value: request.installationId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: PaymentsApp.PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError,
      },
      options,
    );
  }

  postMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken(
    request: PaymentsApp.PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BoardingTokenResponse,
    PaymentsApp.PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default26(
          "/merchants/{merchantId}/stores/{storeId}/generatePaymentsAppBoardingToken",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "storeId", value: request.storeId, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: boardingTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: boardingTokenResponseSchema },
        errorFactory: PaymentsApp.PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError,
      },
      options,
    );
  }
}

export namespace PaymentsApp {
  export type GetMerchantsMerchantIdPaymentsAppsRequest = {
    merchantId: string;
    statuses?: string;
    limit?: number;
    offset?: number;
  };

  export class GetMerchantsMerchantIdPaymentsAppsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdPaymentsAppsError> = [
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
        on: 403,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type GetMerchantsMerchantIdStoresStoreIdPaymentsAppsRequest = {
    merchantId: string;
    storeId: string;
    statuses?: string;
    limit?: number;
    offset?: number;
  };

  export class GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError> = [
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
        on: 403,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenRequest = {
    merchantId: string;
    body: BoardingTokenRequest;
  };

  export class PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError> = [
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
        on: 403,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeRequest = {
    merchantId: string;
    installationId: string;
  };

  export class PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError> = [
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
        on: 500,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenRequest = {
    merchantId: string;
    storeId: string;
    body: BoardingTokenRequest;
  };

  export class PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError> = [
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
        on: 403,
        kind: "defaultErrorResponseEntity3",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity4",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 500,
        kind: "defaultErrorResponseEntity5",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
