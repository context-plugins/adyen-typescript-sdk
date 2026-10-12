import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  calculateGrantOfferRequestSchema,
  type CalculateGrantOfferRequest,
} from "../models/calculate-grant-offer-request.js";
import { calculatedGrantOfferSchema, type CalculatedGrantOffer } from "../models/calculated-grant-offer.js";
import {
  createGrantOfferRequestSchema,
  type CreateGrantOfferRequest,
} from "../models/create-grant-offer-request.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import { financingTypeSchema, type FinancingType } from "../models/financing-type.js";
import {
  getDynamicOffersResponseSchema,
  type GetDynamicOffersResponse,
} from "../models/get-dynamic-offers-response.js";
import { grantOffer1Schema, type GrantOffer1 } from "../models/grant-offer1.js";
import type { Servers } from "../servers.js";

export class DynamicOffers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get all available dynamic offers
   *
   * @remarks
   * Returns a list of all [dynamic
   * offers](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/) available for
   * `accountHolderId` specified as a query parameter.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link DynamicOffers.GetDynamicOffersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDynamicOffers(
    request: DynamicOffers.GetDynamicOffersRequest,
    options?: RequestOptions,
  ): ApiPromise<GetDynamicOffersResponse, DynamicOffers.GetDynamicOffersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default15("/dynamicOffers"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "accountHolderId", value: request.accountHolderId, schema: s.string() },
          {
            name: "financingType",
            value: request.financingType,
            schema: s.optional(s.lazy(() => financingTypeSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getDynamicOffersResponseSchema },
        errorFactory: DynamicOffers.GetDynamicOffersError,
      },
      options,
    );
  }

  /**
   * Calculate a preliminary offer for a selected financing amount
   *
   * @remarks
   * Calculates a preliminary offer for the financing amount that the user selected from a [dynamic
   * offer](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/). The preliminary offer
   * is for informational purposes only and cannot be used to initiate a grant.
   *
   * Requests to this endpoint are subject to rate limits:
   *
   * - Live environments: 120 requests per minute.
   *
   * - Test environments: 120 requests per minute.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link DynamicOffers.PostDynamicOffersIdCalculateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDynamicOffersIdCalculate(
    request: DynamicOffers.PostDynamicOffersIdCalculateRequest,
    options?: RequestOptions,
  ): ApiPromise<CalculatedGrantOffer, DynamicOffers.PostDynamicOffersIdCalculateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default15("/dynamicOffers/{id}/calculate"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => calculateGrantOfferRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: calculatedGrantOfferSchema },
        errorFactory: DynamicOffers.PostDynamicOffersIdCalculateError,
      },
      options,
    );
  }

  /**
   * Create a static offer for a selected financing amount
   *
   * @remarks
   * Creates a static offer for the financing amount that the user selected from the [dynamic
   * offer](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/).
   *
   * Requests to this endpoint are subject to rate limits:
   *
   * - Live environments: 30 requests per minute.
   *
   * - Test environments: 30 requests per minute.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link DynamicOffers.PostDynamicOffersIdGrantOfferError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDynamicOffersIdGrantOffer(
    request: DynamicOffers.PostDynamicOffersIdGrantOfferRequest,
    options?: RequestOptions,
  ): ApiPromise<GrantOffer1, DynamicOffers.PostDynamicOffersIdGrantOfferError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default15("/dynamicOffers/{id}/grantOffer"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createGrantOfferRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: grantOffer1Schema },
        errorFactory: DynamicOffers.PostDynamicOffersIdGrantOfferError,
      },
      options,
    );
  }
}

export namespace DynamicOffers {
  export type GetDynamicOffersRequest = {
    /** The unique identifier of the account holder that the dynamic offer is for. */
    accountHolderId: string;
    /**
     * The type of financing that the offer is for. If the value is not specified, returns all
     * available types.
     *
     * Possible values: **businessFinancing**
     */
    financingType?: FinancingType;
  };

  export class GetDynamicOffersError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetDynamicOffersError> = [
      {
        on: 422,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostDynamicOffersIdCalculateRequest = {
    /**
     * The unique identifier of the dynamic offer from which the user selected the financing amount.
     */
    id: string;
    body?: CalculateGrantOfferRequest;
  };

  export class PostDynamicOffersIdCalculateError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostDynamicOffersIdCalculateError> = [
      {
        on: 422,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostDynamicOffersIdGrantOfferRequest = {
    /**
     * The unique identifier of the dynamic offer from which the user selected the financing amount.
     */
    id: string;
    body?: CreateGrantOfferRequest;
  };

  export class PostDynamicOffersIdGrantOfferError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<PostDynamicOffersIdGrantOfferError> = [
      {
        on: 422,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
