<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalSettingsTerminalLevel — operations

Accessor: `client.terminalSettingsTerminalLevel` · Source: `src/resources/terminal-settings-terminal-level.ts` · 4 operations · Request and error types: namespace `TerminalSettingsTerminalLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getTerminalsTerminalIdTerminalLogos

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getTerminalsTerminalIdTerminalLogos(request: TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalLogosRequest, options?: RequestOptions): ApiPromise<Logo, TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalLogosError>`
- **Wire**: `GET /terminals/{terminalId}/terminalLogos`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Logo`
- **Error**: `TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalLogosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalLogosRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `terminalId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Logo` | `logoSchema` | `src/models/logo.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getTerminalsTerminalIdTerminalSettings

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getTerminalsTerminalIdTerminalSettings(request: TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalSettingsRequest, options?: RequestOptions): ApiPromise<TerminalSettings, TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalSettingsError>`
- **Wire**: `GET /terminals/{terminalId}/terminalSettings`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalSettings`
- **Error**: `TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsTerminalLevel.GetTerminalsTerminalIdTerminalSettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `terminalId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalSettings` | `terminalSettingsSchema` | `src/models/terminal-settings.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchTerminalsTerminalIdTerminalLogos

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchTerminalsTerminalIdTerminalLogos(request: TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalLogosRequest, options?: RequestOptions): ApiPromise<Logo, TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalLogosError>`
- **Wire**: `PATCH /terminals/{terminalId}/terminalLogos`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Logo`
- **Error**: `TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalLogosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalLogosRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `terminalId` | `path` | `string` | yes |
| `body` | `body` | `Logo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Logo` | `logoSchema` | `src/models/logo.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchTerminalsTerminalIdTerminalSettings

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchTerminalsTerminalIdTerminalSettings(request: TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalSettingsRequest, options?: RequestOptions): ApiPromise<TerminalSettings, TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalSettingsError>`
- **Wire**: `PATCH /terminals/{terminalId}/terminalSettings`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TerminalSettings`
- **Error**: `TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsTerminalLevel.PatchTerminalsTerminalIdTerminalSettingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `terminalId` | `path` | `string` | yes |
| `body` | `body` | `TerminalSettings` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalSettings` | `terminalSettingsSchema` | `src/models/terminal-settings.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

