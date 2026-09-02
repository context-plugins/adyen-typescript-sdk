<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClientKeyCompanyLevel — operations

Accessor: `client.clientKeyCompanyLevel` · Source: `src/resources/client-key-company-level.ts` · 1 operation · Request and error types: namespace `ClientKeyCompanyLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey(request: ClientKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyRequest, options?: RequestOptions): ApiPromise<GenerateClientKeyResponse, ClientKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyError>`
- **Wire**: `POST /companies/{companyId}/apiCredentials/{apiCredentialId}/generateClientKey`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GenerateClientKeyResponse`
- **Error**: `ClientKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientKeyCompanyLevel.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GenerateClientKeyResponse` | `generateClientKeyResponseSchema` | `src/models/generate-client-key-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

