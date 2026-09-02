import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  getNetworkTokenResponseSchema,
  type GetNetworkTokenResponse,
} from "../models/get-network-token-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  updateNetworkTokenRequestSchema,
  type UpdateNetworkTokenRequest,
} from "../models/update-network-token-request.js";
import type { Servers } from "../servers.js";

export class NetworkTokens {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getNetworkTokensNetworkTokenId(
    request: NetworkTokens.GetNetworkTokensNetworkTokenIdRequest,
    options?: RequestOptions,
  ): ApiPromise<GetNetworkTokenResponse, NetworkTokens.GetNetworkTokensNetworkTokenIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default13("/networkTokens/{networkTokenId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "networkTokenId", value: request.networkTokenId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getNetworkTokenResponseSchema },
        errorFactory: NetworkTokens.GetNetworkTokensNetworkTokenIdError,
      },
      options,
    );
  }

  patchNetworkTokensNetworkTokenId(
    request: NetworkTokens.PatchNetworkTokensNetworkTokenIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, NetworkTokens.PatchNetworkTokensNetworkTokenIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default13("/networkTokens/{networkTokenId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "networkTokenId", value: request.networkTokenId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateNetworkTokenRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: NetworkTokens.PatchNetworkTokensNetworkTokenIdError,
      },
      options,
    );
  }
}

export namespace NetworkTokens {
  export type GetNetworkTokensNetworkTokenIdRequest = {
    networkTokenId: string;
  };

  export class GetNetworkTokensNetworkTokenIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetNetworkTokensNetworkTokenIdError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchNetworkTokensNetworkTokenIdRequest = {
    networkTokenId: string;
    body?: UpdateNetworkTokenRequest;
  };

  export class PatchNetworkTokensNetworkTokenIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchNetworkTokensNetworkTokenIdError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
