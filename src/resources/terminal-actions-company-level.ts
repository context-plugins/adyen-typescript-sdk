import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  externalTerminalActionSchema,
  type ExternalTerminalAction,
} from "../models/external-terminal-action.js";
import {
  listExternalTerminalActionsResponseSchema,
  type ListExternalTerminalActionsResponse,
} from "../models/list-external-terminal-actions-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import type { Servers } from "../servers.js";

export class TerminalActionsCompanyLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a list of terminal actions
   *
   * @remarks
   * Returns the [terminal
   * actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api)
   * that have been scheduled for the company identified in the path.The response doesn't include
   * actions that are scheduled by Adyen. To make this request, your API credential must have one of
   * the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal actions read
   * * Management API—Terminal actions read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesCompanyIdTerminalActions(
    request: TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListExternalTerminalActionsResponse,
    TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/companies/{companyId}/terminalActions"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listExternalTerminalActionsResponseSchema },
        errorFactory: TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsError,
      },
      options,
    );
  }

  /**
   * Get terminal action
   *
   * @remarks
   * Returns the details of the [terminal
   * action](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api)
   * identified in the path. To make this request, your API credential must have one of the
   * following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal actions read
   * * Management API—Terminal actions read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsActionIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesCompanyIdTerminalActionsActionId(
    request: TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsActionIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ExternalTerminalAction,
    TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsActionIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/companies/{companyId}/terminalActions/{actionId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "actionId", value: request.actionId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: externalTerminalActionSchema },
        errorFactory: TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsActionIdError,
      },
      options,
    );
  }
}

export namespace TerminalActionsCompanyLevel {
  export type GetCompaniesCompanyIdTerminalActionsRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** The number of the page to fetch. */
    pageNumber?: number;
    /** The number of items to have on a page, maximum 100. The default is 20 items on a page. */
    pageSize?: number;
    /**
     * Returns terminal actions with the specified status. Allowed values: **pending**,
     * **successful**, **failed**, **cancelled**, **tryLater**.
     */
    status?: string;
    /**
     * Returns terminal actions of the specified type. Allowed values: **InstallAndroidApp**,
     * **UninstallAndroidApp**, **InstallAndroidCertificate**, **UninstallAndroidCertificate**.
     */
    type?: string;
  };

  export class GetCompaniesCompanyIdTerminalActionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdTerminalActionsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdTerminalActionsActionIdRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** The unique identifier of the terminal action. */
    actionId: string;
  };

  export class GetCompaniesCompanyIdTerminalActionsActionIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdTerminalActionsActionIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
