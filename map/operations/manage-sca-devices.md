<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageScaDevices — operations

Accessor: `client.manageScaDevices` · Source: `src/resources/manage-sca-devices.ts` · 6 operations · Request and error types: namespace `ManageScaDevices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteRegisteredDevicesId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteRegisteredDevicesId(request: ManageScaDevices.DeleteRegisteredDevicesIdRequest, options?: RequestOptions): ApiPromise<undefined, ManageScaDevices.DeleteRegisteredDevicesIdError>`
- **Wire**: `DELETE /registeredDevices/{id}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ManageScaDevices.DeleteRegisteredDevicesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageScaDevices.DeleteRegisteredDevicesIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `paymentInstrumentId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getRegisteredDevices

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getRegisteredDevices(request: ManageScaDevices.GetRegisteredDevicesRequest, options?: RequestOptions): ApiPromise<SearchRegisteredDevicesResponse, ManageScaDevices.GetRegisteredDevicesError>`
- **Wire**: `GET /registeredDevices`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchRegisteredDevicesResponse`
- **Error**: `ManageScaDevices.GetRegisteredDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageScaDevices.GetRegisteredDevicesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `paymentInstrumentId` | `query` | `string` | yes |
| `pageNumber` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchRegisteredDevicesResponse` | `searchRegisteredDevicesResponseSchema` | `src/models/search-registered-devices-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchRegisteredDevicesDeviceIdAssociations

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchRegisteredDevicesDeviceIdAssociations(request: ManageScaDevices.PatchRegisteredDevicesDeviceIdAssociationsRequest, options?: RequestOptions): ApiPromise<AssociationFinaliseResponse, ManageScaDevices.PatchRegisteredDevicesDeviceIdAssociationsError>`
- **Wire**: `PATCH /registeredDevices/{deviceId}/associations`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AssociationFinaliseResponse`
- **Error**: `ManageScaDevices.PatchRegisteredDevicesDeviceIdAssociationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageScaDevices.PatchRegisteredDevicesDeviceIdAssociationsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `deviceId` | `path` | `string` | yes |
| `body` | `body` | `AssociationFinaliseRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssociationFinaliseRequest` | `associationFinaliseRequestSchema` | `src/models/association-finalise-request.ts` |
| `AssociationFinaliseResponse` | `associationFinaliseResponseSchema` | `src/models/association-finalise-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchRegisteredDevicesId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchRegisteredDevicesId(request: ManageScaDevices.PatchRegisteredDevicesIdRequest, options?: RequestOptions): ApiPromise<RegisterScaFinalResponse, ManageScaDevices.PatchRegisteredDevicesIdError>`
- **Wire**: `PATCH /registeredDevices/{id}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RegisterScaFinalResponse`
- **Error**: `ManageScaDevices.PatchRegisteredDevicesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageScaDevices.PatchRegisteredDevicesIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `RegisterScaRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RegisterScaRequest` | `registerScaRequestSchema` | `src/models/register-sca-request.ts` |
| `RegisterScaFinalResponse` | `registerScaFinalResponseSchema` | `src/models/register-sca-final-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postRegisteredDevices

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postRegisteredDevices(request: ManageScaDevices.PostRegisteredDevicesRequest, options?: RequestOptions): ApiPromise<RegisterScaResponse, ManageScaDevices.PostRegisteredDevicesError>`
- **Wire**: `POST /registeredDevices`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RegisterScaResponse`
- **Error**: `ManageScaDevices.PostRegisteredDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageScaDevices.PostRegisteredDevicesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RegisterScaRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RegisterScaRequest` | `registerScaRequestSchema` | `src/models/register-sca-request.ts` |
| `RegisterScaResponse` | `registerScaResponseSchema` | `src/models/register-sca-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postRegisteredDevicesDeviceIdAssociations

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postRegisteredDevicesDeviceIdAssociations(request: ManageScaDevices.PostRegisteredDevicesDeviceIdAssociationsRequest, options?: RequestOptions): ApiPromise<AssociationInitiateResponse, ManageScaDevices.PostRegisteredDevicesDeviceIdAssociationsError>`
- **Wire**: `POST /registeredDevices/{deviceId}/associations`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AssociationInitiateResponse`
- **Error**: `ManageScaDevices.PostRegisteredDevicesDeviceIdAssociationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageScaDevices.PostRegisteredDevicesDeviceIdAssociationsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `deviceId` | `path` | `string` | yes |
| `body` | `body` | `AssociationInitiateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssociationInitiateRequest` | `associationInitiateRequestSchema` | `src/models/association-initiate-request.ts` |
| `AssociationInitiateResponse` | `associationInitiateResponseSchema` | `src/models/association-initiate-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

