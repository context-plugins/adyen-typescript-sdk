<!-- Generated file — do not edit; regenerated with the SDK. -->

# BalancesOverview — operations

Accessor: `client.balancesOverview` · Source: `src/resources/balances-overview.ts` · 2 operations · Request and error types: namespace `BalancesOverview`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getBalanceOverviewCompaniesCompanyAccountCodeBalances

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalanceOverviewCompaniesCompanyAccountCodeBalances(request: BalancesOverview.GetBalanceOverviewCompaniesCompanyAccountCodeBalancesRequest, options?: RequestOptions): ApiPromise<CompanyBalances, BalancesOverview.GetBalanceOverviewCompaniesCompanyAccountCodeBalancesError>`
- **Wire**: `GET /balanceOverview/companies/{companyAccountCode}/balances`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanyBalances`
- **Error**: `BalancesOverview.GetBalanceOverviewCompaniesCompanyAccountCodeBalancesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BalancesOverview.GetBalanceOverviewCompaniesCompanyAccountCodeBalancesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyAccountCode` | `path` | `string` | yes |
| `currency` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyBalances` | `companyBalancesSchema` | `src/models/company-balances.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getBalanceOverviewMerchantsMerchantAccountCodeBalances

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getBalanceOverviewMerchantsMerchantAccountCodeBalances(request: BalancesOverview.GetBalanceOverviewMerchantsMerchantAccountCodeBalancesRequest, options?: RequestOptions): ApiPromise<MerchantBalance, BalancesOverview.GetBalanceOverviewMerchantsMerchantAccountCodeBalancesError>`
- **Wire**: `GET /balanceOverview/merchants/{merchantAccountCode}/balances`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MerchantBalance`
- **Error**: `BalancesOverview.GetBalanceOverviewMerchantsMerchantAccountCodeBalancesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BalancesOverview.GetBalanceOverviewMerchantsMerchantAccountCodeBalancesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantAccountCode` | `path` | `string` | yes |
| `currency` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MerchantBalance` | `merchantBalanceSchema` | `src/models/merchant-balance.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

