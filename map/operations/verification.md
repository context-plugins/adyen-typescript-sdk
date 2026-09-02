<!-- Generated file — do not edit; regenerated with the SDK. -->

# Verification — operations

Accessor: `client.verification` · Source: `src/resources/verification.ts` · 8 operations · Request and error types: namespace `Verification`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### postCheckAccountHolder

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCheckAccountHolder(request: Verification.PostCheckAccountHolderRequest, options?: RequestOptions): ApiPromise<GenericResponse, Verification.PostCheckAccountHolderError>`
- **Wire**: `POST /checkAccountHolder`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GenericResponse`
- **Error**: `Verification.PostCheckAccountHolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Verification.PostCheckAccountHolderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PerformVerificationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PerformVerificationRequest` | `performVerificationRequestSchema` | `src/models/perform-verification-request.ts` |
| `GenericResponse` | `genericResponseSchema` | `src/models/generic-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postDeleteBankAccounts

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDeleteBankAccounts(request: Verification.PostDeleteBankAccountsRequest, options?: RequestOptions): ApiPromise<GenericResponse, Verification.PostDeleteBankAccountsError>`
- **Wire**: `POST /deleteBankAccounts`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GenericResponse`
- **Error**: `Verification.PostDeleteBankAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Verification.PostDeleteBankAccountsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteBankAccountRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteBankAccountRequest` | `deleteBankAccountRequestSchema` | `src/models/delete-bank-account-request.ts` |
| `GenericResponse` | `genericResponseSchema` | `src/models/generic-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postDeleteLegalArrangements

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDeleteLegalArrangements(request: Verification.PostDeleteLegalArrangementsRequest, options?: RequestOptions): ApiPromise<GenericResponse, Verification.PostDeleteLegalArrangementsError>`
- **Wire**: `POST /deleteLegalArrangements`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GenericResponse`
- **Error**: `Verification.PostDeleteLegalArrangementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Verification.PostDeleteLegalArrangementsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteLegalArrangementRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteLegalArrangementRequest` | `deleteLegalArrangementRequestSchema` | `src/models/delete-legal-arrangement-request.ts` |
| `GenericResponse` | `genericResponseSchema` | `src/models/generic-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postDeletePayoutMethods

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDeletePayoutMethods(request: Verification.PostDeletePayoutMethodsRequest, options?: RequestOptions): ApiPromise<GenericResponse, Verification.PostDeletePayoutMethodsError>`
- **Wire**: `POST /deletePayoutMethods`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GenericResponse`
- **Error**: `Verification.PostDeletePayoutMethodsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Verification.PostDeletePayoutMethodsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeletePayoutMethodRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeletePayoutMethodRequest` | `deletePayoutMethodRequestSchema` | `src/models/delete-payout-method-request.ts` |
| `GenericResponse` | `genericResponseSchema` | `src/models/generic-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postDeleteShareholders

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDeleteShareholders(request: Verification.PostDeleteShareholdersRequest, options?: RequestOptions): ApiPromise<GenericResponse, Verification.PostDeleteShareholdersError>`
- **Wire**: `POST /deleteShareholders`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GenericResponse`
- **Error**: `Verification.PostDeleteShareholdersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Verification.PostDeleteShareholdersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteShareholderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteShareholderRequest` | `deleteShareholderRequestSchema` | `src/models/delete-shareholder-request.ts` |
| `GenericResponse` | `genericResponseSchema` | `src/models/generic-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postDeleteSignatories

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDeleteSignatories(request: Verification.PostDeleteSignatoriesRequest, options?: RequestOptions): ApiPromise<GenericResponse, Verification.PostDeleteSignatoriesError>`
- **Wire**: `POST /deleteSignatories`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GenericResponse`
- **Error**: `Verification.PostDeleteSignatoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Verification.PostDeleteSignatoriesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteSignatoriesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteSignatoriesRequest` | `deleteSignatoriesRequestSchema` | `src/models/delete-signatories-request.ts` |
| `GenericResponse` | `genericResponseSchema` | `src/models/generic-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postGetUploadedDocuments

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postGetUploadedDocuments(request: Verification.PostGetUploadedDocumentsRequest, options?: RequestOptions): ApiPromise<GetUploadedDocumentsResponse, Verification.PostGetUploadedDocumentsError>`
- **Wire**: `POST /getUploadedDocuments`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GetUploadedDocumentsResponse`
- **Error**: `Verification.PostGetUploadedDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Verification.PostGetUploadedDocumentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetUploadedDocumentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetUploadedDocumentsRequest` | `getUploadedDocumentsRequestSchema` | `src/models/get-uploaded-documents-request.ts` |
| `GetUploadedDocumentsResponse` | `getUploadedDocumentsResponseSchema` | `src/models/get-uploaded-documents-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postUploadDocument

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postUploadDocument(request: Verification.PostUploadDocumentRequest, options?: RequestOptions): ApiPromise<UpdateAccountHolderResponse, Verification.PostUploadDocumentError>`
- **Wire**: `POST /uploadDocument`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateAccountHolderResponse`
- **Error**: `Verification.PostUploadDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Verification.PostUploadDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UploadDocumentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadDocumentRequest` | `uploadDocumentRequestSchema` | `src/models/upload-document-request.ts` |
| `UpdateAccountHolderResponse` | `updateAccountHolderResponseSchema` | `src/models/update-account-holder-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

