<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransferLimitsBalancePlatformLevel — operations

Accessor: `client.transferLimitsBalancePlatformLevel` · Source: `src/resources/transfer-limits-balance-platform-level.ts` · 4 operations · Request and error types: namespace `TransferLimitsBalancePlatformLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteBalancePlatformsIdTransferLimitsTransferLimitId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBalancePlatformsIdTransferLimitsTransferLimitId(request: TransferLimitsBalancePlatformLevel.DeleteBalancePlatformsIdTransferLimitsTransferLimitIdRequest, options?: RequestOptions): ApiPromise<undefined, TransferLimitsBalancePlatformLevel.DeleteBalancePlatformsIdTransferLimitsTransferLimitIdError>`
- **Wire**: `DELETE /balancePlatforms/{id}/transferLimits/{transferLimitId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TransferLimitsBalancePlatformLevel.DeleteBalancePlatformsIdTransferLimitsTransferLimitIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferLimitsBalancePlatformLevel.DeleteBalancePlatformsIdTransferLimitsTransferLimitIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `transferLimitId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getBalancePlatformsIdTransferLimits

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalancePlatformsIdTransferLimits(request: TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsRequest, options?: RequestOptions): ApiPromise<TransferLimitListResponse, TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsError>`
- **Wire**: `GET /balancePlatforms/{id}/transferLimits`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransferLimitListResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsRequest` (4):

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

### getBalancePlatformsIdTransferLimitsTransferLimitId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalancePlatformsIdTransferLimitsTransferLimitId(request: TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsTransferLimitIdRequest, options?: RequestOptions): ApiPromise<TransferLimit, TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsTransferLimitIdError>`
- **Wire**: `GET /balancePlatforms/{id}/transferLimits/{transferLimitId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransferLimit`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsTransferLimitIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferLimitsBalancePlatformLevel.GetBalancePlatformsIdTransferLimitsTransferLimitIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `transferLimitId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferLimit` | `transferLimitSchema` | `src/models/transfer-limit.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postBalancePlatformsIdTransferLimits

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postBalancePlatformsIdTransferLimits(request: TransferLimitsBalancePlatformLevel.PostBalancePlatformsIdTransferLimitsRequest, options?: RequestOptions): ApiPromise<TransferLimit, TransferLimitsBalancePlatformLevel.PostBalancePlatformsIdTransferLimitsError>`
- **Wire**: `POST /balancePlatforms/{id}/transferLimits`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferLimit`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TransferLimitsBalancePlatformLevel.PostBalancePlatformsIdTransferLimitsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferLimitsBalancePlatformLevel.PostBalancePlatformsIdTransferLimitsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `CreateTransferLimitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTransferLimitRequest` | `createTransferLimitRequestSchema` | `src/models/create-transfer-limit-request.ts` |
| `TransferLimit` | `transferLimitSchema` | `src/models/transfer-limit.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

