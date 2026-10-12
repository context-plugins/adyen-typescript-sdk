<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomPayoutSchedulesSweeps — operations

Accessor: `client.customPayoutSchedulesSweeps` · Source: `src/resources/custom-payout-schedules-sweeps.ts` · 5 operations · Request and error types: namespace `CustomPayoutSchedulesSweeps`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteBalanceAccountsBalanceAccountIdSweepsSweepId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBalanceAccountsBalanceAccountIdSweepsSweepId(request: CustomPayoutSchedulesSweeps.DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdRequest, options?: RequestOptions): ApiPromise<undefined, CustomPayoutSchedulesSweeps.DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError>`
- **Wire**: `DELETE /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `CustomPayoutSchedulesSweeps.DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomPayoutSchedulesSweeps.DeleteBalanceAccountsBalanceAccountIdSweepsSweepIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balanceAccountId` | `path` | `string` | yes |
| `sweepId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getBalanceAccountsBalanceAccountIdSweeps

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalanceAccountsBalanceAccountIdSweeps(request: CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsRequest, options?: RequestOptions): ApiPromise<BalanceSweepConfigurationsResponse, CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsError>`
- **Wire**: `GET /balanceAccounts/{balanceAccountId}/sweeps`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BalanceSweepConfigurationsResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balanceAccountId` | `path` | `string` | yes |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceSweepConfigurationsResponse` | `balanceSweepConfigurationsResponseSchema` | `src/models/balance-sweep-configurations-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getBalanceAccountsBalanceAccountIdSweepsSweepId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalanceAccountsBalanceAccountIdSweepsSweepId(request: CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsSweepIdRequest, options?: RequestOptions): ApiPromise<SweepConfigurationV2, CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsSweepIdError>`
- **Wire**: `GET /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SweepConfigurationV2`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsSweepIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomPayoutSchedulesSweeps.GetBalanceAccountsBalanceAccountIdSweepsSweepIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balanceAccountId` | `path` | `string` | yes |
| `sweepId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SweepConfigurationV2` | `sweepConfigurationV2Schema` | `src/models/sweep-configuration-v2.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchBalanceAccountsBalanceAccountIdSweepsSweepId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchBalanceAccountsBalanceAccountIdSweepsSweepId(request: CustomPayoutSchedulesSweeps.PatchBalanceAccountsBalanceAccountIdSweepsSweepIdRequest, options?: RequestOptions): ApiPromise<SweepConfigurationV2, CustomPayoutSchedulesSweeps.PatchBalanceAccountsBalanceAccountIdSweepsSweepIdError>`
- **Wire**: `PATCH /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SweepConfigurationV2`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `CustomPayoutSchedulesSweeps.PatchBalanceAccountsBalanceAccountIdSweepsSweepIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomPayoutSchedulesSweeps.PatchBalanceAccountsBalanceAccountIdSweepsSweepIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balanceAccountId` | `path` | `string` | yes |
| `sweepId` | `path` | `string` | yes |
| `body` | `body` | `UpdateSweepConfigurationV2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateSweepConfigurationV2` | `updateSweepConfigurationV2Schema` | `src/models/update-sweep-configuration-v2.ts` |
| `SweepConfigurationV2` | `sweepConfigurationV2Schema` | `src/models/sweep-configuration-v2.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postBalanceAccountsBalanceAccountIdSweeps

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postBalanceAccountsBalanceAccountIdSweeps(request: CustomPayoutSchedulesSweeps.PostBalanceAccountsBalanceAccountIdSweepsRequest, options?: RequestOptions): ApiPromise<SweepConfigurationV2, CustomPayoutSchedulesSweeps.PostBalanceAccountsBalanceAccountIdSweepsError>`
- **Wire**: `POST /balanceAccounts/{balanceAccountId}/sweeps`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SweepConfigurationV2`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `CustomPayoutSchedulesSweeps.PostBalanceAccountsBalanceAccountIdSweepsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomPayoutSchedulesSweeps.PostBalanceAccountsBalanceAccountIdSweepsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `balanceAccountId` | `path` | `string` | yes |
| `body` | `body` | `CreateSweepConfigurationV2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSweepConfigurationV2` | `createSweepConfigurationV2Schema` | `src/models/create-sweep-configuration-v2.ts` |
| `SweepConfigurationV2` | `sweepConfigurationV2Schema` | `src/models/sweep-configuration-v2.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

