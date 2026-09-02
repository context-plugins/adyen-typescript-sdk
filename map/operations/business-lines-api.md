<!-- Generated file — do not edit; regenerated with the SDK. -->

# BusinessLinesApi — operations

Accessor: `client.businessLinesApi` · Source: `src/resources/business-lines-api.ts` · 4 operations · Request and error types: namespace `BusinessLinesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteBusinessLinesId

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBusinessLinesId(request: BusinessLinesApi.DeleteBusinessLinesIdRequest, options?: RequestOptions): ApiPromise<undefined, BusinessLinesApi.DeleteBusinessLinesIdError>`
- **Wire**: `DELETE /businessLines/{id}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BusinessLinesApi.DeleteBusinessLinesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BusinessLinesApi.DeleteBusinessLinesIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### getBusinessLinesId

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBusinessLinesId(request: BusinessLinesApi.GetBusinessLinesIdRequest, options?: RequestOptions): ApiPromise<BusinessLine, BusinessLinesApi.GetBusinessLinesIdError>`
- **Wire**: `GET /businessLines/{id}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BusinessLine`
- **Error**: `BusinessLinesApi.GetBusinessLinesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BusinessLinesApi.GetBusinessLinesIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BusinessLine` | `businessLineSchema` | `src/models/business-line.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### patchBusinessLinesId

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchBusinessLinesId(request: BusinessLinesApi.PatchBusinessLinesIdRequest, options?: RequestOptions): ApiPromise<BusinessLine, BusinessLinesApi.PatchBusinessLinesIdError>`
- **Wire**: `PATCH /businessLines/{id}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `BusinessLine`
- **Error**: `BusinessLinesApi.PatchBusinessLinesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BusinessLinesApi.PatchBusinessLinesIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `BusinessLineInfoUpdate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BusinessLineInfoUpdate` | `businessLineInfoUpdateSchema` | `src/models/business-line-info-update.ts` |
| `BusinessLine` | `businessLineSchema` | `src/models/business-line.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postBusinessLines

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postBusinessLines(request: BusinessLinesApi.PostBusinessLinesRequest, options?: RequestOptions): ApiPromise<BusinessLine, BusinessLinesApi.PostBusinessLinesError>`
- **Wire**: `POST /businessLines`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `BusinessLine`
- **Error**: `BusinessLinesApi.PostBusinessLinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BusinessLinesApi.PostBusinessLinesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BusinessLineInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BusinessLineInfo` | `businessLineInfoSchema` | `src/models/business-line-info.ts` |
| `BusinessLine` | `businessLineSchema` | `src/models/business-line.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

