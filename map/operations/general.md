<!-- Generated file — do not edit; regenerated with the SDK. -->

# General — operations

Accessor: `client.general` · Source: `src/resources/general.ts` · 41 operations · Request and error types: namespace `General`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### postAcceptDispute

- **Server**: `default22` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postAcceptDispute(request: General.PostAcceptDisputeRequest, options?: RequestOptions): ApiPromise<AcceptDisputeResponse, General.PostAcceptDisputeError>`
- **Wire**: `POST /acceptDispute`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AcceptDisputeResponse`
- **Error**: `General.PostAcceptDisputeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostAcceptDisputeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AcceptDisputeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AcceptDisputeRequest` | `acceptDisputeRequestSchema` | `src/models/accept-dispute-request.ts` |
| `AcceptDisputeResponse` | `acceptDisputeResponseSchema` | `src/models/accept-dispute-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postAccountHolderBalance

- **Server**: `default16` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postAccountHolderBalance(request: General.PostAccountHolderBalanceRequest, options?: RequestOptions): ApiPromise<AccountHolderBalanceResponse, General.PostAccountHolderBalanceError>`
- **Wire**: `POST /accountHolderBalance`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AccountHolderBalanceResponse`
- **Error**: `General.PostAccountHolderBalanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostAccountHolderBalanceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CloseAccountHolderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloseAccountHolderRequest` | `closeAccountHolderRequestSchema` | `src/models/close-account-holder-request.ts` |
| `AccountHolderBalanceResponse` | `accountHolderBalanceResponseSchema` | `src/models/account-holder-balance-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postAccountHolderTransactionList

