<!-- Generated file — do not edit; regenerated with the SDK. -->

# Modifications — operations

Accessor: `client.modifications` · Source: `src/resources/modifications.ts` · 14 operations · Request and error types: namespace `Modifications`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postAdjustAuthorisation

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postAdjustAuthorisation(request: Modifications.PostAdjustAuthorisationRequest, options?: RequestOptions): ApiPromise<ModificationResult, Modifications.PostAdjustAuthorisationError>`
- **Wire**: `POST /adjustAuthorisation`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModificationResult`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Modifications.PostAdjustAuthorisationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Modifications.PostAdjustAuthorisationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AdjustAuthorisationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdjustAuthorisationRequest` | `adjustAuthorisationRequestSchema` | `src/models/adjust-authorisation-request.ts` |
| `ModificationResult` | `modificationResultSchema` | `src/models/modification-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postCancel

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCancel(request: Modifications.PostCancelRequest, options?: RequestOptions): ApiPromise<ModificationResult, Modifications.PostCancelError>`
- **Wire**: `POST /cancel`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModificationResult`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Modifications.PostCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Modifications.PostCancelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CancelRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelRequest` | `cancelRequestSchema` | `src/models/cancel-request.ts` |
| `ModificationResult` | `modificationResultSchema` | `src/models/modification-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postCancelOrRefund

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCancelOrRefund(request: Modifications.PostCancelOrRefundRequest, options?: RequestOptions): ApiPromise<ModificationResult, Modifications.PostCancelOrRefundError>`
- **Wire**: `POST /cancelOrRefund`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModificationResult`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Modifications.PostCancelOrRefundError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Modifications.PostCancelOrRefundRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CancelOrRefundRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelOrRefundRequest` | `cancelOrRefundRequestSchema` | `src/models/cancel-or-refund-request.ts` |
| `ModificationResult` | `modificationResultSchema` | `src/models/modification-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postCancels

- **Signature**: `postCancels(request: Modifications.PostCancelsRequest, options?: RequestOptions): ApiPromise<StandalonePaymentCancelResponse, Modifications.PostCancelsError>`
- **Wire**: `POST /cancels`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `StandalonePaymentCancelResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Modifications.PostCancelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Modifications.PostCancelsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `StandalonePaymentCancelRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StandalonePaymentCancelRequest` | `standalonePaymentCancelRequestSchema` | `src/models/standalone-payment-cancel-request.ts` |
| `StandalonePaymentCancelResponse` | `standalonePaymentCancelResponseSchema` | `src/models/standalone-payment-cancel-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postCapture

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCapture(request: Modifications.PostCaptureRequest, options?: RequestOptions): ApiPromise<ModificationResult, Modifications.PostCaptureError>`
- **Wire**: `POST /capture`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModificationResult`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Modifications.PostCaptureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Modifications.PostCaptureRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CaptureRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CaptureRequest` | `captureRequestSchema` | `src/models/capture-request.ts` |
| `ModificationResult` | `modificationResultSchema` | `src/models/modification-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postDonate

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDonate(request: Modifications.PostDonateRequest, options?: RequestOptions): ApiPromise<ModificationResult, Modifications.PostDonateError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /donate`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModificationResult`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Modifications.PostDonateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Modifications.PostDonateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DonationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DonationRequest` | `donationRequestSchema` | `src/models/donation-request.ts` |
| `ModificationResult` | `modificationResultSchema` | `src/models/modification-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postPaymentsPaymentPspReferenceAmountUpdates

- **Signature**: `postPaymentsPaymentPspReferenceAmountUpdates(request: Modifications.PostPaymentsPaymentPspReferenceAmountUpdatesRequest, options?: RequestOptions): ApiPromise<PaymentAmountUpdateResponse, Modifications.PostPaymentsPaymentPspReferenceAmountUpdatesError>`
- **Wire**: `POST /payments/{paymentPspReference}/amountUpdates`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `PaymentAmountUpdateResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Modifications.PostPaymentsPaymentPspReferenceAmountUpdatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Modifications.PostPaymentsPaymentPspReferenceAmountUpdatesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentPspReference` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `PaymentAmountUpdateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentAmountUpdateRequest` | `paymentAmountUpdateRequestSchema` | `src/models/payment-amount-update-request.ts` |
| `PaymentAmountUpdateResponse` | `paymentAmountUpdateResponseSchema` | `src/models/payment-amount-update-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postPaymentsPaymentPspReferenceCancels

- **Signature**: `postPaymentsPaymentPspReferenceCancels(request: Modifications.PostPaymentsPaymentPspReferenceCancelsRequest, options?: RequestOptions): ApiPromise<PaymentCancelResponse, Modifications.PostPaymentsPaymentPspReferenceCancelsError>`
- **Wire**: `POST /payments/{paymentPspReference}/cancels`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `PaymentCancelResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Modifications.PostPaymentsPaymentPspReferenceCancelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Modifications.PostPaymentsPaymentPspReferenceCancelsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentPspReference` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `PaymentCancelRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentCancelRequest` | `paymentCancelRequestSchema` | `src/models/payment-cancel-request.ts` |
| `PaymentCancelResponse` | `paymentCancelResponseSchema` | `src/models/payment-cancel-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postPaymentsPaymentPspReferenceCaptures

