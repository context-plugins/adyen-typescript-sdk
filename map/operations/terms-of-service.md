<!-- Generated file — do not edit; regenerated with the SDK. -->

# TermsOfService — operations

Accessor: `client.termsOfService` · Source: `src/resources/terms-of-service.ts` · 5 operations · Request and error types: namespace `TermsOfService`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference(request: TermsOfService.GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceRequest, options?: RequestOptions): ApiPromise<GetAcceptedTermsOfServiceDocumentResponse, TermsOfService.GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceError>`
- **Wire**: `GET /legalEntities/{id}/acceptedTermsOfServiceDocument/{termsofserviceacceptancereference}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetAcceptedTermsOfServiceDocumentResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TermsOfService.GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TermsOfService.GetLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `termsofserviceacceptancereference` | `path` | `string` | yes |
| `termsOfServiceDocumentFormat` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetAcceptedTermsOfServiceDocumentResponse` | `getAcceptedTermsOfServiceDocumentResponseSchema` | `src/models/get-accepted-terms-of-service-document-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### getLegalEntitiesIdTermsOfServiceAcceptanceInfos

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getLegalEntitiesIdTermsOfServiceAcceptanceInfos(request: TermsOfService.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosRequest, options?: RequestOptions): ApiPromise<GetTermsOfServiceAcceptanceInfosResponse, TermsOfService.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError>`
- **Wire**: `GET /legalEntities/{id}/termsOfServiceAcceptanceInfos`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetTermsOfServiceAcceptanceInfosResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TermsOfService.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TermsOfService.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTermsOfServiceAcceptanceInfosResponse` | `getTermsOfServiceAcceptanceInfosResponseSchema` | `src/models/get-terms-of-service-acceptance-infos-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### getLegalEntitiesIdTermsOfServiceStatus

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getLegalEntitiesIdTermsOfServiceStatus(request: TermsOfService.GetLegalEntitiesIdTermsOfServiceStatusRequest, options?: RequestOptions): ApiPromise<CalculateTermsOfServiceStatusResponse, TermsOfService.GetLegalEntitiesIdTermsOfServiceStatusError>`
- **Wire**: `GET /legalEntities/{id}/termsOfServiceStatus`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CalculateTermsOfServiceStatusResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TermsOfService.GetLegalEntitiesIdTermsOfServiceStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TermsOfService.GetLegalEntitiesIdTermsOfServiceStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CalculateTermsOfServiceStatusResponse` | `calculateTermsOfServiceStatusResponseSchema` | `src/models/calculate-terms-of-service-status-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid(request: TermsOfService.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRequest, options?: RequestOptions): ApiPromise<AcceptTermsOfServiceResponse, TermsOfService.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidError>`
- **Wire**: `PATCH /legalEntities/{id}/termsOfService/{termsofservicedocumentid}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AcceptTermsOfServiceResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TermsOfService.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TermsOfService.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `termsofservicedocumentid` | `path` | `string` | yes |
| `body` | `body` | `AcceptTermsOfServiceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AcceptTermsOfServiceRequest` | `acceptTermsOfServiceRequestSchema` | `src/models/accept-terms-of-service-request.ts` |
| `AcceptTermsOfServiceResponse` | `acceptTermsOfServiceResponseSchema` | `src/models/accept-terms-of-service-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postLegalEntitiesIdTermsOfService

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postLegalEntitiesIdTermsOfService(request: TermsOfService.PostLegalEntitiesIdTermsOfServiceRequest, options?: RequestOptions): ApiPromise<GetTermsOfServiceDocumentResponse, TermsOfService.PostLegalEntitiesIdTermsOfServiceError>`
- **Wire**: `POST /legalEntities/{id}/termsOfService`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetTermsOfServiceDocumentResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TermsOfService.PostLegalEntitiesIdTermsOfServiceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TermsOfService.PostLegalEntitiesIdTermsOfServiceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `GetTermsOfServiceDocumentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTermsOfServiceDocumentRequest` | `getTermsOfServiceDocumentRequestSchema` | `src/models/get-terms-of-service-document-request.ts` |
| `GetTermsOfServiceDocumentResponse` | `getTermsOfServiceDocumentResponseSchema` | `src/models/get-terms-of-service-document-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

