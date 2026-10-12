<!-- Generated file — do not edit; regenerated with the SDK. -->

# GrantAccounts — operations

Accessor: `client.grantAccounts` · Source: `src/resources/grant-accounts.ts` · 2 operations · Request and error types: namespace `GrantAccounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getGrantAccountsId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGrantAccountsId(request: GrantAccounts.GetGrantAccountsIdRequest, options?: RequestOptions): ApiPromise<CapitalGrantAccount, GrantAccounts.GetGrantAccountsIdError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /grantAccounts/{id}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CapitalGrantAccount`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `GrantAccounts.GetGrantAccountsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantAccounts.GetGrantAccountsIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CapitalGrantAccount` | `capitalGrantAccountSchema` | `src/models/capital-grant-account.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getGrantAccountsId1

- **Server**: `default15` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGrantAccountsId1(request: GrantAccounts.GetGrantAccountsId1Request, options?: RequestOptions): ApiPromise<GrantAccount, GrantAccounts.GetGrantAccountsId1Error>`
- **Wire**: `GET /grantAccounts/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GrantAccount`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `GrantAccounts.GetGrantAccountsId1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantAccounts.GetGrantAccountsId1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GrantAccount` | `grantAccountSchema` | `src/models/grant-account.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

