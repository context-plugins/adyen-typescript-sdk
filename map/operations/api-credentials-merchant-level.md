<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiCredentialsMerchantLevel — operations

Accessor: `client.apiCredentialsMerchantLevel` · Source: `src/resources/api-credentials-merchant-level.ts` · 4 operations · Request and error types: namespace `ApiCredentialsMerchantLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMerchantsMerchantIdApiCredentials

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdApiCredentials(request: ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsRequest, options?: RequestOptions): ApiPromise<ListMerchantApiCredentialsResponse, ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsError>`
- **Wire**: `GET /merchants/{merchantId}/apiCredentials`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMerchantApiCredentialsResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `pageNumber` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListMerchantApiCredentialsResponse` | `listMerchantApiCredentialsResponseSchema` | `src/models/list-merchant-api-credentials-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdApiCredentialsApiCredentialId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdApiCredentialsApiCredentialId(request: ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdRequest, options?: RequestOptions): ApiPromise<ApiCredential, ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdError>`
- **Wire**: `GET /merchants/{merchantId}/apiCredentials/{apiCredentialId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiCredential`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiCredentialsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiCredential` | `apiCredentialSchema` | `src/models/api-credential.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchMerchantsMerchantIdApiCredentialsApiCredentialId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchMerchantsMerchantIdApiCredentialsApiCredentialId(request: ApiCredentialsMerchantLevel.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdRequest, options?: RequestOptions): ApiPromise<ApiCredential, ApiCredentialsMerchantLevel.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdError>`
- **Wire**: `PATCH /merchants/{merchantId}/apiCredentials/{apiCredentialId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiCredential`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `ApiCredentialsMerchantLevel.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiCredentialsMerchantLevel.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |
| `body` | `body` | `UpdateMerchantApiCredentialRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateMerchantApiCredentialRequest` | `updateMerchantApiCredentialRequestSchema` | `src/models/update-merchant-api-credential-request.ts` |
| `ApiCredential` | `apiCredentialSchema` | `src/models/api-credential.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchantsMerchantIdApiCredentials

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdApiCredentials(request: ApiCredentialsMerchantLevel.PostMerchantsMerchantIdApiCredentialsRequest, options?: RequestOptions): ApiPromise<CreateApiCredentialResponse, ApiCredentialsMerchantLevel.PostMerchantsMerchantIdApiCredentialsError>`
- **Wire**: `POST /merchants/{merchantId}/apiCredentials`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateApiCredentialResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `ApiCredentialsMerchantLevel.PostMerchantsMerchantIdApiCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiCredentialsMerchantLevel.PostMerchantsMerchantIdApiCredentialsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `body` | `body` | `CreateMerchantApiCredentialRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateMerchantApiCredentialRequest` | `createMerchantApiCredentialRequestSchema` | `src/models/create-merchant-api-credential-request.ts` |
| `CreateApiCredentialResponse` | `createApiCredentialResponseSchema` | `src/models/create-api-credential-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

