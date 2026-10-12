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

export class TerminalSettingsStoreLevel {
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
   * Returns the logo that is configured for a specific payment terminal model at the store
   * identified in the path. The logo is returned as a Base64-encoded string. You need to
   * Base64-decode the string to get the actual image file. This logo applies to all terminals of
   * the specified model under the store, unless a different logo is configured for an individual
   * terminal.
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
   * @throws {@link
   * TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalLogosError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMerchantsMerchantIdStoresReferenceTerminalLogos(
    request: TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/stores/{reference}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "reference", value: request.reference, schema: s.string() },
        ],
        query: [{ name: "model", value: request.model, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalLogosError,
      },
      options,
    );
  }

  /**
   * Get terminal settings
   *
   * @remarks
   * Returns the payment terminal settings that are configured for the store identified in the path.
   * These settings apply to all terminals under the store unless different values are configured
   * for an individual terminal.
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
   * @throws {@link
   * TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalSettingsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/stores/{reference}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "reference", value: request.reference, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalSettingsSchema },
        errorFactory: TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalSettingsError,
      },
      options,
    );
  }

  /**
   * Get the terminal logo
   *
   * @remarks
   * Returns the logo that is configured for a specific payment terminal model at the store
   * identified in the path. The logo is returned as a Base64-encoded string. You need to
   * Base64-decode the string to get the actual image file. This logo applies to all terminals of
   * that model under the store unless a different logo is configured for an individual terminal.
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
   * @throws {@link TerminalSettingsStoreLevel.GetStoresStoreIdTerminalLogosError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStoresStoreIdTerminalLogos(
    request: TerminalSettingsStoreLevel.GetStoresStoreIdTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsStoreLevel.GetStoresStoreIdTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/stores/{storeId}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "storeId", value: request.storeId, schema: s.string() }],
        query: [{ name: "model", value: request.model, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsStoreLevel.GetStoresStoreIdTerminalLogosError,
      },
      options,
    );
  }

  /**
   * Get terminal settings
   *
   * @remarks
   * Returns the payment terminal settings that are configured for the store identified in the path.
   * These settings apply to all terminals under the store unless different values are configured
   * for an individual terminal.
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
   * @throws {@link TerminalSettingsStoreLevel.GetStoresStoreIdTerminalSettingsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStoresStoreIdTerminalSettings(
    request: TerminalSettingsStoreLevel.GetStoresStoreIdTerminalSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalSettings, TerminalSettingsStoreLevel.GetStoresStoreIdTerminalSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/stores/{storeId}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "storeId", value: request.storeId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: terminalSettingsSchema },
        errorFactory: TerminalSettingsStoreLevel.GetStoresStoreIdTerminalSettingsError,
      },
      options,
    );
  }

  /**
   * Update the terminal logo
   *
   * @remarks
   * Updates the logo that is configured for a specific payment terminal model at the store
   * identified in the path. You can update the logo for only one terminal model at a time. This
   * logo applies to all terminals of the specified model under the store, unless a different logo
   * is configured for an individual terminal.
   *
   * * To change the logo, specify the image file as a Base64-encoded string.
   * * To restore the logo inherited from a higher level (merchant or company account), specify an
   *   empty logo value.
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
   * @throws {@link
   * TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalLogosError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchMerchantsMerchantIdStoresReferenceTerminalLogos(
    request: TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/stores/{reference}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "reference", value: request.reference, schema: s.string() },
        ],
        query: [{ name: "model", value: request.model, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => logoSchema)) },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalLogosError,
      },
      options,
    );
  }

  /**
   * Update terminal settings
   *
   * @remarks
   * Updates payment terminal settings for the store identified in the path. These settings apply to
   * all terminals under the store, unless different values are configured for an individual
   * terminal.
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
   * @throws {@link
   * TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/merchants/{merchantId}/stores/{reference}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "reference", value: request.reference, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => terminalSettingsSchema)) },
      },
      {
        success: { kind: "json", schema: terminalSettingsSchema },
        errorFactory: TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError,
      },
      options,
    );
  }

  /**
   * Update the terminal logo
   *
   * @remarks
   * Updates the logo that is configured for a specific payment terminal model at the store
   * identified in the path. You can update the logo for only one terminal model at a time. This
   * logo applies to all terminals of the specified model under the store, unless a different logo
   * is configured for an individual terminal.
   *
   * * To change the logo, specify the image file as a Base64-encoded string.
   * * To restore the logo inherited from a higher level (merchant or company account), specify an
   *   empty logo value.
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
   * @throws {@link TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalLogosError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchStoresStoreIdTerminalLogos(
    request: TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalLogosRequest,
    options?: RequestOptions,
  ): ApiPromise<Logo, TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalLogosError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default9("/stores/{storeId}/terminalLogos"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "storeId", value: request.storeId, schema: s.string() }],
        query: [{ name: "model", value: request.model, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => logoSchema)) },
      },
      {
        success: { kind: "json", schema: logoSchema },
        errorFactory: TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalLogosError,
      },
      options,
    );
  }

  /**
   * Update terminal settings
   *
   * @remarks
   * Updates payment terminal settings for the store identified in the path. These settings apply to
   * all terminals under the store, unless different values are configured for an individual
   * terminal.
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
   * @throws {@link TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalSettingsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchStoresStoreIdTerminalSettings(
    request: TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalSettings, TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalSettingsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default9("/stores/{storeId}/terminalSettings"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "storeId", value: request.storeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The reference that identifies the store. */
    reference: string;
    /**
     * The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400,
     * MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p,
     * S1E, S1EL, S1F2, S1L, S1U, S7T.
     */
    model: string;
  };

  export class GetMerchantsMerchantIdStoresReferenceTerminalLogosError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdStoresReferenceTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetMerchantsMerchantIdStoresReferenceTerminalSettingsRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The reference that identifies the store. */
    reference: string;
  };

  export class GetMerchantsMerchantIdStoresReferenceTerminalSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetMerchantsMerchantIdStoresReferenceTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetStoresStoreIdTerminalLogosRequest = {
    /** The unique identifier of the store. */
    storeId: string;
    /**
     * The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400,
     * MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p,
     * S1E, S1EL, S1F2, S1L, S1U, S7T.
     */
    model: string;
  };

  export class GetStoresStoreIdTerminalLogosError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetStoresStoreIdTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetStoresStoreIdTerminalSettingsRequest = {
    /** The unique identifier of the store. */
    storeId: string;
  };

  export class GetStoresStoreIdTerminalSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetStoresStoreIdTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdStoresReferenceTerminalLogosRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The reference that identifies the store. */
    reference: string;
    /**
     * The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400,
     * MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p,
     * S1E, S1EL, S1F2, S1L, S1U, S7T
     */
    model: string;
    body?: Logo;
  };

  export class PatchMerchantsMerchantIdStoresReferenceTerminalLogosError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdStoresReferenceTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchMerchantsMerchantIdStoresReferenceTerminalSettingsRequest = {
    /** The unique identifier of the merchant account. */
    merchantId: string;
    /** The reference that identifies the store. */
    reference: string;
    body?: TerminalSettings;
  };

  export class PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchStoresStoreIdTerminalLogosRequest = {
    /** The unique identifier of the store. */
    storeId: string;
    /**
     * The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400,
     * MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p,
     * S1E, S1EL, S1F2, S1L, S1U, S7T.
     */
    model: string;
    body?: Logo;
  };

  export class PatchStoresStoreIdTerminalLogosError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchStoresStoreIdTerminalLogosError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchStoresStoreIdTerminalSettingsRequest = {
    /** The unique identifier of the store. */
    storeId: string;
    body?: TerminalSettings;
  };

  export class PatchStoresStoreIdTerminalSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchStoresStoreIdTerminalSettingsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
