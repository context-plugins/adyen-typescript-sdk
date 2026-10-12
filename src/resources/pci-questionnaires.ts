import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  calculatePciStatusRequestSchema,
  type CalculatePciStatusRequest,
} from "../models/calculate-pci-status-request.js";
import {
  calculatePciStatusResponseSchema,
  type CalculatePciStatusResponse,
} from "../models/calculate-pci-status-response.js";
import {
  generatePciDescriptionRequestSchema,
  type GeneratePciDescriptionRequest,
} from "../models/generate-pci-description-request.js";
import {
  generatePciDescriptionResponseSchema,
  type GeneratePciDescriptionResponse,
} from "../models/generate-pci-description-response.js";
import {
  getPciQuestionnaireInfosResponseSchema,
  type GetPciQuestionnaireInfosResponse,
} from "../models/get-pci-questionnaire-infos-response.js";
import {
  getPciQuestionnaireResponseSchema,
  type GetPciQuestionnaireResponse,
} from "../models/get-pci-questionnaire-response.js";
import { pciSigningRequestSchema, type PciSigningRequest } from "../models/pci-signing-request.js";
import { pciSigningResponseSchema, type PciSigningResponse } from "../models/pci-signing-response.js";
import { serviceError1Schema, type ServiceError1 } from "../models/service-error1.js";
import type { Servers } from "../servers.js";

export class PciQuestionnaires {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get PCI questionnaire details
   *
   * @remarks
   * Get a list of signed PCI questionnaires.
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
   * @throws {@link PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLegalEntitiesIdPciQuestionnaires(
    request: PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GetPciQuestionnaireInfosResponse,
    PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default18("/legalEntities/{id}/pciQuestionnaires"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getPciQuestionnaireInfosResponseSchema },
        errorFactory: PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesError,
      },
      options,
    );
  }

  /**
   * Get PCI questionnaire
   *
   * @remarks
   * Returns the signed PCI questionnaire.
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
   * @throws {@link PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesPciidError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLegalEntitiesIdPciQuestionnairesPciid(
    request: PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesPciidRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GetPciQuestionnaireResponse,
    PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesPciidError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default18("/legalEntities/{id}/pciQuestionnaires/{pciid}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pciid", value: request.pciid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getPciQuestionnaireResponseSchema },
        errorFactory: PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesPciidError,
      },
      options,
    );
  }

  /**
   * Generate PCI questionnaire
   *
   * @remarks
   * Generates the required PCI questionnaires based on the user's
   * [salesChannel](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines__reqParam_salesChannels).
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
   * @throws {@link PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postLegalEntitiesIdPciQuestionnairesGeneratePciTemplates(
    request: PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GeneratePciDescriptionResponse,
    PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default18("/legalEntities/{id}/pciQuestionnaires/generatePciTemplates"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => generatePciDescriptionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: generatePciDescriptionResponseSchema },
        errorFactory: PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesError,
      },
      options,
    );
  }

  /**
   * Sign PCI questionnaire
   *
   * @remarks
   * Signs the required PCI questionnaire.
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
   * @throws {@link PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postLegalEntitiesIdPciQuestionnairesSignPciTemplates(
    request: PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PciSigningResponse,
    PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default18("/legalEntities/{id}/pciQuestionnaires/signPciTemplates"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => pciSigningRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pciSigningResponseSchema },
        errorFactory: PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesError,
      },
      options,
    );
  }

  /**
   * Calculate PCI status of a legal entity
   *
   * @remarks
   * Calculate PCI status of a legal entity.
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
   * @throws {@link PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSigningRequiredError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postLegalEntitiesIdPciQuestionnairesSigningRequired(
    request: PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSigningRequiredRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CalculatePciStatusResponse,
    PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSigningRequiredError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default18("/legalEntities/{id}/pciQuestionnaires/signingRequired"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => calculatePciStatusRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: calculatePciStatusResponseSchema },
        errorFactory: PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSigningRequiredError,
      },
      options,
    );
  }
}

export namespace PciQuestionnaires {
  export type GetLegalEntitiesIdPciQuestionnairesRequest = {
    /** The unique identifier of the legal entity to get PCI questionnaire information. */
    id: string;
  };

  export class GetLegalEntitiesIdPciQuestionnairesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<GetLegalEntitiesIdPciQuestionnairesError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type GetLegalEntitiesIdPciQuestionnairesPciidRequest = {
    /** The legal entity ID of the individual who signed the PCI questionnaire. */
    id: string;
    /** The unique identifier of the signed PCI questionnaire. */
    pciid: string;
  };

  export class GetLegalEntitiesIdPciQuestionnairesPciidError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<GetLegalEntitiesIdPciQuestionnairesPciidError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRequest = {
    /** The unique identifier of the legal entity to get PCI questionnaire information. */
    id: string;
    body?: GeneratePciDescriptionRequest;
  };

  export class PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesRequest = {
    /** The legal entity ID of the user that has a contractual relationship with your platform. */
    id: string;
    body?: PciSigningRequest;
  };

  export class PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdPciQuestionnairesSigningRequiredRequest = {
    /** The unique identifier of the legal entity to calculate PCI status. */
    id: string;
    body?: CalculatePciStatusRequest;
  };

  export class PostLegalEntitiesIdPciQuestionnairesSigningRequiredError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostLegalEntitiesIdPciQuestionnairesSigningRequiredError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
