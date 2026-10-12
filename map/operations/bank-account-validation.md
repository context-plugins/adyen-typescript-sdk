<!-- Generated file — do not edit; regenerated with the SDK. -->

# BankAccountValidation — operations

Accessor: `client.bankAccountValidation` · Source: `src/resources/bank-account-validation.ts` · 1 operation · Request and error types: namespace `BankAccountValidation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postValidateBankAccountIdentification

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postValidateBankAccountIdentification(request: BankAccountValidation.PostValidateBankAccountIdentificationRequest, options?: RequestOptions): ApiPromise<undefined, BankAccountValidation.PostValidateBankAccountIdentificationError>`
- **Wire**: `POST /validateBankAccountIdentification`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `BankAccountValidation.PostValidateBankAccountIdentificationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [401] `RestServiceError` · `"restServiceError2"` [403] `RestServiceError` · `"restServiceError3"` [422] `RestServiceError` · `"restServiceError4"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BankAccountValidation.PostValidateBankAccountIdentificationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BankAccountIdentificationValidationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BankAccountIdentificationValidationRequest` | `bankAccountIdentificationValidationRequestSchema` | `src/models/bank-account-identification-validation-request.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

