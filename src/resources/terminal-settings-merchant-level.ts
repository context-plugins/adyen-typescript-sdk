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

export class TerminalSettingsMerchantLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getMerchantsMerchantIdTerminalLogos(
    request: TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [{ name: "model", value: request.model, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalLogosError,
      },
      options,
    );
  }

  getMerchantsMerchantIdTerminalSettings(
    request: TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalSettings, TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/merchants/{merchantId}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalSettingsSchema },
        errorFactory: TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalSettingsError,
      },
      options,
    );
  }

  patchMerchantsMerchantIdTerminalLogos(
    request: TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/merchants/{merchantId}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [{ name: "model", value: request.model, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => logoSchema)) },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalLogosError,
      },
      options,
    );
  }

  patchMerchantsMerchantIdTerminalSettings(
    request: TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TerminalSettings,
    TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalSettingsError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/merchants/{merchantId}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => terminalSettingsSchema)) },
      },
      {
        success: { kind: "json", schema: terminalSettingsSchema },
        errorFactory: TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalSettingsError,
      },
      options,
    );
  }
}

export namespace TerminalSettingsMerchantLevel {
  export type GetMerchantsMerchantIdTerminalLogosRequest = {
    merchantId: string;
    model: string;
  };

  export class GetMerchantsMerchantIdTerminalLogosError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdTerminalSettingsRequest = {
    merchantId: string;
  };

  export class GetMerchantsMerchantIdTerminalSettingsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdTerminalLogosRequest = {
    merchantId: string;
    model: string;
    body?: Logo;
  };

  export class PatchMerchantsMerchantIdTerminalLogosError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdTerminalSettingsRequest = {
    merchantId: string;
    body?: TerminalSettings;
  };

  export class PatchMerchantsMerchantIdTerminalSettingsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
