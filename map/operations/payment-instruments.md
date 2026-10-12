<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentInstruments — operations

Accessor: `client.paymentInstruments` · Source: `src/resources/payment-instruments.ts` · 9 operations · Request and error types: namespace `PaymentInstruments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPaymentInstrumentsId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getPaymentInstrumentsId(request: PaymentInstruments.GetPaymentInstrumentsIdRequest, options?: RequestOptions): ApiPromise<PaymentInstrument1, PaymentInstruments.GetPaymentInstrumentsIdError>`
- **Wire**: `GET /paymentInstruments/{id}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentInstrument1`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentInstruments.GetPaymentInstrumentsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentInstruments.GetPaymentInstrumentsIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInstrument1` | `paymentInstrument1Schema` | `src/models/payment-instrument1.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getPaymentInstrumentsIdNetworkTokenActivationData

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getPaymentInstrumentsIdNetworkTokenActivationData(request: PaymentInstruments.GetPaymentInstrumentsIdNetworkTokenActivationDataRequest, options?: RequestOptions): ApiPromise<NetworkTokenActivationDataResponse, PaymentInstruments.GetPaymentInstrumentsIdNetworkTokenActivationDataError>`
- **Wire**: `GET /paymentInstruments/{id}/networkTokenActivationData`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NetworkTokenActivationDataResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentInstruments.GetPaymentInstrumentsIdNetworkTokenActivationDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentInstruments.GetPaymentInstrumentsIdNetworkTokenActivationDataRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NetworkTokenActivationDataResponse` | `networkTokenActivationDataResponseSchema` | `src/models/network-token-activation-data-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getPaymentInstrumentsIdNetworkTokens

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getPaymentInstrumentsIdNetworkTokens(request: PaymentInstruments.GetPaymentInstrumentsIdNetworkTokensRequest, options?: RequestOptions): ApiPromise<ListNetworkTokensResponse, PaymentInstruments.GetPaymentInstrumentsIdNetworkTokensError>`
- **Wire**: `GET /paymentInstruments/{id}/networkTokens`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListNetworkTokensResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentInstruments.GetPaymentInstrumentsIdNetworkTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentInstruments.GetPaymentInstrumentsIdNetworkTokensRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListNetworkTokensResponse` | `listNetworkTokensResponseSchema` | `src/models/list-network-tokens-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getPaymentInstrumentsIdReveal

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getPaymentInstrumentsIdReveal(request: PaymentInstruments.GetPaymentInstrumentsIdRevealRequest, options?: RequestOptions): ApiPromise<PaymentInstrumentRevealInfo, PaymentInstruments.GetPaymentInstrumentsIdRevealError>`
- **Wire**: `GET /paymentInstruments/{id}/reveal`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentInstrumentRevealInfo`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentInstruments.GetPaymentInstrumentsIdRevealError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentInstruments.GetPaymentInstrumentsIdRevealRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInstrumentRevealInfo` | `paymentInstrumentRevealInfoSchema` | `src/models/payment-instrument-reveal-info.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getPaymentInstrumentsIdTransactionRules

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getPaymentInstrumentsIdTransactionRules(request: PaymentInstruments.GetPaymentInstrumentsIdTransactionRulesRequest, options?: RequestOptions): ApiPromise<TransactionRulesResponse, PaymentInstruments.GetPaymentInstrumentsIdTransactionRulesError>`
- **Wire**: `GET /paymentInstruments/{id}/transactionRules`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionRulesResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentInstruments.GetPaymentInstrumentsIdTransactionRulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentInstruments.GetPaymentInstrumentsIdTransactionRulesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionRulesResponse` | `transactionRulesResponseSchema` | `src/models/transaction-rules-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchPaymentInstrumentsId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchPaymentInstrumentsId(request: PaymentInstruments.PatchPaymentInstrumentsIdRequest, options?: RequestOptions): ApiPromise<UpdatePaymentInstrument, PaymentInstruments.PatchPaymentInstrumentsIdError>`
- **Wire**: `PATCH /paymentInstruments/{id}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdatePaymentInstrument`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentInstruments.PatchPaymentInstrumentsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentInstruments.PatchPaymentInstrumentsIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PaymentInstrumentUpdateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInstrumentUpdateRequest` | `paymentInstrumentUpdateRequestSchema` | `src/models/payment-instrument-update-request.ts` |
| `UpdatePaymentInstrument` | `updatePaymentInstrumentSchema` | `src/models/update-payment-instrument.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postPaymentInstruments

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postPaymentInstruments(request: PaymentInstruments.PostPaymentInstrumentsRequest, options?: RequestOptions): ApiPromise<PaymentInstrument1, PaymentInstruments.PostPaymentInstrumentsError>`
- **Wire**: `POST /paymentInstruments`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentInstrument1`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentInstruments.PostPaymentInstrumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentInstruments.PostPaymentInstrumentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentInstrumentInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInstrumentInfo` | `paymentInstrumentInfoSchema` | `src/models/payment-instrument-info.ts` |
| `PaymentInstrument1` | `paymentInstrument1Schema` | `src/models/payment-instrument1.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postPaymentInstrumentsIdNetworkTokenActivationData

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postPaymentInstrumentsIdNetworkTokenActivationData(request: PaymentInstruments.PostPaymentInstrumentsIdNetworkTokenActivationDataRequest, options?: RequestOptions): ApiPromise<NetworkTokenActivationDataResponse, PaymentInstruments.PostPaymentInstrumentsIdNetworkTokenActivationDataError>`
- **Wire**: `POST /paymentInstruments/{id}/networkTokenActivationData`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NetworkTokenActivationDataResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentInstruments.PostPaymentInstrumentsIdNetworkTokenActivationDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentInstruments.PostPaymentInstrumentsIdNetworkTokenActivationDataRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `NetworkTokenActivationDataRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NetworkTokenActivationDataRequest` | `networkTokenActivationDataRequestSchema` | `src/models/network-token-activation-data-request.ts` |
| `NetworkTokenActivationDataResponse` | `networkTokenActivationDataResponseSchema` | `src/models/network-token-activation-data-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postPaymentInstrumentsReveal

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postPaymentInstrumentsReveal(request: PaymentInstruments.PostPaymentInstrumentsRevealRequest, options?: RequestOptions): ApiPromise<PaymentInstrumentRevealResponse, PaymentInstruments.PostPaymentInstrumentsRevealError>`
- **Wire**: `POST /paymentInstruments/reveal`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentInstrumentRevealResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentInstruments.PostPaymentInstrumentsRevealError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentInstruments.PostPaymentInstrumentsRevealRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentInstrumentRevealRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInstrumentRevealRequest` | `paymentInstrumentRevealRequestSchema` | `src/models/payment-instrument-reveal-request.ts` |
| `PaymentInstrumentRevealResponse` | `paymentInstrumentRevealResponseSchema` | `src/models/payment-instrument-reveal-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

