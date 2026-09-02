<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransferLimitsBalanceAccountLevel — operations

Accessor: `client.transferLimitsBalanceAccountLevel` · Source: `src/resources/transfer-limits-balance-account-level.ts` · 6 operations · Request and error types: namespace `TransferLimitsBalanceAccountLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteBalanceAccountsIdTransferLimitsTransferLimitId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBalanceAccountsIdTransferLimitsTransferLimitId(request: TransferLimitsBalanceAccountLevel.DeleteBalanceAccountsIdTransferLimitsTransferLimitIdRequest, options?: RequestOptions): ApiPromise<undefined, TransferLimitsBalanceAccountLevel.DeleteBalanceAccountsIdTransferLimitsTransferLimitIdError>`
- **Wire**: `DELETE /balanceAccounts/{id}/transferLimits/{transferLimitId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TransferLimitsBalanceAccountLevel.DeleteBalanceAccountsIdTransferLimitsTransferLimitIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferLimitsBalanceAccountLevel.DeleteBalanceAccountsIdTransferLimitsTransferLimitIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `transferLimitId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getBalanceAccountsIdTransferLimits

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalanceAccountsIdTransferLimits(request: TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsRequest, options?: RequestOptions): ApiPromise<TransferLimitListResponse, TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsError>`
- **Wire**: `GET /balanceAccounts/{id}/transferLimits`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransferLimitListResponse`
- **Error**: `TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `scope` | `query` | `Scope` | no |
| `transferType` | `query` | `TransferType` | no |
| `status` | `query` | `LimitStatus` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Scope` | `scopeSchema` | `src/models/scope.ts` |
| `TransferType` | `transferTypeSchema` | `src/models/transfer-type.ts` |
| `LimitStatus` | `limitStatusSchema` | `src/models/limit-status.ts` |
| `TransferLimitListResponse` | `transferLimitListResponseSchema` | `src/models/transfer-limit-list-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getBalanceAccountsIdTransferLimitsCurrent

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalanceAccountsIdTransferLimitsCurrent(request: TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsCurrentRequest, options?: RequestOptions): ApiPromise<TransferLimitListResponse, TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsCurrentError>`
- **Wire**: `GET /balanceAccounts/{id}/transferLimits/current`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransferLimitListResponse`
- **Error**: `TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsCurrentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsCurrentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `scope` | `query` | `Scope` | no |
| `transferType` | `query` | `TransferType` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Scope` | `scopeSchema` | `src/models/scope.ts` |
| `TransferType` | `transferTypeSchema` | `src/models/transfer-type.ts` |
| `TransferLimitListResponse` | `transferLimitListResponseSchema` | `src/models/transfer-limit-list-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getBalanceAccountsIdTransferLimitsTransferLimitId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalanceAccountsIdTransferLimitsTransferLimitId(request: TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsTransferLimitIdRequest, options?: RequestOptions): ApiPromise<TransferLimit, TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsTransferLimitIdError>`
- **Wire**: `GET /balanceAccounts/{id}/transferLimits/{transferLimitId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransferLimit`
- **Error**: `TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsTransferLimitIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferLimitsBalanceAccountLevel.GetBalanceAccountsIdTransferLimitsTransferLimitIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `transferLimitId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferLimit` | `transferLimitSchema` | `src/models/transfer-limit.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postBalanceAccountsIdTransferLimits

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postBalanceAccountsIdTransferLimits(request: TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsRequest, options?: RequestOptions): ApiPromise<TransferLimit, TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsError>`
- **Wire**: `POST /balanceAccounts/{id}/transferLimits`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TransferLimit`
- **Error**: `TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `wwwAuthenticate` | `header` | `WWW-Authenticate` | `string` | no |
| `body` | `body` | — | `CreateTransferLimitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTransferLimitRequest` | `createTransferLimitRequestSchema` | `src/models/create-transfer-limit-request.ts` |
| `TransferLimit` | `transferLimitSchema` | `src/models/transfer-limit.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postBalanceAccountsIdTransferLimitsApprove

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postBalanceAccountsIdTransferLimitsApprove(request: TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsApproveRequest, options?: RequestOptions): ApiPromise<undefined, TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsApproveError>`
- **Wire**: `POST /balanceAccounts/{id}/transferLimits/approve`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsApproveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferLimitsBalanceAccountLevel.PostBalanceAccountsIdTransferLimitsApproveRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `wwwAuthenticate` | `header` | `WWW-Authenticate` | `string` | no |
| `body` | `body` | — | `ApproveTransferLimitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApproveTransferLimitRequest` | `approveTransferLimitRequestSchema` | `src/models/approve-transfer-limit-request.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

