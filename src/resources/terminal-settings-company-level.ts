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

export class TerminalSettingsCompanyLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getCompaniesCompanyIdTerminalLogos(
    request: TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [{ name: "model", value: request.model, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalLogosError,
      },
      options,
    );
  }

  getCompaniesCompanyIdTerminalSettings(
    request: TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalSettings, TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalSettingsSchema },
        errorFactory: TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalSettingsError,
      },
      options,
    );
  }

  patchCompaniesCompanyIdTerminalLogos(
    request: TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/companies/{companyId}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [{ name: "model", value: request.model, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => logoSchema)) },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalLogosError,
      },
      options,
    );
  }

  patchCompaniesCompanyIdTerminalSettings(
    request: TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalSettings, TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalSettingsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/companies/{companyId}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => terminalSettingsSchema)) },
      },
      {
        success: { kind: "json", schema: terminalSettingsSchema },
        errorFactory: TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalSettingsError,
      },
      options,
    );
  }
}

export namespace TerminalSettingsCompanyLevel {
  export type GetCompaniesCompanyIdTerminalLogosRequest = {
    companyId: string;
    model: string;
  };

  export class GetCompaniesCompanyIdTerminalLogosError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdTerminalSettingsRequest = {
    companyId: string;
  };

  export class GetCompaniesCompanyIdTerminalSettingsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchCompaniesCompanyIdTerminalLogosRequest = {
    companyId: string;
    model: string;
    body?: Logo;
  };

  export class PatchCompaniesCompanyIdTerminalLogosError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchCompaniesCompanyIdTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchCompaniesCompanyIdTerminalSettingsRequest = {
    companyId: string;
    body?: TerminalSettings;
  };

  export class PatchCompaniesCompanyIdTerminalSettingsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchCompaniesCompanyIdTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
