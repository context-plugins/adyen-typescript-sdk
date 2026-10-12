<!-- Generated file — do not edit; regenerated with the SDK. -->

# CardOrders — operations

Accessor: `client.cardOrders` · Source: `src/resources/card-orders.ts` · 2 operations · Request and error types: namespace `CardOrders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCardorders

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCardorders(request: CardOrders.GetCardordersRequest, options?: RequestOptions): ApiPromise<PaginatedGetCardOrderResponse, CardOrders.GetCardordersError>`
- **Wire**: `GET /cardorders`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedGetCardOrderResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `CardOrders.GetCardordersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [401] `RestServiceError` · `"restServiceError2"` [403] `RestServiceError` · `"restServiceError3"` [422] `RestServiceError` · `"restServiceError4"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CardOrders.GetCardordersRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `query` | `string` | no |
| `cardManufacturingProfileId` | `query` | `string` | no |
| `status` | `query` | `string` | no |
| `txVariantCode` | `query` | `string` | no |
| `createdSince` | `query` | `Date` (date-time) | no |
| `createdUntil` | `query` | `Date` (date-time) | no |
| `lockedSince` | `query` | `Date` (date-time) | no |
| `lockedUntil` | `query` | `Date` (date-time) | no |
| `serviceCenter` | `query` | `string` | no |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedGetCardOrderResponse` | `paginatedGetCardOrderResponseSchema` | `src/models/paginated-get-card-order-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCardordersIdItems

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCardordersIdItems(request: CardOrders.GetCardordersIdItemsRequest, options?: RequestOptions): ApiPromise<PaginatedGetCardOrderItemResponse, CardOrders.GetCardordersIdItemsError>`
- **Wire**: `GET /cardorders/{id}/items`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedGetCardOrderItemResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `CardOrders.GetCardordersIdItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [401] `RestServiceError` · `"restServiceError2"` [403] `RestServiceError` · `"restServiceError3"` [422] `RestServiceError` · `"restServiceError4"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CardOrders.GetCardordersIdItemsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedGetCardOrderItemResponse` | `paginatedGetCardOrderItemResponseSchema` | `src/models/paginated-get-card-order-item-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

