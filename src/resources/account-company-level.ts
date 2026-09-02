import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { company2Schema, type Company2 } from "../models/company2.js";
import { listCompanyResponseSchema, type ListCompanyResponse } from "../models/list-company-response.js";
import { listMerchantResponseSchema, type ListMerchantResponse } from "../models/list-merchant-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import type { Servers } from "../servers.js";

export class AccountCompanyLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getCompanies(
    request: AccountCompanyLevel.GetCompaniesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCompanyResponse, AccountCompanyLevel.GetCompaniesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCompanyResponseSchema },
        errorFactory: AccountCompanyLevel.GetCompaniesError,
      },
      options,
    );
  }

  getCompaniesCompanyId(
    request: AccountCompanyLevel.GetCompaniesCompanyIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Company2, AccountCompanyLevel.GetCompaniesCompanyIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: company2Schema },
        errorFactory: AccountCompanyLevel.GetCompaniesCompanyIdError,
      },
      options,
    );
  }

  getCompaniesCompanyIdMerchants(
    request: AccountCompanyLevel.GetCompaniesCompanyIdMerchantsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMerchantResponse, AccountCompanyLevel.GetCompaniesCompanyIdMerchantsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/merchants"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMerchantResponseSchema },
        errorFactory: AccountCompanyLevel.GetCompaniesCompanyIdMerchantsError,
      },
      options,
    );
  }
}

export namespace AccountCompanyLevel {
  export type GetCompaniesRequest = {
    pageNumber?: number;
    pageSize?: number;
  };

  export class GetCompaniesError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdRequest = {
    companyId: string;
  };

  export class GetCompaniesCompanyIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdMerchantsRequest = {
    companyId: string;
    pageNumber?: number;
    pageSize?: number;
  };

  export class GetCompaniesCompanyIdMerchantsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdMerchantsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
