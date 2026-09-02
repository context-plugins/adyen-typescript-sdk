import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  getMerchantsMerchantIdUsers(
    request: UsersMerchantLevel.GetMerchantsMerchantIdUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMerchantUsersResponse, UsersMerchantLevel.GetMerchantsMerchantIdUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/users"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "username", value: request.username, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMerchantUsersResponseSchema },
        errorFactory: UsersMerchantLevel.GetMerchantsMerchantIdUsersError,
      },
      options,
    );
  }

  getMerchantsMerchantIdUsersUserId(
    request: UsersMerchantLevel.GetMerchantsMerchantIdUsersUserIdRequest,
    options?: RequestOptions,
  ): ApiPromise<User, UsersMerchantLevel.GetMerchantsMerchantIdUsersUserIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/users/{userId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: UsersMerchantLevel.GetMerchantsMerchantIdUsersUserIdError,
      },
      options,
    );
  }

  patchMerchantsMerchantIdUsersUserId(
    request: UsersMerchantLevel.PatchMerchantsMerchantIdUsersUserIdRequest,
    options?: RequestOptions,
  ): ApiPromise<User, UsersMerchantLevel.PatchMerchantsMerchantIdUsersUserIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/merchants/{merchantId}/users/{userId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
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

  postMerchantsMerchantIdUsers(
    request: UsersMerchantLevel.PostMerchantsMerchantIdUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateUserResponse, UsersMerchantLevel.PostMerchantsMerchantIdUsersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/merchants/{merchantId}/users"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
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
    merchantId: string;
    pageNumber?: number;
    pageSize?: number;
    username?: string;
  };

  export class GetMerchantsMerchantIdUsersError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdUsersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdUsersUserIdRequest = {
    merchantId: string;
    userId: string;
  };

  export class GetMerchantsMerchantIdUsersUserIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdUsersUserIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdUsersUserIdRequest = {
    merchantId: string;
    userId: string;
    body?: UpdateMerchantUserRequest;
  };

  export class PatchMerchantsMerchantIdUsersUserIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdUsersUserIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdUsersRequest = {
    merchantId: string;
    body?: CreateMerchantUserRequest;
  };

  export class PostMerchantsMerchantIdUsersError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdUsersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
