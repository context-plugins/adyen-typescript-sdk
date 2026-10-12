import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Get a list of Payments Apps - merchant level
   *
   * @remarks
   * Returns the list of Payments App instances for the merchant account identified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Adyen Payments App role
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentsApp.GetMerchantsMerchantIdPaymentsAppsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchantsMerchantIdPaymentsApps(
    request: PaymentsApp.GetMerchantsMerchantIdPaymentsAppsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentsAppResponse, PaymentsApp.GetMerchantsMerchantIdPaymentsAppsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default26("/merchants/{merchantId}/paymentsApps"),
        auth: noneAuth,
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [
          { name: "statuses", value: request.statuses, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentsAppResponseSchema },
        errorFactory: PaymentsApp.GetMerchantsMerchantIdPaymentsAppsError,
      },
      options,
    );
  }

  /**
   * Get a list of Payments Apps - store level
   *
   * @remarks
   * Returns the list of Payments App instances for the store identified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Adyen Payments App role
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentsApp.GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchantsMerchantIdStoresStoreIdPaymentsApps(
    request: PaymentsApp.GetMerchantsMerchantIdStoresStoreIdPaymentsAppsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentsAppResponse, PaymentsApp.GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default26("/merchants/{merchantId}/stores/{storeId}/paymentsApps"),
        auth: noneAuth,
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "storeId", value: request.storeId, schema: s.string() },
        ],
        query: [
          { name: "statuses", value: request.statuses, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentsAppResponseSchema },
        errorFactory: PaymentsApp.GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError,
      },
      options,
    );
  }

  /**
   * Create a boarding token - merchant level
   *
   * @remarks
   * Creates a boarding token used to authenticate the installation of a Payments App instance on an
   * Android device. The boarding token is created for the `boardingRequestToken` of the Payments
   * App for the merchant account identified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Adyen Payments App role
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentsApp.PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default26("/merchants/{merchantId}/generatePaymentsAppBoardingToken"),
        auth: noneAuth,
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: boardingTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: boardingTokenResponseSchema },
        errorFactory: PaymentsApp.PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError,
      },
      options,
    );
  }

  /**
   * Revoke Payments App instance authentication
   *
   * @remarks
   * Revokes the authentication of the Payments App instance for the `installationId` and merchant
   * account identified in the path. This call revokes the authentication of the Payments App
   * instance with the `installationId` identified in the path for both merchant accounts and
   * stores.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Adyen Payments App role
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link PaymentsApp.PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postMerchantsMerchantIdPaymentsAppsInstallationIdRevoke(
    request: PaymentsApp.PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeRequest,
    options?: RequestOptions,
  ): ApiPromise<unknown, PaymentsApp.PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default26("/merchants/{merchantId}/paymentsApps/{installationId}/revoke"),
        auth: noneAuth,
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "installationId", value: request.installationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: PaymentsApp.PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError,
      },
      options,
    );
  }

  /**
   * Create a boarding token - store level
   *
   * @remarks
   * Creates a boarding token used to authenticate the installation of a Payments App instance on an
   * Android device. The boarding token is created for the `boardingRequestToken` of the Payments
   * App for the store identified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Adyen Payments App role
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * PaymentsApp.PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default26(
          "/merchants/{merchantId}/stores/{storeId}/generatePaymentsAppBoardingToken",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "storeId", value: request.storeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /**
     * The status of the Payments App. Comma-separated list of one or more values. If no value is
     * provided, the list returns all statuses.
     *
     * Possible values:
     *
     * * **BOARDING**
     *
     *  * **BOARDED**
     *
     *  * **REVOKED**
     */
    statuses?: string;
    /** The number of items to return. @default 10 */
    limit?: number;
    /** The number of items to skip. @default 0 */
    offset?: number;
  };

  export class GetMerchantsMerchantIdPaymentsAppsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

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
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the store. */
    storeId: string;
    /**
     * The status of the Payments App. Comma-separated list of one or more values. If no value is
     * provided, the list returns all statuses.
     *
     * Possible values:
     *
     * * **BOARDING**
     *
     *  * **BOARDED**
     *
     *  * **REVOKED**
     */
    statuses?: string;
    /** The number of items to return. @default 10 */
    limit?: number;
    /** The number of items to skip. @default 0 */
    offset?: number;
  };

  export class GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

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
    /** The unique identifier of the merchant account. */
    merchantId: string;
    body: BoardingTokenRequest;
  };

  export class PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

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
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the Payments App instance on a device. */
    installationId: string;
  };

  export class PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
    >;

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
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The unique identifier of the store. */
    storeId: string;
    body: BoardingTokenRequest;
  };

  export class PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity3", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity4", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity5", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError> =
      [
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
