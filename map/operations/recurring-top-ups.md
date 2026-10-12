<!-- Generated file — do not edit; regenerated with the SDK. -->

# RecurringTopUps — operations

Accessor: `client.recurringTopUps` · Source: `src/resources/recurring-top-ups.ts` · 4 operations · Request and error types: namespace `RecurringTopUps`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(request: RecurringTopUps.DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRequest, options?: RequestOptions): ApiPromise<unknown, RecurringTopUps.DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError>`
- **Wire**: `DELETE /balanceAccounts/{balanceAccountId}/recurringTopUps/{topUpId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `unknown` — a bare `application/json` unknown; the success type *is* the unknown
- **Error**: `AdyenError` with `kind: "api"`, an instance of `RecurringTopUps.DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity6"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecurringTopUps.DeleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balanceAccountId` | `path` | `string` | yes |
| `topUpId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getBalanceAccountsBalanceAccountIdRecurringTopUps

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalanceAccountsBalanceAccountIdRecurringTopUps(request: RecurringTopUps.GetBalanceAccountsBalanceAccountIdRecurringTopUpsRequest, options?: RequestOptions): ApiPromise<RecurringTopUpsResult, RecurringTopUps.GetBalanceAccountsBalanceAccountIdRecurringTopUpsError>`
- **Wire**: `GET /balanceAccounts/{balanceAccountId}/recurringTopUps`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RecurringTopUpsResult`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `RecurringTopUps.GetBalanceAccountsBalanceAccountIdRecurringTopUpsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecurringTopUps.GetBalanceAccountsBalanceAccountIdRecurringTopUpsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `balanceAccountId` | `path` | `string` | yes | — |
| `limit` | `query` | `number` | no | `10` |
| `cursor` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecurringTopUpsResult` | `recurringTopUpsResultSchema` | `src/models/recurring-top-ups-result.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId(request: RecurringTopUps.PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRequest, options?: RequestOptions): ApiPromise<RecurringTopUp, RecurringTopUps.PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError>`
- **Wire**: `PATCH /balanceAccounts/{balanceAccountId}/recurringTopUps/{topUpId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecurringTopUp`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `RecurringTopUps.PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecurringTopUps.PatchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balanceAccountId` | `path` | `string` | yes |
| `topUpId` | `path` | `string` | yes |
| `body` | `body` | `PatchableCreateRecurringTopUp` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchableCreateRecurringTopUp` | `patchableCreateRecurringTopUpSchema` | `src/models/patchable-create-recurring-top-up.ts` |
| `RecurringTopUp` | `recurringTopUpSchema` | `src/models/recurring-top-up.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postBalanceAccountsBalanceAccountIdRecurringTopUps

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postBalanceAccountsBalanceAccountIdRecurringTopUps(request: RecurringTopUps.PostBalanceAccountsBalanceAccountIdRecurringTopUpsRequest, options?: RequestOptions): ApiPromise<RecurringTopUp, RecurringTopUps.PostBalanceAccountsBalanceAccountIdRecurringTopUpsError>`
- **Wire**: `POST /balanceAccounts/{balanceAccountId}/recurringTopUps`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RecurringTopUp`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `RecurringTopUps.PostBalanceAccountsBalanceAccountIdRecurringTopUpsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecurringTopUps.PostBalanceAccountsBalanceAccountIdRecurringTopUpsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balanceAccountId` | `path` | `string` | yes |
| `body` | `body` | `CreateRecurringTopUp` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateRecurringTopUp` | `createRecurringTopUpSchema` | `src/models/create-recurring-top-up.ts` |
| `RecurringTopUp` | `recurringTopUpSchema` | `src/models/recurring-top-up.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

