<!-- Generated file — do not edit; regenerated with the SDK. -->

# DirectDebitMandates — operations

Accessor: `client.directDebitMandates` · Source: `src/resources/direct-debit-mandates.ts` · 4 operations · Request and error types: namespace `DirectDebitMandates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMandates

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMandates(request: DirectDebitMandates.GetMandatesRequest, options?: RequestOptions): ApiPromise<ListMandatesResponse, DirectDebitMandates.GetMandatesError>`
- **Wire**: `GET /mandates`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMandatesResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `DirectDebitMandates.GetMandatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DirectDebitMandates.GetMandatesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balanceAccountId` | `query` | `string` | no |
| `paymentInstrumentId` | `query` | `string` | no |
| `cursor` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListMandatesResponse` | `listMandatesResponseSchema` | `src/models/list-mandates-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getMandatesMandateId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMandatesMandateId(request: DirectDebitMandates.GetMandatesMandateIdRequest, options?: RequestOptions): ApiPromise<Mandate1, DirectDebitMandates.GetMandatesMandateIdError>`
- **Wire**: `GET /mandates/{mandateId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Mandate1`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `DirectDebitMandates.GetMandatesMandateIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DirectDebitMandates.GetMandatesMandateIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `mandateId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Mandate1` | `mandate1Schema` | `src/models/mandate1.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### patchMandatesMandateId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchMandatesMandateId(request: DirectDebitMandates.PatchMandatesMandateIdRequest, options?: RequestOptions): ApiPromise<undefined, DirectDebitMandates.PatchMandatesMandateIdError>`
- **Wire**: `PATCH /mandates/{mandateId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `DirectDebitMandates.PatchMandatesMandateIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DirectDebitMandates.PatchMandatesMandateIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `mandateId` | `path` | `string` | yes |
| `body` | `body` | `MandateUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MandateUpdate` | `mandateUpdateSchema` | `src/models/mandate-update.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postMandatesMandateIdCancel

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMandatesMandateIdCancel(request: DirectDebitMandates.PostMandatesMandateIdCancelRequest, options?: RequestOptions): ApiPromise<undefined, DirectDebitMandates.PostMandatesMandateIdCancelError>`
- **Wire**: `POST /mandates/{mandateId}/cancel`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `DirectDebitMandates.PostMandatesMandateIdCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DirectDebitMandates.PostMandatesMandateIdCancelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `mandateId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

