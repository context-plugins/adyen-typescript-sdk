<!-- Generated file — do not edit; regenerated with the SDK. -->

# RecurringApi — operations

Accessor: `client.recurringApi` · Source: `src/resources/recurring-api.ts` · 4 operations · Request types: namespace `RecurringApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteStoredPaymentMethodsStoredPaymentMethodId

- **Signature**: `deleteStoredPaymentMethodsStoredPaymentMethodId(request: RecurringApi.DeleteStoredPaymentMethodsStoredPaymentMethodIdRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /storedPaymentMethods/{storedPaymentMethodId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `RecurringApi.DeleteStoredPaymentMethodsStoredPaymentMethodIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `storedPaymentMethodId` | `path` | `string` | yes |
| `shopperReference` | `query` | `string` | yes |
| `merchantAccount` | `query` | `string` | yes |

### getStoredPaymentMethods

- **Signature**: `getStoredPaymentMethods(request: RecurringApi.GetStoredPaymentMethodsRequest, options?: RequestOptions): ApiPromise<ListStoredPaymentMethodsResponse, ApiError>`
- **Wire**: `GET /storedPaymentMethods`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListStoredPaymentMethodsResponse`
- **Error**: `AdyenError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `RecurringApi.GetStoredPaymentMethodsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `shopperReference` | `query` | `string` | no |
| `merchantAccount` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListStoredPaymentMethodsResponse` | `listStoredPaymentMethodsResponseSchema` | `src/models/list-stored-payment-methods-response.ts` |

### postForward

- **Signature**: `postForward(request: RecurringApi.PostForwardRequest, options?: RequestOptions): ApiPromise<CheckoutForwardResponse, ApiError>`
- **Wire**: `POST /forward`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `CheckoutForwardResponse`
- **Error**: `AdyenError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `RecurringApi.PostForwardRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `CheckoutForwardRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckoutForwardRequest` | `checkoutForwardRequestSchema` | `src/models/checkout-forward-request.ts` |
| `CheckoutForwardResponse` | `checkoutForwardResponseSchema` | `src/models/checkout-forward-response.ts` |

### postStoredPaymentMethods

- **Signature**: `postStoredPaymentMethods(request: RecurringApi.PostStoredPaymentMethodsRequest, options?: RequestOptions): ApiPromise<StoredPaymentMethodResource, ApiError>`
- **Wire**: `POST /storedPaymentMethods`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `StoredPaymentMethodResource`
- **Error**: `AdyenError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `RecurringApi.PostStoredPaymentMethodsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `StoredPaymentMethodRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoredPaymentMethodRequest` | `storedPaymentMethodRequestSchema` | `src/models/stored-payment-method-request.ts` |
| `StoredPaymentMethodResource` | `storedPaymentMethodResourceSchema` | `src/models/stored-payment-method-resource.ts` |

