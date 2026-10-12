import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Get a network token
   *
   * @remarks
   * Returns the details of a network token.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link NetworkTokens.GetNetworkTokensNetworkTokenIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getNetworkTokensNetworkTokenId(
    request: NetworkTokens.GetNetworkTokensNetworkTokenIdRequest,
    options?: RequestOptions,
  ): ApiPromise<GetNetworkTokenResponse, NetworkTokens.GetNetworkTokensNetworkTokenIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/networkTokens/{networkTokenId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "networkTokenId", value: request.networkTokenId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getNetworkTokenResponseSchema },
        errorFactory: NetworkTokens.GetNetworkTokensNetworkTokenIdError,
      },
      options,
    );
  }

  /**
   * Update a network token
   *
   * @remarks
   * Updates the status of the network token.
   *
   * @returns No Content - look at the actual response code for the status of the request.
   *
   * @throws {@link NetworkTokens.PatchNetworkTokensNetworkTokenIdError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchNetworkTokensNetworkTokenId(
    request: NetworkTokens.PatchNetworkTokensNetworkTokenIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, NetworkTokens.PatchNetworkTokensNetworkTokenIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default13("/networkTokens/{networkTokenId}"),
        auth: anyAuth(this.#auth.clientKey, this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "networkTokenId", value: request.networkTokenId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the network token. */
    networkTokenId: string;
  };

  export class GetNetworkTokensNetworkTokenIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetNetworkTokensNetworkTokenIdError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchNetworkTokensNetworkTokenIdRequest = {
    /** The unique identifier of the network token. */
    networkTokenId: string;
    body?: UpdateNetworkTokenRequest;
  };

  export class PatchNetworkTokensNetworkTokenIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchNetworkTokensNetworkTokenIdError> = [
      { on: 401, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
