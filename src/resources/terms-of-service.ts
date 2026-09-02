import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  acceptTermsOfServiceRequestSchema,
  type AcceptTermsOfServiceRequest,
} from "../models/accept-terms-of-service-request.js";
import {
  acceptTermsOfServiceResponseSchema,
  type AcceptTermsOfServiceResponse,
} from "../models/accept-terms-of-service-response.js";
import {
  calculateTermsOfServiceStatusResponseSchema,
  type CalculateTermsOfServiceStatusResponse,
} from "../models/calculate-terms-of-service-status-response.js";
import {
  getAcceptedTermsOfServiceDocumentResponseSchema,
  type GetAcceptedTermsOfServiceDocumentResponse,
} from "../models/get-accepted-terms-of-service-document-response.js";
import {
  getTermsOfServiceAcceptanceInfosResponseSchema,
  type GetTermsOfServiceAcceptanceInfosResponse,
} from "../models/get-terms-of-service-acceptance-infos-response.js";
import {
  getTermsOfServiceDocumentRequestSchema,
  type GetTermsOfServiceDocumentRequest,
} from "../models/get-terms-of-service-document-request.js";
import {
  getTermsOfServiceDocumentResponseSchema,
  type GetTermsOfServiceDocumentResponse,
} from "../models/get-terms-of-service-document-response.js";
import { serviceError1Schema, type ServiceError1 } from "../models/service-error1.js";
import type { Servers } from "../servers.js";

export class TermsOfService {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference(
    request: TermsOfService.GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GetAcceptedTermsOfServiceDocumentResponse,
    TermsOfService.GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default18(
          "/legalEntities/{id}/acceptedTermsOfServiceDocument/{termsofserviceacceptancereference}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          {
            name: "termsofserviceacceptancereference",
            value: request.termsofserviceacceptancereference,
            schema: s.string(),
          },
        ],
        query: [
          {
            name: "termsOfServiceDocumentFormat",
            value: request.termsOfServiceDocumentFormat,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getAcceptedTermsOfServiceDocumentResponseSchema },
        errorFactory:
          TermsOfService.GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceError,
      },
      options,
    );
  }

  getLegalEntitiesIdTermsOfServiceAcceptanceInfos(
    request: TermsOfService.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GetTermsOfServiceAcceptanceInfosResponse,
    TermsOfService.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default18("/legalEntities/{id}/termsOfServiceAcceptanceInfos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTermsOfServiceAcceptanceInfosResponseSchema },
        errorFactory: TermsOfService.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError,
      },
      options,
    );
  }

  getLegalEntitiesIdTermsOfServiceStatus(
    request: TermsOfService.GetLegalEntitiesIdTermsOfServiceStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CalculateTermsOfServiceStatusResponse,
    TermsOfService.GetLegalEntitiesIdTermsOfServiceStatusError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default18("/legalEntities/{id}/termsOfServiceStatus"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: calculateTermsOfServiceStatusResponseSchema },
        errorFactory: TermsOfService.GetLegalEntitiesIdTermsOfServiceStatusError,
      },
      options,
    );
  }

  patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid(
    request: TermsOfService.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AcceptTermsOfServiceResponse,
    TermsOfService.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default18("/legalEntities/{id}/termsOfService/{termsofservicedocumentid}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "termsofservicedocumentid", value: request.termsofservicedocumentid, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => acceptTermsOfServiceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: acceptTermsOfServiceResponseSchema },
        errorFactory: TermsOfService.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidError,
      },
      options,
    );
  }

  postLegalEntitiesIdTermsOfService(
    request: TermsOfService.PostLegalEntitiesIdTermsOfServiceRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTermsOfServiceDocumentResponse, TermsOfService.PostLegalEntitiesIdTermsOfServiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default18("/legalEntities/{id}/termsOfService"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => getTermsOfServiceDocumentRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getTermsOfServiceDocumentResponseSchema },
        errorFactory: TermsOfService.PostLegalEntitiesIdTermsOfServiceError,
      },
      options,
    );
  }
}

export namespace TermsOfService {
  export type GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceRequest = {
    id: string;
    termsofserviceacceptancereference: string;
    termsOfServiceDocumentFormat?: string;
  };

  export class GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type GetLegalEntitiesIdTermsOfServiceAcceptanceInfosRequest = {
    id: string;
  };

  export class GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type GetLegalEntitiesIdTermsOfServiceStatusRequest = {
    id: string;
  };

  export class GetLegalEntitiesIdTermsOfServiceStatusError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<GetLegalEntitiesIdTermsOfServiceStatusError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRequest = {
    id: string;
    termsofservicedocumentid: string;
    body?: AcceptTermsOfServiceRequest;
  };

  export class PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdTermsOfServiceRequest = {
    id: string;
    body?: GetTermsOfServiceDocumentRequest;
  };

  export class PostLegalEntitiesIdTermsOfServiceError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostLegalEntitiesIdTermsOfServiceError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
