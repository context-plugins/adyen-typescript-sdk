<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransferRoutes — operations

Accessor: `client.transferRoutes` · Source: `src/resources/transfer-routes.ts` · 1 operation · Request and error types: namespace `TransferRoutes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### postTransferRoutesCalculate

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postTransferRoutesCalculate(request: TransferRoutes.PostTransferRoutesCalculateRequest, options?: RequestOptions): ApiPromise<TransferRouteResponse, TransferRoutes.PostTransferRoutesCalculateError>`
- **Wire**: `POST /transferRoutes/calculate`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TransferRouteResponse`
- **Error**: `TransferRoutes.PostTransferRoutesCalculateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [401] `RestServiceError` · `"restServiceError2"` [403] `RestServiceError` · `"restServiceError3"` [422] `RestServiceError` · `"restServiceError4"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferRoutes.PostTransferRoutesCalculateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferRouteRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferRouteRequest` | `transferRouteRequestSchema` | `src/models/transfer-route-request.ts` |
| `TransferRouteResponse` | `transferRouteResponseSchema` | `src/models/transfer-route-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

