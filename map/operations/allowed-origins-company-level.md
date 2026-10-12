<!-- Generated file — do not edit; regenerated with the SDK. -->

# AllowedOriginsCompanyLevel — operations

Accessor: `client.allowedOriginsCompanyLevel` · Source: `src/resources/allowed-origins-company-level.ts` · 4 operations · Request and error types: namespace `AllowedOriginsCompanyLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(request: AllowedOriginsCompanyLevel.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest, options?: RequestOptions): ApiPromise<undefined, AllowedOriginsCompanyLevel.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError>`
- **Wire**: `DELETE /companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AllowedOriginsCompanyLevel.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AllowedOriginsCompanyLevel.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |
| `originId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(request: AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest, options?: RequestOptions): ApiPromise<AllowedOriginsResponse, AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError>`
- **Wire**: `GET /companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AllowedOriginsResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AllowedOriginsResponse` | `allowedOriginsResponseSchema` | `src/models/allowed-origins-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(request: AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest, options?: RequestOptions): ApiPromise<AllowedOrigin, AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError>`
- **Wire**: `GET /companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AllowedOrigin`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AllowedOriginsCompanyLevel.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |
| `originId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AllowedOrigin` | `allowedOriginSchema` | `src/models/allowed-origin.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(request: AllowedOriginsCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest, options?: RequestOptions): ApiPromise<AllowedOrigin, AllowedOriginsCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError>`
- **Wire**: `POST /companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AllowedOrigin`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AllowedOriginsCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AllowedOriginsCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |
| `body` | `body` | `AllowedOrigin` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AllowedOrigin` | `allowedOriginSchema` | `src/models/allowed-origin.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

