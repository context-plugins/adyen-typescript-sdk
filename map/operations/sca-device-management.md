<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScaDeviceManagement — operations

Accessor: `client.scaDeviceManagement` · Source: `src/resources/sca-device-management.ts` · 4 operations · Request and error types: namespace `ScaDeviceManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteScaDevicesDeviceId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteScaDevicesDeviceId(request: ScaDeviceManagement.DeleteScaDevicesDeviceIdRequest, options?: RequestOptions): ApiPromise<undefined, ScaDeviceManagement.DeleteScaDevicesDeviceIdError>`
- **Wire**: `DELETE /scaDevices/{deviceId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `ScaDeviceManagement.DeleteScaDevicesDeviceIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity6"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScaDeviceManagement.DeleteScaDevicesDeviceIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `deviceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### patchScaDevicesDeviceId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchScaDevicesDeviceId(request: ScaDeviceManagement.PatchScaDevicesDeviceIdRequest, options?: RequestOptions): ApiPromise<FinishScaDeviceRegistrationResponse, ScaDeviceManagement.PatchScaDevicesDeviceIdError>`
- **Wire**: `PATCH /scaDevices/{deviceId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FinishScaDeviceRegistrationResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `ScaDeviceManagement.PatchScaDevicesDeviceIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity6"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScaDeviceManagement.PatchScaDevicesDeviceIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `deviceId` | `path` | `string` | yes |
| `body` | `body` | `FinishScaDeviceRegistrationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FinishScaDeviceRegistrationRequest` | `finishScaDeviceRegistrationRequestSchema` | `src/models/finish-sca-device-registration-request.ts` |
| `FinishScaDeviceRegistrationResponse` | `finishScaDeviceRegistrationResponseSchema` | `src/models/finish-sca-device-registration-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postScaDevices

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postScaDevices(request: ScaDeviceManagement.PostScaDevicesRequest, options?: RequestOptions): ApiPromise<BeginScaDeviceRegistrationResponse, ScaDeviceManagement.PostScaDevicesError>`
- **Wire**: `POST /scaDevices`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BeginScaDeviceRegistrationResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `ScaDeviceManagement.PostScaDevicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScaDeviceManagement.PostScaDevicesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BeginScaDeviceRegistrationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BeginScaDeviceRegistrationRequest` | `beginScaDeviceRegistrationRequestSchema` | `src/models/begin-sca-device-registration-request.ts` |
| `BeginScaDeviceRegistrationResponse` | `beginScaDeviceRegistrationResponseSchema` | `src/models/begin-sca-device-registration-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postScaDevicesDeviceIdScaAssociations

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postScaDevicesDeviceIdScaAssociations(request: ScaDeviceManagement.PostScaDevicesDeviceIdScaAssociationsRequest, options?: RequestOptions): ApiPromise<SubmitScaAssociationResponse, ScaDeviceManagement.PostScaDevicesDeviceIdScaAssociationsError>`
- **Wire**: `POST /scaDevices/{deviceId}/scaAssociations`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubmitScaAssociationResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `ScaDeviceManagement.PostScaDevicesDeviceIdScaAssociationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity6"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ScaDeviceManagement.PostScaDevicesDeviceIdScaAssociationsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `deviceId` | `path` | `string` | yes |
| `body` | `body` | `SubmitScaAssociationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubmitScaAssociationRequest` | `submitScaAssociationRequestSchema` | `src/models/submit-sca-association-request.ts` |
| `SubmitScaAssociationResponse` | `submitScaAssociationResponseSchema` | `src/models/submit-sca-association-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