- **Server**: `default16` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postAccountHolderTransactionList(request: General.PostAccountHolderTransactionListRequest, options?: RequestOptions): ApiPromise<AccountHolderTransactionListResponse, General.PostAccountHolderTransactionListError>`
- **Wire**: `POST /accountHolderTransactionList`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AccountHolderTransactionListResponse`
- **Error**: `General.PostAccountHolderTransactionListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostAccountHolderTransactionListRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AccountHolderTransactionListRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountHolderTransactionListRequest` | `accountHolderTransactionListRequestSchema` | `src/models/account-holder-transaction-list-request.ts` |
| `AccountHolderTransactionListResponse` | `accountHolderTransactionListResponseSchema` | `src/models/account-holder-transaction-list-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postAssignTerminals

- **Server**: `default28` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postAssignTerminals(request: General.PostAssignTerminalsRequest, options?: RequestOptions): ApiPromise<AssignTerminalsResponse, General.PostAssignTerminalsError>`
- **Wire**: `POST /assignTerminals`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AssignTerminalsResponse`
- **Error**: `General.PostAssignTerminalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostAssignTerminalsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AssignTerminalsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssignTerminalsRequest` | `assignTerminalsRequestSchema` | `src/models/assign-terminals-request.ts` |
| `AssignTerminalsResponse` | `assignTerminalsResponseSchema` | `src/models/assign-terminals-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postChangeStatus

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postChangeStatus(request: General.PostChangeStatusRequest, options?: RequestOptions): ApiPromise<StoredValueStatusChangeResponse, General.PostChangeStatusError>`
- **Wire**: `POST /changeStatus`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `StoredValueStatusChangeResponse`
- **Error**: `General.PostChangeStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostChangeStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StoredValueStatusChangeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoredValueStatusChangeRequest` | `storedValueStatusChangeRequestSchema` | `src/models/stored-value-status-change-request.ts` |
| `StoredValueStatusChangeResponse` | `storedValueStatusChangeResponseSchema` | `src/models/stored-value-status-change-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postCheckBalance

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCheckBalance(request: General.PostCheckBalanceRequest, options?: RequestOptions): ApiPromise<StoredValueBalanceCheckResponse, General.PostCheckBalanceError>`
- **Wire**: `POST /checkBalance`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `StoredValueBalanceCheckResponse`
- **Error**: `General.PostCheckBalanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostCheckBalanceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StoredValueBalanceCheckRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoredValueBalanceCheckRequest` | `storedValueBalanceCheckRequestSchema` | `src/models/stored-value-balance-check-request.ts` |
| `StoredValueBalanceCheckResponse` | `storedValueBalanceCheckResponseSchema` | `src/models/stored-value-balance-check-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postCreateNotificationConfiguration

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCreateNotificationConfiguration(request: General.PostCreateNotificationConfigurationRequest, options?: RequestOptions): ApiPromise<GetNotificationConfigurationResponse, General.PostCreateNotificationConfigurationError>`
- **Wire**: `POST /createNotificationConfiguration`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GetNotificationConfigurationResponse`
- **Error**: `General.PostCreateNotificationConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostCreateNotificationConfigurationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateNotificationConfigurationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateNotificationConfigurationRequest` | `createNotificationConfigurationRequestSchema` | `src/models/create-notification-configuration-request.ts` |
| `GetNotificationConfigurationResponse` | `getNotificationConfigurationResponseSchema` | `src/models/get-notification-configuration-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postCreatePermit

- **Server**: `default2` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCreatePermit(request: General.PostCreatePermitRequest, options?: RequestOptions): ApiPromise<CreatePermitResult, General.PostCreatePermitError>`
- **Wire**: `POST /createPermit`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreatePermitResult`
- **Error**: `General.PostCreatePermitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostCreatePermitRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreatePermitRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreatePermitRequest` | `createPermitRequestSchema` | `src/models/create-permit-request.ts` |
| `CreatePermitResult` | `createPermitResultSchema` | `src/models/create-permit-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postCreateTestCardRanges

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCreateTestCardRanges(request: General.PostCreateTestCardRangesRequest, options?: RequestOptions): ApiPromise<CreateTestCardRangesResult, General.PostCreateTestCardRangesError>`
- **Wire**: `POST /createTestCardRanges`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateTestCardRangesResult`
- **Error**: `General.PostCreateTestCardRangesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostCreateTestCardRangesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateTestCardRangesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTestCardRangesRequest` | `createTestCardRangesRequestSchema` | `src/models/create-test-card-ranges-request.ts` |
| `CreateTestCardRangesResult` | `createTestCardRangesResultSchema` | `src/models/create-test-card-ranges-result.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postDebitAccountHolder

- **Server**: `default16` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDebitAccountHolder(request: General.PostDebitAccountHolderRequest, options?: RequestOptions): ApiPromise<DebitAccountHolderResponse, General.PostDebitAccountHolderError>`
- **Wire**: `POST /debitAccountHolder`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DebitAccountHolderResponse`
- **Error**: `General.PostDebitAccountHolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostDebitAccountHolderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DebitAccountHolderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DebitAccountHolderRequest` | `debitAccountHolderRequestSchema` | `src/models/debit-account-holder-request.ts` |
| `DebitAccountHolderResponse` | `debitAccountHolderResponseSchema` | `src/models/debit-account-holder-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postDefendDispute

