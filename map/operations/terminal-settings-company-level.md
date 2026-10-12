<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalSettingsCompanyLevel — operations

Accessor: `client.terminalSettingsCompanyLevel` · Source: `src/resources/terminal-settings-company-level.ts` · 4 operations · Request and error types: namespace `TerminalSettingsCompanyLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCompaniesCompanyIdTerminalLogos

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdTerminalLogos(request: TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalLogosRequest, options?: RequestOptions): ApiPromise<Logo, TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalLogosError>`
- **Wire**: `GET /companies/{companyId}/terminalLogos`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Logo`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalLogosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalLogosRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `model` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Logo` | `logoSchema` | `src/models/logo.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyIdTerminalSettings

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdTerminalSettings(request: TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalSettingsRequest, options?: RequestOptions): ApiPromise<TerminalSettings, TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalSettingsError>`
- **Wire**: `GET /companies/{companyId}/terminalSettings`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalSettings`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsCompanyLevel.GetCompaniesCompanyIdTerminalSettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalSettings` | `terminalSettingsSchema` | `src/models/terminal-settings.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchCompaniesCompanyIdTerminalLogos

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchCompaniesCompanyIdTerminalLogos(request: TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalLogosRequest, options?: RequestOptions): ApiPromise<Logo, TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalLogosError>`
- **Wire**: `PATCH /companies/{companyId}/terminalLogos`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Logo`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalLogosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalLogosRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `model` | `query` | `string` | yes |
| `body` | `body` | `Logo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Logo` | `logoSchema` | `src/models/logo.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchCompaniesCompanyIdTerminalSettings

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchCompaniesCompanyIdTerminalSettings(request: TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalSettingsRequest, options?: RequestOptions): ApiPromise<TerminalSettings, TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalSettingsError>`
- **Wire**: `PATCH /companies/{companyId}/terminalSettings`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TerminalSettings`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsCompanyLevel.PatchCompaniesCompanyIdTerminalSettingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `body` | `body` | `TerminalSettings` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalSettings` | `terminalSettingsSchema` | `src/models/terminal-settings.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

