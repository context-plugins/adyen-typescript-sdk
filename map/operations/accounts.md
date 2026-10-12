<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.accounts` · Source: `src/resources/accounts.ts` · 3 operations · Request and error types: namespace `Accounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postCloseAccount

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCloseAccount(request: Accounts.PostCloseAccountRequest, options?: RequestOptions): ApiPromise<CloseAccountResponse, Accounts.PostCloseAccountError>`
- **Wire**: `POST /closeAccount`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CloseAccountResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Accounts.PostCloseAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.PostCloseAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CloseAccountRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloseAccountRequest` | `closeAccountRequestSchema` | `src/models/close-account-request.ts` |
| `CloseAccountResponse` | `closeAccountResponseSchema` | `src/models/close-account-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postCreateAccount

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCreateAccount(request: Accounts.PostCreateAccountRequest, options?: RequestOptions): ApiPromise<CreateAccountResponse, Accounts.PostCreateAccountError>`
- **Wire**: `POST /createAccount`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateAccountResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Accounts.PostCreateAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.PostCreateAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateAccountRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAccountRequest` | `createAccountRequestSchema` | `src/models/create-account-request.ts` |
| `CreateAccountResponse` | `createAccountResponseSchema` | `src/models/create-account-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postUpdateAccount

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postUpdateAccount(request: Accounts.PostUpdateAccountRequest, options?: RequestOptions): ApiPromise<UpdateAccountResponse, Accounts.PostUpdateAccountError>`
- **Wire**: `POST /updateAccount`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateAccountResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Accounts.PostUpdateAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.PostUpdateAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateAccountRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateAccountRequest` | `updateAccountRequestSchema` | `src/models/update-account-request.ts` |
| `UpdateAccountResponse` | `updateAccountResponseSchema` | `src/models/update-account-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

