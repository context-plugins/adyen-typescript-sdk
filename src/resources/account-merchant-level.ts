import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  createMerchantRequestSchema,
  type CreateMerchantRequest,
} from "../models/create-merchant-request.js";
import {
  createMerchantResponseSchema,
  type CreateMerchantResponse,
} from "../models/create-merchant-response.js";
import { listMerchantResponseSchema, type ListMerchantResponse } from "../models/list-merchant-response.js";
import { merchantSchema, type Merchant } from "../models/merchant.js";
import {
  requestActivationResponseSchema,
  type RequestActivationResponse,
} from "../models/request-activation-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import type { Servers } from "../servers.js";

export class AccountMerchantLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getMerchants(
    request: AccountMerchantLevel.GetMerchantsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMerchantResponse, AccountMerchantLevel.GetMerchantsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMerchantResponseSchema },
        errorFactory: AccountMerchantLevel.GetMerchantsError,
      },
      options,
    );
  }

  getMerchantsMerchantId(
    request: AccountMerchantLevel.GetMerchantsMerchantIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Merchant, AccountMerchantLevel.GetMerchantsMerchantIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: merchantSchema },
        errorFactory: AccountMerchantLevel.GetMerchantsMerchantIdError,
      },
      options,
    );
  }

  postMerchants(
    request: AccountMerchantLevel.PostMerchantsRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateMerchantResponse, AccountMerchantLevel.PostMerchantsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/merchants"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createMerchantRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createMerchantResponseSchema },
        errorFactory: AccountMerchantLevel.PostMerchantsError,
      },
      options,
    );
  }

  postMerchantsMerchantIdActivate(
    request: AccountMerchantLevel.PostMerchantsMerchantIdActivateRequest,
    options?: RequestOptions,
  ): ApiPromise<RequestActivationResponse, AccountMerchantLevel.PostMerchantsMerchantIdActivateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/merchants/{merchantId}/activate"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: requestActivationResponseSchema },
        errorFactory: AccountMerchantLevel.PostMerchantsMerchantIdActivateError,
      },
      options,
    );
  }
}

export namespace AccountMerchantLevel {
  export type GetMerchantsRequest = {
    pageNumber?: number;
    pageSize?: number;
  };

  export class GetMerchantsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdRequest = {
    merchantId: string;
  };

  export class GetMerchantsMerchantIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsRequest = {
    body?: CreateMerchantRequest;
  };

  export class PostMerchantsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdActivateRequest = {
    merchantId: string;
  };

  export class PostMerchantsMerchantIdActivateError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdActivateError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
