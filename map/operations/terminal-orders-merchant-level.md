<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalOrdersMerchantLevel — operations

Accessor: `client.terminalOrdersMerchantLevel` · Source: `src/resources/terminal-orders-merchant-level.ts` · 10 operations · Request and error types: namespace `TerminalOrdersMerchantLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getMerchantsMerchantIdBillingEntities

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdBillingEntities(request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdBillingEntitiesRequest, options?: RequestOptions): ApiPromise<BillingEntitiesResponse, TerminalOrdersMerchantLevel.GetMerchantsMerchantIdBillingEntitiesError>`
- **Wire**: `GET /merchants/{merchantId}/billingEntities`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BillingEntitiesResponse`
- **Error**: `TerminalOrdersMerchantLevel.GetMerchantsMerchantIdBillingEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersMerchantLevel.GetMerchantsMerchantIdBillingEntitiesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `name` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillingEntitiesResponse` | `billingEntitiesResponseSchema` | `src/models/billing-entities-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdShippingLocations

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdShippingLocations(request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdShippingLocationsRequest, options?: RequestOptions): ApiPromise<ShippingLocationsResponse, TerminalOrdersMerchantLevel.GetMerchantsMerchantIdShippingLocationsError>`
- **Wire**: `GET /merchants/{merchantId}/shippingLocations`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ShippingLocationsResponse`
- **Error**: `TerminalOrdersMerchantLevel.GetMerchantsMerchantIdShippingLocationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersMerchantLevel.GetMerchantsMerchantIdShippingLocationsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `name` | `query` | `string` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShippingLocationsResponse` | `shippingLocationsResponseSchema` | `src/models/shipping-locations-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdTerminalModels

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdTerminalModels(request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalModelsRequest, options?: RequestOptions): ApiPromise<TerminalModelsResponse, TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalModelsError>`
- **Wire**: `GET /merchants/{merchantId}/terminalModels`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalModelsResponse`
- **Error**: `TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalModelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalModelsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalModelsResponse` | `terminalModelsResponseSchema` | `src/models/terminal-models-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdTerminalOrders

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdTerminalOrders(request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersRequest, options?: RequestOptions): ApiPromise<TerminalOrdersResponse, TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersError>`
- **Wire**: `GET /merchants/{merchantId}/terminalOrders`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalOrdersResponse`
- **Error**: `TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `customerOrderReference` | `query` | `string` | no |
| `status` | `query` | `string` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalOrdersResponse` | `terminalOrdersResponseSchema` | `src/models/terminal-orders-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdTerminalOrdersOrderId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdTerminalOrdersOrderId(request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersOrderIdRequest, options?: RequestOptions): ApiPromise<TerminalOrder, TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersOrderIdError>`
- **Wire**: `GET /merchants/{merchantId}/terminalOrders/{orderId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalOrder`
- **Error**: `TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersOrderIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalOrdersOrderIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `orderId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalOrder` | `terminalOrderSchema` | `src/models/terminal-order.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdTerminalProducts

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdTerminalProducts(request: TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalProductsRequest, options?: RequestOptions): ApiPromise<TerminalProductsResponse, TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalProductsError>`
- **Wire**: `GET /merchants/{merchantId}/terminalProducts`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalProductsResponse`
- **Error**: `TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalProductsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersMerchantLevel.GetMerchantsMerchantIdTerminalProductsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `country` | `query` | `string` | yes |
| `terminalModelId` | `query` | `string` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalProductsResponse` | `terminalProductsResponseSchema` | `src/models/terminal-products-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchMerchantsMerchantIdTerminalOrdersOrderId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchMerchantsMerchantIdTerminalOrdersOrderId(request: TerminalOrdersMerchantLevel.PatchMerchantsMerchantIdTerminalOrdersOrderIdRequest, options?: RequestOptions): ApiPromise<TerminalOrder, TerminalOrdersMerchantLevel.PatchMerchantsMerchantIdTerminalOrdersOrderIdError>`
- **Wire**: `PATCH /merchants/{merchantId}/terminalOrders/{orderId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TerminalOrder`
- **Error**: `TerminalOrdersMerchantLevel.PatchMerchantsMerchantIdTerminalOrdersOrderIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersMerchantLevel.PatchMerchantsMerchantIdTerminalOrdersOrderIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `orderId` | `path` | `string` | yes |
| `body` | `body` | `TerminalOrderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalOrderRequest` | `terminalOrderRequestSchema` | `src/models/terminal-order-request.ts` |
| `TerminalOrder` | `terminalOrderSchema` | `src/models/terminal-order.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchantsMerchantIdShippingLocations

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdShippingLocations(request: TerminalOrdersMerchantLevel.PostMerchantsMerchantIdShippingLocationsRequest, options?: RequestOptions): ApiPromise<ShippingLocation, TerminalOrdersMerchantLevel.PostMerchantsMerchantIdShippingLocationsError>`
- **Wire**: `POST /merchants/{merchantId}/shippingLocations`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ShippingLocation`
- **Error**: `TerminalOrdersMerchantLevel.PostMerchantsMerchantIdShippingLocationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersMerchantLevel.PostMerchantsMerchantIdShippingLocationsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `body` | `body` | `ShippingLocation` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShippingLocation` | `shippingLocationSchema` | `src/models/shipping-location.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchantsMerchantIdTerminalOrders

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdTerminalOrders(request: TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersRequest, options?: RequestOptions): ApiPromise<TerminalOrder, TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersError>`
- **Wire**: `POST /merchants/{merchantId}/terminalOrders`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TerminalOrder`
- **Error**: `TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `body` | `body` | `TerminalOrderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalOrderRequest` | `terminalOrderRequestSchema` | `src/models/terminal-order-request.ts` |
| `TerminalOrder` | `terminalOrderSchema` | `src/models/terminal-order.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchantsMerchantIdTerminalOrdersOrderIdCancel

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdTerminalOrdersOrderIdCancel(request: TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelRequest, options?: RequestOptions): ApiPromise<TerminalOrder, TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelError>`
- **Wire**: `POST /merchants/{merchantId}/terminalOrders/{orderId}/cancel`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalOrder`
- **Error**: `TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersMerchantLevel.PostMerchantsMerchantIdTerminalOrdersOrderIdCancelRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `orderId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalOrder` | `terminalOrderSchema` | `src/models/terminal-order.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

