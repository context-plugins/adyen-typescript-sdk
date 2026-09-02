import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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
        url: this.#servers.default18("/legalEntities/{id}/pciQuestionnaires"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getPciQuestionnaireInfosResponseSchema },
        errorFactory: PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesError,
      },
      options,
    );
  }

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
        url: this.#servers.default18("/legalEntities/{id}/pciQuestionnaires/{pciid}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pciid", value: request.pciid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getPciQuestionnaireResponseSchema },
        errorFactory: PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesPciidError,
      },
      options,
    );
  }

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
        url: this.#servers.default18("/legalEntities/{id}/pciQuestionnaires/generatePciTemplates"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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
        url: this.#servers.default18("/legalEntities/{id}/pciQuestionnaires/signPciTemplates"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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
        url: this.#servers.default18("/legalEntities/{id}/pciQuestionnaires/signingRequired"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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
    id: string;
  };

  export class GetLegalEntitiesIdPciQuestionnairesError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<GetLegalEntitiesIdPciQuestionnairesError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type GetLegalEntitiesIdPciQuestionnairesPciidRequest = {
    id: string;
    pciid: string;
  };

  export class GetLegalEntitiesIdPciQuestionnairesPciidError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<GetLegalEntitiesIdPciQuestionnairesPciidError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRequest = {
    id: string;
    body?: GeneratePciDescriptionRequest;
  };

  export class PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesRequest = {
    id: string;
    body?: PciSigningRequest;
  };

  export class PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdPciQuestionnairesSigningRequiredRequest = {
    id: string;
    body?: CalculatePciStatusRequest;
  };

  export class PostLegalEntitiesIdPciQuestionnairesSigningRequiredError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostLegalEntitiesIdPciQuestionnairesSigningRequiredError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
