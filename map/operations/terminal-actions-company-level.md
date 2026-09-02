<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalActionsCompanyLevel — operations

Accessor: `client.terminalActionsCompanyLevel` · Source: `src/resources/terminal-actions-company-level.ts` · 2 operations · Request and error types: namespace `TerminalActionsCompanyLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getCompaniesCompanyIdTerminalActions

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdTerminalActions(request: TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsRequest, options?: RequestOptions): ApiPromise<ListExternalTerminalActionsResponse, TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsError>`
- **Wire**: `GET /companies/{companyId}/terminalActions`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListExternalTerminalActionsResponse`
- **Error**: `TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `pageNumber` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |
| `status` | `query` | `string` | no |
| `type` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListExternalTerminalActionsResponse` | `listExternalTerminalActionsResponseSchema` | `src/models/list-external-terminal-actions-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyIdTerminalActionsActionId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdTerminalActionsActionId(request: TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsActionIdRequest, options?: RequestOptions): ApiPromise<ExternalTerminalAction, TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsActionIdError>`
- **Wire**: `GET /companies/{companyId}/terminalActions/{actionId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExternalTerminalAction`
- **Error**: `TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsActionIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalActionsCompanyLevel.GetCompaniesCompanyIdTerminalActionsActionIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `actionId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExternalTerminalAction` | `externalTerminalActionSchema` | `src/models/external-terminal-action.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

