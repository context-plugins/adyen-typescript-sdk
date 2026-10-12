<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactions — operations

Accessor: `client.transactions` · Source: `src/resources/transactions.ts` · 2 operations · Request and error types: namespace `Transactions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTransactions

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getTransactions(request: Transactions.GetTransactionsRequest, options?: RequestOptions): ApiPromise<TransactionSearchResponse, Transactions.GetTransactionsError>`
- **Wire**: `GET /transactions`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionSearchResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Transactions.GetTransactionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [401] `RestServiceError` · `"restServiceError2"` [403] `RestServiceError` · `"restServiceError3"` [422] `RestServiceError` · `"restServiceError4"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.GetTransactionsRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `createdSince` | `query` | `Date` (date-time) | yes |
| `createdUntil` | `query` | `Date` (date-time) | yes |
| `balancePlatform` | `query` | `string` | no |
| `paymentInstrumentId` | `query` | `string` | no |
| `accountHolderId` | `query` | `string` | no |
| `balanceAccountId` | `query` | `string` | no |
| `cursor` | `query` | `string` | no |
| `sortOrder` | `query` | `SortOrder` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `TransactionSearchResponse` | `transactionSearchResponseSchema` | `src/models/transaction-search-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getTransactionsId

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getTransactionsId(request: Transactions.GetTransactionsIdRequest, options?: RequestOptions): ApiPromise<Transaction, Transactions.GetTransactionsIdError>`
- **Wire**: `GET /transactions/{id}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Transaction`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Transactions.GetTransactionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [401] `RestServiceError` · `"restServiceError2"` [403] `RestServiceError` · `"restServiceError3"` [422] `RestServiceError` · `"restServiceError4"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transactions.GetTransactionsIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Transaction` | `transactionSchema` | `src/models/transaction.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

