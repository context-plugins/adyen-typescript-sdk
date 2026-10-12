<!-- Generated file — do not edit; regenerated with the SDK. -->

# SplitConfigurationMerchantLevel — operations

Accessor: `client.splitConfigurationMerchantLevel` · Source: `src/resources/split-configuration-merchant-level.ts` · 9 operations · Request and error types: namespace `SplitConfigurationMerchantLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(request: SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest, options?: RequestOptions): ApiPromise<SplitConfiguration, SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError>`
- **Wire**: `DELETE /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SplitConfiguration`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `splitConfigurationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SplitConfiguration` | `splitConfigurationSchema` | `src/models/split-configuration.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(request: SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRequest, options?: RequestOptions): ApiPromise<SplitConfiguration, SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError>`
- **Wire**: `DELETE /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}/rules/{ruleId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SplitConfiguration`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SplitConfigurationMerchantLevel.DeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `splitConfigurationId` | `path` | `string` | yes |
| `ruleId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SplitConfiguration` | `splitConfigurationSchema` | `src/models/split-configuration.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdSplitConfigurations

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdSplitConfigurations(request: SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsRequest, options?: RequestOptions): ApiPromise<SplitConfigurationList, SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsError>`
- **Wire**: `GET /merchants/{merchantId}/splitConfigurations`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SplitConfigurationList`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SplitConfigurationList` | `splitConfigurationListSchema` | `src/models/split-configuration-list.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdSplitConfigurationsSplitConfigurationId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(request: SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest, options?: RequestOptions): ApiPromise<SplitConfiguration, SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError>`
- **Wire**: `GET /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SplitConfiguration`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SplitConfigurationMerchantLevel.GetMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `splitConfigurationId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SplitConfiguration` | `splitConfigurationSchema` | `src/models/split-configuration.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(request: SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest, options?: RequestOptions): ApiPromise<SplitConfiguration, SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError>`
- **Wire**: `PATCH /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SplitConfiguration`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `splitConfigurationId` | `path` | `string` | yes |
| `body` | `body` | `UpdateSplitConfigurationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateSplitConfigurationRequest` | `updateSplitConfigurationRequestSchema` | `src/models/update-split-configuration-request.ts` |
| `SplitConfiguration` | `splitConfigurationSchema` | `src/models/split-configuration.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(request: SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRequest, options?: RequestOptions): ApiPromise<SplitConfiguration, SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError>`
- **Wire**: `PATCH /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}/rules/{ruleId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SplitConfiguration`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SplitConfigurationMerchantLevel.PatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `splitConfigurationId` | `path` | `string` | yes |
| `ruleId` | `path` | `string` | yes |
| `body` | `body` | `UpdateSplitConfigurationRuleRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateSplitConfigurationRuleRequest` | `updateSplitConfigurationRuleRequestSchema` | `src/models/update-split-configuration-rule-request.ts` |
| `SplitConfiguration` | `splitConfigurationSchema` | `src/models/split-configuration.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchMerchantsSplitConfigurationsRulesSplitLogic

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchMerchantsSplitConfigurationsRulesSplitLogic(request: SplitConfigurationMerchantLevel.PatchMerchantsSplitConfigurationsRulesSplitLogicRequest, options?: RequestOptions): ApiPromise<SplitConfiguration, SplitConfigurationMerchantLevel.PatchMerchantsSplitConfigurationsRulesSplitLogicError>`
- **Wire**: `PATCH /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}/rules/{ruleId}/splitLogic/{splitLogicId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SplitConfiguration`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `SplitConfigurationMerchantLevel.PatchMerchantsSplitConfigurationsRulesSplitLogicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SplitConfigurationMerchantLevel.PatchMerchantsSplitConfigurationsRulesSplitLogicRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `splitConfigurationId` | `path` | `string` | yes |
| `ruleId` | `path` | `string` | yes |
| `splitLogicId` | `path` | `string` | yes |
| `body` | `body` | `UpdateSplitConfigurationLogicRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateSplitConfigurationLogicRequest` | `updateSplitConfigurationLogicRequestSchema` | `src/models/update-split-configuration-logic-request.ts` |
| `SplitConfiguration` | `splitConfigurationSchema` | `src/models/split-configuration.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchantsMerchantIdSplitConfigurations

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdSplitConfigurations(request: SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsRequest, options?: RequestOptions): ApiPromise<SplitConfiguration, SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsError>`
- **Wire**: `POST /merchants/{merchantId}/splitConfigurations`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SplitConfiguration`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `body` | `body` | `SplitConfiguration` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SplitConfiguration` | `splitConfigurationSchema` | `src/models/split-configuration.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchantsMerchantIdSplitConfigurationsSplitConfigurationId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(request: SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest, options?: RequestOptions): ApiPromise<SplitConfiguration, SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError>`
- **Wire**: `POST /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SplitConfiguration`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SplitConfigurationMerchantLevel.PostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `splitConfigurationId` | `path` | `string` | yes |
| `body` | `body` | `SplitConfigurationRule` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SplitConfigurationRule` | `splitConfigurationRuleSchema` | `src/models/split-configuration-rule.ts` |
| `SplitConfiguration` | `splitConfigurationSchema` | `src/models/split-configuration.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

