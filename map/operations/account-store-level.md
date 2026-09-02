<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountStoreLevel — operations

Accessor: `client.accountStoreLevel` · Source: `src/resources/account-store-level.ts` · 8 operations · Request and error types: namespace `AccountStoreLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getMerchantsMerchantIdStores

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdStores(request: AccountStoreLevel.GetMerchantsMerchantIdStoresRequest, options?: RequestOptions): ApiPromise<ListStoresResponse, AccountStoreLevel.GetMerchantsMerchantIdStoresError>`
- **Wire**: `GET /merchants/{merchantId}/stores`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListStoresResponse`
- **Error**: `AccountStoreLevel.GetMerchantsMerchantIdStoresError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountStoreLevel.GetMerchantsMerchantIdStoresRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `pageNumber` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |
| `reference` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListStoresResponse` | `listStoresResponseSchema` | `src/models/list-stores-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdStoresStoreId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdStoresStoreId(request: AccountStoreLevel.GetMerchantsMerchantIdStoresStoreIdRequest, options?: RequestOptions): ApiPromise<Store, AccountStoreLevel.GetMerchantsMerchantIdStoresStoreIdError>`
- **Wire**: `GET /merchants/{merchantId}/stores/{storeId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Store`
- **Error**: `AccountStoreLevel.GetMerchantsMerchantIdStoresStoreIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountStoreLevel.GetMerchantsMerchantIdStoresStoreIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `storeId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Store` | `storeSchema` | `src/models/store.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getStores

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getStores(request: AccountStoreLevel.GetStoresRequest, options?: RequestOptions): ApiPromise<ListStoresResponse, AccountStoreLevel.GetStoresError>`
- **Wire**: `GET /stores`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListStoresResponse`
- **Error**: `AccountStoreLevel.GetStoresError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountStoreLevel.GetStoresRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pageNumber` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |
| `reference` | `query` | `string` | no |
| `merchantId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListStoresResponse` | `listStoresResponseSchema` | `src/models/list-stores-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getStoresStoreId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getStoresStoreId(request: AccountStoreLevel.GetStoresStoreIdRequest, options?: RequestOptions): ApiPromise<Store, AccountStoreLevel.GetStoresStoreIdError>`
- **Wire**: `GET /stores/{storeId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Store`
- **Error**: `AccountStoreLevel.GetStoresStoreIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountStoreLevel.GetStoresStoreIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `storeId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Store` | `storeSchema` | `src/models/store.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchMerchantsMerchantIdStoresStoreId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchMerchantsMerchantIdStoresStoreId(request: AccountStoreLevel.PatchMerchantsMerchantIdStoresStoreIdRequest, options?: RequestOptions): ApiPromise<Store, AccountStoreLevel.PatchMerchantsMerchantIdStoresStoreIdError>`
- **Wire**: `PATCH /merchants/{merchantId}/stores/{storeId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Store`
- **Error**: `AccountStoreLevel.PatchMerchantsMerchantIdStoresStoreIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountStoreLevel.PatchMerchantsMerchantIdStoresStoreIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `storeId` | `path` | `string` | yes |
| `body` | `body` | `UpdateStoreRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateStoreRequest` | `updateStoreRequestSchema` | `src/models/update-store-request.ts` |
| `Store` | `storeSchema` | `src/models/store.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchStoresStoreId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchStoresStoreId(request: AccountStoreLevel.PatchStoresStoreIdRequest, options?: RequestOptions): ApiPromise<Store, AccountStoreLevel.PatchStoresStoreIdError>`
- **Wire**: `PATCH /stores/{storeId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Store`
- **Error**: `AccountStoreLevel.PatchStoresStoreIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountStoreLevel.PatchStoresStoreIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `storeId` | `path` | `string` | yes |
| `body` | `body` | `UpdateStoreRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateStoreRequest` | `updateStoreRequestSchema` | `src/models/update-store-request.ts` |
| `Store` | `storeSchema` | `src/models/store.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchantsMerchantIdStores

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdStores(request: AccountStoreLevel.PostMerchantsMerchantIdStoresRequest, options?: RequestOptions): ApiPromise<Store, AccountStoreLevel.PostMerchantsMerchantIdStoresError>`
- **Wire**: `POST /merchants/{merchantId}/stores`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Store`
- **Error**: `AccountStoreLevel.PostMerchantsMerchantIdStoresError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountStoreLevel.PostMerchantsMerchantIdStoresRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `body` | `body` | `StoreCreationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoreCreationRequest` | `storeCreationRequestSchema` | `src/models/store-creation-request.ts` |
| `Store` | `storeSchema` | `src/models/store.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postStores

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postStores(request: AccountStoreLevel.PostStoresRequest, options?: RequestOptions): ApiPromise<Store, AccountStoreLevel.PostStoresError>`
- **Wire**: `POST /stores`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Store`
- **Error**: `AccountStoreLevel.PostStoresError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountStoreLevel.PostStoresRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StoreCreationWithMerchantCodeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoreCreationWithMerchantCodeRequest` | `storeCreationWithMerchantCodeRequestSchema` | `src/models/store-creation-with-merchant-code-request.ts` |
| `Store` | `storeSchema` | `src/models/store.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

