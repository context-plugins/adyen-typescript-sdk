<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountHolders — operations

Accessor: `client.accountHolders` · Source: `src/resources/account-holders.ts` · 16 operations · Request and error types: namespace `AccountHolders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAccountHoldersId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAccountHoldersId(request: AccountHolders.GetAccountHoldersIdRequest, options?: RequestOptions): ApiPromise<AccountHolder, AccountHolders.GetAccountHoldersIdError>`
- **Wire**: `GET /accountHolders/{id}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountHolder`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountHolders.GetAccountHoldersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountHolders.GetAccountHoldersIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountHolder` | `accountHolderSchema` | `src/models/account-holder.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getAccountHoldersIdBalanceAccounts

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAccountHoldersIdBalanceAccounts(request: AccountHolders.GetAccountHoldersIdBalanceAccountsRequest, options?: RequestOptions): ApiPromise<PaginatedBalanceAccountsResponse, AccountHolders.GetAccountHoldersIdBalanceAccountsError>`
- **Wire**: `GET /accountHolders/{id}/balanceAccounts`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedBalanceAccountsResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountHolders.GetAccountHoldersIdBalanceAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountHolders.GetAccountHoldersIdBalanceAccountsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedBalanceAccountsResponse` | `paginatedBalanceAccountsResponseSchema` | `src/models/paginated-balance-accounts-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getAccountHoldersIdTaxFormSummary

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAccountHoldersIdTaxFormSummary(request: AccountHolders.GetAccountHoldersIdTaxFormSummaryRequest, options?: RequestOptions): ApiPromise<TaxFormSummaryResponse, ApiError>`
- **Wire**: `GET /accountHolders/{id}/taxFormSummary`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaxFormSummaryResponse`
- **Error**: `AdyenError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AccountHolders.GetAccountHoldersIdTaxFormSummaryRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `formType` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaxFormSummaryResponse` | `taxFormSummaryResponseSchema` | `src/models/tax-form-summary-response.ts` |

### getAccountHoldersIdTaxForms

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAccountHoldersIdTaxForms(request: AccountHolders.GetAccountHoldersIdTaxFormsRequest, options?: RequestOptions): ApiPromise<GetTaxFormResponse1, AccountHolders.GetAccountHoldersIdTaxFormsError>`
- **Wire**: `GET /accountHolders/{id}/taxForms`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetTaxFormResponse1`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountHolders.GetAccountHoldersIdTaxFormsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [404] `RestServiceError` · `"restServiceError5"` [422] `RestServiceError` · `"restServiceError6"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountHolders.GetAccountHoldersIdTaxFormsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `formType` | `query` | `FormType` | yes |
| `year` | `query` | `number` | yes |
| `legalEntityId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FormType` | `formTypeSchema` | `src/models/form-type.ts` |
| `GetTaxFormResponse1` | `getTaxFormResponse1Schema` | `src/models/get-tax-form-response1.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getAccountHoldersIdTransactionRules

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAccountHoldersIdTransactionRules(request: AccountHolders.GetAccountHoldersIdTransactionRulesRequest, options?: RequestOptions): ApiPromise<TransactionRulesResponse, AccountHolders.GetAccountHoldersIdTransactionRulesError>`
- **Wire**: `GET /accountHolders/{id}/transactionRules`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionRulesResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountHolders.GetAccountHoldersIdTransactionRulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountHolders.GetAccountHoldersIdTransactionRulesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionRulesResponse` | `transactionRulesResponseSchema` | `src/models/transaction-rules-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchAccountHoldersId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchAccountHoldersId(request: AccountHolders.PatchAccountHoldersIdRequest, options?: RequestOptions): ApiPromise<AccountHolder, AccountHolders.PatchAccountHoldersIdError>`
- **Wire**: `PATCH /accountHolders/{id}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AccountHolder`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountHolders.PatchAccountHoldersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountHolders.PatchAccountHoldersIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `AccountHolderUpdateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountHolderUpdateRequest` | `accountHolderUpdateRequestSchema` | `src/models/account-holder-update-request.ts` |
| `AccountHolder` | `accountHolderSchema` | `src/models/account-holder.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postAccountHolders

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postAccountHolders(request: AccountHolders.PostAccountHoldersRequest, options?: RequestOptions): ApiPromise<AccountHolder, AccountHolders.PostAccountHoldersError>`
- **Wire**: `POST /accountHolders`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AccountHolder`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountHolders.PostAccountHoldersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountHolders.PostAccountHoldersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AccountHolderInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountHolderInfo` | `accountHolderInfoSchema` | `src/models/account-holder-info.ts` |
| `AccountHolder` | `accountHolderSchema` | `src/models/account-holder.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postCloseAccountHolder

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCloseAccountHolder(request: AccountHolders.PostCloseAccountHolderRequest, options?: RequestOptions): ApiPromise<CloseAccountHolderResponse, AccountHolders.PostCloseAccountHolderError>`
- **Wire**: `POST /closeAccountHolder`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CloseAccountHolderResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountHolders.PostCloseAccountHolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountHolders.PostCloseAccountHolderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CloseAccountHolderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloseAccountHolderRequest` | `closeAccountHolderRequestSchema` | `src/models/close-account-holder-request.ts` |
| `CloseAccountHolderResponse` | `closeAccountHolderResponseSchema` | `src/models/close-account-holder-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postCloseStores

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCloseStores(request: AccountHolders.PostCloseStoresRequest, options?: RequestOptions): ApiPromise<GenericResponse, AccountHolders.PostCloseStoresError>`
- **Wire**: `POST /closeStores`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GenericResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountHolders.PostCloseStoresError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountHolders.PostCloseStoresRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CloseStoresRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloseStoresRequest` | `closeStoresRequestSchema` | `src/models/close-stores-request.ts` |
| `GenericResponse` | `genericResponseSchema` | `src/models/generic-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postCreateAccountHolder

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCreateAccountHolder(request: AccountHolders.PostCreateAccountHolderRequest, options?: RequestOptions): ApiPromise<CreateAccountHolderResponse, AccountHolders.PostCreateAccountHolderError>`
- **Wire**: `POST /createAccountHolder`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateAccountHolderResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountHolders.PostCreateAccountHolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountHolders.PostCreateAccountHolderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateAccountHolderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAccountHolderRequest` | `createAccountHolderRequestSchema` | `src/models/create-account-holder-request.ts` |
| `CreateAccountHolderResponse` | `createAccountHolderResponseSchema` | `src/models/create-account-holder-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postGetAccountHolder

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postGetAccountHolder(request: AccountHolders.PostGetAccountHolderRequest, options?: RequestOptions): ApiPromise<GetAccountHolderResponse, AccountHolders.PostGetAccountHolderError>`
- **Wire**: `POST /getAccountHolder`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetAccountHolderResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountHolders.PostGetAccountHolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountHolders.PostGetAccountHolderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetAccountHolderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetAccountHolderRequest` | `getAccountHolderRequestSchema` | `src/models/get-account-holder-request.ts` |
| `GetAccountHolderResponse` | `getAccountHolderResponseSchema` | `src/models/get-account-holder-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postGetTaxForm

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postGetTaxForm(request: AccountHolders.PostGetTaxFormRequest, options?: RequestOptions): ApiPromise<GetTaxFormResponse, AccountHolders.PostGetTaxFormError>`
- **Wire**: `POST /getTaxForm`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetTaxFormResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountHolders.PostGetTaxFormError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountHolders.PostGetTaxFormRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetTaxFormRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTaxFormRequest` | `getTaxFormRequestSchema` | `src/models/get-tax-form-request.ts` |
| `GetTaxFormResponse` | `getTaxFormResponseSchema` | `src/models/get-tax-form-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postSuspendAccountHolder

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postSuspendAccountHolder(request: AccountHolders.PostSuspendAccountHolderRequest, options?: RequestOptions): ApiPromise<SuspendAccountHolderResponse, AccountHolders.PostSuspendAccountHolderError>`
- **Wire**: `POST /suspendAccountHolder`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuspendAccountHolderResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountHolders.PostSuspendAccountHolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountHolders.PostSuspendAccountHolderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SuspendAccountHolderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SuspendAccountHolderRequest` | `suspendAccountHolderRequestSchema` | `src/models/suspend-account-holder-request.ts` |
| `SuspendAccountHolderResponse` | `suspendAccountHolderResponseSchema` | `src/models/suspend-account-holder-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postUnSuspendAccountHolder

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postUnSuspendAccountHolder(request: AccountHolders.PostUnSuspendAccountHolderRequest, options?: RequestOptions): ApiPromise<UnSuspendAccountHolderResponse, AccountHolders.PostUnSuspendAccountHolderError>`
- **Wire**: `POST /unSuspendAccountHolder`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UnSuspendAccountHolderResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountHolders.PostUnSuspendAccountHolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountHolders.PostUnSuspendAccountHolderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UnSuspendAccountHolderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnSuspendAccountHolderRequest` | `unSuspendAccountHolderRequestSchema` | `src/models/un-suspend-account-holder-request.ts` |
| `UnSuspendAccountHolderResponse` | `unSuspendAccountHolderResponseSchema` | `src/models/un-suspend-account-holder-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postUpdateAccountHolder

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postUpdateAccountHolder(request: AccountHolders.PostUpdateAccountHolderRequest, options?: RequestOptions): ApiPromise<UpdateAccountHolderResponse, AccountHolders.PostUpdateAccountHolderError>`
- **Wire**: `POST /updateAccountHolder`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateAccountHolderResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountHolders.PostUpdateAccountHolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountHolders.PostUpdateAccountHolderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateAccountHolderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateAccountHolderRequest` | `updateAccountHolderRequestSchema` | `src/models/update-account-holder-request.ts` |
| `UpdateAccountHolderResponse` | `updateAccountHolderResponseSchema` | `src/models/update-account-holder-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postUpdateAccountHolderState

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postUpdateAccountHolderState(request: AccountHolders.PostUpdateAccountHolderStateRequest, options?: RequestOptions): ApiPromise<GetAccountHolderStatusResponse, AccountHolders.PostUpdateAccountHolderStateError>`
- **Wire**: `POST /updateAccountHolderState`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetAccountHolderStatusResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountHolders.PostUpdateAccountHolderStateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountHolders.PostUpdateAccountHolderStateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateAccountHolderStateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateAccountHolderStateRequest` | `updateAccountHolderStateRequestSchema` | `src/models/update-account-holder-state-request.ts` |
| `GetAccountHolderStatusResponse` | `getAccountHolderStatusResponseSchema` | `src/models/get-account-holder-status-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

