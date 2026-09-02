<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountMerchantLevel — operations

Accessor: `client.accountMerchantLevel` · Source: `src/resources/account-merchant-level.ts` · 4 operations · Request and error types: namespace `AccountMerchantLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getMerchants

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchants(request: AccountMerchantLevel.GetMerchantsRequest, options?: RequestOptions): ApiPromise<ListMerchantResponse, AccountMerchantLevel.GetMerchantsError>`
- **Wire**: `GET /merchants`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMerchantResponse`
- **Error**: `AccountMerchantLevel.GetMerchantsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountMerchantLevel.GetMerchantsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pageNumber` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListMerchantResponse` | `listMerchantResponseSchema` | `src/models/list-merchant-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantId(request: AccountMerchantLevel.GetMerchantsMerchantIdRequest, options?: RequestOptions): ApiPromise<Merchant, AccountMerchantLevel.GetMerchantsMerchantIdError>`
- **Wire**: `GET /merchants/{merchantId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Merchant`
- **Error**: `AccountMerchantLevel.GetMerchantsMerchantIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountMerchantLevel.GetMerchantsMerchantIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Merchant` | `merchantSchema` | `src/models/merchant.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchants

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchants(request: AccountMerchantLevel.PostMerchantsRequest, options?: RequestOptions): ApiPromise<CreateMerchantResponse, AccountMerchantLevel.PostMerchantsError>`
- **Wire**: `POST /merchants`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateMerchantResponse`
- **Error**: `AccountMerchantLevel.PostMerchantsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountMerchantLevel.PostMerchantsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateMerchantRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateMerchantRequest` | `createMerchantRequestSchema` | `src/models/create-merchant-request.ts` |
| `CreateMerchantResponse` | `createMerchantResponseSchema` | `src/models/create-merchant-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchantsMerchantIdActivate

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdActivate(request: AccountMerchantLevel.PostMerchantsMerchantIdActivateRequest, options?: RequestOptions): ApiPromise<RequestActivationResponse, AccountMerchantLevel.PostMerchantsMerchantIdActivateError>`
- **Wire**: `POST /merchants/{merchantId}/activate`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RequestActivationResponse`
- **Error**: `AccountMerchantLevel.PostMerchantsMerchantIdActivateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountMerchantLevel.PostMerchantsMerchantIdActivateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RequestActivationResponse` | `requestActivationResponseSchema` | `src/models/request-activation-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