- **Signature**: `postPaymentsPaymentPspReferenceCaptures(request: Modifications.PostPaymentsPaymentPspReferenceCapturesRequest, options?: RequestOptions): ApiPromise<PaymentCaptureResponse, Modifications.PostPaymentsPaymentPspReferenceCapturesError>`
- **Wire**: `POST /payments/{paymentPspReference}/captures`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `PaymentCaptureResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Modifications.PostPaymentsPaymentPspReferenceCapturesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Modifications.PostPaymentsPaymentPspReferenceCapturesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentPspReference` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `PaymentCaptureRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentCaptureRequest` | `paymentCaptureRequestSchema` | `src/models/payment-capture-request.ts` |
| `PaymentCaptureResponse` | `paymentCaptureResponseSchema` | `src/models/payment-capture-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postPaymentsPaymentPspReferenceRefunds

- **Signature**: `postPaymentsPaymentPspReferenceRefunds(request: Modifications.PostPaymentsPaymentPspReferenceRefundsRequest, options?: RequestOptions): ApiPromise<PaymentRefundResponse, Modifications.PostPaymentsPaymentPspReferenceRefundsError>`
- **Wire**: `POST /payments/{paymentPspReference}/refunds`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `PaymentRefundResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Modifications.PostPaymentsPaymentPspReferenceRefundsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Modifications.PostPaymentsPaymentPspReferenceRefundsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentPspReference` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `PaymentRefundRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentRefundRequest` | `paymentRefundRequestSchema` | `src/models/payment-refund-request.ts` |
| `PaymentRefundResponse` | `paymentRefundResponseSchema` | `src/models/payment-refund-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postPaymentsPaymentPspReferenceReversals

- **Signature**: `postPaymentsPaymentPspReferenceReversals(request: Modifications.PostPaymentsPaymentPspReferenceReversalsRequest, options?: RequestOptions): ApiPromise<PaymentReversalResponse, Modifications.PostPaymentsPaymentPspReferenceReversalsError>`
- **Wire**: `POST /payments/{paymentPspReference}/reversals`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `PaymentReversalResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Modifications.PostPaymentsPaymentPspReferenceReversalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Modifications.PostPaymentsPaymentPspReferenceReversalsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentPspReference` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `PaymentReversalRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentReversalRequest` | `paymentReversalRequestSchema` | `src/models/payment-reversal-request.ts` |
| `PaymentReversalResponse` | `paymentReversalResponseSchema` | `src/models/payment-reversal-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postRefund

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postRefund(request: Modifications.PostRefundRequest, options?: RequestOptions): ApiPromise<ModificationResult, Modifications.PostRefundError>`
- **Wire**: `POST /refund`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModificationResult`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Modifications.PostRefundError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Modifications.PostRefundRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RefundRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefundRequest` | `refundRequestSchema` | `src/models/refund-request.ts` |
| `ModificationResult` | `modificationResultSchema` | `src/models/modification-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postTechnicalCancel

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postTechnicalCancel(request: Modifications.PostTechnicalCancelRequest, options?: RequestOptions): ApiPromise<ModificationResult, Modifications.PostTechnicalCancelError>`
- **Wire**: `POST /technicalCancel`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModificationResult`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Modifications.PostTechnicalCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Modifications.PostTechnicalCancelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TechnicalCancelRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TechnicalCancelRequest` | `technicalCancelRequestSchema` | `src/models/technical-cancel-request.ts` |
| `ModificationResult` | `modificationResultSchema` | `src/models/modification-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postVoidPendingRefund

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postVoidPendingRefund(request: Modifications.PostVoidPendingRefundRequest, options?: RequestOptions): ApiPromise<ModificationResult, Modifications.PostVoidPendingRefundError>`
- **Wire**: `POST /voidPendingRefund`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ModificationResult`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Modifications.PostVoidPendingRefundError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Modifications.PostVoidPendingRefundRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `VoidPendingRefundRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VoidPendingRefundRequest` | `voidPendingRefundRequestSchema` | `src/models/void-pending-refund-request.ts` |
| `ModificationResult` | `modificationResultSchema` | `src/models/modification-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

