<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiKeyMerchantLevel — operations

Accessor: `client.apiKeyMerchantLevel` · Source: `src/resources/api-key-merchant-level.ts` · 1 operation · Request and error types: namespace `ApiKeyMerchantLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey(request: ApiKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyRequest, options?: RequestOptions): ApiPromise<GenerateApiKeyResponse, ApiKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyError>`
- **Wire**: `POST /merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateApiKey`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GenerateApiKeyResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `ApiKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GenerateApiKeyResponse` | `generateApiKeyResponseSchema` | `src/models/generate-api-key-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

