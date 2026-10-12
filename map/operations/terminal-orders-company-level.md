<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalOrdersCompanyLevel — operations

Accessor: `client.terminalOrdersCompanyLevel` · Source: `src/resources/terminal-orders-company-level.ts` · 10 operations · Request and error types: namespace `TerminalOrdersCompanyLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCompaniesCompanyIdBillingEntities

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdBillingEntities(request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdBillingEntitiesRequest, options?: RequestOptions): ApiPromise<BillingEntitiesResponse, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdBillingEntitiesError>`
- **Wire**: `GET /companies/{companyId}/billingEntities`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BillingEntitiesResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalOrdersCompanyLevel.GetCompaniesCompanyIdBillingEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersCompanyLevel.GetCompaniesCompanyIdBillingEntitiesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `name` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillingEntitiesResponse` | `billingEntitiesResponseSchema` | `src/models/billing-entities-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyIdShippingLocations

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdShippingLocations(request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdShippingLocationsRequest, options?: RequestOptions): ApiPromise<ShippingLocationsResponse, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdShippingLocationsError>`
- **Wire**: `GET /companies/{companyId}/shippingLocations`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ShippingLocationsResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalOrdersCompanyLevel.GetCompaniesCompanyIdShippingLocationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersCompanyLevel.GetCompaniesCompanyIdShippingLocationsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `name` | `query` | `string` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShippingLocationsResponse` | `shippingLocationsResponseSchema` | `src/models/shipping-locations-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyIdTerminalModels

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdTerminalModels(request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalModelsRequest, options?: RequestOptions): ApiPromise<TerminalModelsResponse, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalModelsError>`
- **Wire**: `GET /companies/{companyId}/terminalModels`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalModelsResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalModelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalModelsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalModelsResponse` | `terminalModelsResponseSchema` | `src/models/terminal-models-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyIdTerminalOrders

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdTerminalOrders(request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersRequest, options?: RequestOptions): ApiPromise<TerminalOrdersResponse, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersError>`
- **Wire**: `GET /companies/{companyId}/terminalOrders`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalOrdersResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `customerOrderReference` | `query` | `string` | no |
| `status` | `query` | `string` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalOrdersResponse` | `terminalOrdersResponseSchema` | `src/models/terminal-orders-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyIdTerminalOrdersOrderId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdTerminalOrdersOrderId(request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersOrderIdRequest, options?: RequestOptions): ApiPromise<TerminalOrder, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersOrderIdError>`
- **Wire**: `GET /companies/{companyId}/terminalOrders/{orderId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalOrder`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersOrderIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalOrdersOrderIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `orderId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalOrder` | `terminalOrderSchema` | `src/models/terminal-order.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyIdTerminalProducts

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdTerminalProducts(request: TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalProductsRequest, options?: RequestOptions): ApiPromise<TerminalProductsResponse, TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalProductsError>`
- **Wire**: `GET /companies/{companyId}/terminalProducts`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalProductsResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalProductsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersCompanyLevel.GetCompaniesCompanyIdTerminalProductsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `country` | `query` | `string` | yes |
| `terminalModelId` | `query` | `string` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalProductsResponse` | `terminalProductsResponseSchema` | `src/models/terminal-products-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchCompaniesCompanyIdTerminalOrdersOrderId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchCompaniesCompanyIdTerminalOrdersOrderId(request: TerminalOrdersCompanyLevel.PatchCompaniesCompanyIdTerminalOrdersOrderIdRequest, options?: RequestOptions): ApiPromise<TerminalOrder, TerminalOrdersCompanyLevel.PatchCompaniesCompanyIdTerminalOrdersOrderIdError>`
- **Wire**: `PATCH /companies/{companyId}/terminalOrders/{orderId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TerminalOrder`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalOrdersCompanyLevel.PatchCompaniesCompanyIdTerminalOrdersOrderIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersCompanyLevel.PatchCompaniesCompanyIdTerminalOrdersOrderIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `orderId` | `path` | `string` | yes |
| `body` | `body` | `TerminalOrderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalOrderRequest` | `terminalOrderRequestSchema` | `src/models/terminal-order-request.ts` |
| `TerminalOrder` | `terminalOrderSchema` | `src/models/terminal-order.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postCompaniesCompanyIdShippingLocations

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCompaniesCompanyIdShippingLocations(request: TerminalOrdersCompanyLevel.PostCompaniesCompanyIdShippingLocationsRequest, options?: RequestOptions): ApiPromise<ShippingLocation, TerminalOrdersCompanyLevel.PostCompaniesCompanyIdShippingLocationsError>`
- **Wire**: `POST /companies/{companyId}/shippingLocations`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ShippingLocation`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalOrdersCompanyLevel.PostCompaniesCompanyIdShippingLocationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersCompanyLevel.PostCompaniesCompanyIdShippingLocationsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `body` | `body` | `ShippingLocation` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShippingLocation` | `shippingLocationSchema` | `src/models/shipping-location.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postCompaniesCompanyIdTerminalOrders

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCompaniesCompanyIdTerminalOrders(request: TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersRequest, options?: RequestOptions): ApiPromise<TerminalOrder, TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersError>`
- **Wire**: `POST /companies/{companyId}/terminalOrders`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TerminalOrder`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `body` | `body` | `TerminalOrderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalOrderRequest` | `terminalOrderRequestSchema` | `src/models/terminal-order-request.ts` |
| `TerminalOrder` | `terminalOrderSchema` | `src/models/terminal-order.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postCompaniesCompanyIdTerminalOrdersOrderIdCancel

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCompaniesCompanyIdTerminalOrdersOrderIdCancel(request: TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelRequest, options?: RequestOptions): ApiPromise<TerminalOrder, TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelError>`
- **Wire**: `POST /companies/{companyId}/terminalOrders/{orderId}/cancel`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TerminalOrder`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalOrdersCompanyLevel.PostCompaniesCompanyIdTerminalOrdersOrderIdCancelRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `orderId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalOrder` | `terminalOrderSchema` | `src/models/terminal-order.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

