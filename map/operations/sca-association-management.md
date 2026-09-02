<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScaAssociationManagement — operations

Accessor: `client.scaAssociationManagement` · Source: `src/resources/sca-association-management.ts` · 3 operations · Request and error types: namespace `ScaAssociationManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteScaAssociations

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteScaAssociations(request: ScaAssociationManagement.DeleteScaAssociationsRequest, options?: RequestOptions): ApiPromise<undefined, ScaAssociationManagement.DeleteScaAssociationsError>`
- **Wire**: `DELETE /scaAssociations`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ScaAssociationManagement.DeleteScaAssociationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScaAssociationManagement.DeleteScaAssociationsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wwwAuthenticate` | `header` | `WWW-Authenticate` | `string` | yes |
| `body` | `body` | — | `RemoveAssociationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RemoveAssociationRequest` | `removeAssociationRequestSchema` | `src/models/remove-association-request.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getScaAssociations

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getScaAssociations(request: ScaAssociationManagement.GetScaAssociationsRequest, options?: RequestOptions): ApiPromise<ListAssociationsResponse, ScaAssociationManagement.GetScaAssociationsError>`
- **Wire**: `GET /scaAssociations`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAssociationsResponse`
- **Error**: `ScaAssociationManagement.GetScaAssociationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScaAssociationManagement.GetScaAssociationsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `entityType` | `query` | `ScaEntityType` | yes |
| `entityId` | `query` | `string` | yes |
| `pageSize` | `query` | `number` | yes |
| `pageNumber` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScaEntityType` | `scaEntityTypeSchema` | `src/models/sca-entity-type.ts` |
| `ListAssociationsResponse` | `listAssociationsResponseSchema` | `src/models/list-associations-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### patchScaAssociations

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchScaAssociations(request: ScaAssociationManagement.PatchScaAssociationsRequest, options?: RequestOptions): ApiPromise<ApproveAssociationResponse, ScaAssociationManagement.PatchScaAssociationsError>`
- **Wire**: `PATCH /scaAssociations`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ApproveAssociationResponse`
- **Error**: `ScaAssociationManagement.PatchScaAssociationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScaAssociationManagement.PatchScaAssociationsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `wwwAuthenticate` | `header` | `WWW-Authenticate` | `string` | yes |
| `body` | `body` | — | `ApproveAssociationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApproveAssociationRequest` | `approveAssociationRequestSchema` | `src/models/approve-association-request.ts` |
| `ApproveAssociationResponse` | `approveAssociationResponseSchema` | `src/models/approve-association-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

