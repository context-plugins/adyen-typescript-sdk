<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentInstrumentGroups — operations

Accessor: `client.paymentInstrumentGroups` · Source: `src/resources/payment-instrument-groups.ts` · 3 operations · Request and error types: namespace `PaymentInstrumentGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPaymentInstrumentGroupsId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getPaymentInstrumentGroupsId(request: PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdRequest, options?: RequestOptions): ApiPromise<PaymentInstrumentGroup, PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdError>`
- **Wire**: `GET /paymentInstrumentGroups/{id}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentInstrumentGroup`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInstrumentGroup` | `paymentInstrumentGroupSchema` | `src/models/payment-instrument-group.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getPaymentInstrumentGroupsIdTransactionRules

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getPaymentInstrumentGroupsIdTransactionRules(request: PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdTransactionRulesRequest, options?: RequestOptions): ApiPromise<TransactionRulesResponse, PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdTransactionRulesError>`
- **Wire**: `GET /paymentInstrumentGroups/{id}/transactionRules`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionRulesResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdTransactionRulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentInstrumentGroups.GetPaymentInstrumentGroupsIdTransactionRulesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionRulesResponse` | `transactionRulesResponseSchema` | `src/models/transaction-rules-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postPaymentInstrumentGroups

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postPaymentInstrumentGroups(request: PaymentInstrumentGroups.PostPaymentInstrumentGroupsRequest, options?: RequestOptions): ApiPromise<PaymentInstrumentGroup, PaymentInstrumentGroups.PostPaymentInstrumentGroupsError>`
- **Wire**: `POST /paymentInstrumentGroups`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentInstrumentGroup`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentInstrumentGroups.PostPaymentInstrumentGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentInstrumentGroups.PostPaymentInstrumentGroupsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentInstrumentGroupInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInstrumentGroupInfo` | `paymentInstrumentGroupInfoSchema` | `src/models/payment-instrument-group-info.ts` |
| `PaymentInstrumentGroup` | `paymentInstrumentGroupSchema` | `src/models/payment-instrument-group.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

