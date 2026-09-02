<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payments — operations

Accessor: `client.payments` · Source: `src/resources/payments.ts` · 14 operations · Request and error types: namespace `Payments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getSessionsSessionId

- **Signature**: `getSessionsSessionId(request: Payments.GetSessionsSessionIdRequest, options?: RequestOptions): ApiPromise<SessionResultResponse, ResponseError>`
- **Wire**: `GET /sessions/{sessionId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SessionResultResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Payments.GetSessionsSessionIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `path` | `string` | yes |
| `sessionResult` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionResultResponse` | `sessionResultResponseSchema` | `src/models/session-result-response.ts` |

### postAuthorise

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postAuthorise(request: Payments.PostAuthoriseRequest, options?: RequestOptions): ApiPromise<PaymentResult, Payments.PostAuthoriseError>`
- **Wire**: `POST /authorise`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PaymentResult`
- **Error**: `Payments.PostAuthoriseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.PostAuthoriseRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentRequest1` | `paymentRequest1Schema` | `src/models/payment-request1.ts` |
| `PaymentResult` | `paymentResultSchema` | `src/models/payment-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postAuthorise3D

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postAuthorise3D(request: Payments.PostAuthorise3DRequest, options?: RequestOptions): ApiPromise<PaymentResult, Payments.PostAuthorise3DError>`
- **Wire**: `POST /authorise3d`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PaymentResult`
- **Error**: `Payments.PostAuthorise3DError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.PostAuthorise3DRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentRequest3D` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentRequest3D` | `paymentRequest3DSchema` | `src/models/payment-request3-d.ts` |
| `PaymentResult` | `paymentResultSchema` | `src/models/payment-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postAuthorise3Ds2

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postAuthorise3Ds2(request: Payments.PostAuthorise3Ds2Request, options?: RequestOptions): ApiPromise<PaymentResult, Payments.PostAuthorise3Ds2Error>`
- **Wire**: `POST /authorise3ds2`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PaymentResult`
- **Error**: `Payments.PostAuthorise3Ds2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.PostAuthorise3Ds2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentRequest3Ds2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentRequest3Ds2` | `paymentRequest3Ds2Schema` | `src/models/payment-request3-ds2.ts` |
| `PaymentResult` | `paymentResultSchema` | `src/models/payment-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postCardDetails

- **Signature**: `postCardDetails(request: Payments.PostCardDetailsRequest, options?: RequestOptions): ApiPromise<CardDetailsResponse, ResponseError>`
- **Wire**: `POST /cardDetails`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CardDetailsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Payments.PostCardDetailsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `CardDetailsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CardDetailsRequest` | `cardDetailsRequestSchema` | `src/models/card-details-request.ts` |
| `CardDetailsResponse` | `cardDetailsResponseSchema` | `src/models/card-details-response.ts` |

### postGetAuthenticationResult

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postGetAuthenticationResult(request: Payments.PostGetAuthenticationResultRequest, options?: RequestOptions): ApiPromise<AuthenticationResultResponse, Payments.PostGetAuthenticationResultError>`
- **Wire**: `POST /getAuthenticationResult`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AuthenticationResultResponse`
- **Error**: `Payments.PostGetAuthenticationResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.PostGetAuthenticationResultRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AuthenticationResultRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthenticationResultRequest` | `authenticationResultRequestSchema` | `src/models/authentication-result-request.ts` |
| `AuthenticationResultResponse` | `authenticationResultResponseSchema` | `src/models/authentication-result-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postPaymentMethods

- **Signature**: `postPaymentMethods(request: Payments.PostPaymentMethodsRequest, options?: RequestOptions): ApiPromise<PaymentMethodsResponse, Payments.PostPaymentMethodsError>`
- **Wire**: `POST /paymentMethods`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PaymentMethodsResponse`
- **Error**: `Payments.PostPaymentMethodsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.PostPaymentMethodsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `PaymentMethodsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentMethodsRequest` | `paymentMethodsRequestSchema` | `src/models/payment-methods-request.ts` |
| `PaymentMethodsResponse` | `paymentMethodsResponseSchema` | `src/models/payment-methods-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postPayments

- **Signature**: `postPayments(request: Payments.PostPaymentsRequest, options?: RequestOptions): ApiPromise<PaymentResponse, Payments.PostPaymentsError>`
- **Wire**: `POST /payments`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PaymentResponse`
- **Error**: `Payments.PostPaymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.PostPaymentsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `PaymentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentRequest` | `paymentRequestSchema` | `src/models/payment-request.ts` |
| `PaymentResponse` | `paymentResponseSchema` | `src/models/payment-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postPaymentsCancel

- **Server**: `default20` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postPaymentsCancel(request: Payments.PostPaymentsCancelRequest, options?: RequestOptions): ApiPromise<CancelPaymentResponse, Payments.PostPaymentsCancelError>`
- **Wire**: `POST /payments/cancel`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CancelPaymentResponse`
- **Error**: `Payments.PostPaymentsCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.PostPaymentsCancelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CancelPaymentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelPaymentRequest` | `cancelPaymentRequestSchema` | `src/models/cancel-payment-request.ts` |
| `CancelPaymentResponse` | `cancelPaymentResponseSchema` | `src/models/cancel-payment-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postPaymentsConfirm

- **Server**: `default20` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postPaymentsConfirm(request: Payments.PostPaymentsConfirmRequest, options?: RequestOptions): ApiPromise<ConfirmPaymentResponse, Payments.PostPaymentsConfirmError>`
- **Wire**: `POST /payments/confirm`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ConfirmPaymentResponse`
- **Error**: `Payments.PostPaymentsConfirmError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.PostPaymentsConfirmRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wwwAuthenticate` | `header` | `WWW-Authenticate` | `string` | no |
| `body` | `body` | — | `ConfirmPaymentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfirmPaymentRequest` | `confirmPaymentRequestSchema` | `src/models/confirm-payment-request.ts` |
| `ConfirmPaymentResponse` | `confirmPaymentResponseSchema` | `src/models/confirm-payment-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postPaymentsDetails

- **Signature**: `postPaymentsDetails(request: Payments.PostPaymentsDetailsRequest, options?: RequestOptions): ApiPromise<PaymentDetailsResponse, Payments.PostPaymentsDetailsError>`
- **Wire**: `POST /payments/details`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PaymentDetailsResponse`
- **Error**: `Payments.PostPaymentsDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.PostPaymentsDetailsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `PaymentDetailsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentDetailsRequest` | `paymentDetailsRequestSchema` | `src/models/payment-details-request.ts` |
| `PaymentDetailsResponse` | `paymentDetailsResponseSchema` | `src/models/payment-details-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postPaymentsDetails1

- **Server**: `default20` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postPaymentsDetails1(request: Payments.PostPaymentsDetails1Request, options?: RequestOptions): ApiPromise<PaymentDetailsResponse1, Payments.PostPaymentsDetails1Error>`
- **Wire**: `POST /payments/details`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PaymentDetailsResponse1`
- **Error**: `Payments.PostPaymentsDetails1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.PostPaymentsDetails1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IdealPaymentDetailsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdealPaymentDetailsRequest` | `idealPaymentDetailsRequestSchema` | `src/models/ideal-payment-details-request.ts` |
| `PaymentDetailsResponse1` | `paymentDetailsResponse1Schema` | `src/models/payment-details-response1.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postRetrieve3Ds2Result

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postRetrieve3Ds2Result(request: Payments.PostRetrieve3Ds2ResultRequest, options?: RequestOptions): ApiPromise<ThreeDs2ResultResponse, Payments.PostRetrieve3Ds2ResultError>`
- **Wire**: `POST /retrieve3ds2Result`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ThreeDs2ResultResponse`
- **Error**: `Payments.PostRetrieve3Ds2ResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.PostRetrieve3Ds2ResultRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ThreeDs2ResultRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ThreeDs2ResultRequest` | `threeDs2ResultRequestSchema` | `src/models/three-ds2-result-request.ts` |
| `ThreeDs2ResultResponse` | `threeDs2ResultResponseSchema` | `src/models/three-ds2-result-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postSessions

- **Signature**: `postSessions(request: Payments.PostSessionsRequest, options?: RequestOptions): ApiPromise<CreateCheckoutSessionResponse, ResponseError>`
- **Wire**: `POST /sessions`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateCheckoutSessionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Payments.PostSessionsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `CreateCheckoutSessionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCheckoutSessionRequest` | `createCheckoutSessionRequestSchema` | `src/models/create-checkout-session-request.ts` |
| `CreateCheckoutSessionResponse` | `createCheckoutSessionResponseSchema` | `src/models/create-checkout-session-response.ts` |

