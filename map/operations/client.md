<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdyenClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 18 operations · Request types: namespace `AdyenClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `AdyenClient.AbortRequestRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### abortRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `abortRequest(request: AdyenClient.AbortRequestRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ResponseError>`
- **Wire**: `POST /abort`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.AbortRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AbortRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AbortRequest` | `abortRequestSchema` | `src/models/abort-request.ts` |

### adminRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `adminRequest(request: AdyenClient.AdminRequestRequest, options?: RequestOptions): ApiPromise<AdminResponse, ResponseError>`
- **Wire**: `POST /admin`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AdminResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.AdminRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AdminRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminRequest` | `adminRequestSchema` | `src/models/admin-request.ts` |
| `AdminResponse` | `adminResponseSchema` | `src/models/admin-response.ts` |

### balanceInquiryRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `balanceInquiryRequest(request: AdyenClient.BalanceInquiryRequestRequest, options?: RequestOptions): ApiPromise<BalanceInquiryResponse, ResponseError>`
- **Wire**: `POST /balanceinquiry`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `BalanceInquiryResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.BalanceInquiryRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BalanceInquiryRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceInquiryRequest` | `balanceInquiryRequestSchema` | `src/models/balance-inquiry-request.ts` |
| `BalanceInquiryResponse` | `balanceInquiryResponseSchema` | `src/models/balance-inquiry-response.ts` |

### cardAcquisitionRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `cardAcquisitionRequest(request: AdyenClient.CardAcquisitionRequestRequest, options?: RequestOptions): ApiPromise<CardAcquisitionResponse, ResponseError>`
- **Wire**: `POST /cardacquisition`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CardAcquisitionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.CardAcquisitionRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CardAcquisitionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CardAcquisitionRequest` | `cardAcquisitionRequestSchema` | `src/models/card-acquisition-request.ts` |
| `CardAcquisitionResponse` | `cardAcquisitionResponseSchema` | `src/models/card-acquisition-response.ts` |

### cardReaderApduRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `cardReaderApduRequest(request: AdyenClient.CardReaderApduRequestRequest, options?: RequestOptions): ApiPromise<CardReaderApduResponse, ResponseError>`
- **Wire**: `POST /cardreaderapdu`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CardReaderApduResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.CardReaderApduRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CardReaderApduRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CardReaderApduRequest` | `cardReaderApduRequestSchema` | `src/models/card-reader-apdu-request.ts` |
| `CardReaderApduResponse` | `cardReaderApduResponseSchema` | `src/models/card-reader-apdu-response.ts` |

### diagnosisRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `diagnosisRequest(request: AdyenClient.DiagnosisRequestRequest, options?: RequestOptions): ApiPromise<DiagnosisResponse, ResponseError>`
- **Wire**: `POST /diagnosis`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DiagnosisResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.DiagnosisRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DiagnosisRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DiagnosisRequest` | `diagnosisRequestSchema` | `src/models/diagnosis-request.ts` |
| `DiagnosisResponse` | `diagnosisResponseSchema` | `src/models/diagnosis-response.ts` |

### displayRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `displayRequest(request: AdyenClient.DisplayRequestRequest, options?: RequestOptions): ApiPromise<DisplayResponse, ResponseError>`
- **Wire**: `POST /display`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DisplayResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.DisplayRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DisplayRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisplayRequest` | `displayRequestSchema` | `src/models/display-request.ts` |
| `DisplayResponse` | `displayResponseSchema` | `src/models/display-response.ts` |

### enableServiceRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `enableServiceRequest(request: AdyenClient.EnableServiceRequestRequest, options?: RequestOptions): ApiPromise<EnableServiceResponse, ResponseError>`
- **Wire**: `POST /enableservice`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `EnableServiceResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.EnableServiceRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `EnableServiceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EnableServiceRequest` | `enableServiceRequestSchema` | `src/models/enable-service-request.ts` |
| `EnableServiceResponse` | `enableServiceResponseSchema` | `src/models/enable-service-response.ts` |

### getTotalsRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getTotalsRequest(request: AdyenClient.GetTotalsRequestRequest, options?: RequestOptions): ApiPromise<GetTotalsResponse, ResponseError>`
- **Wire**: `POST /gettotals`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GetTotalsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.GetTotalsRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetTotalsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTotalsRequest` | `getTotalsRequestSchema` | `src/models/get-totals-request.ts` |
| `GetTotalsResponse` | `getTotalsResponseSchema` | `src/models/get-totals-response.ts` |

### inputRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `inputRequest(request: AdyenClient.InputRequestRequest, options?: RequestOptions): ApiPromise<InputResponse, ResponseError>`
- **Wire**: `POST /input`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `InputResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.InputRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InputRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InputRequest` | `inputRequestSchema` | `src/models/input-request.ts` |
| `InputResponse` | `inputResponseSchema` | `src/models/input-response.ts` |

### loginRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `loginRequest(request: AdyenClient.LoginRequestRequest, options?: RequestOptions): ApiPromise<LoginResponse, ResponseError>`
- **Wire**: `POST /login`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `LoginResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.LoginRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LoginRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LoginRequest` | `loginRequestSchema` | `src/models/login-request.ts` |
| `LoginResponse` | `loginResponseSchema` | `src/models/login-response.ts` |

### logoutRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `logoutRequest(request: AdyenClient.LogoutRequestRequest, options?: RequestOptions): ApiPromise<LogoutResponse, ResponseError>`
- **Wire**: `POST /logout`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `LogoutResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.LogoutRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LogoutRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LogoutRequest` | `logoutRequestSchema` | `src/models/logout-request.ts` |
| `LogoutResponse` | `logoutResponseSchema` | `src/models/logout-response.ts` |

### paymentRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `paymentRequest(request: AdyenClient.PaymentRequestRequest, options?: RequestOptions): ApiPromise<PaymentResponse4, ResponseError>`
- **Wire**: `POST /payment`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PaymentResponse4`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.PaymentRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentRequest2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentRequest2` | `paymentRequest2Schema` | `src/models/payment-request2.ts` |
| `PaymentResponse4` | `paymentResponse4Schema` | `src/models/payment-response4.ts` |

### printRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `printRequest(request: AdyenClient.PrintRequestRequest, options?: RequestOptions): ApiPromise<PrintResponse, ResponseError>`
- **Wire**: `POST /print`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PrintResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.PrintRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PrintRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PrintRequest` | `printRequestSchema` | `src/models/print-request.ts` |
| `PrintResponse` | `printResponseSchema` | `src/models/print-response.ts` |

### reconciliationRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `reconciliationRequest(request: AdyenClient.ReconciliationRequestRequest, options?: RequestOptions): ApiPromise<ReconciliationResponse, ResponseError>`
- **Wire**: `POST /reconciliation`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ReconciliationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.ReconciliationRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ReconciliationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReconciliationRequest` | `reconciliationRequestSchema` | `src/models/reconciliation-request.ts` |
| `ReconciliationResponse` | `reconciliationResponseSchema` | `src/models/reconciliation-response.ts` |

### reversalRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `reversalRequest(request: AdyenClient.ReversalRequestRequest, options?: RequestOptions): ApiPromise<ReversalResponse, ResponseError>`
- **Wire**: `POST /reversal`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ReversalResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.ReversalRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ReversalRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReversalRequest` | `reversalRequestSchema` | `src/models/reversal-request.ts` |
| `ReversalResponse` | `reversalResponseSchema` | `src/models/reversal-response.ts` |

### storedValueRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `storedValueRequest(request: AdyenClient.StoredValueRequestRequest, options?: RequestOptions): ApiPromise<StoredValueResponse, ResponseError>`
- **Wire**: `POST /storedvalue`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `StoredValueResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.StoredValueRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StoredValueRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoredValueRequest` | `storedValueRequestSchema` | `src/models/stored-value-request.ts` |
| `StoredValueResponse` | `storedValueResponseSchema` | `src/models/stored-value-response.ts` |

### transactionStatusRequest

- **Server**: `default24` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `transactionStatusRequest(request: AdyenClient.TransactionStatusRequestRequest, options?: RequestOptions): ApiPromise<TransactionStatusResponse, ResponseError>`
- **Wire**: `POST /transactionstatus`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TransactionStatusResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdyenClient.TransactionStatusRequestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransactionStatusRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionStatusRequest` | `transactionStatusRequestSchema` | `src/models/transaction-status-request.ts` |
| `TransactionStatusResponse` | `transactionStatusResponseSchema` | `src/models/transaction-status-response.ts` |

