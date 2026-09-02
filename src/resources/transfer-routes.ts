import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import { transferRouteRequestSchema, type TransferRouteRequest } from "../models/transfer-route-request.js";
import {
  transferRouteResponseSchema,
  type TransferRouteResponse,
} from "../models/transfer-route-response.js";
import type { Servers } from "../servers.js";

export class TransferRoutes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  postTransferRoutesCalculate(
    request: TransferRoutes.PostTransferRoutesCalculateRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferRouteResponse, TransferRoutes.PostTransferRoutesCalculateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default13("/transferRoutes/calculate"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => transferRouteRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: transferRouteResponseSchema },
        errorFactory: TransferRoutes.PostTransferRoutesCalculateError,
      },
      options,
    );
  }
}

export namespace TransferRoutes {
  export type PostTransferRoutesCalculateRequest = {
    body?: TransferRouteRequest;
  };

  export class PostTransferRoutesCalculateError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostTransferRoutesCalculateError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
