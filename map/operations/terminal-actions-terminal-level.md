<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalActionsTerminalLevel — operations

Accessor: `client.terminalActionsTerminalLevel` · Source: `src/resources/terminal-actions-terminal-level.ts` · 1 operation · Request and error types: namespace `TerminalActionsTerminalLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postTerminalsScheduleActions

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postTerminalsScheduleActions(request: TerminalActionsTerminalLevel.PostTerminalsScheduleActionsRequest, options?: RequestOptions): ApiPromise<ScheduleTerminalActionsResponse, TerminalActionsTerminalLevel.PostTerminalsScheduleActionsError>`
- **Wire**: `POST /terminals/scheduleActions`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScheduleTerminalActionsResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalActionsTerminalLevel.PostTerminalsScheduleActionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalActionsTerminalLevel.PostTerminalsScheduleActionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ScheduleTerminalActionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScheduleTerminalActionsRequest` | `scheduleTerminalActionsRequestSchema` | `src/models/schedule-terminal-actions-request.ts` |
| `ScheduleTerminalActionsResponse` | `scheduleTerminalActionsResponseSchema` | `src/models/schedule-terminal-actions-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

