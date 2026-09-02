import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  getCompaniesCompanyIdUsers(
    request: UsersCompanyLevel.GetCompaniesCompanyIdUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCompanyUsersResponse, UsersCompanyLevel.GetCompaniesCompanyIdUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/users"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "username", value: request.username, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCompanyUsersResponseSchema },
        errorFactory: UsersCompanyLevel.GetCompaniesCompanyIdUsersError,
      },
      options,
    );
  }

  getCompaniesCompanyIdUsersUserId(
    request: UsersCompanyLevel.GetCompaniesCompanyIdUsersUserIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyUser, UsersCompanyLevel.GetCompaniesCompanyIdUsersUserIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/users/{userId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyUserSchema },
        errorFactory: UsersCompanyLevel.GetCompaniesCompanyIdUsersUserIdError,
      },
      options,
    );
  }

  patchCompaniesCompanyIdUsersUserId(
    request: UsersCompanyLevel.PatchCompaniesCompanyIdUsersUserIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyUser, UsersCompanyLevel.PatchCompaniesCompanyIdUsersUserIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/companies/{companyId}/users/{userId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "userId", value: request.userId, schema: s.string() },
        ],
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

  postCompaniesCompanyIdUsers(
    request: UsersCompanyLevel.PostCompaniesCompanyIdUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateCompanyUserResponse, UsersCompanyLevel.PostCompaniesCompanyIdUsersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/companies/{companyId}/users"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
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
    companyId: string;
    pageNumber?: number;
    pageSize?: number;
    username?: string;
  };

  export class GetCompaniesCompanyIdUsersError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdUsersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdUsersUserIdRequest = {
    companyId: string;
    userId: string;
  };

  export class GetCompaniesCompanyIdUsersUserIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdUsersUserIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchCompaniesCompanyIdUsersUserIdRequest = {
    companyId: string;
    userId: string;
    body?: UpdateCompanyUserRequest;
  };

  export class PatchCompaniesCompanyIdUsersUserIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchCompaniesCompanyIdUsersUserIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdUsersRequest = {
    companyId: string;
    body?: CreateCompanyUserRequest;
  };

  export class PostCompaniesCompanyIdUsersError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdUsersError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
