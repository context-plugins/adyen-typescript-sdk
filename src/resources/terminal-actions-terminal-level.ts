import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Create a terminal action
   *
   * @remarks
   * Schedules a [terminal
   * action](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api)
   * by specifying the action and the terminals that the action must be applied to.
   *
   * The following restrictions apply:
   * * You can schedule only one action at a time. For example, to install a new app version and
   *   remove an old app version, you have to make two API requests.
   * * The maximum number of terminals in a request is **100**. For example, to apply an action to
   *   250 terminals, you have to divide the terminals over three API requests.
   * * If there is an error with one or more terminal IDs in the request, the action is scheduled
   *   for none of the terminals. You need to fix the error and try again.
   *
   * To make this request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Terminal actions read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link TerminalActionsTerminalLevel.PostTerminalsScheduleActionsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/terminals/scheduleActions"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  export class PostTerminalsScheduleActionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostTerminalsScheduleActionsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
