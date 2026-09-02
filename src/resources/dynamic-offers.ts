import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  getDynamicOffers(
    request: DynamicOffers.GetDynamicOffersRequest,
    options?: RequestOptions,
  ): ApiPromise<GetDynamicOffersResponse, DynamicOffers.GetDynamicOffersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default15("/dynamicOffers"),
        auth: noneAuth,
        query: [
          { name: "accountHolderId", value: request.accountHolderId, schema: s.string() },
          {
            name: "financingType",
            value: request.financingType,
            schema: s.optional(s.lazy(() => financingTypeSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getDynamicOffersResponseSchema },
        errorFactory: DynamicOffers.GetDynamicOffersError,
      },
      options,
    );
  }

  postDynamicOffersIdCalculate(
    request: DynamicOffers.PostDynamicOffersIdCalculateRequest,
    options?: RequestOptions,
  ): ApiPromise<CalculatedGrantOffer, DynamicOffers.PostDynamicOffersIdCalculateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default15("/dynamicOffers/{id}/calculate"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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

  postDynamicOffersIdGrantOffer(
    request: DynamicOffers.PostDynamicOffersIdGrantOfferRequest,
    options?: RequestOptions,
  ): ApiPromise<GrantOffer1, DynamicOffers.PostDynamicOffersIdGrantOfferError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default15("/dynamicOffers/{id}/grantOffer"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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
    accountHolderId: string;
    financingType?: FinancingType;
  };

  export class GetDynamicOffersError extends ResponseError<
    Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<GetDynamicOffersError> = [
      {
        on: 422,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostDynamicOffersIdCalculateRequest = {
    id: string;
    body?: CalculateGrantOfferRequest;
  };

  export class PostDynamicOffersIdCalculateError extends ResponseError<
    Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<PostDynamicOffersIdCalculateError> = [
      {
        on: 422,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type PostDynamicOffersIdGrantOfferRequest = {
    id: string;
    body?: CreateGrantOfferRequest;
  };

  export class PostDynamicOffersIdGrantOfferError extends ResponseError<
    Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
  > {
    static readonly errors: ErrorDecoders<PostDynamicOffersIdGrantOfferError> = [
      {
        on: 422,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
