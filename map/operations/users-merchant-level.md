<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsersMerchantLevel — operations

Accessor: `client.usersMerchantLevel` · Source: `src/resources/users-merchant-level.ts` · 4 operations · Request and error types: namespace `UsersMerchantLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMerchantsMerchantIdUsers

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdUsers(request: UsersMerchantLevel.GetMerchantsMerchantIdUsersRequest, options?: RequestOptions): ApiPromise<ListMerchantUsersResponse, UsersMerchantLevel.GetMerchantsMerchantIdUsersError>`
- **Wire**: `GET /merchants/{merchantId}/users`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMerchantUsersResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `UsersMerchantLevel.GetMerchantsMerchantIdUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersMerchantLevel.GetMerchantsMerchantIdUsersRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `pageNumber` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |
| `username` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListMerchantUsersResponse` | `listMerchantUsersResponseSchema` | `src/models/list-merchant-users-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdUsersUserId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdUsersUserId(request: UsersMerchantLevel.GetMerchantsMerchantIdUsersUserIdRequest, options?: RequestOptions): ApiPromise<User, UsersMerchantLevel.GetMerchantsMerchantIdUsersUserIdError>`
- **Wire**: `GET /merchants/{merchantId}/users/{userId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `User`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `UsersMerchantLevel.GetMerchantsMerchantIdUsersUserIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersMerchantLevel.GetMerchantsMerchantIdUsersUserIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `userId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `User` | `userSchema` | `src/models/user.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchMerchantsMerchantIdUsersUserId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchMerchantsMerchantIdUsersUserId(request: UsersMerchantLevel.PatchMerchantsMerchantIdUsersUserIdRequest, options?: RequestOptions): ApiPromise<User, UsersMerchantLevel.PatchMerchantsMerchantIdUsersUserIdError>`
- **Wire**: `PATCH /merchants/{merchantId}/users/{userId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `User`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `UsersMerchantLevel.PatchMerchantsMerchantIdUsersUserIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersMerchantLevel.PatchMerchantsMerchantIdUsersUserIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `userId` | `path` | `string` | yes |
| `body` | `body` | `UpdateMerchantUserRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateMerchantUserRequest` | `updateMerchantUserRequestSchema` | `src/models/update-merchant-user-request.ts` |
| `User` | `userSchema` | `src/models/user.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchantsMerchantIdUsers

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdUsers(request: UsersMerchantLevel.PostMerchantsMerchantIdUsersRequest, options?: RequestOptions): ApiPromise<CreateUserResponse, UsersMerchantLevel.PostMerchantsMerchantIdUsersError>`
- **Wire**: `POST /merchants/{merchantId}/users`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateUserResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `UsersMerchantLevel.PostMerchantsMerchantIdUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UsersMerchantLevel.PostMerchantsMerchantIdUsersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `body` | `body` | `CreateMerchantUserRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateMerchantUserRequest` | `createMerchantUserRequestSchema` | `src/models/create-merchant-user-request.ts` |
| `CreateUserResponse` | `createUserResponseSchema` | `src/models/create-user-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

