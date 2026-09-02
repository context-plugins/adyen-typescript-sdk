import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  generateApiKeyResponseSchema,
  type GenerateApiKeyResponse,
} from "../models/generate-api-key-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import type { Servers } from "../servers.js";

export class ApiKeyMerchantLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey(
    request: ApiKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GenerateApiKeyResponse,
    ApiKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9(
          "/merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateApiKey",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "merchantId", value: request.merchantId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: generateApiKeyResponseSchema },
        errorFactory:
          ApiKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyError,
      },
      options,
    );
  }
}

export namespace ApiKeyMerchantLevel {
  export type PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyRequest = {
    merchantId: string;
    apiCredentialId: string;
  };

  export class PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
