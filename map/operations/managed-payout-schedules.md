<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManagedPayoutSchedules — operations

Accessor: `client.managedPayoutSchedules` · Source: `src/resources/managed-payout-schedules.ts` · 8 operations · Request and error types: namespace `ManagedPayoutSchedules`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteBalanceAccountsBalanceAccountIdPayoutSchedulesId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBalanceAccountsBalanceAccountIdPayoutSchedulesId(request: ManagedPayoutSchedules.DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdRequest, options?: RequestOptions): ApiPromise<undefined, ManagedPayoutSchedules.DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdError>`
- **Wire**: `DELETE /balanceAccounts/{balanceAccountId}/payoutSchedules/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ManagedPayoutSchedules.DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagedPayoutSchedules.DeleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balanceAccountId` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getBalanceAccountsBalanceAccountIdPayoutSchedules

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalanceAccountsBalanceAccountIdPayoutSchedules(request: ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesRequest, options?: RequestOptions): ApiPromise<BalanceAccountConfigurations, ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesError>`
- **Wire**: `GET /balanceAccounts/{balanceAccountId}/payoutSchedules`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BalanceAccountConfigurations`
- **Error**: `ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `balanceAccountId` | `path` | `string` | yes | — |
| `currency` | `query` | `string` | no | — |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceAccountConfigurations` | `balanceAccountConfigurationsSchema` | `src/models/balance-account-configurations.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getBalanceAccountsBalanceAccountIdPayoutSchedulesId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalanceAccountsBalanceAccountIdPayoutSchedulesId(request: ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdRequest, options?: RequestOptions): ApiPromise<BalanceAccountConfiguration, ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdError>`
- **Wire**: `GET /balanceAccounts/{balanceAccountId}/payoutSchedules/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BalanceAccountConfiguration`
- **Error**: `ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balanceAccountId` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceAccountConfiguration` | `balanceAccountConfigurationSchema` | `src/models/balance-account-configuration.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions(request: ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsRequest, options?: RequestOptions): ApiPromise<PayoutScheduleExecutions, ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsError>`
- **Wire**: `GET /balanceAccounts/{balanceAccountId}/payoutSchedules/{id}/executions`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PayoutScheduleExecutions`
- **Error**: `ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagedPayoutSchedules.GetBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balanceAccountId` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |
| `offset` | `query` | `number` | yes |
| `results` | `query` | `ExecutionResult[]` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExecutionResult` | `executionResultSchema` | `src/models/execution-result.ts` |
| `PayoutScheduleExecutions` | `payoutScheduleExecutionsSchema` | `src/models/payout-schedule-executions.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getBalancePlatformsBalancePlatformIdPayoutSchedules

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalancePlatformsBalancePlatformIdPayoutSchedules(request: ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesRequest, options?: RequestOptions): ApiPromise<BalancePlatformConfigurations, ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesError>`
- **Wire**: `GET /balancePlatforms/{balancePlatformId}/payoutSchedules`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BalancePlatformConfigurations`
- **Error**: `ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balancePlatformId` | `path` | `string` | yes |
| `countryCode` | `query` | `string` | no |
| `currency` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalancePlatformConfigurations` | `balancePlatformConfigurationsSchema` | `src/models/balance-platform-configurations.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getBalancePlatformsBalancePlatformIdPayoutSchedulesId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalancePlatformsBalancePlatformIdPayoutSchedulesId(request: ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdRequest, options?: RequestOptions): ApiPromise<BalancePlatformConfiguration, ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdError>`
- **Wire**: `GET /balancePlatforms/{balancePlatformId}/payoutSchedules/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BalancePlatformConfiguration`
- **Error**: `ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagedPayoutSchedules.GetBalancePlatformsBalancePlatformIdPayoutSchedulesIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balancePlatformId` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalancePlatformConfiguration` | `balancePlatformConfigurationSchema` | `src/models/balance-platform-configuration.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### patchBalanceAccountsBalanceAccountIdPayoutSchedulesId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchBalanceAccountsBalanceAccountIdPayoutSchedulesId(request: ManagedPayoutSchedules.PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdRequest, options?: RequestOptions): ApiPromise<BalanceAccountConfiguration, ManagedPayoutSchedules.PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdError>`
- **Wire**: `PATCH /balanceAccounts/{balanceAccountId}/payoutSchedules/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `BalanceAccountConfiguration`
- **Error**: `ManagedPayoutSchedules.PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagedPayoutSchedules.PatchBalanceAccountsBalanceAccountIdPayoutSchedulesIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balanceAccountId` | `path` | `string` | yes |
| `id` | `path` | `string` | yes |
| `body` | `body` | `BalanceAccountConfigurationUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceAccountConfigurationUpdate` | `balanceAccountConfigurationUpdateSchema` | `src/models/balance-account-configuration-update.ts` |
| `BalanceAccountConfiguration` | `balanceAccountConfigurationSchema` | `src/models/balance-account-configuration.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postBalanceAccountsBalanceAccountIdPayoutSchedules

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postBalanceAccountsBalanceAccountIdPayoutSchedules(request: ManagedPayoutSchedules.PostBalanceAccountsBalanceAccountIdPayoutSchedulesRequest, options?: RequestOptions): ApiPromise<BalanceAccountConfiguration, ManagedPayoutSchedules.PostBalanceAccountsBalanceAccountIdPayoutSchedulesError>`
- **Wire**: `POST /balanceAccounts/{balanceAccountId}/payoutSchedules`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `BalanceAccountConfiguration`
- **Error**: `ManagedPayoutSchedules.PostBalanceAccountsBalanceAccountIdPayoutSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManagedPayoutSchedules.PostBalanceAccountsBalanceAccountIdPayoutSchedulesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balanceAccountId` | `path` | `string` | yes |
| `body` | `body` | `BalanceAccountConfigurationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceAccountConfigurationRequest` | `balanceAccountConfigurationRequestSchema` | `src/models/balance-account-configuration-request.ts` |
| `BalanceAccountConfiguration` | `balanceAccountConfigurationSchema` | `src/models/balance-account-configuration.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

