<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransactionRules — operations

Accessor: `client.transactionRules` · Source: `src/resources/transaction-rules.ts` · 4 operations · Request and error types: namespace `TransactionRules`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteTransactionRulesTransactionRuleId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteTransactionRulesTransactionRuleId(request: TransactionRules.DeleteTransactionRulesTransactionRuleIdRequest, options?: RequestOptions): ApiPromise<TransactionRule, TransactionRules.DeleteTransactionRulesTransactionRuleIdError>`
- **Wire**: `DELETE /transactionRules/{transactionRuleId}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionRule`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TransactionRules.DeleteTransactionRulesTransactionRuleIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionRules.DeleteTransactionRulesTransactionRuleIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transactionRuleId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionRule` | `transactionRuleSchema` | `src/models/transaction-rule.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getTransactionRulesTransactionRuleId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getTransactionRulesTransactionRuleId(request: TransactionRules.GetTransactionRulesTransactionRuleIdRequest, options?: RequestOptions): ApiPromise<TransactionRuleResponse, TransactionRules.GetTransactionRulesTransactionRuleIdError>`
- **Wire**: `GET /transactionRules/{transactionRuleId}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionRuleResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TransactionRules.GetTransactionRulesTransactionRuleIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionRules.GetTransactionRulesTransactionRuleIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transactionRuleId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionRuleResponse` | `transactionRuleResponseSchema` | `src/models/transaction-rule-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchTransactionRulesTransactionRuleId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchTransactionRulesTransactionRuleId(request: TransactionRules.PatchTransactionRulesTransactionRuleIdRequest, options?: RequestOptions): ApiPromise<TransactionRule, TransactionRules.PatchTransactionRulesTransactionRuleIdError>`
- **Wire**: `PATCH /transactionRules/{transactionRuleId}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionRule`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TransactionRules.PatchTransactionRulesTransactionRuleIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionRules.PatchTransactionRulesTransactionRuleIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transactionRuleId` | `path` | `string` | yes |
| `body` | `body` | `TransactionRuleInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionRuleInfo` | `transactionRuleInfoSchema` | `src/models/transaction-rule-info.ts` |
| `TransactionRule` | `transactionRuleSchema` | `src/models/transaction-rule.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postTransactionRules

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postTransactionRules(request: TransactionRules.PostTransactionRulesRequest, options?: RequestOptions): ApiPromise<TransactionRule, TransactionRules.PostTransactionRulesError>`
- **Wire**: `POST /transactionRules`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionRule`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TransactionRules.PostTransactionRulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionRules.PostTransactionRulesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransactionRuleInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionRuleInfo` | `transactionRuleInfoSchema` | `src/models/transaction-rule-info.ts` |
| `TransactionRule` | `transactionRuleSchema` | `src/models/transaction-rule.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

