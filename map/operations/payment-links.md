<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentLinks — operations

Accessor: `client.paymentLinks` · Source: `src/resources/payment-links.ts` · 3 operations · Request and error types: namespace `PaymentLinks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPaymentLinksLinkId

- **Signature**: `getPaymentLinksLinkId(request: PaymentLinks.GetPaymentLinksLinkIdRequest, options?: RequestOptions): ApiPromise<PaymentLinkResponse, PaymentLinks.GetPaymentLinksLinkIdError>`
- **Wire**: `GET /paymentLinks/{linkId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentLinkResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentLinks.GetPaymentLinksLinkIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinks.GetPaymentLinksLinkIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `linkId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentLinkResponse` | `paymentLinkResponseSchema` | `src/models/payment-link-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### patchPaymentLinksLinkId

- **Signature**: `patchPaymentLinksLinkId(request: PaymentLinks.PatchPaymentLinksLinkIdRequest, options?: RequestOptions): ApiPromise<PaymentLinkResponse, PaymentLinks.PatchPaymentLinksLinkIdError>`
- **Wire**: `PATCH /paymentLinks/{linkId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentLinkResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentLinks.PatchPaymentLinksLinkIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinks.PatchPaymentLinksLinkIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `linkId` | `path` | `string` | yes |
| `body` | `body` | `UpdatePaymentLinkRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdatePaymentLinkRequest` | `updatePaymentLinkRequestSchema` | `src/models/update-payment-link-request.ts` |
| `PaymentLinkResponse` | `paymentLinkResponseSchema` | `src/models/payment-link-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postPaymentLinks

- **Signature**: `postPaymentLinks(request: PaymentLinks.PostPaymentLinksRequest, options?: RequestOptions): ApiPromise<PaymentLinkResponse, PaymentLinks.PostPaymentLinksError>`
- **Wire**: `POST /paymentLinks`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `PaymentLinkResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PaymentLinks.PostPaymentLinksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinks.PostPaymentLinksRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `PaymentLinkRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentLinkRequest` | `paymentLinkRequestSchema` | `src/models/payment-link-request.ts` |
| `PaymentLinkResponse` | `paymentLinkResponseSchema` | `src/models/payment-link-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

