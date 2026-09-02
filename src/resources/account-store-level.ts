import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { listStoresResponseSchema, type ListStoresResponse } from "../models/list-stores-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import { storeCreationRequestSchema, type StoreCreationRequest } from "../models/store-creation-request.js";
import {
  storeCreationWithMerchantCodeRequestSchema,
  type StoreCreationWithMerchantCodeRequest,
} from "../models/store-creation-with-merchant-code-request.js";
import { storeSchema, type Store } from "../models/store.js";
import { updateStoreRequestSchema, type UpdateStoreRequest } from "../models/update-store-request.js";
import type { Servers } from "../servers.js";

export class AccountStoreLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getMerchantsMerchantIdStores(
    request: AccountStoreLevel.GetMerchantsMerchantIdStoresRequest,
    options?: RequestOptions,
  ): ApiPromise<ListStoresResponse, AccountStoreLevel.GetMerchantsMerchantIdStoresError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/stores"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "reference", value: request.reference, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listStoresResponseSchema },
        errorFactory: AccountStoreLevel.GetMerchantsMerchantIdStoresError,
      },
      options,
    );
  }

  getMerchantsMerchantIdStoresStoreId(
    request: AccountStoreLevel.GetMerchantsMerchantIdStoresStoreIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Store, AccountStoreLevel.GetMerchantsMerchantIdStoresStoreIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/stores/{storeId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "storeId", value: request.storeId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: storeSchema },
        errorFactory: AccountStoreLevel.GetMerchantsMerchantIdStoresStoreIdError,
      },
      options,
    );
  }

  getStores(
    request: AccountStoreLevel.GetStoresRequest,
    options?: RequestOptions,
  ): ApiPromise<ListStoresResponse, AccountStoreLevel.GetStoresError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/stores"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "reference", value: request.reference, schema: s.optional(s.string()) },
          { name: "merchantId", value: request.merchantId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listStoresResponseSchema },
        errorFactory: AccountStoreLevel.GetStoresError,
      },
      options,
    );
  }

  getStoresStoreId(
    request: AccountStoreLevel.GetStoresStoreIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Store, AccountStoreLevel.GetStoresStoreIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/stores/{storeId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "storeId", value: request.storeId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: storeSchema },
        errorFactory: AccountStoreLevel.GetStoresStoreIdError,
      },
      options,
    );
  }

  patchMerchantsMerchantIdStoresStoreId(
    request: AccountStoreLevel.PatchMerchantsMerchantIdStoresStoreIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Store, AccountStoreLevel.PatchMerchantsMerchantIdStoresStoreIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/merchants/{merchantId}/stores/{storeId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "storeId", value: request.storeId, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateStoreRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storeSchema },
        errorFactory: AccountStoreLevel.PatchMerchantsMerchantIdStoresStoreIdError,
      },
      options,
    );
  }

  patchStoresStoreId(
    request: AccountStoreLevel.PatchStoresStoreIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Store, AccountStoreLevel.PatchStoresStoreIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/stores/{storeId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "storeId", value: request.storeId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateStoreRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storeSchema },
        errorFactory: AccountStoreLevel.PatchStoresStoreIdError,
      },
      options,
    );
  }

  postMerchantsMerchantIdStores(
    request: AccountStoreLevel.PostMerchantsMerchantIdStoresRequest,
    options?: RequestOptions,
  ): ApiPromise<Store, AccountStoreLevel.PostMerchantsMerchantIdStoresError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/merchants/{merchantId}/stores"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => storeCreationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storeSchema },
        errorFactory: AccountStoreLevel.PostMerchantsMerchantIdStoresError,
      },
      options,
    );
  }

  postStores(
    request: AccountStoreLevel.PostStoresRequest,
    options?: RequestOptions,
  ): ApiPromise<Store, AccountStoreLevel.PostStoresError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/stores"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => storeCreationWithMerchantCodeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: storeSchema },
        errorFactory: AccountStoreLevel.PostStoresError,
      },
      options,
    );
  }
}

export namespace AccountStoreLevel {
  export type GetMerchantsMerchantIdStoresRequest = {
    merchantId: string;
    pageNumber?: number;
    pageSize?: number;
    reference?: string;
  };

  export class GetMerchantsMerchantIdStoresError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdStoresError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdStoresStoreIdRequest = {
    merchantId: string;
    storeId: string;
  };

  export class GetMerchantsMerchantIdStoresStoreIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdStoresStoreIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetStoresRequest = {
    pageNumber?: number;
    pageSize?: number;
    reference?: string;
    merchantId?: string;
  };

  export class GetStoresError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetStoresError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetStoresStoreIdRequest = {
    storeId: string;
  };

  export class GetStoresStoreIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetStoresStoreIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdStoresStoreIdRequest = {
    merchantId: string;
    storeId: string;
    body?: UpdateStoreRequest;
  };

  export class PatchMerchantsMerchantIdStoresStoreIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdStoresStoreIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchStoresStoreIdRequest = {
    storeId: string;
    body?: UpdateStoreRequest;
  };

  export class PatchStoresStoreIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchStoresStoreIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostMerchantsMerchantIdStoresRequest = {
    merchantId: string;
    body?: StoreCreationRequest;
  };

  export class PostMerchantsMerchantIdStoresError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdStoresError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostStoresRequest = {
    body?: StoreCreationWithMerchantCodeRequest;
  };

  export class PostStoresError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostStoresError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
