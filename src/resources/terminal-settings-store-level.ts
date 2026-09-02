import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { logoSchema, type Logo } from "../models/logo.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import { terminalSettingsSchema, type TerminalSettings } from "../models/terminal-settings.js";
import type { Servers } from "../servers.js";

export class TerminalSettingsStoreLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getMerchantsMerchantIdStoresReferenceTerminalLogos(
    request: TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/stores/{reference}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "reference", value: request.reference, schema: s.string() },
        ],
        query: [{ name: "model", value: request.model, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalLogosError,
      },
      options,
    );
  }

  getMerchantsMerchantIdStoresReferenceTerminalSettings(
    request: TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TerminalSettings,
    TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalSettingsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/stores/{reference}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "reference", value: request.reference, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalSettingsSchema },
        errorFactory: TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalSettingsError,
      },
      options,
    );
  }

  getStoresStoreIdTerminalLogos(
    request: TerminalSettingsStoreLevel.GetStoresStoreIdTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsStoreLevel.GetStoresStoreIdTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/stores/{storeId}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "storeId", value: request.storeId, schema: s.string() }],
        query: [{ name: "model", value: request.model, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsStoreLevel.GetStoresStoreIdTerminalLogosError,
      },
      options,
    );
  }

  getStoresStoreIdTerminalSettings(
    request: TerminalSettingsStoreLevel.GetStoresStoreIdTerminalSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalSettings, TerminalSettingsStoreLevel.GetStoresStoreIdTerminalSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/stores/{storeId}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "storeId", value: request.storeId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalSettingsSchema },
        errorFactory: TerminalSettingsStoreLevel.GetStoresStoreIdTerminalSettingsError,
      },
      options,
    );
  }

  patchMerchantsMerchantIdStoresReferenceTerminalLogos(
    request: TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/merchants/{merchantId}/stores/{reference}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "reference", value: request.reference, schema: s.string() },
        ],
        query: [{ name: "model", value: request.model, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => logoSchema)) },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalLogosError,
      },
      options,
    );
  }

  patchMerchantsMerchantIdStoresReferenceTerminalSettings(
    request: TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TerminalSettings,
    TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/merchants/{merchantId}/stores/{reference}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "reference", value: request.reference, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => terminalSettingsSchema)) },
      },
      {
        success: { kind: "json", schema: terminalSettingsSchema },
        errorFactory: TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError,
      },
      options,
    );
  }

  patchStoresStoreIdTerminalLogos(
    request: TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/stores/{storeId}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "storeId", value: request.storeId, schema: s.string() }],
        query: [{ name: "model", value: request.model, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => logoSchema)) },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalLogosError,
      },
      options,
    );
  }

  patchStoresStoreIdTerminalSettings(
    request: TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalSettings, TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalSettingsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/stores/{storeId}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "storeId", value: request.storeId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => terminalSettingsSchema)) },
      },
      {
        success: { kind: "json", schema: terminalSettingsSchema },
        errorFactory: TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalSettingsError,
      },
      options,
    );
  }
}

export namespace TerminalSettingsStoreLevel {
  export type GetMerchantsMerchantIdStoresReferenceTerminalLogosRequest = {
    merchantId: string;
    reference: string;
    model: string;
  };

  export class GetMerchantsMerchantIdStoresReferenceTerminalLogosError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdStoresReferenceTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdStoresReferenceTerminalSettingsRequest = {
    merchantId: string;
    reference: string;
  };

  export class GetMerchantsMerchantIdStoresReferenceTerminalSettingsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdStoresReferenceTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetStoresStoreIdTerminalLogosRequest = {
    storeId: string;
    model: string;
  };

  export class GetStoresStoreIdTerminalLogosError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetStoresStoreIdTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetStoresStoreIdTerminalSettingsRequest = {
    storeId: string;
  };

  export class GetStoresStoreIdTerminalSettingsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetStoresStoreIdTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdStoresReferenceTerminalLogosRequest = {
    merchantId: string;
    reference: string;
    model: string;
    body?: Logo;
  };

  export class PatchMerchantsMerchantIdStoresReferenceTerminalLogosError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdStoresReferenceTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdStoresReferenceTerminalSettingsRequest = {
    merchantId: string;
    reference: string;
    body?: TerminalSettings;
  };

  export class PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchStoresStoreIdTerminalLogosRequest = {
    storeId: string;
    model: string;
    body?: Logo;
  };

  export class PatchStoresStoreIdTerminalLogosError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchStoresStoreIdTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchStoresStoreIdTerminalSettingsRequest = {
    storeId: string;
    body?: TerminalSettings;
  };

  export class PatchStoresStoreIdTerminalSettingsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchStoresStoreIdTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
