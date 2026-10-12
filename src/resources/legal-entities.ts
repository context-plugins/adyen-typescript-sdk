import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { businessLinesSchema, type BusinessLines } from "../models/business-lines.js";
import {
  dataReviewConfirmationResponseSchema,
  type DataReviewConfirmationResponse,
} from "../models/data-review-confirmation-response.js";
import {
  legalEntityInfoRequiredTypeSchema,
  type LegalEntityInfoRequiredType,
} from "../models/legal-entity-info-required-type.js";
import { legalEntityInfoSchema, type LegalEntityInfo } from "../models/legal-entity-info.js";
import { legalEntity3Schema, type LegalEntity3 } from "../models/legal-entity3.js";
import { serviceError1Schema, type ServiceError1 } from "../models/service-error1.js";
import { verificationErrorsSchema, type VerificationErrors } from "../models/verification-errors.js";
import type { Servers } from "../servers.js";

export class LegalEntities {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a legal entity
   *
   * @remarks
   * Returns a legal entity.
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
   * @throws {@link LegalEntities.GetLegalEntitiesIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLegalEntitiesId(
    request: LegalEntities.GetLegalEntitiesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<LegalEntity3, LegalEntities.GetLegalEntitiesIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default18("/legalEntities/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: legalEntity3Schema },
        errorFactory: LegalEntities.GetLegalEntitiesIdError,
      },
      options,
    );
  }

