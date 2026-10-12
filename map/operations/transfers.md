<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transfers — operations

Accessor: `client.transfers` · Source: `src/resources/transfers.ts` · 6 operations · Request and error types: namespace `Transfers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTransfers

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getTransfers(request: Transfers.GetTransfersRequest, options?: RequestOptions): ApiPromise<FindTransfersResponse, Transfers.GetTransfersError>`
- **Wire**: `GET /transfers`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FindTransfersResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Transfers.GetTransfersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"transferServiceRestServiceError"` [401] `TransferServiceRestServiceError` · `"transferServiceRestServiceError2"` [403] `TransferServiceRestServiceError` · `"transferServiceRestServiceError3"` [422] `TransferServiceRestServiceError` · `"transferServiceRestServiceError4"` [500] `TransferServiceRestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transfers.GetTransfersRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `createdSince` | `query` | `Date` (date-time) | yes |
| `createdUntil` | `query` | `Date` (date-time) | yes |
| `balancePlatform` | `query` | `string` | no |
| `accountHolderId` | `query` | `string` | no |
| `balanceAccountId` | `query` | `string` | no |
| `paymentInstrumentId` | `query` | `string` | no |
| `reference` | `query` | `string` | no |
| `category` | `query` | `Category2` | no |
| `sortOrder` | `query` | `SortOrder` | no |
| `cursor` | `query` | `string` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Category2` | `category2Schema` | `src/models/category2.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `FindTransfersResponse` | `findTransfersResponseSchema` | `src/models/find-transfers-response.ts` |
| `TransferServiceRestServiceError` | `transferServiceRestServiceErrorSchema` | `src/models/transfer-service-rest-service-error.ts` |

### getTransfersId

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getTransfersId(request: Transfers.GetTransfersIdRequest, options?: RequestOptions): ApiPromise<TransferData, Transfers.GetTransfersIdError>`
- **Wire**: `GET /transfers/{id}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransferData`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Transfers.GetTransfersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"transferServiceRestServiceError"` [401] `TransferServiceRestServiceError` · `"transferServiceRestServiceError2"` [403] `TransferServiceRestServiceError` · `"transferServiceRestServiceError3"` [422] `TransferServiceRestServiceError` · `"transferServiceRestServiceError4"` [500] `TransferServiceRestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transfers.GetTransfersIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferData` | `transferDataSchema` | `src/models/transfer-data.ts` |
| `TransferServiceRestServiceError` | `transferServiceRestServiceErrorSchema` | `src/models/transfer-service-rest-service-error.ts` |

### postTransfers

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postTransfers(request: Transfers.PostTransfersRequest, options?: RequestOptions): ApiPromise<Transfer, Transfers.PostTransfersError>`
- **Wire**: `POST /transfers`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `Transfer`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Transfers.PostTransfersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [401] `ServiceError1` · `"transferServiceRestServiceError"` [403] `TransferServiceRestServiceError` · `"transferServiceRestServiceError2"` [422] `TransferServiceRestServiceError` · `"transferServiceRestServiceError3"` [500] `TransferServiceRestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transfers.PostTransfersRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `wwwAuthenticate` | `header` | `WWW-Authenticate` | `string` | no |
| `body` | `body` | — | `TransferInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferInfo` | `transferInfoSchema` | `src/models/transfer-info.ts` |
| `Transfer` | `transferSchema` | `src/models/transfer.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |
| `TransferServiceRestServiceError` | `transferServiceRestServiceErrorSchema` | `src/models/transfer-service-rest-service-error.ts` |

### postTransfersApprove

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postTransfersApprove(request: Transfers.PostTransfersApproveRequest, options?: RequestOptions): ApiPromise<unknown, Transfers.PostTransfersApproveError>`
- **Wire**: `POST /transfers/approve`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `unknown` — a bare `application/json` unknown; the success type *is* the unknown
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Transfers.PostTransfersApproveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [401] `ServiceError1` · `"transferServiceRestServiceError"` [403] `TransferServiceRestServiceError` · `"transferServiceRestServiceError2"` [422] `TransferServiceRestServiceError` · `"transferServiceRestServiceError3"` [500] `TransferServiceRestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transfers.PostTransfersApproveRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `wwwAuthenticate` | `header` | `WWW-Authenticate` | `string` | no |
| `body` | `body` | — | `ApproveTransfersRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApproveTransfersRequest` | `approveTransfersRequestSchema` | `src/models/approve-transfers-request.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |
| `TransferServiceRestServiceError` | `transferServiceRestServiceErrorSchema` | `src/models/transfer-service-rest-service-error.ts` |

### postTransfersCancel

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postTransfersCancel(request: Transfers.PostTransfersCancelRequest, options?: RequestOptions): ApiPromise<unknown, Transfers.PostTransfersCancelError>`
- **Wire**: `POST /transfers/cancel`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `unknown` — a bare `application/json` unknown; the success type *is* the unknown
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Transfers.PostTransfersCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"transferServiceRestServiceError"` [401] `TransferServiceRestServiceError` · `"transferServiceRestServiceError2"` [403] `TransferServiceRestServiceError` · `"transferServiceRestServiceError3"` [422] `TransferServiceRestServiceError` · `"transferServiceRestServiceError4"` [500] `TransferServiceRestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transfers.PostTransfersCancelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `CancelTransfersRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelTransfersRequest` | `cancelTransfersRequestSchema` | `src/models/cancel-transfers-request.ts` |
| `TransferServiceRestServiceError` | `transferServiceRestServiceErrorSchema` | `src/models/transfer-service-rest-service-error.ts` |

### postTransfersTransferIdReturns

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postTransfersTransferIdReturns(request: Transfers.PostTransfersTransferIdReturnsRequest, options?: RequestOptions): ApiPromise<ReturnTransferResponse, Transfers.PostTransfersTransferIdReturnsError>`
- **Wire**: `POST /transfers/{transferId}/returns`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `ReturnTransferResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Transfers.PostTransfersTransferIdReturnsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"transferServiceRestServiceError"` [401] `TransferServiceRestServiceError` · `"transferServiceRestServiceError2"` [403] `TransferServiceRestServiceError` · `"transferServiceRestServiceError3"` [422] `TransferServiceRestServiceError` · `"transferServiceRestServiceError4"` [500] `TransferServiceRestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transfers.PostTransfersTransferIdReturnsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transferId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `ReturnTransferRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReturnTransferRequest` | `returnTransferRequestSchema` | `src/models/return-transfer-request.ts` |
| `ReturnTransferResponse` | `returnTransferResponseSchema` | `src/models/return-transfer-response.ts` |
| `TransferServiceRestServiceError` | `transferServiceRestServiceErrorSchema` | `src/models/transfer-service-rest-service-error.ts` |

