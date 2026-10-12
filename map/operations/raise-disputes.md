<!-- Generated file — do not edit; regenerated with the SDK. -->

# RaiseDisputes — operations

Accessor: `client.raiseDisputes` · Source: `src/resources/raise-disputes.ts` · 4 operations · Request and error types: namespace `RaiseDisputes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getDisputes

- **Server**: `default23` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getDisputes(request: RaiseDisputes.GetDisputesRequest, options?: RequestOptions): ApiPromise<DisputeResponse[][], RaiseDisputes.GetDisputesError>`
- **Wire**: `GET /disputes`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DisputeResponse[][]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AdyenError` with `kind: "api"`, an instance of `RaiseDisputes.GetDisputesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RaiseDisputes.GetDisputesRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `status` | `query` | `string` | no |
| `paymentInstrument` | `query` | `string` | no |
| `createdSince` | `query` | `string` | no |
| `createdUntil` | `query` | `string` | no |
| `offset` | `query` | `string` | no |
| `limit` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisputeResponse` | `disputeResponseSchema` | `src/models/dispute-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getDisputesId

- **Server**: `default23` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getDisputesId(request: RaiseDisputes.GetDisputesIdRequest, options?: RequestOptions): ApiPromise<DisputeResponse, RaiseDisputes.GetDisputesIdError>`
- **Wire**: `GET /disputes/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DisputeResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `RaiseDisputes.GetDisputesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RaiseDisputes.GetDisputesIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisputeResponse` | `disputeResponseSchema` | `src/models/dispute-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### patchDisputesId

- **Server**: `default23` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchDisputesId(request: RaiseDisputes.PatchDisputesIdRequest, options?: RequestOptions): ApiPromise<DisputeResponse, RaiseDisputes.PatchDisputesIdError>`
- **Wire**: `PATCH /disputes/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DisputeResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `RaiseDisputes.PatchDisputesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RaiseDisputes.PatchDisputesIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PatchableDisputeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PatchableDisputeRequest` | `patchableDisputeRequestSchema` | `src/models/patchable-dispute-request.ts` |
| `DisputeResponse` | `disputeResponseSchema` | `src/models/dispute-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postDisputes

- **Server**: `default23` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDisputes(request: RaiseDisputes.PostDisputesRequest, options?: RequestOptions): ApiPromise<DisputeResponse, RaiseDisputes.PostDisputesError>`
- **Wire**: `POST /disputes`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DisputeResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `RaiseDisputes.PostDisputesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RaiseDisputes.PostDisputesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DisputeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisputeRequest` | `disputeRequestSchema` | `src/models/dispute-request.ts` |
| `DisputeResponse` | `disputeResponseSchema` | `src/models/dispute-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

