<!-- Generated file — do not edit; regenerated with the SDK. -->

# Initialization — operations

Accessor: `client.initialization` · Source: `src/resources/initialization.ts` · 3 operations · Request and error types: namespace `Initialization`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### postStoreDetail

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postStoreDetail(request: Initialization.PostStoreDetailRequest, options?: RequestOptions): ApiPromise<StoreDetailResponse, Initialization.PostStoreDetailError>`
- **Wire**: `POST /storeDetail`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `StoreDetailResponse`
- **Error**: `Initialization.PostStoreDetailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Initialization.PostStoreDetailRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StoreDetailRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoreDetailRequest` | `storeDetailRequestSchema` | `src/models/store-detail-request.ts` |
| `StoreDetailResponse` | `storeDetailResponseSchema` | `src/models/store-detail-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postStoreDetailAndSubmitThirdParty

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postStoreDetailAndSubmitThirdParty(request: Initialization.PostStoreDetailAndSubmitThirdPartyRequest, options?: RequestOptions): ApiPromise<StoreDetailAndSubmitResponse, Initialization.PostStoreDetailAndSubmitThirdPartyError>`
- **Wire**: `POST /storeDetailAndSubmitThirdParty`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `StoreDetailAndSubmitResponse`
- **Error**: `Initialization.PostStoreDetailAndSubmitThirdPartyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Initialization.PostStoreDetailAndSubmitThirdPartyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StoreDetailAndSubmitRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoreDetailAndSubmitRequest` | `storeDetailAndSubmitRequestSchema` | `src/models/store-detail-and-submit-request.ts` |
| `StoreDetailAndSubmitResponse` | `storeDetailAndSubmitResponseSchema` | `src/models/store-detail-and-submit-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postSubmitThirdParty

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postSubmitThirdParty(request: Initialization.PostSubmitThirdPartyRequest, options?: RequestOptions): ApiPromise<SubmitResponse, Initialization.PostSubmitThirdPartyError>`
- **Wire**: `POST /submitThirdParty`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SubmitResponse`
- **Error**: `Initialization.PostSubmitThirdPartyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Initialization.PostSubmitThirdPartyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SubmitRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubmitRequest` | `submitRequestSchema` | `src/models/submit-request.ts` |
| `SubmitResponse` | `submitResponseSchema` | `src/models/submit-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

