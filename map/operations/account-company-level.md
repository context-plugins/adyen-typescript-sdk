<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountCompanyLevel — operations

Accessor: `client.accountCompanyLevel` · Source: `src/resources/account-company-level.ts` · 3 operations · Request and error types: namespace `AccountCompanyLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getCompanies

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompanies(request: AccountCompanyLevel.GetCompaniesRequest, options?: RequestOptions): ApiPromise<ListCompanyResponse, AccountCompanyLevel.GetCompaniesError>`
- **Wire**: `GET /companies`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCompanyResponse`
- **Error**: `AccountCompanyLevel.GetCompaniesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountCompanyLevel.GetCompaniesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pageNumber` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCompanyResponse` | `listCompanyResponseSchema` | `src/models/list-company-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyId(request: AccountCompanyLevel.GetCompaniesCompanyIdRequest, options?: RequestOptions): ApiPromise<Company2, AccountCompanyLevel.GetCompaniesCompanyIdError>`
- **Wire**: `GET /companies/{companyId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Company2`
- **Error**: `AccountCompanyLevel.GetCompaniesCompanyIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountCompanyLevel.GetCompaniesCompanyIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Company2` | `company2Schema` | `src/models/company2.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyIdMerchants

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdMerchants(request: AccountCompanyLevel.GetCompaniesCompanyIdMerchantsRequest, options?: RequestOptions): ApiPromise<ListMerchantResponse, AccountCompanyLevel.GetCompaniesCompanyIdMerchantsError>`
- **Wire**: `GET /companies/{companyId}/merchants`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMerchantResponse`
- **Error**: `AccountCompanyLevel.GetCompaniesCompanyIdMerchantsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountCompanyLevel.GetCompaniesCompanyIdMerchantsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `pageNumber` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListMerchantResponse` | `listMerchantResponseSchema` | `src/models/list-merchant-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

