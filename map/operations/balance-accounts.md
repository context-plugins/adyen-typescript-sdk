<!-- Generated file — do not edit; regenerated with the SDK. -->

# BalanceAccounts — operations

Accessor: `client.balanceAccounts` · Source: `src/resources/balance-accounts.ts` · 5 operations · Request and error types: namespace `BalanceAccounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBalanceAccountsId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalanceAccountsId(request: BalanceAccounts.GetBalanceAccountsIdRequest, options?: RequestOptions): ApiPromise<BalanceAccount, BalanceAccounts.GetBalanceAccountsIdError>`
- **Wire**: `GET /balanceAccounts/{id}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BalanceAccount`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `BalanceAccounts.GetBalanceAccountsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BalanceAccounts.GetBalanceAccountsIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceAccount` | `balanceAccountSchema` | `src/models/balance-account.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getBalanceAccountsIdPaymentInstruments

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalanceAccountsIdPaymentInstruments(request: BalanceAccounts.GetBalanceAccountsIdPaymentInstrumentsRequest, options?: RequestOptions): ApiPromise<PaginatedPaymentInstrumentsResponse, BalanceAccounts.GetBalanceAccountsIdPaymentInstrumentsError>`
- **Wire**: `GET /balanceAccounts/{id}/paymentInstruments`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedPaymentInstrumentsResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `BalanceAccounts.GetBalanceAccountsIdPaymentInstrumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BalanceAccounts.GetBalanceAccountsIdPaymentInstrumentsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `status` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedPaymentInstrumentsResponse` | `paginatedPaymentInstrumentsResponseSchema` | `src/models/paginated-payment-instruments-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getBalanceAccountsIdTransactionRules

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalanceAccountsIdTransactionRules(request: BalanceAccounts.GetBalanceAccountsIdTransactionRulesRequest, options?: RequestOptions): ApiPromise<TransactionRulesResponse, BalanceAccounts.GetBalanceAccountsIdTransactionRulesError>`
- **Wire**: `GET /balanceAccounts/{id}/transactionRules`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionRulesResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `BalanceAccounts.GetBalanceAccountsIdTransactionRulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BalanceAccounts.GetBalanceAccountsIdTransactionRulesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionRulesResponse` | `transactionRulesResponseSchema` | `src/models/transaction-rules-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchBalanceAccountsId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchBalanceAccountsId(request: BalanceAccounts.PatchBalanceAccountsIdRequest, options?: RequestOptions): ApiPromise<BalanceAccount, BalanceAccounts.PatchBalanceAccountsIdError>`
- **Wire**: `PATCH /balanceAccounts/{id}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BalanceAccount`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `BalanceAccounts.PatchBalanceAccountsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BalanceAccounts.PatchBalanceAccountsIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `BalanceAccountUpdateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceAccountUpdateRequest` | `balanceAccountUpdateRequestSchema` | `src/models/balance-account-update-request.ts` |
| `BalanceAccount` | `balanceAccountSchema` | `src/models/balance-account.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postBalanceAccounts

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postBalanceAccounts(request: BalanceAccounts.PostBalanceAccountsRequest, options?: RequestOptions): ApiPromise<BalanceAccount, BalanceAccounts.PostBalanceAccountsError>`
- **Wire**: `POST /balanceAccounts`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BalanceAccount`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `BalanceAccounts.PostBalanceAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BalanceAccounts.PostBalanceAccountsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BalanceAccountInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceAccountInfo` | `balanceAccountInfoSchema` | `src/models/balance-account-info.ts` |
| `BalanceAccount` | `balanceAccountSchema` | `src/models/balance-account.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

