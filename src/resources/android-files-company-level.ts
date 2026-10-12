import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Get a list of Android apps
   *
   * @remarks
   * Returns a list of the Android apps that are available for the company identified in the path.
   * These apps have been uploaded to Adyen and can be installed or uninstalled on Android payment
   * terminals through [terminal
   * actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).
   *
   * To make this request, your API credential must have one of the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Android files read
   * * Management API—Android files read and write
   * * Management API—Terminal actions read
   * * Management API—Terminal actions read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesCompanyIdAndroidApps(
    request: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsRequest,
    options?: RequestOptions,
  ): ApiPromise<AndroidAppsResponse, AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/companies/{companyId}/androidApps"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "packageName", value: request.packageName, schema: s.optional(s.string()) },
          { name: "versionCode", value: request.versionCode, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: androidAppsResponseSchema },
        errorFactory: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsError,
      },
      options,
    );
  }

  /**
   * Get Android app
   *
   * @remarks
   * Returns the details of the Android app identified in the path. These apps have been uploaded to
   * Adyen and can be installed or uninstalled on Android payment terminals through [terminal
   * actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).
   *
   * To make this request, your API credential must have one of the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Android files read
   * * Management API—Android files read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesCompanyIdAndroidAppsId(
    request: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AndroidApp, AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/companies/{companyId}/androidApps/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: androidAppSchema },
        errorFactory: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsIdError,
      },
      options,
    );
  }

  /**
   * Get a list of Android certificates
   *
   * @remarks
   * Returns a list of the Android certificates that are available for the company identified in the
   * path. Typically, these certificates enable running apps on Android payment terminals. The
   * certificates in the list have been uploaded to Adyen and can be installed or uninstalled on
   * Android terminals through [terminal
   * actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).
   *
   * To make this request, your API credential must have one of the following
   * [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Android files read
   * * Management API—Android files read and write
   * * Management API—Terminal actions read
   * * Management API—Terminal actions read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidCertificatesError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/companies/{companyId}/androidCertificates"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [
          { name: "pageNumber", value: request.pageNumber, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "certificateName", value: request.certificateName, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: androidCertificatesResponseSchema },
        errorFactory: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidCertificatesError,
      },
      options,
    );
  }

  /**
   * Reprocess Android App
   *
   * @remarks
   * Reuploads the Android app identified in the path. To make this request, your API credential
   * must have this
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Android files read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   * >By choosing to upload, install, or run any third-party applications on an Adyen payment
   * terminal, you accept full responsibility and liability for any consequences of uploading,
   * installing, or running any such applications.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AndroidFilesCompanyLevel.PatchCompaniesCompanyIdAndroidAppsIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/companies/{companyId}/androidApps/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [
          { name: "companyId", value: request.companyId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reprocessAndroidAppResponseSchema },
        errorFactory: AndroidFilesCompanyLevel.PatchCompaniesCompanyIdAndroidAppsIdError,
      },
      options,
    );
  }

  /**
   * Upload Android App
   *
   * @remarks
   * Uploads an Android APK file to Adyen. The maximum APK file size is 200 MB. To make this
   * request, your API credential must have the following
   * [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
   * * Management API—Android files read and write
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   * >By choosing to upload, install, or run any third-party applications on an Adyen payment
   * terminal, you accept full responsibility and liability for any consequences of uploading,
   * installing, or running any such applications.
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidAppsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCompaniesCompanyIdAndroidApps(
    request: AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidAppsRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadAndroidAppResponse, AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidAppsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/companies/{companyId}/androidApps"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uploadAndroidAppResponseSchema },
        errorFactory: AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidAppsError,
      },
      options,
    );
  }

  /**
   * Upload Android Certificate
   *
   * @remarks
   * Uploads an Android Certificate file to Adyen.
   *
   * In the live environment, requests to this endpoint are subject to [rate
   * limits](https://docs.adyen.com/point-of-sale/automating-terminal-management#rate-limits-in-the-live-environment).
   *
   * @returns OK - the request has succeeded.
   *
   * @throws {@link AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidCertificatesError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AdyenError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default9("/companies/{companyId}/androidCertificates"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.apiKeyAuth),
        pathParams: [{ name: "companyId", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The unique identifier of the company account. */
    companyId: string;
    /** The number of the page to fetch. */
    pageNumber?: number;
    /** The number of items to have on a page, maximum 100. The default is 20 items on a page. */
    pageSize?: number;
    /** The package name that uniquely identifies the Android app. */
    packageName?: string;
    /** The version number of the app. */
    versionCode?: number;
  };

  export class GetCompaniesCompanyIdAndroidAppsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdAndroidAppsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdAndroidAppsIdRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** The unique identifier of the app. */
    id: string;
  };

  export class GetCompaniesCompanyIdAndroidAppsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdAndroidAppsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type GetCompaniesCompanyIdAndroidCertificatesRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** The number of the page to fetch. */
    pageNumber?: number;
    /** The number of items to have on a page, maximum 100. The default is 20 items on a page. */
    pageSize?: number;
    /** The name of the certificate. */
    certificateName?: string;
  };

  export class GetCompaniesCompanyIdAndroidCertificatesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<GetCompaniesCompanyIdAndroidCertificatesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PatchCompaniesCompanyIdAndroidAppsIdRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
    /** The unique identifier of the app. */
    id: string;
  };

  export class PatchCompaniesCompanyIdAndroidAppsIdError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PatchCompaniesCompanyIdAndroidAppsIdError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdAndroidAppsRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
  };

  export class PostCompaniesCompanyIdAndroidAppsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdAndroidAppsError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }

  export type PostCompaniesCompanyIdAndroidCertificatesRequest = {
    /** The unique identifier of the company account. */
    companyId: string;
  };

  export class PostCompaniesCompanyIdAndroidCertificatesError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"restServiceError", RestServiceError>
      | Declared<"restServiceError2", RestServiceError>
      | Declared<"restServiceError3", RestServiceError>
      | Declared<"restServiceError4", RestServiceError>
      | Declared<"restServiceError5", RestServiceError>
    >;

    static readonly errors: ErrorDecoders<PostCompaniesCompanyIdAndroidCertificatesError> = [
      { on: 400, kind: "restServiceError", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 401, kind: "restServiceError2", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 403, kind: "restServiceError3", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 422, kind: "restServiceError4", decode: { kind: "json", schema: restServiceErrorSchema } },
      { on: 500, kind: "restServiceError5", decode: { kind: "json", schema: restServiceErrorSchema } },
    ];
  }
}