- **Server**: `default22` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDefendDispute(request: General.PostDefendDisputeRequest, options?: RequestOptions): ApiPromise<DefendDisputeResponse, General.PostDefendDisputeError>`
- **Wire**: `POST /defendDispute`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DefendDisputeResponse`
- **Error**: `General.PostDefendDisputeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostDefendDisputeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DefendDisputeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DefendDisputeRequest` | `defendDisputeRequestSchema` | `src/models/defend-dispute-request.ts` |
| `DefendDisputeResponse` | `defendDisputeResponseSchema` | `src/models/defend-dispute-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postDeleteDisputeDefenseDocument

- **Server**: `default22` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDeleteDisputeDefenseDocument(request: General.PostDeleteDisputeDefenseDocumentRequest, options?: RequestOptions): ApiPromise<DeleteDefenseDocumentResponse, General.PostDeleteDisputeDefenseDocumentError>`
- **Wire**: `POST /deleteDisputeDefenseDocument`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeleteDefenseDocumentResponse`
- **Error**: `General.PostDeleteDisputeDefenseDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostDeleteDisputeDefenseDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteDefenseDocumentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteDefenseDocumentRequest` | `deleteDefenseDocumentRequestSchema` | `src/models/delete-defense-document-request.ts` |
| `DeleteDefenseDocumentResponse` | `deleteDefenseDocumentResponseSchema` | `src/models/delete-defense-document-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postDeleteNotificationConfigurations

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDeleteNotificationConfigurations(request: General.PostDeleteNotificationConfigurationsRequest, options?: RequestOptions): ApiPromise<GenericResponse, General.PostDeleteNotificationConfigurationsError>`
- **Wire**: `POST /deleteNotificationConfigurations`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GenericResponse`
- **Error**: `General.PostDeleteNotificationConfigurationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostDeleteNotificationConfigurationsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteNotificationConfigurationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteNotificationConfigurationRequest` | `deleteNotificationConfigurationRequestSchema` | `src/models/delete-notification-configuration-request.ts` |
| `GenericResponse` | `genericResponseSchema` | `src/models/generic-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postDisable

- **Server**: `default2` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDisable(request: General.PostDisableRequest, options?: RequestOptions): ApiPromise<DisableResult, General.PostDisableError>`
- **Wire**: `POST /disable`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DisableResult`
- **Error**: `General.PostDisableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostDisableRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DisableRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisableRequest` | `disableRequestSchema` | `src/models/disable-request.ts` |
| `DisableResult` | `disableResultSchema` | `src/models/disable-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postDisablePermit

- **Server**: `default2` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDisablePermit(request: General.PostDisablePermitRequest, options?: RequestOptions): ApiPromise<DisablePermitResult, General.PostDisablePermitError>`
- **Wire**: `POST /disablePermit`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DisablePermitResult`
- **Error**: `General.PostDisablePermitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostDisablePermitRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DisablePermitRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisablePermitRequest` | `disablePermitRequestSchema` | `src/models/disable-permit-request.ts` |
| `DisablePermitResult` | `disablePermitResultSchema` | `src/models/disable-permit-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postFindTerminal

- **Server**: `default28` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postFindTerminal(request: General.PostFindTerminalRequest, options?: RequestOptions): ApiPromise<FindTerminalResponse, General.PostFindTerminalError>`
- **Wire**: `POST /findTerminal`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `FindTerminalResponse`
- **Error**: `General.PostFindTerminalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostFindTerminalRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FindTerminalRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FindTerminalRequest` | `findTerminalRequestSchema` | `src/models/find-terminal-request.ts` |
| `FindTerminalResponse` | `findTerminalResponseSchema` | `src/models/find-terminal-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postGet3DsAvailability

- **Server**: `default4` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postGet3DsAvailability(request: General.PostGet3DsAvailabilityRequest, options?: RequestOptions): ApiPromise<ThreeDsAvailabilityResponse, General.PostGet3DsAvailabilityError>`
- **Wire**: `POST /get3dsAvailability`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ThreeDsAvailabilityResponse`
- **Error**: `General.PostGet3DsAvailabilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostGet3DsAvailabilityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ThreeDsAvailabilityRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ThreeDsAvailabilityRequest` | `threeDsAvailabilityRequestSchema` | `src/models/three-ds-availability-request.ts` |
| `ThreeDsAvailabilityResponse` | `threeDsAvailabilityResponseSchema` | `src/models/three-ds-availability-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postGetCostEstimate

