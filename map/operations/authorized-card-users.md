<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthorizedCardUsers — operations

Accessor: `client.authorizedCardUsers` · Source: `src/resources/authorized-card-users.ts` · 4 operations · Request and error types: namespace `AuthorizedCardUsers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(request: AuthorizedCardUsers.DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest, options?: RequestOptions): ApiPromise<undefined, AuthorizedCardUsers.DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError>`
- **Wire**: `DELETE /paymentInstruments/{paymentInstrumentId}/authorisedCardUsers`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AuthorizedCardUsers.DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthorizedCardUsers.DeletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `paymentInstrumentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(request: AuthorizedCardUsers.GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest, options?: RequestOptions): ApiPromise<AuthorisedCardUsers, AuthorizedCardUsers.GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError>`
- **Wire**: `GET /paymentInstruments/{paymentInstrumentId}/authorisedCardUsers`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuthorisedCardUsers`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AuthorizedCardUsers.GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthorizedCardUsers.GetPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `paymentInstrumentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorisedCardUsers` | `authorisedCardUsersSchema` | `src/models/authorised-card-users.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(request: AuthorizedCardUsers.PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest, options?: RequestOptions): ApiPromise<undefined, AuthorizedCardUsers.PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError>`
- **Wire**: `PATCH /paymentInstruments/{paymentInstrumentId}/authorisedCardUsers`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AuthorizedCardUsers.PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthorizedCardUsers.PatchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `paymentInstrumentId` | `path` | `string` | yes |
| `body` | `body` | `AuthorisedCardUsers` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorisedCardUsers` | `authorisedCardUsersSchema` | `src/models/authorised-card-users.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers(request: AuthorizedCardUsers.PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest, options?: RequestOptions): ApiPromise<undefined, AuthorizedCardUsers.PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError>`
- **Wire**: `POST /paymentInstruments/{paymentInstrumentId}/authorisedCardUsers`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `AuthorizedCardUsers.PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuthorizedCardUsers.PostPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `paymentInstrumentId` | `path` | `string` | yes |
| `body` | `body` | `AuthorisedCardUsers` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorisedCardUsers` | `authorisedCardUsersSchema` | `src/models/authorised-card-users.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

