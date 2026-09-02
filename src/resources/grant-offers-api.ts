import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  getGrantOffers(
    request: GrantOffersApi.GetGrantOffersRequest,
    options?: RequestOptions,
  ): ApiPromise<GrantOffers, GrantOffersApi.GetGrantOffersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/grantOffers"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        query: [{ name: "accountHolderId", value: request.accountHolderId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: grantOffersSchema },
        errorFactory: GrantOffersApi.GetGrantOffersError,
      },
      options,
    );
  }

  getGrantOffersGrantOfferId(
    request: GrantOffersApi.GetGrantOffersGrantOfferIdRequest,
    options?: RequestOptions,
  ): ApiPromise<GrantOffer, GrantOffersApi.GetGrantOffersGrantOfferIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/grantOffers/{grantOfferId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "grantOfferId", value: request.grantOfferId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: grantOfferSchema },
        errorFactory: GrantOffersApi.GetGrantOffersGrantOfferIdError,
      },
      options,
    );
  }

  getGrantOffersId(
    request: GrantOffersApi.GetGrantOffersIdRequest,
    options?: RequestOptions,
  ): ApiPromise<GrantOffer1, GrantOffersApi.GetGrantOffersIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default15("/grantOffers/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: grantOffer1Schema },
        errorFactory: GrantOffersApi.GetGrantOffersIdError,
      },
      options,
    );
  }

  getGrantOffers1(
    request: GrantOffersApi.GetGrantOffers1Request,
    options?: RequestOptions,
  ): ApiPromise<GrantOffers, GrantOffersApi.GetGrantOffers1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default15("/grantOffers"),
        auth: noneAuth,
        query: [{ name: "accountHolderId", value: request.accountHolderId, schema: s.string() }],
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
    accountHolderId: string;
  };

  export class GetGrantOffersError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetGrantOffersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetGrantOffersGrantOfferIdRequest = {
    grantOfferId: string;
  };

  export class GetGrantOffersGrantOfferIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetGrantOffersGrantOfferIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetGrantOffersIdRequest = {
    id: string;
  };

  export class GetGrantOffersIdError extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
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
    accountHolderId: string;
  };

  export class GetGrantOffers1Error extends ResponseError<
    | Declared<"defaultErrorResponseEntity", DefaultErrorResponseEntity>
    | Declared<"defaultErrorResponseEntity2", DefaultErrorResponseEntity>
  > {
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
