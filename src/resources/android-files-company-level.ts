import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { androidAppSchema, type AndroidApp } from "../models/android-app.js";
import { androidAppsResponseSchema, type AndroidAppsResponse } from "../models/android-apps-response.js";
import {
  androidCertificatesResponseSchema,
  type AndroidCertificatesResponse,
} from "../models/android-certificates-response.js";
import {
  reprocessAndroidAppResponseSchema,
  type ReprocessAndroidAppResponse,
} from "../models/reprocess-android-app-response.js";
import { restServiceErrorSchema, type RestServiceError } from "../models/rest-service-error.js";
import {
  uploadAndroidAppResponseSchema,
  type UploadAndroidAppResponse,
} from "../models/upload-android-app-response.js";
import {
  uploadAndroidCertificateResponseSchema,
  type UploadAndroidCertificateResponse,
} from "../models/upload-android-certificate-response.js";
import type { Servers } from "../servers.js";

export class AndroidFilesCompanyLevel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getCompaniesCompanyIdAndroidApps(
    request: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsRequest,
    options?: RequestOptions,
  ): ApiPromise<AndroidAppsResponse, AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/androidApps"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "packageName", value: request.packageName, schema: s.optional(s.string()) },
          { name: "versionCode", value: request.versionCode, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: androidAppsResponseSchema },
        errorFactory: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsError,
      },
      options,
    );
  }

  getCompaniesCompanyIdAndroidAppsId(
    request: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AndroidApp, AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/androidApps/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: androidAppSchema },
        errorFactory: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsIdError,
      },
      options,
    );
  }

  getCompaniesCompanyIdAndroidCertificates(
    request: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidCertificatesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AndroidCertificatesResponse,
    AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidCertificatesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default9("/companies/{companyId}/androidCertificates"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "certificateName", value: request.certificateName, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: androidCertificatesResponseSchema },
        errorFactory: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidCertificatesError,
      },
      options,
    );
  }

  patchCompaniesCompanyIdAndroidAppsId(
    request: AndroidFilesCompanyLevel.PatchCompaniesCompanyIdAndroidAppsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ReprocessAndroidAppResponse,
    AndroidFilesCompanyLevel.PatchCompaniesCompanyIdAndroidAppsIdError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.default9("/companies/{companyId}/androidApps/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reprocessAndroidAppResponseSchema },
        errorFactory: AndroidFilesCompanyLevel.PatchCompaniesCompanyIdAndroidAppsIdError,
      },
      options,
    );
  }

  postCompaniesCompanyIdAndroidApps(
    request: AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidAppsRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadAndroidAppResponse, AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidAppsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/companies/{companyId}/androidApps"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uploadAndroidAppResponseSchema },
        errorFactory: AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidAppsError,
      },
      options,
    );
  }

  postCompaniesCompanyIdAndroidCertificates(
    request: AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidCertificatesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    UploadAndroidCertificateResponse,
    AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidCertificatesError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default9("/companies/{companyId}/androidCertificates"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uploadAndroidCertificateResponseSchema },
        errorFactory: AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidCertificatesError,
      },
      options,
    );
  }
}

export namespace AndroidFilesCompanyLevel {
  export type GetCompaniesCompanyIdAndroidAppsRequest = {
    companyId: string;
    pageNumber?: number;
    pageSize?: number;
    packageName?: string;
    versionCode?: number;
  };

  export class GetCompaniesCompanyIdAndroidAppsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdAndroidAppsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdAndroidAppsIdRequest = {
    companyId: string;
    id: string;
  };

  export class GetCompaniesCompanyIdAndroidAppsIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdAndroidAppsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdAndroidCertificatesRequest = {
    companyId: string;
    pageNumber?: number;
    pageSize?: number;
    certificateName?: string;
  };

  export class GetCompaniesCompanyIdAndroidCertificatesError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdAndroidCertificatesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchCompaniesCompanyIdAndroidAppsIdRequest = {
    companyId: string;
    id: string;
  };

  export class PatchCompaniesCompanyIdAndroidAppsIdError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PatchCompaniesCompanyIdAndroidAppsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdAndroidAppsRequest = {
    companyId: string;
  };

  export class PostCompaniesCompanyIdAndroidAppsError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdAndroidAppsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdAndroidCertificatesRequest = {
    companyId: string;
  };

  export class PostCompaniesCompanyIdAndroidCertificatesError extends ResponseError<
    | Declared<"restServiceError", RestServiceError>
    | Declared<"restServiceError2", RestServiceError>
    | Declared<"restServiceError3", RestServiceError>
    | Declared<"restServiceError4", RestServiceError>
    | Declared<"restServiceError5", RestServiceError>
  > {
    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdAndroidCertificatesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
