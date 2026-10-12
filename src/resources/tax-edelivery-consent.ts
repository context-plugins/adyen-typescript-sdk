import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  checkTaxElectronicDeliveryConsentResponseSchema,
  type CheckTaxElectronicDeliveryConsentResponse,
} from "../models/check-tax-electronic-delivery-consent-response.js";
import { serviceError1Schema, type ServiceError1 } from "../models/service-error1.js";
import {
  setTaxElectronicDeliveryConsentRequestSchema,
  type SetTaxElectronicDeliveryConsentRequest,
} from "../models/set-tax-electronic-delivery-consent-request.js";
import type { Servers } from "../servers.js";

export class TaxEDeliveryConsent {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check the status of consent for electronic delivery of tax forms
   *
   * @remarks
   * Returns the consent status for electronic delivery of tax forms.
   *
   * Requests to this endpoint are subject to rate limits:
   *
   * - Live environments: 700 requests per 5 seconds.
   *
   * - Test environments: 200 requests per 5 seconds.
   *
   * - Failed requests are subject to a limit of 5 failures per 10 seconds.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TaxEDeliveryConsent.PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postLegalEntitiesIdCheckTaxElectronicDeliveryConsent(
    request: TaxEDeliveryConsent.PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CheckTaxElectronicDeliveryConsentResponse,
    TaxEDeliveryConsent.PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default18("/legalEntities/{id}/checkTaxElectronicDeliveryConsent"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: checkTaxElectronicDeliveryConsentResponseSchema },
        errorFactory: TaxEDeliveryConsent.PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError,
      },
      options,
    );
  }

  /**
   * Set the consent status for electronic delivery of tax forms
   *
   * @remarks
   * Set the consent status for electronic delivery of tax forms.
   *
   * Requests to this endpoint are subject to rate limits:
   *
   * - Live environments: 700 requests per 5 seconds.
   *
   * - Test environments: 200 requests per 5 seconds.
   *
   * - Failed requests are subject to a limit of 5 failures per 10 seconds.
   *
   * @returns No Content - look at the actual response code for the status of the request.
   *
   * @throws {@link TaxEDeliveryConsent.PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postLegalEntitiesIdSetTaxElectronicDeliveryConsent(
    request: TaxEDeliveryConsent.PostLegalEntitiesIdSetTaxElectronicDeliveryConsentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TaxEDeliveryConsent.PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default18("/legalEntities/{id}/setTaxElectronicDeliveryConsent"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => setTaxElectronicDeliveryConsentRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: TaxEDeliveryConsent.PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError,
      },
      options,
    );
  }
}

export namespace TaxEDeliveryConsent {
  export type PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentRequest = {
    /**
     * The unique identifier of the legal entity. For sole proprietorships, this is the individual
     * legal entity ID of the owner. For organizations, this is the ID of the organization.
     */
    id: string;
  };

  export class PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdSetTaxElectronicDeliveryConsentRequest = {
    /**
     * The unique identifier of the legal entity. For sole proprietorships, this is the individual
     * legal entity ID of the owner. For organizations, this is the ID of the organization.
     */
    id: string;
    body?: SetTaxElectronicDeliveryConsentRequest;
  };

  export class PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