- **Server**: `default4` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postGetCostEstimate(request: General.PostGetCostEstimateRequest, options?: RequestOptions): ApiPromise<CostEstimateResponse, General.PostGetCostEstimateError>`
- **Wire**: `POST /getCostEstimate`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CostEstimateResponse`
- **Error**: `General.PostGetCostEstimateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostGetCostEstimateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CostEstimateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CostEstimateRequest` | `costEstimateRequestSchema` | `src/models/cost-estimate-request.ts` |
| `CostEstimateResponse` | `costEstimateResponseSchema` | `src/models/cost-estimate-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postGetNotificationConfiguration

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postGetNotificationConfiguration(request: General.PostGetNotificationConfigurationRequest, options?: RequestOptions): ApiPromise<GetNotificationConfigurationResponse, General.PostGetNotificationConfigurationError>`
- **Wire**: `POST /getNotificationConfiguration`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GetNotificationConfigurationResponse`
- **Error**: `General.PostGetNotificationConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostGetNotificationConfigurationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetNotificationConfigurationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetNotificationConfigurationRequest` | `getNotificationConfigurationRequestSchema` | `src/models/get-notification-configuration-request.ts` |
| `GetNotificationConfigurationResponse` | `getNotificationConfigurationResponseSchema` | `src/models/get-notification-configuration-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postGetNotificationConfigurationList

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postGetNotificationConfigurationList(request: General.PostGetNotificationConfigurationListRequest, options?: RequestOptions): ApiPromise<GetNotificationConfigurationListResponse, General.PostGetNotificationConfigurationListError>`
- **Wire**: `POST /getNotificationConfigurationList`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **Returns**: `GetNotificationConfigurationListResponse`
- **Error**: `General.PostGetNotificationConfigurationListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostGetNotificationConfigurationListRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetNotificationConfigurationListResponse` | `getNotificationConfigurationListResponseSchema` | `src/models/get-notification-configuration-list-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postGetStoresUnderAccount

- **Server**: `default28` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postGetStoresUnderAccount(request: General.PostGetStoresUnderAccountRequest, options?: RequestOptions): ApiPromise<GetStoresUnderAccountResponse, General.PostGetStoresUnderAccountError>`
- **Wire**: `POST /getStoresUnderAccount`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GetStoresUnderAccountResponse`
- **Error**: `General.PostGetStoresUnderAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostGetStoresUnderAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetStoresUnderAccountRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetStoresUnderAccountRequest` | `getStoresUnderAccountRequestSchema` | `src/models/get-stores-under-account-request.ts` |
| `GetStoresUnderAccountResponse` | `getStoresUnderAccountResponseSchema` | `src/models/get-stores-under-account-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postGetTerminalDetails

- **Server**: `default28` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postGetTerminalDetails(request: General.PostGetTerminalDetailsRequest, options?: RequestOptions): ApiPromise<GetTerminalDetailsResponse, General.PostGetTerminalDetailsError>`
- **Wire**: `POST /getTerminalDetails`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GetTerminalDetailsResponse`
- **Error**: `General.PostGetTerminalDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostGetTerminalDetailsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetTerminalDetailsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTerminalDetailsRequest` | `getTerminalDetailsRequestSchema` | `src/models/get-terminal-details-request.ts` |
| `GetTerminalDetailsResponse` | `getTerminalDetailsResponseSchema` | `src/models/get-terminal-details-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postGetTerminalsUnderAccount

