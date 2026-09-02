import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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
        url: this.#servers.default18("/legalEntities/{id}/checkTaxElectronicDeliveryConsent"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: checkTaxElectronicDeliveryConsentResponseSchema },
        errorFactory: TaxEDeliveryConsent.PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError,
      },
      options,
    );
  }

  postLegalEntitiesIdSetTaxElectronicDeliveryConsent(
    request: TaxEDeliveryConsent.PostLegalEntitiesIdSetTaxElectronicDeliveryConsentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TaxEDeliveryConsent.PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default18("/legalEntities/{id}/setTaxElectronicDeliveryConsent"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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
    id: string;
  };

  export class PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdSetTaxElectronicDeliveryConsentRequest = {
    id: string;
    body?: SetTaxElectronicDeliveryConsentRequest;
  };

  export class PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
