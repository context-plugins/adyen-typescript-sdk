import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  defaultErrorResponseEntitySchema,
  type DefaultErrorResponseEntity,
} from "../models/default-error-response-entity.js";
import { grantOfferSchema, type GrantOffer } from "../models/grant-offer.js";
import { grantOffer1Schema, type GrantOffer1 } from "../models/grant-offer1.js";
import { grantOffersSchema, type GrantOffers } from "../models/grant-offers.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import type { Servers } from "../servers.js";

export class GrantOffersApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all available grant offers
   *
   * @remarks
   * Returns a list of all [grant offers](https://docs.adyen.com/platforms/capital#grant-offers)
   * available for `accountHolderId` specified as a query parameter.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link GrantOffersApi.GetGrantOffersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getGrantOffers(
    request: GrantOffersApi.GetGrantOffersRequest,
    options?: RequestOptions,
  ): ApiPromise<GrantOffers, GrantOffersApi.GetGrantOffersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/grantOffers"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [{ name: "accountHolderId", value: request.accountHolderId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: grantOffersSchema },
        errorFactory: GrantOffersApi.GetGrantOffersError,
      },
      options,
    );
  }

  /**
   * Get a grant offer
   *
   * @remarks
   * Returns the details of a single grant offer.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link GrantOffersApi.GetGrantOffersGrantOfferIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getGrantOffersGrantOfferId(
    request: GrantOffersApi.GetGrantOffersGrantOfferIdRequest,
    options?: RequestOptions,
  ): ApiPromise<GrantOffer, GrantOffersApi.GetGrantOffersGrantOfferIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/grantOffers/{grantOfferId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "grantOfferId", value: request.grantOfferId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: grantOfferSchema },
        errorFactory: GrantOffersApi.GetGrantOffersGrantOfferIdError,
      },
      options,
    );
  }

  /**
   * Get the details of a static offer
   *
   * @remarks
   * Returns the details of the specified static offer.
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link GrantOffersApi.GetGrantOffersIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGrantOffersId(
    request: GrantOffersApi.GetGrantOffersIdRequest,
    options?: RequestOptions,
  ): ApiPromise<GrantOffer1, GrantOffersApi.GetGrantOffersIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default15("/grantOffers/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: grantOffer1Schema },
        errorFactory: GrantOffersApi.GetGrantOffersIdError,
      },
      options,
    );
  }

  /**
   * Get all available static offers
   *
   * @remarks
   * Returns a list of all [static
   * offers](https://docs.adyen.com/capital/get-grant-offers/static-offers) available for
   * `accountHolderId` specified as a query parameter. This also includes static offers created for
   * financing amounts that the user selected from [dynamic
   * offers](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/).
   *
   * @returns OK - The request has succeeded.
   *
   * @throws {@link GrantOffersApi.GetGrantOffers1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGrantOffers1(
    request: GrantOffersApi.GetGrantOffers1Request,
    options?: RequestOptions,
  ): ApiPromise<GrantOffers, GrantOffersApi.GetGrantOffers1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default15("/grantOffers"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "accountHolderId", value: request.accountHolderId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: grantOffersSchema },
        errorFactory: GrantOffersApi.GetGrantOffers1Error,
      },
      options,
    );
  }
}

export namespace GrantOffersApi {
  export type GetGrantOffersRequest = {
    /** The unique identifier of the grant account. */
    accountHolderId: string;
  };

  export class GetGrantOffersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetGrantOffersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetGrantOffersGrantOfferIdRequest = {
    /** The unique identifier of the grant offer. */
    grantOfferId: string;
  };

  export class GetGrantOffersGrantOfferIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetGrantOffersGrantOfferIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetGrantOffersIdRequest = {
    /** The unique identifier of the static offer. */
    id: string;
  };

  export class GetGrantOffersIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetGrantOffersIdError> = [
      {
        on: 404,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }

  export type GetGrantOffers1Request = {
    /**
     * The unique identifier of the account holder for which you want to get the available static
     * offers.
     */
    accountHolderId: string;
  };

  export class GetGrantOffers1Error extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
      | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
    >;

    static readonly errors: ErrorDecoders<GetGrantOffers1Error> = [
      {
        on: 404,
        kind: "defaultErrorResponseEntity",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
      {
        on: 422,
        kind: "defaultErrorResponseEntity2",
        decode: { kind: "json", schema: defaultErrorResponseEntitySchema },
      },
    ];
  }
}
