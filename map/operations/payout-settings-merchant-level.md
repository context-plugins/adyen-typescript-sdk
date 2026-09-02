<!-- Generated file — do not edit; regenerated with the SDK. -->

# PayoutSettingsMerchantLevel — operations

Accessor: `client.payoutSettingsMerchantLevel` · Source: `src/resources/payout-settings-merchant-level.ts` · 5 operations · Request and error types: namespace `PayoutSettingsMerchantLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId(request: PayoutSettingsMerchantLevel.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest, options?: RequestOptions): ApiPromise<undefined, PayoutSettingsMerchantLevel.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError>`
- **Wire**: `DELETE /merchants/{merchantId}/payoutSettings/{payoutSettingsId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `PayoutSettingsMerchantLevel.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PayoutSettingsMerchantLevel.DeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `payoutSettingsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdPayoutSettings

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdPayoutSettings(request: PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsRequest, options?: RequestOptions): ApiPromise<PayoutSettingsResponse, PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsError>`
- **Wire**: `GET /merchants/{merchantId}/payoutSettings`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PayoutSettingsResponse`
- **Error**: `PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutSettingsResponse` | `payoutSettingsResponseSchema` | `src/models/payout-settings-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdPayoutSettingsPayoutSettingsId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdPayoutSettingsPayoutSettingsId(request: PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest, options?: RequestOptions): ApiPromise<PayoutSettings, PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError>`
- **Wire**: `GET /merchants/{merchantId}/payoutSettings/{payoutSettingsId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PayoutSettings`
- **Error**: `PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PayoutSettingsMerchantLevel.GetMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `payoutSettingsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutSettings` | `payoutSettingsSchema` | `src/models/payout-settings.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId(request: PayoutSettingsMerchantLevel.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest, options?: RequestOptions): ApiPromise<PayoutSettings, PayoutSettingsMerchantLevel.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError>`
- **Wire**: `PATCH /merchants/{merchantId}/payoutSettings/{payoutSettingsId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PayoutSettings`
- **Error**: `PayoutSettingsMerchantLevel.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PayoutSettingsMerchantLevel.PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `payoutSettingsId` | `path` | `string` | yes |
| `body` | `body` | `UpdatePayoutSettingsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdatePayoutSettingsRequest` | `updatePayoutSettingsRequestSchema` | `src/models/update-payout-settings-request.ts` |
| `PayoutSettings` | `payoutSettingsSchema` | `src/models/payout-settings.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchantsMerchantIdPayoutSettings

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdPayoutSettings(request: PayoutSettingsMerchantLevel.PostMerchantsMerchantIdPayoutSettingsRequest, options?: RequestOptions): ApiPromise<PayoutSettings, PayoutSettingsMerchantLevel.PostMerchantsMerchantIdPayoutSettingsError>`
- **Wire**: `POST /merchants/{merchantId}/payoutSettings`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PayoutSettings`
- **Error**: `PayoutSettingsMerchantLevel.PostMerchantsMerchantIdPayoutSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PayoutSettingsMerchantLevel.PostMerchantsMerchantIdPayoutSettingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `body` | `body` | `PayoutSettingsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutSettingsRequest` | `payoutSettingsRequestSchema` | `src/models/payout-settings-request.ts` |
| `PayoutSettings` | `payoutSettingsSchema` | `src/models/payout-settings.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

