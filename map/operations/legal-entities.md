<!-- Generated file — do not edit; regenerated with the SDK. -->

# LegalEntities — operations

Accessor: `client.legalEntities` · Source: `src/resources/legal-entities.ts` · 7 operations · Request and error types: namespace `LegalEntities`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getLegalEntitiesId

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getLegalEntitiesId(request: LegalEntities.GetLegalEntitiesIdRequest, options?: RequestOptions): ApiPromise<LegalEntity3, LegalEntities.GetLegalEntitiesIdError>`
- **Wire**: `GET /legalEntities/{id}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LegalEntity3`
- **Error**: `LegalEntities.GetLegalEntitiesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LegalEntities.GetLegalEntitiesIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegalEntity3` | `legalEntity3Schema` | `src/models/legal-entity3.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### getLegalEntitiesIdBusinessLines

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getLegalEntitiesIdBusinessLines(request: LegalEntities.GetLegalEntitiesIdBusinessLinesRequest, options?: RequestOptions): ApiPromise<BusinessLines, LegalEntities.GetLegalEntitiesIdBusinessLinesError>`
- **Wire**: `GET /legalEntities/{id}/businessLines`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BusinessLines`
- **Error**: `LegalEntities.GetLegalEntitiesIdBusinessLinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LegalEntities.GetLegalEntitiesIdBusinessLinesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BusinessLines` | `businessLinesSchema` | `src/models/business-lines.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### patchLegalEntitiesId

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchLegalEntitiesId(request: LegalEntities.PatchLegalEntitiesIdRequest, options?: RequestOptions): ApiPromise<LegalEntity3, LegalEntities.PatchLegalEntitiesIdError>`
- **Wire**: `PATCH /legalEntities/{id}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `LegalEntity3`
- **Error**: `LegalEntities.PatchLegalEntitiesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LegalEntities.PatchLegalEntitiesIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xRequestedVerificationCode` | `header` | `x-requested-verification-code` | `string` | no |
| `body` | `body` | — | `LegalEntityInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegalEntityInfo` | `legalEntityInfoSchema` | `src/models/legal-entity-info.ts` |
| `LegalEntity3` | `legalEntity3Schema` | `src/models/legal-entity3.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postLegalEntities

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postLegalEntities(request: LegalEntities.PostLegalEntitiesRequest, options?: RequestOptions): ApiPromise<LegalEntity3, LegalEntities.PostLegalEntitiesError>`
- **Wire**: `POST /legalEntities`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `LegalEntity3`
- **Error**: `LegalEntities.PostLegalEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LegalEntities.PostLegalEntitiesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xRequestedVerificationCode` | `header` | `x-requested-verification-code` | `string` | no |
| `body` | `body` | — | `LegalEntityInfoRequiredType` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LegalEntityInfoRequiredType` | `legalEntityInfoRequiredTypeSchema` | `src/models/legal-entity-info-required-type.ts` |
| `LegalEntity3` | `legalEntity3Schema` | `src/models/legal-entity3.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postLegalEntitiesIdCheckVerificationErrors

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postLegalEntitiesIdCheckVerificationErrors(request: LegalEntities.PostLegalEntitiesIdCheckVerificationErrorsRequest, options?: RequestOptions): ApiPromise<VerificationErrors, LegalEntities.PostLegalEntitiesIdCheckVerificationErrorsError>`
- **Wire**: `POST /legalEntities/{id}/checkVerificationErrors`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerificationErrors`
- **Error**: `LegalEntities.PostLegalEntitiesIdCheckVerificationErrorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LegalEntities.PostLegalEntitiesIdCheckVerificationErrorsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerificationErrors` | `verificationErrorsSchema` | `src/models/verification-errors.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postLegalEntitiesIdConfirmDataReview

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postLegalEntitiesIdConfirmDataReview(request: LegalEntities.PostLegalEntitiesIdConfirmDataReviewRequest, options?: RequestOptions): ApiPromise<DataReviewConfirmationResponse, LegalEntities.PostLegalEntitiesIdConfirmDataReviewError>`
- **Wire**: `POST /legalEntities/{id}/confirmDataReview`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DataReviewConfirmationResponse`
- **Error**: `LegalEntities.PostLegalEntitiesIdConfirmDataReviewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LegalEntities.PostLegalEntitiesIdConfirmDataReviewRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataReviewConfirmationResponse` | `dataReviewConfirmationResponseSchema` | `src/models/data-review-confirmation-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postLegalEntitiesIdRequestPeriodicReview

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postLegalEntitiesIdRequestPeriodicReview(request: LegalEntities.PostLegalEntitiesIdRequestPeriodicReviewRequest, options?: RequestOptions): ApiPromise<unknown, ResponseError>`
- **Wire**: `POST /legalEntities/{id}/requestPeriodicReview`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `unknown` — a bare `application/json` unknown; the success type *is* the unknown
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LegalEntities.PostLegalEntitiesIdRequestPeriodicReviewRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