- **Server**: `default28` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postGetTerminalsUnderAccount(request: General.PostGetTerminalsUnderAccountRequest, options?: RequestOptions): ApiPromise<GetTerminalsUnderAccountResponse, General.PostGetTerminalsUnderAccountError>`
- **Wire**: `POST /getTerminalsUnderAccount`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GetTerminalsUnderAccountResponse`
- **Error**: `General.PostGetTerminalsUnderAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostGetTerminalsUnderAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetTerminalsUnderAccountRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTerminalsUnderAccountRequest` | `getTerminalsUnderAccountRequestSchema` | `src/models/get-terminals-under-account-request.ts` |
| `GetTerminalsUnderAccountResponse` | `getTerminalsUnderAccountResponseSchema` | `src/models/get-terminals-under-account-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postIssue

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postIssue(request: General.PostIssueRequest, options?: RequestOptions): ApiPromise<StoredValueIssueResponse, General.PostIssueError>`
- **Wire**: `POST /issue`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `StoredValueIssueResponse`
- **Error**: `General.PostIssueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostIssueRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StoredValueIssueRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoredValueIssueRequest` | `storedValueIssueRequestSchema` | `src/models/stored-value-issue-request.ts` |
| `StoredValueIssueResponse` | `storedValueIssueResponseSchema` | `src/models/stored-value-issue-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postListRecurringDetails

- **Server**: `default2` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postListRecurringDetails(request: General.PostListRecurringDetailsRequest, options?: RequestOptions): ApiPromise<RecurringDetailsResult, General.PostListRecurringDetailsError>`
- **Wire**: `POST /listRecurringDetails`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RecurringDetailsResult`
- **Error**: `General.PostListRecurringDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostListRecurringDetailsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RecurringDetailsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecurringDetailsRequest` | `recurringDetailsRequestSchema` | `src/models/recurring-details-request.ts` |
| `RecurringDetailsResult` | `recurringDetailsResultSchema` | `src/models/recurring-details-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postLoad

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postLoad(request: General.PostLoadRequest, options?: RequestOptions): ApiPromise<StoredValueLoadResponse, General.PostLoadError>`
- **Wire**: `POST /load`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `StoredValueLoadResponse`
- **Error**: `General.PostLoadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostLoadRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StoredValueLoadRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoredValueLoadRequest` | `storedValueLoadRequestSchema` | `src/models/stored-value-load-request.ts` |
| `StoredValueLoadResponse` | `storedValueLoadResponseSchema` | `src/models/stored-value-load-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postMergeBalance

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMergeBalance(request: General.PostMergeBalanceRequest, options?: RequestOptions): ApiPromise<StoredValueBalanceMergeResponse, General.PostMergeBalanceError>`
- **Wire**: `POST /mergeBalance`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `StoredValueBalanceMergeResponse`
- **Error**: `General.PostMergeBalanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostMergeBalanceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StoredValueBalanceMergeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoredValueBalanceMergeRequest` | `storedValueBalanceMergeRequestSchema` | `src/models/stored-value-balance-merge-request.ts` |
| `StoredValueBalanceMergeResponse` | `storedValueBalanceMergeResponseSchema` | `src/models/stored-value-balance-merge-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postNotifyShopper

- **Server**: `default2` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postNotifyShopper(request: General.PostNotifyShopperRequest, options?: RequestOptions): ApiPromise<NotifyShopperResult, General.PostNotifyShopperError>`
- **Wire**: `POST /notifyShopper`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `NotifyShopperResult`
- **Error**: `General.PostNotifyShopperError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostNotifyShopperRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `NotifyShopperRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotifyShopperRequest` | `notifyShopperRequestSchema` | `src/models/notify-shopper-request.ts` |
| `NotifyShopperResult` | `notifyShopperResultSchema` | `src/models/notify-shopper-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postPayoutAccountHolder

- **Server**: `default16` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postPayoutAccountHolder(request: General.PostPayoutAccountHolderRequest, options?: RequestOptions): ApiPromise<PayoutAccountHolderResponse, General.PostPayoutAccountHolderError>`
- **Wire**: `POST /payoutAccountHolder`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PayoutAccountHolderResponse`
- **Error**: `General.PostPayoutAccountHolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostPayoutAccountHolderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PayoutAccountHolderRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutAccountHolderRequest` | `payoutAccountHolderRequestSchema` | `src/models/payout-account-holder-request.ts` |
| `PayoutAccountHolderResponse` | `payoutAccountHolderResponseSchema` | `src/models/payout-account-holder-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postRefundFundsTransfer

