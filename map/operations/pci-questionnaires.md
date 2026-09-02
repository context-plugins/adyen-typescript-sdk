<!-- Generated file — do not edit; regenerated with the SDK. -->

# PciQuestionnaires — operations

Accessor: `client.pciQuestionnaires` · Source: `src/resources/pci-questionnaires.ts` · 5 operations · Request and error types: namespace `PciQuestionnaires`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getLegalEntitiesIdPciQuestionnaires

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getLegalEntitiesIdPciQuestionnaires(request: PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesRequest, options?: RequestOptions): ApiPromise<GetPciQuestionnaireInfosResponse, PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesError>`
- **Wire**: `GET /legalEntities/{id}/pciQuestionnaires`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetPciQuestionnaireInfosResponse`
- **Error**: `PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetPciQuestionnaireInfosResponse` | `getPciQuestionnaireInfosResponseSchema` | `src/models/get-pci-questionnaire-infos-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### getLegalEntitiesIdPciQuestionnairesPciid

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getLegalEntitiesIdPciQuestionnairesPciid(request: PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesPciidRequest, options?: RequestOptions): ApiPromise<GetPciQuestionnaireResponse, PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesPciidError>`
- **Wire**: `GET /legalEntities/{id}/pciQuestionnaires/{pciid}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetPciQuestionnaireResponse`
- **Error**: `PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesPciidError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PciQuestionnaires.GetLegalEntitiesIdPciQuestionnairesPciidRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `pciid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetPciQuestionnaireResponse` | `getPciQuestionnaireResponseSchema` | `src/models/get-pci-questionnaire-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postLegalEntitiesIdPciQuestionnairesGeneratePciTemplates

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postLegalEntitiesIdPciQuestionnairesGeneratePciTemplates(request: PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRequest, options?: RequestOptions): ApiPromise<GeneratePciDescriptionResponse, PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesError>`
- **Wire**: `POST /legalEntities/{id}/pciQuestionnaires/generatePciTemplates`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GeneratePciDescriptionResponse`
- **Error**: `PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `GeneratePciDescriptionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeneratePciDescriptionRequest` | `generatePciDescriptionRequestSchema` | `src/models/generate-pci-description-request.ts` |
| `GeneratePciDescriptionResponse` | `generatePciDescriptionResponseSchema` | `src/models/generate-pci-description-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postLegalEntitiesIdPciQuestionnairesSignPciTemplates

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postLegalEntitiesIdPciQuestionnairesSignPciTemplates(request: PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesRequest, options?: RequestOptions): ApiPromise<PciSigningResponse, PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesError>`
- **Wire**: `POST /legalEntities/{id}/pciQuestionnaires/signPciTemplates`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PciSigningResponse`
- **Error**: `PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PciSigningRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PciSigningRequest` | `pciSigningRequestSchema` | `src/models/pci-signing-request.ts` |
| `PciSigningResponse` | `pciSigningResponseSchema` | `src/models/pci-signing-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postLegalEntitiesIdPciQuestionnairesSigningRequired

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postLegalEntitiesIdPciQuestionnairesSigningRequired(request: PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSigningRequiredRequest, options?: RequestOptions): ApiPromise<CalculatePciStatusResponse, PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSigningRequiredError>`
- **Wire**: `POST /legalEntities/{id}/pciQuestionnaires/signingRequired`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CalculatePciStatusResponse`
- **Error**: `PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSigningRequiredError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PciQuestionnaires.PostLegalEntitiesIdPciQuestionnairesSigningRequiredRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `CalculatePciStatusRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CalculatePciStatusRequest` | `calculatePciStatusRequestSchema` | `src/models/calculate-pci-status-request.ts` |
| `CalculatePciStatusResponse` | `calculatePciStatusResponseSchema` | `src/models/calculate-pci-status-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

