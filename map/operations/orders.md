<!-- Generated file — do not edit; regenerated with the SDK. -->

# Orders — operations

Accessor: `client.orders` · Source: `src/resources/orders.ts` · 3 operations · Request and error types: namespace `Orders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postOrders

- **Signature**: `postOrders(request: Orders.PostOrdersRequest, options?: RequestOptions): ApiPromise<CreateOrderResponse, Orders.PostOrdersError>`
- **Wire**: `POST /orders`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `CreateOrderResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Orders.PostOrdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.PostOrdersRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `CreateOrderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateOrderRequest` | `createOrderRequestSchema` | `src/models/create-order-request.ts` |
| `CreateOrderResponse` | `createOrderResponseSchema` | `src/models/create-order-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postOrdersCancel

- **Signature**: `postOrdersCancel(request: Orders.PostOrdersCancelRequest, options?: RequestOptions): ApiPromise<CancelOrderResponse, Orders.PostOrdersCancelError>`
- **Wire**: `POST /orders/cancel`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `CancelOrderResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Orders.PostOrdersCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.PostOrdersCancelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `CancelOrderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelOrderRequest` | `cancelOrderRequestSchema` | `src/models/cancel-order-request.ts` |
| `CancelOrderResponse` | `cancelOrderResponseSchema` | `src/models/cancel-order-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postPaymentMethodsBalance

- **Signature**: `postPaymentMethodsBalance(request: Orders.PostPaymentMethodsBalanceRequest, options?: RequestOptions): ApiPromise<BalanceCheckResponse, Orders.PostPaymentMethodsBalanceError>`
- **Wire**: `POST /paymentMethods/balance`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `BalanceCheckResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Orders.PostPaymentMethodsBalanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orders.PostPaymentMethodsBalanceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `BalanceCheckRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceCheckRequest` | `balanceCheckRequestSchema` | `src/models/balance-check-request.ts` |
| `BalanceCheckResponse` | `balanceCheckResponseSchema` | `src/models/balance-check-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