- **Server**: `default16` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postRefundFundsTransfer(request: General.PostRefundFundsTransferRequest, options?: RequestOptions): ApiPromise<RefundFundsTransferResponse, General.PostRefundFundsTransferError>`
- **Wire**: `POST /refundFundsTransfer`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RefundFundsTransferResponse`
- **Error**: `General.PostRefundFundsTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostRefundFundsTransferRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RefundFundsTransferRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefundFundsTransferRequest` | `refundFundsTransferRequestSchema` | `src/models/refund-funds-transfer-request.ts` |
| `RefundFundsTransferResponse` | `refundFundsTransferResponseSchema` | `src/models/refund-funds-transfer-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postRefundNotPaidOutTransfers

- **Server**: `default16` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postRefundNotPaidOutTransfers(request: General.PostRefundNotPaidOutTransfersRequest, options?: RequestOptions): ApiPromise<GenericResponse, General.PostRefundNotPaidOutTransfersError>`
- **Wire**: `POST /refundNotPaidOutTransfers`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GenericResponse`
- **Error**: `General.PostRefundNotPaidOutTransfersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostRefundNotPaidOutTransfersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RefundNotPaidOutTransfersRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefundNotPaidOutTransfersRequest` | `refundNotPaidOutTransfersRequestSchema` | `src/models/refund-not-paid-out-transfers-request.ts` |
| `GenericResponse` | `genericResponseSchema` | `src/models/generic-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postRequestSubjectErasure

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postRequestSubjectErasure(request: General.PostRequestSubjectErasureRequest, options?: RequestOptions): ApiPromise<SubjectErasureResponse, General.PostRequestSubjectErasureError>`
- **Wire**: `POST /requestSubjectErasure`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SubjectErasureResponse`
- **Error**: `General.PostRequestSubjectErasureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostRequestSubjectErasureRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SubjectErasureByPspReferenceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubjectErasureByPspReferenceRequest` | `subjectErasureByPspReferenceRequestSchema` | `src/models/subject-erasure-by-psp-reference-request.ts` |
| `SubjectErasureResponse` | `subjectErasureResponseSchema` | `src/models/subject-erasure-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postRetrieveApplicableDefenseReasons

- **Server**: `default22` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postRetrieveApplicableDefenseReasons(request: General.PostRetrieveApplicableDefenseReasonsRequest, options?: RequestOptions): ApiPromise<DefenseReasonsResponse, General.PostRetrieveApplicableDefenseReasonsError>`
- **Wire**: `POST /retrieveApplicableDefenseReasons`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `DefenseReasonsResponse`
- **Error**: `General.PostRetrieveApplicableDefenseReasonsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostRetrieveApplicableDefenseReasonsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DefenseReasonsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DefenseReasonsRequest` | `defenseReasonsRequestSchema` | `src/models/defense-reasons-request.ts` |
| `DefenseReasonsResponse` | `defenseReasonsResponseSchema` | `src/models/defense-reasons-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postScheduleAccountUpdater

- **Server**: `default2` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postScheduleAccountUpdater(request: General.PostScheduleAccountUpdaterRequest, options?: RequestOptions): ApiPromise<ScheduleAccountUpdaterResult, General.PostScheduleAccountUpdaterError>`
- **Wire**: `POST /scheduleAccountUpdater`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ScheduleAccountUpdaterResult`
- **Error**: `General.PostScheduleAccountUpdaterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostScheduleAccountUpdaterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ScheduleAccountUpdaterRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScheduleAccountUpdaterRequest` | `scheduleAccountUpdaterRequestSchema` | `src/models/schedule-account-updater-request.ts` |
| `ScheduleAccountUpdaterResult` | `scheduleAccountUpdaterResultSchema` | `src/models/schedule-account-updater-result.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postSessions3

- **Server**: `default27` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postSessions3(request: General.PostSessions3Request, options?: RequestOptions): ApiPromise<CertificateLoadingResponse, ResponseError>`
- **Wire**: `POST /sessions`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CertificateLoadingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `General.PostSessions3Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateSessionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSessionRequest` | `createSessionRequestSchema` | `src/models/create-session-request.ts` |
| `CertificateLoadingResponse` | `certificateLoadingResponseSchema` | `src/models/certificate-loading-response.ts` |

### postSetupBeneficiary

- **Server**: `default16` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postSetupBeneficiary(request: General.PostSetupBeneficiaryRequest, options?: RequestOptions): ApiPromise<GenericResponse, General.PostSetupBeneficiaryError>`
- **Wire**: `POST /setupBeneficiary`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GenericResponse`
- **Error**: `General.PostSetupBeneficiaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostSetupBeneficiaryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SetupBeneficiaryRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetupBeneficiaryRequest` | `setupBeneficiaryRequestSchema` | `src/models/setup-beneficiary-request.ts` |
| `GenericResponse` | `genericResponseSchema` | `src/models/generic-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postSupplyDefenseDocument

