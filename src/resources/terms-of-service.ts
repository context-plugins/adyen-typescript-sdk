import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Get accepted Terms of Service document
   *
   * @remarks
   * Returns the accepted Terms of Service document for a legal entity.
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
   * @throws {@link
   * TermsOfService.GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default18(
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
        headers: [],
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

  /**
   * Get Terms of Service information for a legal entity
   *
   * @remarks
   * Returns Terms of Service information for a legal entity.
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
   * @throws {@link TermsOfService.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default18("/legalEntities/{id}/termsOfServiceAcceptanceInfos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTermsOfServiceAcceptanceInfosResponseSchema },
        errorFactory: TermsOfService.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError,
      },
      options,
    );
  }

  /**
   * Get Terms of Service status
   *
   * @remarks
   * Returns the required types of Terms of Service that need to be accepted by a legal entity.
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
   * @throws {@link TermsOfService.GetLegalEntitiesIdTermsOfServiceStatusError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default18("/legalEntities/{id}/termsOfServiceStatus"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: calculateTermsOfServiceStatusResponseSchema },
        errorFactory: TermsOfService.GetLegalEntitiesIdTermsOfServiceStatusError,
      },
      options,
    );
  }

  /**
   * Accept Terms of Service
   *
   * @remarks
   * Accepts Terms of Service.
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
   * @throws {@link TermsOfService.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default18("/legalEntities/{id}/termsOfService/{termsofservicedocumentid}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "termsofservicedocumentid", value: request.termsofservicedocumentid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Get Terms of Service document
   *
   * @remarks
   * Returns the Terms of Service document for a legal entity.
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
   * @throws {@link TermsOfService.PostLegalEntitiesIdTermsOfServiceError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postLegalEntitiesIdTermsOfService(
    request: TermsOfService.PostLegalEntitiesIdTermsOfServiceRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTermsOfServiceDocumentResponse, TermsOfService.PostLegalEntitiesIdTermsOfServiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default18("/legalEntities/{id}/termsOfService"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /**
     * The unique identifier of the legal entity. For sole proprietorship, this is the individual
     * legal entity ID of the owner. For organizations, this is the ID of the organization.
     */
    id: string;
    /** An Adyen-generated reference for the accepted Terms of Service. */
    termsofserviceacceptancereference: string;
    /**
     * The format of the Terms of Service document. Possible values: **JSON**, **PDF**, or **TXT**
     */
    termsOfServiceDocumentFormat?: string;
  };

  export class GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceError> =
      [
        { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
        { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
        { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
        { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
        { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
      ];
  }

  export type GetLegalEntitiesIdTermsOfServiceAcceptanceInfosRequest = {
    /**
     * The unique identifier of the legal entity. For sole proprietorships, this is the individual
     * legal entity ID of the owner. For organizations, this is the ID of the organization.
     */
    id: string;
  };

  export class GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type GetLegalEntitiesIdTermsOfServiceStatusRequest = {
    /**
     * The unique identifier of the legal entity. For sole proprietorships, this is the individual
     * legal entity ID of the owner. For organizations, this is the ID of the organization.
     */
    id: string;
  };

  export class GetLegalEntitiesIdTermsOfServiceStatusError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<GetLegalEntitiesIdTermsOfServiceStatusError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRequest = {
    /**
     * The unique identifier of the legal entity.
     *
     * For sole proprietorships, this is the individual legal entity ID of the owner.
     *
     * For organizations, this is the ID of the organization.
     *
     * For legal representatives of individuals, this is the ID of the individual.
     */
    id: string;
    /** The unique identifier of the Terms of Service document. */
    termsofservicedocumentid: string;
    body?: AcceptTermsOfServiceRequest;
  };

  export class PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdTermsOfServiceRequest = {
    /**
     * The unique identifier of the legal entity. For sole proprietorships, this is the individual
     * legal entity ID of the owner. For organizations, this is the ID of the organization.
     */
    id: string;
    body?: GetTermsOfServiceDocumentRequest;
  };

  export class PostLegalEntitiesIdTermsOfServiceError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostLegalEntitiesIdTermsOfServiceError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
