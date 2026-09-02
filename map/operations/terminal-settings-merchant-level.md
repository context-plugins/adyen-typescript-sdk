<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalSettingsMerchantLevel — operations

Accessor: `client.terminalSettingsMerchantLevel` · Source: `src/resources/terminal-settings-merchant-level.ts` · 4 operations · Request and error types: namespace `TerminalSettingsMerchantLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getMerchantsMerchantIdTerminalLogos

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdTerminalLogos(request: TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalLogosRequest, options?: RequestOptions): ApiPromise<Logo, TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalLogosError>`
- **Wire**: `GET /merchants/{merchantId}/terminalLogos`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Logo`
- **Error**: `TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalLogosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalLogosRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `model` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Logo` | `logoSchema` | `src/models/logo.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdTerminalSettings

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdTerminalSettings(request: TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalSettingsRequest, options?: RequestOptions): ApiPromise<TerminalSettings, TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalSettingsError>`
- **Wire**: `GET /merchants/{merchantId}/terminalSettings`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalSettings`
- **Error**: `TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsMerchantLevel.GetMerchantsMerchantIdTerminalSettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalSettings` | `terminalSettingsSchema` | `src/models/terminal-settings.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchMerchantsMerchantIdTerminalLogos

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchMerchantsMerchantIdTerminalLogos(request: TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalLogosRequest, options?: RequestOptions): ApiPromise<Logo, TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalLogosError>`
- **Wire**: `PATCH /merchants/{merchantId}/terminalLogos`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Logo`
- **Error**: `TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalLogosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalLogosRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `model` | `query` | `string` | yes |
| `body` | `body` | `Logo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Logo` | `logoSchema` | `src/models/logo.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchMerchantsMerchantIdTerminalSettings

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchMerchantsMerchantIdTerminalSettings(request: TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalSettingsRequest, options?: RequestOptions): ApiPromise<TerminalSettings, TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalSettingsError>`
- **Wire**: `PATCH /merchants/{merchantId}/terminalSettings`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TerminalSettings`
- **Error**: `TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsMerchantLevel.PatchMerchantsMerchantIdTerminalSettingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `body` | `body` | `TerminalSettings` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalSettings` | `terminalSettingsSchema` | `src/models/terminal-settings.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

