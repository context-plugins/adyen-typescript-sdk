<!-- Generated file — do not edit; regenerated with the SDK. -->

# RecurringApi — operations

Accessor: `client.recurringApi` · Source: `src/resources/recurring-api.ts` · 4 operations · Request types: namespace `RecurringApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteStoredPaymentMethodsStoredPaymentMethodId

- **Signature**: `deleteStoredPaymentMethodsStoredPaymentMethodId(request: RecurringApi.DeleteStoredPaymentMethodsStoredPaymentMethodIdRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /storedPaymentMethods/{storedPaymentMethodId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `RecurringApi.DeleteStoredPaymentMethodsStoredPaymentMethodIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `storedPaymentMethodId` | `path` | `string` | yes |
| `shopperReference` | `query` | `string` | yes |
| `merchantAccount` | `query` | `string` | yes |

### getStoredPaymentMethods

- **Signature**: `getStoredPaymentMethods(request: RecurringApi.GetStoredPaymentMethodsRequest, options?: RequestOptions): ApiPromise<ListStoredPaymentMethodsResponse, ResponseError>`
- **Wire**: `GET /storedPaymentMethods`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListStoredPaymentMethodsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `RecurringApi.GetStoredPaymentMethodsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `shopperReference` | `query` | `string` | no |
| `merchantAccount` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListStoredPaymentMethodsResponse` | `listStoredPaymentMethodsResponseSchema` | `src/models/list-stored-payment-methods-response.ts` |

### postForward

- **Signature**: `postForward(request: RecurringApi.PostForwardRequest, options?: RequestOptions): ApiPromise<CheckoutForwardResponse, ResponseError>`
- **Wire**: `POST /forward`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CheckoutForwardResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `postStoredPaymentMethods(request: RecurringApi.PostStoredPaymentMethodsRequest, options?: RequestOptions): ApiPromise<StoredPaymentMethodResource, ResponseError>`
- **Wire**: `POST /storedPaymentMethods`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `StoredPaymentMethodResource`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `RecurringApi.PostStoredPaymentMethodsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `StoredPaymentMethodRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoredPaymentMethodRequest` | `storedPaymentMethodRequestSchema` | `src/models/stored-payment-method-request.ts` |
| `StoredPaymentMethodResource` | `storedPaymentMethodResourceSchema` | `src/models/stored-payment-method-resource.ts` |

