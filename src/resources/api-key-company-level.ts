import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  generateApiKeyResponseSchema,
  type GenerateApiKeyResponse,
} from "../models/generate-api-key-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import type { Servers } from "../servers.js";

export class ApiKeyCompanyLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Generate new API key
   *
   * @remarks
   * Returns a new API key for the API credential. You can use the new API key a few minutes after
   * generating it. The old API key stops working 24 hours after generating a new one.
   *
   * To make this request, your API credential must have the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—API credentials read and write
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link
   * ApiKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey(
    request: ApiKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GenerateApiKeyResponse,
    ApiKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9(
          "/companies/{companyId}/apiCredentials/{apiCredentialId}/generateApiKey",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: generateApiKeyResponseSchema },
        errorFactory:
          ApiKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyError,
      },
      options,
    );
  }
}

export namespace ApiKeyCompanyLevel {
  export type PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** Unique identifier of the API credential. */
    apiCredentialId: string;
  };

  export class PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyError> =
      [
        { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
        { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
      ];
  }
}
