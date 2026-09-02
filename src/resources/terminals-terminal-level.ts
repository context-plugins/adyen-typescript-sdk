import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listTerminalsResponseSchema,
  type ListTerminalsResponse,
} from "../models/list-terminals-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  terminalReassignmentRequestSchema,
  type TerminalReassignmentRequest,
} from "../models/terminal-reassignment-request.js";
import type { Servers } from "../servers.js";

export class TerminalsTerminalLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getTerminals(
    request: TerminalsTerminalLevel.GetTerminalsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTerminalsResponse, TerminalsTerminalLevel.GetTerminalsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/terminals"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        query: [
          { name: "searchQuery", value: request.searchQuery, schema: s.optional(s.string()) },
          { name: "otpQuery", value: request.otpQuery, schema: s.optional(s.string()) },
          { name: "countries", value: request.countries, schema: s.optional(s.string()) },
          { name: "merchantIds", value: request.merchantIds, schema: s.optional(s.string()) },
          { name: "storeIds", value: request.storeIds, schema: s.optional(s.string()) },
          { name: "brandModels", value: request.brandModels, schema: s.optional(s.string()) },
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTerminalsResponseSchema },
        errorFactory: TerminalsTerminalLevel.GetTerminalsError,
      },
      options,
    );
  }

  postTerminalsTerminalIdReassign(
    request: TerminalsTerminalLevel.PostTerminalsTerminalIdReassignRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TerminalsTerminalLevel.PostTerminalsTerminalIdReassignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/terminals/{terminalId}/reassign"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "terminalId", value: request.terminalId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => terminalReassignmentRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: TerminalsTerminalLevel.PostTerminalsTerminalIdReassignError,
      },
      options,
    );
  }
}

export namespace TerminalsTerminalLevel {
  export type GetTerminalsRequest = {
    searchQuery?: string;
    otpQuery?: string;
    countries?: string;
    merchantIds?: string;
    storeIds?: string;
    brandModels?: string;
    pageNumber?: number;
    pageSize?: number;
  };

  export class GetTerminalsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetTerminalsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostTerminalsTerminalIdReassignRequest = {
    terminalId: string;
    body?: TerminalReassignmentRequest;
  };

  export class PostTerminalsTerminalIdReassignError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostTerminalsTerminalIdReassignError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
