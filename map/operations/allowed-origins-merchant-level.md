<!-- Generated file — do not edit; regenerated with the SDK. -->

# AllowedOriginsMerchantLevel — operations

Accessor: `client.allowedOriginsMerchantLevel` · Source: `src/resources/allowed-origins-merchant-level.ts` · 4 operations · Request and error types: namespace `AllowedOriginsMerchantLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(request: AllowedOriginsMerchantLevel.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest, options?: RequestOptions): ApiPromise<undefined, AllowedOriginsMerchantLevel.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError>`
- **Wire**: `DELETE /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AllowedOriginsMerchantLevel.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AllowedOriginsMerchantLevel.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |
| `originId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(request: AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest, options?: RequestOptions): ApiPromise<AllowedOriginsResponse, AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError>`
- **Wire**: `GET /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AllowedOriginsResponse`
- **Error**: `AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AllowedOriginsResponse` | `allowedOriginsResponseSchema` | `src/models/allowed-origins-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(request: AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest, options?: RequestOptions): ApiPromise<AllowedOrigin, AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError>`
- **Wire**: `GET /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AllowedOrigin`
- **Error**: `AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AllowedOriginsMerchantLevel.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |
| `originId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AllowedOrigin` | `allowedOriginSchema` | `src/models/allowed-origin.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(request: AllowedOriginsMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest, options?: RequestOptions): ApiPromise<AllowedOrigin, AllowedOriginsMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError>`
- **Wire**: `POST /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AllowedOrigin`
- **Error**: `AllowedOriginsMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AllowedOriginsMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |
| `body` | `body` | `AllowedOrigin` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AllowedOrigin` | `allowedOriginSchema` | `src/models/allowed-origin.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

