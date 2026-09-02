<!-- Generated file — do not edit; regenerated with the SDK. -->

# DonationCampaigns — operations

Accessor: `client.donationCampaigns` · Source: `src/resources/donation-campaigns.ts` · 6 operations · Request and error types: namespace `DonationCampaigns`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteCompaniesCompanyIdCampaignManagementDonationCampaignId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteCompaniesCompanyIdCampaignManagementDonationCampaignId(request: DonationCampaigns.DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdRequest, options?: RequestOptions): ApiPromise<undefined, DonationCampaigns.DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError>`
- **Wire**: `DELETE /companies/{companyId}/campaignManagement/{donationCampaignId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DonationCampaigns.DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DonationCampaigns.DeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `donationCampaignId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId(request: DonationCampaigns.GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdRequest, options?: RequestOptions): ApiPromise<ListDonationCampaignsResponse, DonationCampaigns.GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdError>`
- **Wire**: `GET /companies/{companyId}/campaignManagement/accountHolders/{accountHolderId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListDonationCampaignsResponse`
- **Error**: `DonationCampaigns.GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DonationCampaigns.GetCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes | — |
| `accountHolderId` | `path` | `string` | yes | — |
| `status` | `query` | `string` | no | — |
| `pageNumber` | `query` | `number` | no | `1` |
| `pageSize` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListDonationCampaignsResponse` | `listDonationCampaignsResponseSchema` | `src/models/list-donation-campaigns-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### patchCompaniesCompanyIdCampaignManagementDonationCampaignId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchCompaniesCompanyIdCampaignManagementDonationCampaignId(request: DonationCampaigns.PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdRequest, options?: RequestOptions): ApiPromise<DonationCampaign1, DonationCampaigns.PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdError>`
- **Wire**: `PATCH /companies/{companyId}/campaignManagement/{donationCampaignId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DonationCampaign1`
- **Error**: `DonationCampaigns.PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DonationCampaigns.PatchCompaniesCompanyIdCampaignManagementDonationCampaignIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `donationCampaignId` | `path` | `string` | yes |
| `body` | `body` | `DonationCampaignUpdate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DonationCampaignUpdate` | `donationCampaignUpdateSchema` | `src/models/donation-campaign-update.ts` |
| `DonationCampaign1` | `donationCampaign1Schema` | `src/models/donation-campaign1.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postCompaniesCompanyIdCampaignManagement

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCompaniesCompanyIdCampaignManagement(request: DonationCampaigns.PostCompaniesCompanyIdCampaignManagementRequest, options?: RequestOptions): ApiPromise<DonationCampaign1, DonationCampaigns.PostCompaniesCompanyIdCampaignManagementError>`
- **Wire**: `POST /companies/{companyId}/campaignManagement`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DonationCampaign1`
- **Error**: `DonationCampaigns.PostCompaniesCompanyIdCampaignManagementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DonationCampaigns.PostCompaniesCompanyIdCampaignManagementRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `body` | `body` | `DonationCampaignRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DonationCampaignRequest` | `donationCampaignRequestSchema` | `src/models/donation-campaign-request.ts` |
| `DonationCampaign1` | `donationCampaign1Schema` | `src/models/donation-campaign1.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatus

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatus(request: DonationCampaigns.PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusRequest, options?: RequestOptions): ApiPromise<DonationCampaign1, DonationCampaigns.PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusError>`
- **Wire**: `POST /companies/{companyId}/campaignManagement/{donationCampaignId}/status/{status}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DonationCampaign1`
- **Error**: `DonationCampaigns.PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DonationCampaigns.PostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `donationCampaignId` | `path` | `string` | yes |
| `status` | `path` | `CampaignStatusTransition` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignStatusTransition` | `campaignStatusTransitionSchema` | `src/models/campaign-status-transition.ts` |
| `DonationCampaign1` | `donationCampaign1Schema` | `src/models/donation-campaign1.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postCompaniesCompanyIdNonprofits

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCompaniesCompanyIdNonprofits(request: DonationCampaigns.PostCompaniesCompanyIdNonprofitsRequest, options?: RequestOptions): ApiPromise<ListNonprofitsResponse, DonationCampaigns.PostCompaniesCompanyIdNonprofitsError>`
- **Wire**: `POST /companies/{companyId}/nonprofits`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ListNonprofitsResponse`
- **Error**: `DonationCampaigns.PostCompaniesCompanyIdNonprofitsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DonationCampaigns.PostCompaniesCompanyIdNonprofitsRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes | — |
| `searchTerm` | `query` | `string` | no | — |
| `pageNumber` | `query` | `number` | no | — |
| `pageSize` | `query` | `number` | no | `10` |
| `goal` | `query` | `string[]` | no | — |
| `body` | `body` | `ListNonprofitsRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListNonprofitsRequest` | `listNonprofitsRequestSchema` | `src/models/list-nonprofits-request.ts` |
| `ListNonprofitsResponse` | `listNonprofitsResponseSchema` | `src/models/list-nonprofits-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

