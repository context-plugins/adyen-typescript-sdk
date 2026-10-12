<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalsTerminalLevel — operations

Accessor: `client.terminalsTerminalLevel` · Source: `src/resources/terminals-terminal-level.ts` · 2 operations · Request and error types: namespace `TerminalsTerminalLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTerminals

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getTerminals(request: TerminalsTerminalLevel.GetTerminalsRequest, options?: RequestOptions): ApiPromise<ListTerminalsResponse, TerminalsTerminalLevel.GetTerminalsError>`
- **Wire**: `GET /terminals`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTerminalsResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalsTerminalLevel.GetTerminalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalsTerminalLevel.GetTerminalsRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `searchQuery` | `query` | `string` | no |
| `otpQuery` | `query` | `string` | no |
| `countries` | `query` | `string` | no |
| `merchantIds` | `query` | `string` | no |
| `storeIds` | `query` | `string` | no |
| `brandModels` | `query` | `string` | no |
| `pageNumber` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTerminalsResponse` | `listTerminalsResponseSchema` | `src/models/list-terminals-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postTerminalsTerminalIdReassign

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postTerminalsTerminalIdReassign(request: TerminalsTerminalLevel.PostTerminalsTerminalIdReassignRequest, options?: RequestOptions): ApiPromise<undefined, TerminalsTerminalLevel.PostTerminalsTerminalIdReassignError>`
- **Wire**: `POST /terminals/{terminalId}/reassign`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalsTerminalLevel.PostTerminalsTerminalIdReassignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalsTerminalLevel.PostTerminalsTerminalIdReassignRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `terminalId` | `path` | `string` | yes |
| `body` | `body` | `TerminalReassignmentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalReassignmentRequest` | `terminalReassignmentRequestSchema` | `src/models/terminal-reassignment-request.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

