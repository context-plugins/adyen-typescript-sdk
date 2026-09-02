import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  scheduleTerminalActionsRequestSchema,
  type ScheduleTerminalActionsRequest,
} from "../models/schedule-terminal-actions-request.js";
import {
  scheduleTerminalActionsResponseSchema,
  type ScheduleTerminalActionsResponse,
} from "../models/schedule-terminal-actions-response.js";
import type { Servers } from "../servers.js";

export class TerminalActionsTerminalLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  postTerminalsScheduleActions(
    request: TerminalActionsTerminalLevel.PostTerminalsScheduleActionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ScheduleTerminalActionsResponse,
    TerminalActionsTerminalLevel.PostTerminalsScheduleActionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/terminals/scheduleActions"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => scheduleTerminalActionsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: scheduleTerminalActionsResponseSchema },
        errorFactory: TerminalActionsTerminalLevel.PostTerminalsScheduleActionsError,
      },
      options,
    );
  }
}

export namespace TerminalActionsTerminalLevel {
  export type PostTerminalsScheduleActionsRequest = {
    body?: ScheduleTerminalActionsRequest;
  };

  export class PostTerminalsScheduleActionsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostTerminalsScheduleActionsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
