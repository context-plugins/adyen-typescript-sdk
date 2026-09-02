import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  generateClientKeyResponseSchema,
  type GenerateClientKeyResponse,
} from "../models/generate-client-key-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import type { Servers } from "../servers.js";

export class ClientKeyCompanyLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey(
    request: ClientKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GenerateClientKeyResponse,
    ClientKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9(
          "/companies/{companyId}/apiCredentials/{apiCredentialId}/generateClientKey",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: generateClientKeyResponseSchema },
        errorFactory:
          ClientKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyError,
      },
      options,
    );
  }
}

export namespace ClientKeyCompanyLevel {
  export type PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyRequest = {
    companyId: string;
    apiCredentialId: string;
  };

  export class PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
