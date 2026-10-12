<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClientKeyMerchantLevel — operations

Accessor: `client.clientKeyMerchantLevel` · Source: `src/resources/client-key-merchant-level.ts` · 1 operation · Request and error types: namespace `ClientKeyMerchantLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKey

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKey(request: ClientKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyRequest, options?: RequestOptions): ApiPromise<GenerateClientKeyResponse, ClientKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyError>`
- **Wire**: `POST /merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateClientKey`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GenerateClientKeyResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `ClientKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClientKeyMerchantLevel.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `apiCredentialId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GenerateClientKeyResponse` | `generateClientKeyResponseSchema` | `src/models/generate-client-key-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

