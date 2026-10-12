import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { pinChangeRequestSchema, type PinChangeRequest } from "../models/pin-change-request.js";
import { pinChangeResponseSchema, type PinChangeResponse } from "../models/pin-change-response.js";
import { publicKeyResponseSchema, type PublicKeyResponse } from "../models/public-key-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import { revealPinRequestSchema, type RevealPinRequest } from "../models/reveal-pin-request.js";
import { revealPinResponseSchema, type RevealPinResponse } from "../models/reveal-pin-response.js";
import type { Servers } from "../servers.js";

export class ManageCardPin {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get an RSA public key
   *
   * @remarks
   * Get an [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) public key to encrypt or decrypt
   * card data.
   *
   * You need the RSA public key to generate the `encryptedKey` required to:
   * - [Change a PIN](https://docs.adyen.com/api-explorer/balanceplatform/2/post/pins/change).
   * - [Reveal a PIN](https://docs.adyen.com/api-explorer/balanceplatform/2/post/pins/reveal).
   * - [Reveal a
   *   PAN](https://docs.adyen.com/api-explorer/balanceplatform/2/post/paymentInstruments/reveal).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ManageCardPin.GetPublicKeyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPublicKey(
    request: ManageCardPin.GetPublicKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicKeyResponse, ManageCardPin.GetPublicKeyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/publicKey"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [
          { name: "purpose", value: request.purpose, schema: s.optional(s.string()) },
          { name: "format", value: request.format, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicKeyResponseSchema },
        errorFactory: ManageCardPin.GetPublicKeyError,
      },
      options,
    );
  }

  /**
   * Change a card PIN
   *
   * @remarks
   * Changes the personal identification number (PIN) of a specified card.
   *
   * To make this request, your API credential must have the following role:
   * * Bank Issuing PIN Change Webservice role
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ManageCardPin.PostPinsChangeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPinsChange(
    request: ManageCardPin.PostPinsChangeRequest,
    options?: RequestOptions,
  ): ApiPromise<PinChangeResponse, ManageCardPin.PostPinsChangeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/pins/change"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => pinChangeRequestSchema)) },
      },
      {
        success: { kind: "json", schema: pinChangeResponseSchema },
        errorFactory: ManageCardPin.PostPinsChangeError,
      },
      options,
    );
  }

  /**
   * Reveal a card PIN
   *
   * @remarks
   * Returns an encrypted PIN block that contains the PIN of a specified card. You can use the
   * decrypted data to reveal the PIN in your user interface.
   *
   * To make this request, your API credential must have the following role:
   * * Bank Issuing PIN Reveal Webservice role
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link ManageCardPin.PostPinsRevealError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPinsReveal(
    request: ManageCardPin.PostPinsRevealRequest,
    options?: RequestOptions,
  ): ApiPromise<RevealPinResponse, ManageCardPin.PostPinsRevealError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/pins/reveal"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => revealPinRequestSchema)) },
      },
      {
        success: { kind: "json", schema: revealPinResponseSchema },
        errorFactory: ManageCardPin.PostPinsRevealError,
      },
      options,
    );
  }
}

export namespace ManageCardPin {
  export type GetPublicKeyRequest = {
    /**
     * The purpose of the public key.
     *
     * Possible values: **pinChange**, **pinReveal**, **panReveal**.
     *
     * Default value: **pinReveal**.
     */
    purpose?: string;
    /**
     * The encoding format of public key.
     *
     * Possible values: **jwk**, **pem**.
     *
     * Default value: **pem**.
     */
    format?: string;
  };

  export class GetPublicKeyError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetPublicKeyError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostPinsChangeRequest = {
    body?: PinChangeRequest;
  };

  export class PostPinsChangeError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPinsChangeError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostPinsRevealRequest = {
    body?: RevealPinRequest;
  };

  export class PostPinsRevealError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostPinsRevealError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
