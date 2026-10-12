<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.documents` · Source: `src/resources/documents.ts` · 4 operations · Request and error types: namespace `Documents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteDocumentsId

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteDocumentsId(request: Documents.DeleteDocumentsIdRequest, options?: RequestOptions): ApiPromise<undefined, Documents.DeleteDocumentsIdError>`
- **Wire**: `DELETE /documents/{id}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Documents.DeleteDocumentsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.DeleteDocumentsIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### getDocumentsId

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getDocumentsId(request: Documents.GetDocumentsIdRequest, options?: RequestOptions): ApiPromise<Document, Documents.GetDocumentsIdError>`
- **Wire**: `GET /documents/{id}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Document`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Documents.GetDocumentsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.GetDocumentsIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `skipContent` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Document` | `documentSchema` | `src/models/document.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### patchDocumentsId

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchDocumentsId(request: Documents.PatchDocumentsIdRequest, options?: RequestOptions): ApiPromise<Document, Documents.PatchDocumentsIdError>`
- **Wire**: `PATCH /documents/{id}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Document`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Documents.PatchDocumentsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.PatchDocumentsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xRequestedVerificationCode` | `header` | `x-requested-verification-code` | `string` | no |
| `body` | `body` | — | `Document` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Document` | `documentSchema` | `src/models/document.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postDocuments

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDocuments(request: Documents.PostDocumentsRequest, options?: RequestOptions): ApiPromise<Document, Documents.PostDocumentsError>`
- **Wire**: `POST /documents`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Document`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Documents.PostDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.PostDocumentsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xRequestedVerificationCode` | `header` | `x-requested-verification-code` | `string` | no |
| `body` | `body` | — | `Document` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Document` | `documentSchema` | `src/models/document.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

