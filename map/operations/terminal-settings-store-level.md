<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalSettingsStoreLevel — operations

Accessor: `client.terminalSettingsStoreLevel` · Source: `src/resources/terminal-settings-store-level.ts` · 8 operations · Request and error types: namespace `TerminalSettingsStoreLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMerchantsMerchantIdStoresReferenceTerminalLogos

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdStoresReferenceTerminalLogos(request: TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalLogosRequest, options?: RequestOptions): ApiPromise<Logo, TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalLogosError>`
- **Wire**: `GET /merchants/{merchantId}/stores/{reference}/terminalLogos`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Logo`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalLogosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalLogosRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `reference` | `path` | `string` | yes |
| `model` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Logo` | `logoSchema` | `src/models/logo.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdStoresReferenceTerminalSettings

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdStoresReferenceTerminalSettings(request: TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalSettingsRequest, options?: RequestOptions): ApiPromise<TerminalSettings, TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalSettingsError>`
- **Wire**: `GET /merchants/{merchantId}/stores/{reference}/terminalSettings`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalSettings`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsStoreLevel.GetMerchantsMerchantIdStoresReferenceTerminalSettingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `reference` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalSettings` | `terminalSettingsSchema` | `src/models/terminal-settings.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getStoresStoreIdTerminalLogos

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getStoresStoreIdTerminalLogos(request: TerminalSettingsStoreLevel.GetStoresStoreIdTerminalLogosRequest, options?: RequestOptions): ApiPromise<Logo, TerminalSettingsStoreLevel.GetStoresStoreIdTerminalLogosError>`
- **Wire**: `GET /stores/{storeId}/terminalLogos`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Logo`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalSettingsStoreLevel.GetStoresStoreIdTerminalLogosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsStoreLevel.GetStoresStoreIdTerminalLogosRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `storeId` | `path` | `string` | yes |
| `model` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Logo` | `logoSchema` | `src/models/logo.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getStoresStoreIdTerminalSettings

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getStoresStoreIdTerminalSettings(request: TerminalSettingsStoreLevel.GetStoresStoreIdTerminalSettingsRequest, options?: RequestOptions): ApiPromise<TerminalSettings, TerminalSettingsStoreLevel.GetStoresStoreIdTerminalSettingsError>`
- **Wire**: `GET /stores/{storeId}/terminalSettings`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TerminalSettings`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalSettingsStoreLevel.GetStoresStoreIdTerminalSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsStoreLevel.GetStoresStoreIdTerminalSettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `storeId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalSettings` | `terminalSettingsSchema` | `src/models/terminal-settings.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchMerchantsMerchantIdStoresReferenceTerminalLogos

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchMerchantsMerchantIdStoresReferenceTerminalLogos(request: TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalLogosRequest, options?: RequestOptions): ApiPromise<Logo, TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalLogosError>`
- **Wire**: `PATCH /merchants/{merchantId}/stores/{reference}/terminalLogos`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Logo`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalLogosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalLogosRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `reference` | `path` | `string` | yes |
| `model` | `query` | `string` | yes |
| `body` | `body` | `Logo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Logo` | `logoSchema` | `src/models/logo.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchMerchantsMerchantIdStoresReferenceTerminalSettings

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchMerchantsMerchantIdStoresReferenceTerminalSettings(request: TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsRequest, options?: RequestOptions): ApiPromise<TerminalSettings, TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError>`
- **Wire**: `PATCH /merchants/{merchantId}/stores/{reference}/terminalSettings`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TerminalSettings`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsStoreLevel.PatchMerchantsMerchantIdStoresReferenceTerminalSettingsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `reference` | `path` | `string` | yes |
| `body` | `body` | `TerminalSettings` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalSettings` | `terminalSettingsSchema` | `src/models/terminal-settings.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchStoresStoreIdTerminalLogos

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchStoresStoreIdTerminalLogos(request: TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalLogosRequest, options?: RequestOptions): ApiPromise<Logo, TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalLogosError>`
- **Wire**: `PATCH /stores/{storeId}/terminalLogos`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Logo`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalLogosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalLogosRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `storeId` | `path` | `string` | yes |
| `model` | `query` | `string` | yes |
| `body` | `body` | `Logo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Logo` | `logoSchema` | `src/models/logo.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchStoresStoreIdTerminalSettings

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchStoresStoreIdTerminalSettings(request: TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalSettingsRequest, options?: RequestOptions): ApiPromise<TerminalSettings, TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalSettingsError>`
- **Wire**: `PATCH /stores/{storeId}/terminalSettings`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TerminalSettings`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TerminalSettingsStoreLevel.PatchStoresStoreIdTerminalSettingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `storeId` | `path` | `string` | yes |
| `body` | `body` | `TerminalSettings` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TerminalSettings` | `terminalSettingsSchema` | `src/models/terminal-settings.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