  /**
   * Get all business lines under a legal entity
   *
   * @remarks
   * Returns the business lines owned by a legal entity.
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
   * @throws {@link LegalEntities.GetLegalEntitiesIdBusinessLinesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLegalEntitiesIdBusinessLines(
    request: LegalEntities.GetLegalEntitiesIdBusinessLinesRequest,
    options?: RequestOptions,
  ): ApiPromise<BusinessLines, LegalEntities.GetLegalEntitiesIdBusinessLinesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default18("/legalEntities/{id}/businessLines"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: businessLinesSchema },
        errorFactory: LegalEntities.GetLegalEntitiesIdBusinessLinesError,
      },
      options,
    );
  }

  /**
   * Update a legal entity
   *
   * @remarks
   * Updates a legal entity.
   *
   * >To change the legal entity type, include only the new `type` in your request.
   *
   * If you need to update information for the legal entity, make a separate request. To update the
   * `entityAssociations` array, you need to replace the entire array.For example, if the array has
   * 3 entries and you want to remove 1 entry, you need to PATCH the resource with the remaining 2
   * entries.
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
   * @throws {@link LegalEntities.PatchLegalEntitiesIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchLegalEntitiesId(
    request: LegalEntities.PatchLegalEntitiesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<LegalEntity3, LegalEntities.PatchLegalEntitiesIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default18("/legalEntities/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-requested-verification-code",
            value: request.xRequestedVerificationCode,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => legalEntityInfoSchema)) },
      },
      {
        success: { kind: "json", schema: legalEntity3Schema },
        errorFactory: LegalEntities.PatchLegalEntitiesIdError,
      },
      options,
    );
  }

  /**
   * Create a legal entity
   *
   * @remarks
   * Creates a legal entity.
   *
   * This resource contains information about the user that will be onboarded in your platform.
   * Adyen uses this information to perform verification checks as required by payment industry
   * regulations. Adyen informs you of the verification results through webhooks or API responses.
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
   * @throws {@link LegalEntities.PostLegalEntitiesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postLegalEntities(
    request: LegalEntities.PostLegalEntitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<LegalEntity3, LegalEntities.PostLegalEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default18("/legalEntities"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [
          {
            name: "x-requested-verification-code",
            value: request.xRequestedVerificationCode,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => legalEntityInfoRequiredTypeSchema)),
        },
      },
      {
        success: { kind: "json", schema: legalEntity3Schema },
        errorFactory: LegalEntities.PostLegalEntitiesError,
      },
      options,
    );
  }

  /**
   * Check a legal entity's verification errors
   *
   * @remarks
   * Returns the verification errors for a legal entity and its supporting entities.
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
   * @throws {@link LegalEntities.PostLegalEntitiesIdCheckVerificationErrorsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postLegalEntitiesIdCheckVerificationErrors(
    request: LegalEntities.PostLegalEntitiesIdCheckVerificationErrorsRequest,
    options?: RequestOptions,
  ): ApiPromise<VerificationErrors, LegalEntities.PostLegalEntitiesIdCheckVerificationErrorsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default18("/legalEntities/{id}/checkVerificationErrors"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verificationErrorsSchema },
        errorFactory: LegalEntities.PostLegalEntitiesIdCheckVerificationErrorsError,
      },
      options,
    );
  }

  /**
   * Confirm data review
   *
   * @remarks
   * Confirms that your user has reviewed the data for the legal entity specified in the path. Call
   * this endpoint to inform Adyen that your user reviewed and verified that the data is up-to-date.
   * The endpoint returns the timestamp of when Adyen received the request.
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
   * @throws {@link LegalEntities.PostLegalEntitiesIdConfirmDataReviewError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postLegalEntitiesIdConfirmDataReview(
    request: LegalEntities.PostLegalEntitiesIdConfirmDataReviewRequest,
    options?: RequestOptions,
  ): ApiPromise<DataReviewConfirmationResponse, LegalEntities.PostLegalEntitiesIdConfirmDataReviewError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default18("/legalEntities/{id}/confirmDataReview"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dataReviewConfirmationResponseSchema },
        errorFactory: LegalEntities.PostLegalEntitiesIdConfirmDataReviewError,
      },
      options,
    );
  }

  /**
   * Request periodic data review.
   *
   * @remarks
   * Requests a periodic data review for the legal entity of the user specified in the path.
   *
   * @returns No Content - the request has been successfully processed, but there is no additional
   * content.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postLegalEntitiesIdRequestPeriodicReview(
    request: LegalEntities.PostLegalEntitiesIdRequestPeriodicReviewRequest,
    options?: RequestOptions,
  ): ApiPromise<unknown, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default18("/legalEntities/{id}/requestPeriodicReview"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace LegalEntities {
  export type GetLegalEntitiesIdRequest = {
    /** The unique identifier of the legal entity. */
    id: string;
  };

  export class GetLegalEntitiesIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<GetLegalEntitiesIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type GetLegalEntitiesIdBusinessLinesRequest = {
    /** The unique identifier of the legal entity. */
    id: string;
  };

  export class GetLegalEntitiesIdBusinessLinesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<GetLegalEntitiesIdBusinessLinesError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PatchLegalEntitiesIdRequest = {
    /** The unique identifier of the legal entity. */
    id: string;
    /**
     * Use the requested verification code 0_0001 to resolve any suberrors associated with the legal
     * entity. Requested verification codes can only be used in your test environment.
     */
    xRequestedVerificationCode?: string;
    body?: LegalEntityInfo;
  };

  export class PatchLegalEntitiesIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PatchLegalEntitiesIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesRequest = {
    /**
     * Use a suberror code as your requested verification code. You can include one code at a time
     * in your request header. Requested verification codes can only be used in your test
     * environment.
     */
    xRequestedVerificationCode?: string;
    body?: LegalEntityInfoRequiredType;
  };

  export class PostLegalEntitiesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostLegalEntitiesError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdCheckVerificationErrorsRequest = {
    /** The unique identifier of the legal entity. */
    id: string;
  };

  export class PostLegalEntitiesIdCheckVerificationErrorsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostLegalEntitiesIdCheckVerificationErrorsError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdConfirmDataReviewRequest = {
    /** The unique identifier of the legal entity. */
    id: string;
  };

  export class PostLegalEntitiesIdConfirmDataReviewError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostLegalEntitiesIdConfirmDataReviewError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdRequestPeriodicReviewRequest = {
    /** The unique identifier of the legal entity. */
    id: string;
  };
}
