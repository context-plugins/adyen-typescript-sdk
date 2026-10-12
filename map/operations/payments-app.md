<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentsApp — operations

Accessor: `client.paymentsApp` · Source: `src/resources/payments-app.ts` · 5 operations · Request and error types: namespace `PaymentsApp`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMerchantsMerchantIdPaymentsApps

- **Server**: `default26` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdPaymentsApps(request: PaymentsApp.GetMerchantsMerchantIdPaymentsAppsRequest, options?: RequestOptions): ApiPromise<PaymentsAppResponse, PaymentsApp.GetMerchantsMerchantIdPaymentsAppsError>`
- **Wire**: `GET /merchants/{merchantId}/paymentsApps`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentsAppResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentsApp.GetMerchantsMerchantIdPaymentsAppsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApp.GetMerchantsMerchantIdPaymentsAppsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes | — |
| `statuses` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `10` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentsAppResponse` | `paymentsAppResponseSchema` | `src/models/payments-app-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getMerchantsMerchantIdStoresStoreIdPaymentsApps

- **Server**: `default26` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdStoresStoreIdPaymentsApps(request: PaymentsApp.GetMerchantsMerchantIdStoresStoreIdPaymentsAppsRequest, options?: RequestOptions): ApiPromise<PaymentsAppResponse, PaymentsApp.GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError>`
- **Wire**: `GET /merchants/{merchantId}/stores/{storeId}/paymentsApps`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentsAppResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentsApp.GetMerchantsMerchantIdStoresStoreIdPaymentsAppsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApp.GetMerchantsMerchantIdStoresStoreIdPaymentsAppsRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes | — |
| `storeId` | `path` | `string` | yes | — |
| `statuses` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `10` |
| `offset` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentsAppResponse` | `paymentsAppResponseSchema` | `src/models/payments-app-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postMerchantsMerchantIdGeneratePaymentsAppBoardingToken

- **Server**: `default26` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdGeneratePaymentsAppBoardingToken(request: PaymentsApp.PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenRequest, options?: RequestOptions): ApiPromise<BoardingTokenResponse, PaymentsApp.PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError>`
- **Wire**: `POST /merchants/{merchantId}/generatePaymentsAppBoardingToken`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BoardingTokenResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentsApp.PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApp.PostMerchantsMerchantIdGeneratePaymentsAppBoardingTokenRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `body` | `body` | `BoardingTokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BoardingTokenRequest` | `boardingTokenRequestSchema` | `src/models/boarding-token-request.ts` |
| `BoardingTokenResponse` | `boardingTokenResponseSchema` | `src/models/boarding-token-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postMerchantsMerchantIdPaymentsAppsInstallationIdRevoke

- **Server**: `default26` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdPaymentsAppsInstallationIdRevoke(request: PaymentsApp.PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeRequest, options?: RequestOptions): ApiPromise<unknown, PaymentsApp.PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError>`
- **Wire**: `POST /merchants/{merchantId}/paymentsApps/{installationId}/revoke`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `unknown` — a bare `application/json` unknown; the success type *is* the unknown
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentsApp.PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApp.PostMerchantsMerchantIdPaymentsAppsInstallationIdRevokeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `installationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken

- **Server**: `default26` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken(request: PaymentsApp.PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenRequest, options?: RequestOptions): ApiPromise<BoardingTokenResponse, PaymentsApp.PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError>`
- **Wire**: `POST /merchants/{merchantId}/stores/{storeId}/generatePaymentsAppBoardingToken`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BoardingTokenResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentsApp.PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApp.PostMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingTokenRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `storeId` | `path` | `string` | yes |
| `body` | `body` | `BoardingTokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BoardingTokenRequest` | `boardingTokenRequestSchema` | `src/models/boarding-token-request.ts` |
| `BoardingTokenResponse` | `boardingTokenResponseSchema` | `src/models/boarding-token-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

