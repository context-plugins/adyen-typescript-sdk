<!-- Generated file — do not edit; regenerated with the SDK. -->

# Balances — operations

Accessor: `client.balances` · Source: `src/resources/balances.ts` · 5 operations · Request and error types: namespace `Balances`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(request: Balances.DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest, options?: RequestOptions): ApiPromise<unknown, Balances.DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError>`
- **Wire**: `DELETE /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `unknown` — a bare `application/json` unknown; the success type *is* the unknown
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Balances.DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity6"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Balances.DeleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balancePlatformId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |
| `settingId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(request: Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRequest, options?: RequestOptions): ApiPromise<WebhookSettings, Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError>`
- **Wire**: `GET /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhookSettings`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity6"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balancePlatformId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookSettings` | `webhookSettingsSchema` | `src/models/webhook-settings.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(request: Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest, options?: RequestOptions): ApiPromise<WebhookSetting, Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError>`
- **Wire**: `GET /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebhookSetting`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity6"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Balances.GetBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balancePlatformId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |
| `settingId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookSetting` | `webhookSettingSchema` | `src/models/unions/webhook-setting.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId(request: Balances.PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest, options?: RequestOptions): ApiPromise<WebhookSetting, Balances.PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError>`
- **Wire**: `PATCH /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookSetting`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Balances.PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity6"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Balances.PatchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balancePlatformId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |
| `settingId` | `path` | `string` | yes |
| `body` | `body` | `BalanceWebhookSettingInfoUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceWebhookSettingInfoUpdate` | `balanceWebhookSettingInfoUpdateSchema` | `src/models/balance-webhook-setting-info-update.ts` |
| `WebhookSetting` | `webhookSettingSchema` | `src/models/unions/webhook-setting.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings(request: Balances.PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRequest, options?: RequestOptions): ApiPromise<WebhookSetting, Balances.PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError>`
- **Wire**: `POST /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookSetting`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Balances.PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity6"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Balances.PostBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balancePlatformId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |
| `body` | `body` | `BalanceWebhookSettingInfo` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceWebhookSettingInfo` | `balanceWebhookSettingInfoSchema` | `src/models/balance-webhook-setting-info.ts` |
| `WebhookSetting` | `webhookSettingSchema` | `src/models/unions/webhook-setting.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

