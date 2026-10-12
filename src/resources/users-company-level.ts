import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { companyUserSchema, type CompanyUser } from "../models/company-user.js";
import {
  createCompanyUserRequestSchema,
  type CreateCompanyUserRequest,
} from "../models/create-company-user-request.js";
import {
  createCompanyUserResponseSchema,
  type CreateCompanyUserResponse,
} from "../models/create-company-user-response.js";
import {
  listCompanyUsersResponseSchema,
  type ListCompanyUsersResponse,
} from "../models/list-company-users-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  updateCompanyUserRequestSchema,
  type UpdateCompanyUserRequest,
} from "../models/update-company-user-request.js";
import type { Servers } from "../servers.js";

export class UsersCompanyLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a list of users
   *
   * @remarks
   * Returns the list of users for the `companyId` identified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Users read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link UsersCompanyLevel.GetCompaniesCompanyIdUsersError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesCompanyIdUsers(
    request: UsersCompanyLevel.GetCompaniesCompanyIdUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCompanyUsersResponse, UsersCompanyLevel.GetCompaniesCompanyIdUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/companies/{companyId}/users"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "username", value: request.username, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCompanyUsersResponseSchema },
        errorFactory: UsersCompanyLevel.GetCompaniesCompanyIdUsersError,
      },
      options,
    );
  }

  /**
   * Get user details
   *
   * @remarks
   * Returns user details for the `userId` and the `companyId` identified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Users read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link UsersCompanyLevel.GetCompaniesCompanyIdUsersUserIdError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesCompanyIdUsersUserId(
    request: UsersCompanyLevel.GetCompaniesCompanyIdUsersUserIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyUser, UsersCompanyLevel.GetCompaniesCompanyIdUsersUserIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/companies/{companyId}/users/{userId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyUserSchema },
        errorFactory: UsersCompanyLevel.GetCompaniesCompanyIdUsersUserIdError,
      },
      options,
    );
  }

  /**
   * Update user details
   *
   * @remarks
   * Updates user details for the `userId` and the `companyId` identified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Users read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link UsersCompanyLevel.PatchCompaniesCompanyIdUsersUserIdError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchCompaniesCompanyIdUsersUserId(
    request: UsersCompanyLevel.PatchCompaniesCompanyIdUsersUserIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyUser, UsersCompanyLevel.PatchCompaniesCompanyIdUsersUserIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default9("/companies/{companyId}/users/{userId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateCompanyUserRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: companyUserSchema },
        errorFactory: UsersCompanyLevel.PatchCompaniesCompanyIdUsersUserIdError,
      },
      options,
    );
  }

  /**
   * Create a new user
   *
   * @remarks
   * Creates the user for the `companyId` identified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Users read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link UsersCompanyLevel.PostCompaniesCompanyIdUsersError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCompaniesCompanyIdUsers(
    request: UsersCompanyLevel.PostCompaniesCompanyIdUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateCompanyUserResponse, UsersCompanyLevel.PostCompaniesCompanyIdUsersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/companies/{companyId}/users"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createCompanyUserRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createCompanyUserResponseSchema },
        errorFactory: UsersCompanyLevel.PostCompaniesCompanyIdUsersError,
      },
      options,
    );
  }
}

export namespace UsersCompanyLevel {
  export type GetCompaniesCompanyIdUsersRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** The number of the page to return. */
    pageNumber?: number;
    /**
     * The number of items to have on a page. Maximum value is **100**. The default is **10** items
     * on a page.
     */
    pageSize?: number;
    /** The partial or complete username to select all users that match. */
    username?: string;
  };

  export class GetCompaniesCompanyIdUsersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdUsersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdUsersUserIdRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** The unique identifier of the user. */
    userId: string;
  };

  export class GetCompaniesCompanyIdUsersUserIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdUsersUserIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchCompaniesCompanyIdUsersUserIdRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** The unique identifier of the user. */
    userId: string;
    body?: UpdateCompanyUserRequest;
  };

  export class PatchCompaniesCompanyIdUsersUserIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchCompaniesCompanyIdUsersUserIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdUsersRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    body?: CreateCompanyUserRequest;
  };

  export class PostCompaniesCompanyIdUsersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdUsersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
