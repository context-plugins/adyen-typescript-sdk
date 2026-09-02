<!-- Generated file — do not edit; regenerated with the SDK. -->

# Utility — operations

Accessor: `client.utility` · Source: `src/resources/utility.ts` · 4 operations · Request and error types: namespace `Utility`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### postApplePaySessions

- **Signature**: `postApplePaySessions(request: Utility.PostApplePaySessionsRequest, options?: RequestOptions): ApiPromise<ApplePaySessionResponse, ResponseError>`
- **Wire**: `POST /applePay/sessions`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ApplePaySessionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Utility.PostApplePaySessionsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `ApplePaySessionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplePaySessionRequest` | `applePaySessionRequestSchema` | `src/models/apple-pay-session-request.ts` |
| `ApplePaySessionResponse` | `applePaySessionResponseSchema` | `src/models/apple-pay-session-response.ts` |

### postOriginKeys

- **Signature**: `postOriginKeys(request: Utility.PostOriginKeysRequest, options?: RequestOptions): ApiPromise<UtilityResponse, Utility.PostOriginKeysError>`
- **Wire**: `POST /originKeys`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UtilityResponse`
- **Error**: `Utility.PostOriginKeysError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Utility.PostOriginKeysRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `UtilityRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UtilityRequest` | `utilityRequestSchema` | `src/models/utility-request.ts` |
| `UtilityResponse` | `utilityResponseSchema` | `src/models/utility-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postPaypalUpdateOrder

- **Signature**: `postPaypalUpdateOrder(request: Utility.PostPaypalUpdateOrderRequest, options?: RequestOptions): ApiPromise<PaypalUpdateOrderResponse, Utility.PostPaypalUpdateOrderError>`
- **Wire**: `POST /paypal/updateOrder`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PaypalUpdateOrderResponse`
- **Error**: `Utility.PostPaypalUpdateOrderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Utility.PostPaypalUpdateOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `PaypalUpdateOrderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaypalUpdateOrderRequest` | `paypalUpdateOrderRequestSchema` | `src/models/paypal-update-order-request.ts` |
| `PaypalUpdateOrderResponse` | `paypalUpdateOrderResponseSchema` | `src/models/paypal-update-order-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postValidateShopperId

- **Signature**: `postValidateShopperId(request: Utility.PostValidateShopperIdRequest, options?: RequestOptions): ApiPromise<ValidateShopperIdResponse, Utility.PostValidateShopperIdError>`
- **Wire**: `POST /validateShopperId`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ValidateShopperIdResponse`
- **Error**: `Utility.PostValidateShopperIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"checkoutErrorResponseEntity"` [400] `CheckoutErrorResponseEntity` · `"checkoutErrorResponseEntity2"` [401] `CheckoutErrorResponseEntity` · `"checkoutErrorResponseEntity3"` [403] `CheckoutErrorResponseEntity` · `"checkoutErrorResponseEntity4"` [422] `CheckoutErrorResponseEntity` · `"checkoutErrorResponseEntity5"` [500] `CheckoutErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Utility.PostValidateShopperIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ValidateShopperIdRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ValidateShopperIdRequest` | `validateShopperIdRequestSchema` | `src/models/validate-shopper-id-request.ts` |
| `ValidateShopperIdResponse` | `validateShopperIdResponseSchema` | `src/models/validate-shopper-id-response.ts` |
| `CheckoutErrorResponseEntity` | `checkoutErrorResponseEntitySchema` | `src/models/checkout-error-response-entity.ts` |