- **Server**: `default22` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postSupplyDefenseDocument(request: General.PostSupplyDefenseDocumentRequest, options?: RequestOptions): ApiPromise<SupplyDefenseDocumentResponse, General.PostSupplyDefenseDocumentError>`
- **Wire**: `POST /supplyDefenseDocument`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SupplyDefenseDocumentResponse`
- **Error**: `General.PostSupplyDefenseDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostSupplyDefenseDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SupplyDefenseDocumentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SupplyDefenseDocumentRequest` | `supplyDefenseDocumentRequestSchema` | `src/models/supply-defense-document-request.ts` |
| `SupplyDefenseDocumentResponse` | `supplyDefenseDocumentResponseSchema` | `src/models/supply-defense-document-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postTestNotificationConfiguration

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postTestNotificationConfiguration(request: General.PostTestNotificationConfigurationRequest, options?: RequestOptions): ApiPromise<TestNotificationConfigurationResponse, General.PostTestNotificationConfigurationError>`
- **Wire**: `POST /testNotificationConfiguration`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TestNotificationConfigurationResponse`
- **Error**: `General.PostTestNotificationConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostTestNotificationConfigurationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TestNotificationConfigurationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestNotificationConfigurationRequest` | `testNotificationConfigurationRequestSchema` | `src/models/test-notification-configuration-request.ts` |
| `TestNotificationConfigurationResponse` | `testNotificationConfigurationResponseSchema` | `src/models/test-notification-configuration-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postTransferFunds

- **Server**: `default16` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postTransferFunds(request: General.PostTransferFundsRequest, options?: RequestOptions): ApiPromise<TransferFundsResponse, General.PostTransferFundsError>`
- **Wire**: `POST /transferFunds`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TransferFundsResponse`
- **Error**: `General.PostTransferFundsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostTransferFundsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferFundsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferFundsRequest` | `transferFundsRequestSchema` | `src/models/transfer-funds-request.ts` |
| `TransferFundsResponse` | `transferFundsResponseSchema` | `src/models/transfer-funds-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postUpdateNotificationConfiguration

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postUpdateNotificationConfiguration(request: General.PostUpdateNotificationConfigurationRequest, options?: RequestOptions): ApiPromise<GetNotificationConfigurationResponse, General.PostUpdateNotificationConfigurationError>`
- **Wire**: `POST /updateNotificationConfiguration`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GetNotificationConfigurationResponse`
- **Error**: `General.PostUpdateNotificationConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostUpdateNotificationConfigurationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateNotificationConfigurationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateNotificationConfigurationRequest` | `updateNotificationConfigurationRequestSchema` | `src/models/update-notification-configuration-request.ts` |
| `GetNotificationConfigurationResponse` | `getNotificationConfigurationResponseSchema` | `src/models/get-notification-configuration-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postVoidTransaction

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postVoidTransaction(request: General.PostVoidTransactionRequest, options?: RequestOptions): ApiPromise<StoredValueVoidResponse, General.PostVoidTransactionError>`
- **Wire**: `POST /voidTransaction`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `StoredValueVoidResponse`
- **Error**: `General.PostVoidTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `General.PostVoidTransactionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StoredValueVoidRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoredValueVoidRequest` | `storedValueVoidRequestSchema` | `src/models/stored-value-void-request.ts` |
| `StoredValueVoidResponse` | `storedValueVoidResponseSchema` | `src/models/stored-value-void-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

