<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountVerification — operations

Accessor: `client.accountVerification` · Source: `src/resources/account-verification.ts` · 2 operations · Request and error types: namespace `AccountVerification`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAccountVerificationReportsCode

- **Server**: `default21` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAccountVerificationReportsCode(request: AccountVerification.GetAccountVerificationReportsCodeRequest, options?: RequestOptions): ApiPromise<AccountVerificationReportResponse, AccountVerification.GetAccountVerificationReportsCodeError>`
- **Wire**: `GET /accountVerification/reports/{code}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountVerificationReportResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountVerification.GetAccountVerificationReportsCodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [429] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity6"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountVerification.GetAccountVerificationReportsCodeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `code` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountVerificationReportResponse` | `accountVerificationReportResponseSchema` | `src/models/account-verification-report-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postAccountVerificationRoutes

- **Server**: `default21` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postAccountVerificationRoutes(request: AccountVerification.PostAccountVerificationRoutesRequest, options?: RequestOptions): ApiPromise<AccountVerificationRoutesResponse, AccountVerification.PostAccountVerificationRoutesError>`
- **Wire**: `POST /accountVerification/routes`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AccountVerificationRoutesResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AccountVerification.PostAccountVerificationRoutesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [429] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccountVerification.PostAccountVerificationRoutesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AccountVerificationRoutesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountVerificationRoutesRequest` | `accountVerificationRoutesRequestSchema` | `src/models/account-verification-routes-request.ts` |
| `AccountVerificationRoutesResponse` | `accountVerificationRoutesResponseSchema` | `src/models/account-verification-routes-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

