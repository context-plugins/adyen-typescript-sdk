<!-- Generated file — do not edit; regenerated with the SDK. -->

# Platform — operations

Accessor: `client.platform` · Source: `src/resources/platform.ts` · 3 operations · Request and error types: namespace `Platform`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBalancePlatformsId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalancePlatformsId(request: Platform.GetBalancePlatformsIdRequest, options?: RequestOptions): ApiPromise<BalancePlatform, Platform.GetBalancePlatformsIdError>`
- **Wire**: `GET /balancePlatforms/{id}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BalancePlatform`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Platform.GetBalancePlatformsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Platform.GetBalancePlatformsIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalancePlatform` | `balancePlatformSchema` | `src/models/balance-platform.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getBalancePlatformsIdAccountHolders

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalancePlatformsIdAccountHolders(request: Platform.GetBalancePlatformsIdAccountHoldersRequest, options?: RequestOptions): ApiPromise<PaginatedAccountHoldersResponse, Platform.GetBalancePlatformsIdAccountHoldersError>`
- **Wire**: `GET /balancePlatforms/{id}/accountHolders`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedAccountHoldersResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Platform.GetBalancePlatformsIdAccountHoldersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Platform.GetBalancePlatformsIdAccountHoldersRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedAccountHoldersResponse` | `paginatedAccountHoldersResponseSchema` | `src/models/paginated-account-holders-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getBalancePlatformsIdTransactionRules

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalancePlatformsIdTransactionRules(request: Platform.GetBalancePlatformsIdTransactionRulesRequest, options?: RequestOptions): ApiPromise<TransactionRulesResponse, Platform.GetBalancePlatformsIdTransactionRulesError>`
- **Wire**: `GET /balancePlatforms/{id}/transactionRules`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionRulesResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Platform.GetBalancePlatformsIdTransactionRulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Platform.GetBalancePlatformsIdTransactionRulesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionRulesResponse` | `transactionRulesResponseSchema` | `src/models/transaction-rules-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

