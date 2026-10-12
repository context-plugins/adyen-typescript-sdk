<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsersCompanyLevel — operations

Accessor: `client.usersCompanyLevel` · Source: `src/resources/users-company-level.ts` · 4 operations · Request and error types: namespace `UsersCompanyLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCompaniesCompanyIdUsers

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdUsers(request: UsersCompanyLevel.GetCompaniesCompanyIdUsersRequest, options?: RequestOptions): ApiPromise<ListCompanyUsersResponse, UsersCompanyLevel.GetCompaniesCompanyIdUsersError>`
- **Wire**: `GET /companies/{companyId}/users`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCompanyUsersResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `UsersCompanyLevel.GetCompaniesCompanyIdUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersCompanyLevel.GetCompaniesCompanyIdUsersRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `pageNumber` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |
| `username` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCompanyUsersResponse` | `listCompanyUsersResponseSchema` | `src/models/list-company-users-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyIdUsersUserId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdUsersUserId(request: UsersCompanyLevel.GetCompaniesCompanyIdUsersUserIdRequest, options?: RequestOptions): ApiPromise<CompanyUser, UsersCompanyLevel.GetCompaniesCompanyIdUsersUserIdError>`
- **Wire**: `GET /companies/{companyId}/users/{userId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanyUser`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `UsersCompanyLevel.GetCompaniesCompanyIdUsersUserIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersCompanyLevel.GetCompaniesCompanyIdUsersUserIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `userId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyUser` | `companyUserSchema` | `src/models/company-user.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchCompaniesCompanyIdUsersUserId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchCompaniesCompanyIdUsersUserId(request: UsersCompanyLevel.PatchCompaniesCompanyIdUsersUserIdRequest, options?: RequestOptions): ApiPromise<CompanyUser, UsersCompanyLevel.PatchCompaniesCompanyIdUsersUserIdError>`
- **Wire**: `PATCH /companies/{companyId}/users/{userId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CompanyUser`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `UsersCompanyLevel.PatchCompaniesCompanyIdUsersUserIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersCompanyLevel.PatchCompaniesCompanyIdUsersUserIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `UpdateCompanyUserRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCompanyUserRequest` | `updateCompanyUserRequestSchema` | `src/models/update-company-user-request.ts` |
| `CompanyUser` | `companyUserSchema` | `src/models/company-user.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postCompaniesCompanyIdUsers

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCompaniesCompanyIdUsers(request: UsersCompanyLevel.PostCompaniesCompanyIdUsersRequest, options?: RequestOptions): ApiPromise<CreateCompanyUserResponse, UsersCompanyLevel.PostCompaniesCompanyIdUsersError>`
- **Wire**: `POST /companies/{companyId}/users`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateCompanyUserResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `UsersCompanyLevel.PostCompaniesCompanyIdUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersCompanyLevel.PostCompaniesCompanyIdUsersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `body` | `body` | `CreateCompanyUserRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCompanyUserRequest` | `createCompanyUserRequestSchema` | `src/models/create-company-user-request.ts` |
| `CreateCompanyUserResponse` | `createCompanyUserResponseSchema` | `src/models/create-company-user-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

