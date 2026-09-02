<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiKeyCompanyLevel — operations

Accessor: `client.apiKeyCompanyLevel` · Source: `src/resources/api-key-company-level.ts` · 1 operation · Request and error types: namespace `ApiKeyCompanyLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey(request: ApiKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyRequest, options?: RequestOptions): ApiPromise<GenerateApiKeyResponse, ApiKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyError>`
- **Wire**: `POST /companies/{companyId}/apiCredentials/{apiCredentialId}/generateApiKey`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GenerateApiKeyResponse`
- **Error**: `ApiKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GenerateApiKeyResponse` | `generateApiKeyResponseSchema` | `src/models/generate-api-key-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

