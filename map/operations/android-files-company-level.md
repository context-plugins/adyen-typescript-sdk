<!-- Generated file — do not edit; regenerated with the SDK. -->

# AndroidFilesCompanyLevel — operations

Accessor: `client.androidFilesCompanyLevel` · Source: `src/resources/android-files-company-level.ts` · 6 operations · Request and error types: namespace `AndroidFilesCompanyLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCompaniesCompanyIdAndroidApps

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdAndroidApps(request: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsRequest, options?: RequestOptions): ApiPromise<AndroidAppsResponse, AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsError>`
- **Wire**: `GET /companies/{companyId}/androidApps`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AndroidAppsResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `pageNumber` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |
| `packageName` | `query` | `string` | no |
| `versionCode` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AndroidAppsResponse` | `androidAppsResponseSchema` | `src/models/android-apps-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyIdAndroidAppsId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdAndroidAppsId(request: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsIdRequest, options?: RequestOptions): ApiPromise<AndroidApp, AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsIdError>`
- **Wire**: `GET /companies/{companyId}/androidApps/{id}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AndroidApp`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidAppsIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AndroidApp` | `androidAppSchema` | `src/models/android-app.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyIdAndroidCertificates

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdAndroidCertificates(request: AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidCertificatesRequest, options?: RequestOptions): ApiPromise<AndroidCertificatesResponse, AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidCertificatesError>`
- **Wire**: `GET /companies/{companyId}/androidCertificates`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AndroidCertificatesResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidCertificatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AndroidFilesCompanyLevel.GetCompaniesCompanyIdAndroidCertificatesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `pageNumber` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |
| `certificateName` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AndroidCertificatesResponse` | `androidCertificatesResponseSchema` | `src/models/android-certificates-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchCompaniesCompanyIdAndroidAppsId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchCompaniesCompanyIdAndroidAppsId(request: AndroidFilesCompanyLevel.PatchCompaniesCompanyIdAndroidAppsIdRequest, options?: RequestOptions): ApiPromise<ReprocessAndroidAppResponse, AndroidFilesCompanyLevel.PatchCompaniesCompanyIdAndroidAppsIdError>`
- **Wire**: `PATCH /companies/{companyId}/androidApps/{id}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReprocessAndroidAppResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AndroidFilesCompanyLevel.PatchCompaniesCompanyIdAndroidAppsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AndroidFilesCompanyLevel.PatchCompaniesCompanyIdAndroidAppsIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReprocessAndroidAppResponse` | `reprocessAndroidAppResponseSchema` | `src/models/reprocess-android-app-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postCompaniesCompanyIdAndroidApps

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCompaniesCompanyIdAndroidApps(request: AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidAppsRequest, options?: RequestOptions): ApiPromise<UploadAndroidAppResponse, AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidAppsError>`
- **Wire**: `POST /companies/{companyId}/androidApps`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UploadAndroidAppResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidAppsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidAppsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadAndroidAppResponse` | `uploadAndroidAppResponseSchema` | `src/models/upload-android-app-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postCompaniesCompanyIdAndroidCertificates

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCompaniesCompanyIdAndroidCertificates(request: AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidCertificatesRequest, options?: RequestOptions): ApiPromise<UploadAndroidCertificateResponse, AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidCertificatesError>`
- **Wire**: `POST /companies/{companyId}/androidCertificates`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UploadAndroidCertificateResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidCertificatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AndroidFilesCompanyLevel.PostCompaniesCompanyIdAndroidCertificatesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadAndroidCertificateResponse` | `uploadAndroidCertificateResponseSchema` | `src/models/upload-android-certificate-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

