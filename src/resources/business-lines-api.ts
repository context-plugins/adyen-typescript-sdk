import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  businessLineInfoUpdateSchema,
  type BusinessLineInfoUpdate,
} from "../models/business-line-info-update.js";
import { businessLineInfoSchema, type BusinessLineInfo } from "../models/business-line-info.js";
import { businessLineSchema, type BusinessLine } from "../models/business-line.js";
import { serviceError1Schema, type ServiceError1 } from "../models/service-error1.js";
import type { Servers } from "../servers.js";

export class BusinessLinesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a business line
   *
   * @remarks
   * Deletes a business line.
   *
   * >If you delete a business line linked to a [payment
   * method](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api), it
   * can affect your merchant account's ability to use the [payment
   * method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings).
   * The business line is removed from all linked merchant accounts.
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
   * @throws {@link BusinessLinesApi.DeleteBusinessLinesIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBusinessLinesId(
    request: BusinessLinesApi.DeleteBusinessLinesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BusinessLinesApi.DeleteBusinessLinesIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default18("/businessLines/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: BusinessLinesApi.DeleteBusinessLinesIdError,
      },
      options,
    );
  }

  /**
   * Get a business line
   *
   * @remarks
   * Returns the detail of a business line.
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
   * @throws {@link BusinessLinesApi.GetBusinessLinesIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBusinessLinesId(
    request: BusinessLinesApi.GetBusinessLinesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<BusinessLine, BusinessLinesApi.GetBusinessLinesIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default18("/businessLines/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: businessLineSchema },
        errorFactory: BusinessLinesApi.GetBusinessLinesIdError,
      },
      options,
    );
  }

  /**
   * Update a business line
   *
   * @remarks
   * Updates a business line.
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
   * @throws {@link BusinessLinesApi.PatchBusinessLinesIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchBusinessLinesId(
    request: BusinessLinesApi.PatchBusinessLinesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<BusinessLine, BusinessLinesApi.PatchBusinessLinesIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default18("/businessLines/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => businessLineInfoUpdateSchema)),
        },
      },
      {
        success: { kind: "json", schema: businessLineSchema },
        errorFactory: BusinessLinesApi.PatchBusinessLinesIdError,
      },
      options,
    );
  }

  /**
   * Create a business line
   *
   * @remarks
   * Creates a business line.
   *
   * This resource contains information about your user's line of business, including their industry
   * and their source of funds. Adyen uses this information to verify your users as required by
   * payment industry regulations.Adyen informs you of the verification results through webhooks or
   * API responses.
   *
   * You can create a maximum of 200 business lines per legal entity for payment processing.
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
   * @throws {@link BusinessLinesApi.PostBusinessLinesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postBusinessLines(
    request: BusinessLinesApi.PostBusinessLinesRequest,
    options?: RequestOptions,
  ): ApiPromise<BusinessLine, BusinessLinesApi.PostBusinessLinesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default18("/businessLines"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => businessLineInfoSchema)) },
      },
      {
        success: { kind: "json", schema: businessLineSchema },
        errorFactory: BusinessLinesApi.PostBusinessLinesError,
      },
      options,
    );
  }
}

export namespace BusinessLinesApi {
  export type DeleteBusinessLinesIdRequest = {
    /** The unique identifier of the business line to be deleted. */
    id: string;
  };

  export class DeleteBusinessLinesIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<DeleteBusinessLinesIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type GetBusinessLinesIdRequest = {
    /** The unique identifier of the business line. */
    id: string;
  };

  export class GetBusinessLinesIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<GetBusinessLinesIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PatchBusinessLinesIdRequest = {
    /** The unique identifier of the business line. */
    id: string;
    body?: BusinessLineInfoUpdate;
  };

  export class PatchBusinessLinesIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PatchBusinessLinesIdError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }

  export type PostBusinessLinesRequest = {
    body?: BusinessLineInfo;
  };

  export class PostBusinessLinesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"serviceError1", ServiceError1>
      | Declared<"serviceError12", ServiceError1>
      | Declared<"serviceError13", ServiceError1>
      | Declared<"serviceError14", ServiceError1>
      | Declared<"serviceError15", ServiceError1>
    >;

    static readonly errors: ErrorDecoders<PostBusinessLinesError> = [
      { on: 400, kind: "serviceError1", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 401, kind: "serviceError12", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 403, kind: "serviceError13", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 422, kind: "serviceError14", decode: { kind: "json", schema: serviceError1Schema } },
      { on: 500, kind: "serviceError15", decode: { kind: "json", schema: serviceError1Schema } },
    ];
  }
}
