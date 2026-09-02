import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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
        url: this.#servers.default9("/companies/{companyId}/terminalActions"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listExternalTerminalActionsResponseSchema },
        errorFactory: TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsError,
      },
      options,
    );
  }

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
        url: this.#servers.default9("/companies/{companyId}/terminalActions/{actionId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "actionId", value: request.actionId, schema: s.string() },
        ],
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
    companyId: string;
    pageNumber?: number;
    pageSize?: number;
    status?: string;
    type?: string;
  };

  export class GetCompaniesCompanyIdTerminalActionsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdTerminalActionsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdTerminalActionsActionIdRequest = {
    companyId: string;
    actionId: string;
  };

  export class GetCompaniesCompanyIdTerminalActionsActionIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdTerminalActionsActionIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
