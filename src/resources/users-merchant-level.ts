import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createMerchantUserRequestSchema,
  type CreateMerchantUserRequest,
} from "../models/create-merchant-user-request.js";
import { createUserResponseSchema, type CreateUserResponse } from "../models/create-user-response.js";
import {
  listMerchantUsersResponseSchema,
  type ListMerchantUsersResponse,
} from "../models/list-merchant-users-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  updateMerchantUserRequestSchema,
  type UpdateMerchantUserRequest,
} from "../models/update-merchant-user-request.js";
import { userSchema, type User } from "../models/user.js";
import type { Servers } from "../servers.js";

export class UsersMerchantLevel {
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
   * Returns a list of users associated with the `merchantId` specified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Users read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link UsersMerchantLevel.GetMerchantsMerchantIdUsersError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchantsMerchantIdUsers(
    request: UsersMerchantLevel.GetMerchantsMerchantIdUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMerchantUsersResponse, UsersMerchantLevel.GetMerchantsMerchantIdUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/users"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "username", value: request.username, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMerchantUsersResponseSchema },
        errorFactory: UsersMerchantLevel.GetMerchantsMerchantIdUsersError,
      },
      options,
    );
  }

  /**
   * Get user details
   *
   * @remarks
   * Returns user details for the `userId` and the `merchantId` specified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Users read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link UsersMerchantLevel.GetMerchantsMerchantIdUsersUserIdError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchantsMerchantIdUsersUserId(
    request: UsersMerchantLevel.GetMerchantsMerchantIdUsersUserIdRequest,
    options?: RequestOptions,
  ): ApiPromise<User, UsersMerchantLevel.GetMerchantsMerchantIdUsersUserIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/users/{userId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: UsersMerchantLevel.GetMerchantsMerchantIdUsersUserIdError,
      },
      options,
    );
  }

  /**
   * Update a user
   *
   * @remarks
   * Updates user details for the `userId` and the `merchantId` specified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Users read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link UsersMerchantLevel.PatchMerchantsMerchantIdUsersUserIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchMerchantsMerchantIdUsersUserId(
    request: UsersMerchantLevel.PatchMerchantsMerchantIdUsersUserIdRequest,
    options?: RequestOptions,
  ): ApiPromise<User, UsersMerchantLevel.PatchMerchantsMerchantIdUsersUserIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/users/{userId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateMerchantUserRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: UsersMerchantLevel.PatchMerchantsMerchantIdUsersUserIdError,
      },
      options,
    );
  }

  /**
   * Create a new user
   *
   * @remarks
   * Creates a user for the `merchantId` specified in the path.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Users read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link UsersMerchantLevel.PostMerchantsMerchantIdUsersError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postMerchantsMerchantIdUsers(
    request: UsersMerchantLevel.PostMerchantsMerchantIdUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateUserResponse, UsersMerchantLevel.PostMerchantsMerchantIdUsersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/users"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createMerchantUserRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createUserResponseSchema },
        errorFactory: UsersMerchantLevel.PostMerchantsMerchantIdUsersError,
      },
      options,
    );
  }
}

export namespace UsersMerchantLevel {
  export type GetMerchantsMerchantIdUsersRequest = {
    /** Unique identifier of the merchant. */
    merchantId: string;
    /** The number of the page to fetch. */
    pageNumber?: number;
    /**
     * The number of items to have on a page. Maximum value is **100**. The default is **10** items
     * on a page.
     */
    pageSize?: number;
    /** The partial or complete username to select all users that match. */
    username?: string;
  };

  export class GetMerchantsMerchantIdUsersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdUsersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdUsersUserIdRequest = {
    /** Unique identifier of the merchant. */
    merchantId: string;
    /** Unique identifier of the user. */
    userId: string;
  };

  export class GetMerchantsMerchantIdUsersUserIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdUsersUserIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdUsersUserIdRequest = {
    /** Unique identifier of the merchant. */
    merchantId: string;
    /** Unique identifier of the user. */
    userId: string;
    body?: UpdateMerchantUserRequest;
  };

  export class PatchMerchantsMerchantIdUsersUserIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdUsersUserIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdUsersRequest = {
    /** Unique identifier of the merchant. */
    merchantId: string;
    body?: CreateMerchantUserRequest;
  };

  export class PostMerchantsMerchantIdUsersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdUsersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
