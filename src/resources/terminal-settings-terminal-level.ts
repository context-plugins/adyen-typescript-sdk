import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Get the terminal logo
   *
   * @remarks
   * Returns the logo that is configured for the payment terminal identified in the path. The logo
   * is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual
   * image file.
   *
   * To make this request, your API credential must have one of the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal settings read
   * * Management API—Terminal settings read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalLogosError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTerminalsTerminalIdTerminalLogos(
    request: TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/terminals/{terminalId}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "terminalId", value: request.terminalId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalLogosError,
      },
      options,
    );
  }

  /**
   * Get terminal settings
   *
   * @remarks
   * Returns the settings that are configured for the payment terminal identified in the path.
   *
   * To make this request, your API credential must have one of the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal settings read
   * * Management API—Terminal settings read and write
   *
   * For [sensitive terminal
   * settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings),
   * your API credential must have the following role:
   * * Management API—Terminal settings Advanced read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalSettingsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTerminalsTerminalIdTerminalSettings(
    request: TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalSettings, TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/terminals/{terminalId}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "terminalId", value: request.terminalId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalSettingsSchema },
        errorFactory: TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalSettingsError,
      },
      options,
    );
  }

  /**
   * Update the logo
   *
   * @remarks
   * Updates the logo for the payment terminal identified in the path.
   *
   * * To change the logo, specify the image file as a Base64-encoded string.
   * * To restore the logo inherited from a higher level (store, merchant account, or company
   *   account), specify an empty logo value.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal settings read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalLogosError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchTerminalsTerminalIdTerminalLogos(
    request: TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default9("/terminals/{terminalId}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "terminalId", value: request.terminalId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => logoSchema)) },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalLogosError,
      },
      options,
    );
  }

  /**
   * Update terminal settings
   *
   * @remarks
   * Updates the settings that are configured for the payment terminal identified in the path.
   *
   * * To change a parameter value, include the full object that contains the parameter, even if you
   *   don't want to change all parameters in the object.
   * * To restore a parameter value inherited from a higher level, include the full object that
   *   contains the parameter, and specify an empty value for the parameter or omit the parameter.
   * * Objects that are not included in the request are not updated.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal settings read and write
   *
   * For [sensitive terminal
   * settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings),
   * your API credential must have the following role:
   * * Management API—Terminal settings Advanced read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalSettingsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/terminals/{terminalId}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "terminalId", value: request.terminalId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the payment terminal. */
    terminalId: string;
  };

  export class GetTerminalsTerminalIdTerminalLogosError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetTerminalsTerminalIdTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetTerminalsTerminalIdTerminalSettingsRequest = {
    /** The unique identifier of the payment terminal. */
    terminalId: string;
  };

  export class GetTerminalsTerminalIdTerminalSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetTerminalsTerminalIdTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchTerminalsTerminalIdTerminalLogosRequest = {
    /** The unique identifier of the payment terminal. */
    terminalId: string;
    body?: Logo;
  };

  export class PatchTerminalsTerminalIdTerminalLogosError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchTerminalsTerminalIdTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchTerminalsTerminalIdTerminalSettingsRequest = {
    /** The unique identifier of the payment terminal. */
    terminalId: string;
    body?: TerminalSettings;
  };

  export class PatchTerminalsTerminalIdTerminalSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchTerminalsTerminalIdTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
