<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiCredentialsCompanyLevel — operations

Accessor: `client.apiCredentialsCompanyLevel` · Source: `src/resources/api-credentials-company-level.ts` · 4 operations · Request and error types: namespace `ApiCredentialsCompanyLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getCompaniesCompanyIdApiCredentials

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdApiCredentials(request: ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsRequest, options?: RequestOptions): ApiPromise<ListCompanyApiCredentialsResponse, ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsError>`
- **Wire**: `GET /companies/{companyId}/apiCredentials`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCompanyApiCredentialsResponse`
- **Error**: `ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `pageNumber` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCompanyApiCredentialsResponse` | `listCompanyApiCredentialsResponseSchema` | `src/models/list-company-api-credentials-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyIdApiCredentialsApiCredentialId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdApiCredentialsApiCredentialId(request: ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdRequest, options?: RequestOptions): ApiPromise<CompanyApiCredential, ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdError>`
- **Wire**: `GET /companies/{companyId}/apiCredentials/{apiCredentialId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanyApiCredential`
- **Error**: `ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyApiCredential` | `companyApiCredentialSchema` | `src/models/company-api-credential.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchCompaniesCompanyIdApiCredentialsApiCredentialId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchCompaniesCompanyIdApiCredentialsApiCredentialId(request: ApiCredentialsCompanyLevel.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdRequest, options?: RequestOptions): ApiPromise<CompanyApiCredential, ApiCredentialsCompanyLevel.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdError>`
- **Wire**: `PATCH /companies/{companyId}/apiCredentials/{apiCredentialId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CompanyApiCredential`
- **Error**: `ApiCredentialsCompanyLevel.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiCredentialsCompanyLevel.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |
| `body` | `body` | `UpdateCompanyApiCredentialRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCompanyApiCredentialRequest` | `updateCompanyApiCredentialRequestSchema` | `src/models/update-company-api-credential-request.ts` |
| `CompanyApiCredential` | `companyApiCredentialSchema` | `src/models/company-api-credential.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postCompaniesCompanyIdApiCredentials

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCompaniesCompanyIdApiCredentials(request: ApiCredentialsCompanyLevel.PostCompaniesCompanyIdApiCredentialsRequest, options?: RequestOptions): ApiPromise<CreateCompanyApiCredentialResponse, ApiCredentialsCompanyLevel.PostCompaniesCompanyIdApiCredentialsError>`
- **Wire**: `POST /companies/{companyId}/apiCredentials`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateCompanyApiCredentialResponse`
- **Error**: `ApiCredentialsCompanyLevel.PostCompaniesCompanyIdApiCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiCredentialsCompanyLevel.PostCompaniesCompanyIdApiCredentialsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `body` | `body` | `CreateCompanyApiCredentialRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCompanyApiCredentialRequest` | `createCompanyApiCredentialRequestSchema` | `src/models/create-company-api-credential-request.ts` |
| `CreateCompanyApiCredentialResponse` | `createCompanyApiCredentialResponseSchema` | `src/models/create-company-api-credential-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

