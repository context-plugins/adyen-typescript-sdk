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

export class TerminalSettingsMerchantLevel {
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
   * Returns the logo that is configured for a specific payment terminal model at the merchant
   * account identified in the path. The logo is returned as a Base64-encoded string. You need to
   * Base64-decode the string to get the actual image file. This logo applies to all terminals of
   * the specified model under the merchant account, unless a different logo is configured at a
   * lower level (store or individual terminal).
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
   * @throws {@link TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalLogosError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchantsMerchantIdTerminalLogos(
    request: TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [{ name: "model", value: request.model, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalLogosError,
      },
      options,
    );
  }

  /**
   * Get terminal settings
   *
   * @remarks
   * Returns the payment terminal settings that are configured for the merchant account identified
   * in the path. These settings apply to all terminals under the merchant account unless different
   * values are configured at a lower level (store or individual terminal).
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
   * @throws {@link TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalSettingsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchantsMerchantIdTerminalSettings(
    request: TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalSettings, TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalSettingsSchema },
        errorFactory: TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalSettingsError,
      },
      options,
    );
  }

  /**
   * Update the terminal logo
   *
   * @remarks
   * Updates the logo for a specific payment terminal model at the merchant account identified in
   * the path. You can update the logo for only one terminal model at a time. This logo applies to
   * all terminals of the specified model under the merchant account, unless a different logo is
   * configured at a lower level (store or individual terminal).
   *
   * * To change the logo, specify the image file as a Base64-encoded string.
   * * To restore the logo inherited from the company account, specify an empty logo value.
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
   * @throws {@link TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalLogosError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchMerchantsMerchantIdTerminalLogos(
    request: TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [{ name: "model", value: request.model, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => logoSchema)) },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalLogosError,
      },
      options,
    );
  }

  /**
   * Update terminal settings
   *
   * @remarks
   * Updates payment terminal settings for the merchant account identified in the path. These
   * settings apply to all terminals under the merchant account, unless different values are
   * configured at a lower level (store or individual terminal).
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
   *
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
   * @throws {@link TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalSettingsError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "merchantId", value: request.merchantId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /**
     * The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400,
     * MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p,
     * S1E, S1EL, S1F2, S1L, S1U, S7T.
     */
    model: string;
  };

  export class GetMerchantsMerchantIdTerminalLogosError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdTerminalSettingsRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
  };

  export class GetMerchantsMerchantIdTerminalSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdTerminalLogosRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /**
     * The terminal model. Allowed values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400,
     * MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p,
     * S1E, S1EL, S1F2, S1L, S1U, S7T.
     */
    model: string;
    body?: Logo;
  };

  export class PatchMerchantsMerchantIdTerminalLogosError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdTerminalSettingsRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    body?: TerminalSettings;
  };

  export class PatchMerchantsMerchantIdTerminalSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
