<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransferInstruments — operations

Accessor: `client.transferInstruments` · Source: `src/resources/transfer-instruments.ts` · 4 operations · Request and error types: namespace `TransferInstruments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteTransferInstrumentsId

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteTransferInstrumentsId(request: TransferInstruments.DeleteTransferInstrumentsIdRequest, options?: RequestOptions): ApiPromise<undefined, TransferInstruments.DeleteTransferInstrumentsIdError>`
- **Wire**: `DELETE /transferInstruments/{id}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TransferInstruments.DeleteTransferInstrumentsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferInstruments.DeleteTransferInstrumentsIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### getTransferInstrumentsId

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getTransferInstrumentsId(request: TransferInstruments.GetTransferInstrumentsIdRequest, options?: RequestOptions): ApiPromise<TransferInstrument, TransferInstruments.GetTransferInstrumentsIdError>`
- **Wire**: `GET /transferInstruments/{id}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransferInstrument`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TransferInstruments.GetTransferInstrumentsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferInstruments.GetTransferInstrumentsIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferInstrument` | `transferInstrumentSchema` | `src/models/transfer-instrument.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### patchTransferInstrumentsId

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchTransferInstrumentsId(request: TransferInstruments.PatchTransferInstrumentsIdRequest, options?: RequestOptions): ApiPromise<TransferInstrument, TransferInstruments.PatchTransferInstrumentsIdError>`
- **Wire**: `PATCH /transferInstruments/{id}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferInstrument`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TransferInstruments.PatchTransferInstrumentsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferInstruments.PatchTransferInstrumentsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xRequestedVerificationCode` | `header` | `x-requested-verification-code` | `string` | no |
| `body` | `body` | — | `TransferInstrumentInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferInstrumentInfo` | `transferInstrumentInfoSchema` | `src/models/transfer-instrument-info.ts` |
| `TransferInstrument` | `transferInstrumentSchema` | `src/models/transfer-instrument.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postTransferInstruments

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postTransferInstruments(request: TransferInstruments.PostTransferInstrumentsRequest, options?: RequestOptions): ApiPromise<TransferInstrument, TransferInstruments.PostTransferInstrumentsError>`
- **Wire**: `POST /transferInstruments`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferInstrument`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TransferInstruments.PostTransferInstrumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferInstruments.PostTransferInstrumentsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xRequestedVerificationCode` | `header` | `x-requested-verification-code` | `string` | no |
| `body` | `body` | — | `TransferInstrumentInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferInstrumentInfo` | `transferInstrumentInfoSchema` | `src/models/transfer-instrument-info.ts` |
| `TransferInstrument` | `transferInstrumentSchema` | `src/models/transfer-instrument.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

