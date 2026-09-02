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

export class TerminalSettingsTerminalLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getTerminalsTerminalIdTerminalLogos(
    request: TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/terminals/{terminalId}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "terminalId", value: request.terminalId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalLogosError,
      },
      options,
    );
  }

  getTerminalsTerminalIdTerminalSettings(
    request: TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalSettings, TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/terminals/{terminalId}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "terminalId", value: request.terminalId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalSettingsSchema },
        errorFactory: TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalSettingsError,
      },
      options,
    );
  }

  patchTerminalsTerminalIdTerminalLogos(
    request: TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/terminals/{terminalId}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "terminalId", value: request.terminalId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => logoSchema)) },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalLogosError,
      },
      options,
    );
  }

  patchTerminalsTerminalIdTerminalSettings(
    request: TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TerminalSettings,
    TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalSettingsError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/terminals/{terminalId}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "terminalId", value: request.terminalId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => terminalSettingsSchema)) },
      },
      {
        success: { kind: "json", schema: terminalSettingsSchema },
        errorFactory: TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalSettingsError,
      },
      options,
    );
  }
}

export namespace TerminalSettingsTerminalLevel {
  export type GetTerminalsTerminalIdTerminalLogosRequest = {
    terminalId: string;
  };

  export class GetTerminalsTerminalIdTerminalLogosError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetTerminalsTerminalIdTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetTerminalsTerminalIdTerminalSettingsRequest = {
    terminalId: string;
  };

  export class GetTerminalsTerminalIdTerminalSettingsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetTerminalsTerminalIdTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchTerminalsTerminalIdTerminalLogosRequest = {
    terminalId: string;
    body?: Logo;
  };

  export class PatchTerminalsTerminalIdTerminalLogosError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchTerminalsTerminalIdTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchTerminalsTerminalIdTerminalSettingsRequest = {
    terminalId: string;
    body?: TerminalSettings;
  };

  export class PatchTerminalsTerminalIdTerminalSettingsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchTerminalsTerminalIdTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
