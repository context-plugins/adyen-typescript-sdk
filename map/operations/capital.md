<!-- Generated file — do not edit; regenerated with the SDK. -->

# Capital — operations

Accessor: `client.capital` · Source: `src/resources/capital.ts` · 3 operations · Request and error types: namespace `Capital`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getGrants

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGrants(request: Capital.GetGrantsRequest, options?: RequestOptions): ApiPromise<CapitalGrants, Capital.GetGrantsError>`
- **Wire**: `GET /grants`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CapitalGrants`
- **Error**: `Capital.GetGrantsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [404] `RestServiceError` · `"restServiceError5"` [422] `RestServiceError` · `"restServiceError6"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Capital.GetGrantsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `counterpartyAccountHolderId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CapitalGrants` | `capitalGrantsSchema` | `src/models/capital-grants.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getGrantsId

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGrantsId(request: Capital.GetGrantsIdRequest, options?: RequestOptions): ApiPromise<CapitalGrant, Capital.GetGrantsIdError>`
- **Wire**: `GET /grants/{id}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CapitalGrant`
- **Error**: `Capital.GetGrantsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [404] `RestServiceError` · `"restServiceError5"` [422] `RestServiceError` · `"restServiceError6"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Capital.GetGrantsIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CapitalGrant` | `capitalGrantSchema` | `src/models/capital-grant.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postGrants

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postGrants(request: Capital.PostGrantsRequest, options?: RequestOptions): ApiPromise<CapitalGrant, Capital.PostGrantsError>`
- **Wire**: `POST /grants`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CapitalGrant`
- **Error**: `Capital.PostGrantsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [404] `RestServiceError` · `"restServiceError5"` [422] `RestServiceError` · `"restServiceError6"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Capital.PostGrantsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `CapitalGrantInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CapitalGrantInfo` | `capitalGrantInfoSchema` | `src/models/capital-grant-info.ts` |
| `CapitalGrant` | `capitalGrantSchema` | `src/models/capital-grant.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

