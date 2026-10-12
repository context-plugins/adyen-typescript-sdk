<!-- Generated file — do not edit; regenerated with the SDK. -->

# GrantsApi — operations

Accessor: `client.grantsApi` · Source: `src/resources/grants-api.ts` · 6 operations · Request and error types: namespace `GrantsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getGrantsGrantId

- **Server**: `default15` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGrantsGrantId(request: GrantsApi.GetGrantsGrantIdRequest, options?: RequestOptions): ApiPromise<Grant, GrantsApi.GetGrantsGrantIdError>`
- **Wire**: `GET /grants/{grantId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Grant`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `GrantsApi.GetGrantsGrantIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantsApi.GetGrantsGrantIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `grantId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Grant` | `grantSchema` | `src/models/grant.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getGrantsGrantIdDisbursements

- **Server**: `default15` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGrantsGrantIdDisbursements(request: GrantsApi.GetGrantsGrantIdDisbursementsRequest, options?: RequestOptions): ApiPromise<Disbursements, GrantsApi.GetGrantsGrantIdDisbursementsError>`
- **Wire**: `GET /grants/{grantId}/disbursements`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Disbursements`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `GrantsApi.GetGrantsGrantIdDisbursementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantsApi.GetGrantsGrantIdDisbursementsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `grantId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Disbursements` | `disbursementsSchema` | `src/models/disbursements.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getGrantsGrantIdDisbursementsDisbursementId

- **Server**: `default15` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGrantsGrantIdDisbursementsDisbursementId(request: GrantsApi.GetGrantsGrantIdDisbursementsDisbursementIdRequest, options?: RequestOptions): ApiPromise<Disbursement, GrantsApi.GetGrantsGrantIdDisbursementsDisbursementIdError>`
- **Wire**: `GET /grants/{grantId}/disbursements/{disbursementId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Disbursement`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `GrantsApi.GetGrantsGrantIdDisbursementsDisbursementIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantsApi.GetGrantsGrantIdDisbursementsDisbursementIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `grantId` | `path` | `string` | yes |
| `disbursementId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Disbursement` | `disbursementSchema` | `src/models/disbursement.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getGrants2

- **Server**: `default15` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGrants2(request: GrantsApi.GetGrants2Request, options?: RequestOptions): ApiPromise<Grants, GrantsApi.GetGrants2Error>`
- **Wire**: `GET /grants`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Grants`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `GrantsApi.GetGrants2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantsApi.GetGrants2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `counterpartyAccountHolderId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Grants` | `grantsSchema` | `src/models/grants.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### patchGrantsGrantIdDisbursementsDisbursementId

- **Server**: `default15` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchGrantsGrantIdDisbursementsDisbursementId(request: GrantsApi.PatchGrantsGrantIdDisbursementsDisbursementIdRequest, options?: RequestOptions): ApiPromise<Disbursement, GrantsApi.PatchGrantsGrantIdDisbursementsDisbursementIdError>`
- **Wire**: `PATCH /grants/{grantId}/disbursements/{disbursementId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Disbursement`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `GrantsApi.PatchGrantsGrantIdDisbursementsDisbursementIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantsApi.PatchGrantsGrantIdDisbursementsDisbursementIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `grantId` | `path` | `string` | yes |
| `disbursementId` | `path` | `string` | yes |
| `body` | `body` | `DisbursementInfoUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisbursementInfoUpdate` | `disbursementInfoUpdateSchema` | `src/models/disbursement-info-update.ts` |
| `Disbursement` | `disbursementSchema` | `src/models/disbursement.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postGrants2

- **Server**: `default15` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postGrants2(request: GrantsApi.PostGrants2Request, options?: RequestOptions): ApiPromise<Grant, GrantsApi.PostGrants2Error>`
- **Wire**: `POST /grants`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Grant`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `GrantsApi.PostGrants2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantsApi.PostGrants2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CapitalGrantInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CapitalGrantInfo` | `capitalGrantInfoSchema` | `src/models/capital-grant-info.ts` |
| `Grant` | `grantSchema` | `src/models/grant.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

