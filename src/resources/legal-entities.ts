import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  getLegalEntitiesId(
    request: LegalEntities.GetLegalEntitiesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<LegalEntity3, LegalEntities.GetLegalEntitiesIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default18("/legalEntities/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: legalEntity3Schema },
        errorFactory: LegalEntities.GetLegalEntitiesIdError,
      },
      options,
    );
  }

  getLegalEntitiesIdBusinessLines(
    request: LegalEntities.GetLegalEntitiesIdBusinessLinesRequest,
    options?: RequestOptions,
  ): ApiPromise<BusinessLines, LegalEntities.GetLegalEntitiesIdBusinessLinesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default18("/legalEntities/{id}/businessLines"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: businessLinesSchema },
        errorFactory: LegalEntities.GetLegalEntitiesIdBusinessLinesError,
      },
      options,
    );
  }

  patchLegalEntitiesId(
    request: LegalEntities.PatchLegalEntitiesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<LegalEntity3, LegalEntities.PatchLegalEntitiesIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default18("/legalEntities/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          {
            name: "x-requested-verification-code",
            value: request.xRequestedVerificationCode,
            schema: s.optional(s.string()),
          },
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

  postLegalEntities(
    request: LegalEntities.PostLegalEntitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<LegalEntity3, LegalEntities.PostLegalEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default18("/legalEntities"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        headers: [
          {
            name: "x-requested-verification-code",
            value: request.xRequestedVerificationCode,
            schema: s.optional(s.string()),
          },
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

  postLegalEntitiesIdCheckVerificationErrors(
    request: LegalEntities.PostLegalEntitiesIdCheckVerificationErrorsRequest,
    options?: RequestOptions,
  ): ApiPromise<VerificationErrors, LegalEntities.PostLegalEntitiesIdCheckVerificationErrorsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default18("/legalEntities/{id}/checkVerificationErrors"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verificationErrorsSchema },
        errorFactory: LegalEntities.PostLegalEntitiesIdCheckVerificationErrorsError,
      },
      options,
    );
  }

  postLegalEntitiesIdConfirmDataReview(
    request: LegalEntities.PostLegalEntitiesIdConfirmDataReviewRequest,
    options?: RequestOptions,
  ): ApiPromise<DataReviewConfirmationResponse, LegalEntities.PostLegalEntitiesIdConfirmDataReviewError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default18("/legalEntities/{id}/confirmDataReview"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dataReviewConfirmationResponseSchema },
        errorFactory: LegalEntities.PostLegalEntitiesIdConfirmDataReviewError,
      },
      options,
    );
  }

  postLegalEntitiesIdRequestPeriodicReview(
    request: LegalEntities.PostLegalEntitiesIdRequestPeriodicReviewRequest,
    options?: RequestOptions,
  ): ApiPromise<unknown, ResponseError> {
    return this.#rawClient.execute<unknown, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default18("/legalEntities/{id}/requestPeriodicReview"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.unknown() },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace LegalEntities {
  export type GetLegalEntitiesIdRequest = {
    id: string;
  };

  export class GetLegalEntitiesIdError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<GetLegalEntitiesIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type GetLegalEntitiesIdBusinessLinesRequest = {
    id: string;
  };

  export class GetLegalEntitiesIdBusinessLinesError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<GetLegalEntitiesIdBusinessLinesError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PatchLegalEntitiesIdRequest = {
    id: string;
    xRequestedVerificationCode?: string;
    body?: LegalEntityInfo;
  };

  export class PatchLegalEntitiesIdError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PatchLegalEntitiesIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesRequest = {
    xRequestedVerificationCode?: string;
    body?: LegalEntityInfoRequiredType;
  };

  export class PostLegalEntitiesError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostLegalEntitiesError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdCheckVerificationErrorsRequest = {
    id: string;
  };

  export class PostLegalEntitiesIdCheckVerificationErrorsError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostLegalEntitiesIdCheckVerificationErrorsError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdConfirmDataReviewRequest = {
    id: string;
  };

  export class PostLegalEntitiesIdConfirmDataReviewError extends ResponseError<
    | Declared<"serviceError1", ServiceError1>
    | Declared<"serviceError12", ServiceError1>
    | Declared<"serviceError13", ServiceError1>
    | Declared<"serviceError14", ServiceError1>
    | Declared<"serviceError15", ServiceError1>
  > {
    static readonly errors: ErrorDecoders<PostLegalEntitiesIdConfirmDataReviewError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostLegalEntitiesIdRequestPeriodicReviewRequest = {
    id: string;
  };
}
