<!-- Generated file — do not edit; regenerated with the SDK. -->

# IDealProfiles — operations

Accessor: `client.iDealProfiles` · Source: `src/resources/ideal-profiles.ts` · 3 operations · Request and error types: namespace `IDealProfiles`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postIdealProfileAuthLink

- **Server**: `default20` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postIdealProfileAuthLink(request: IDealProfiles.PostIdealProfileAuthLinkRequest, options?: RequestOptions): ApiPromise<IdealAuthLinkResponse, IDealProfiles.PostIdealProfileAuthLinkError>`
- **Wire**: `POST /ideal/profile/auth-link`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IdealAuthLinkResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `IDealProfiles.PostIdealProfileAuthLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IDealProfiles.PostIdealProfileAuthLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IdealAuthLinkRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdealAuthLinkRequest` | `idealAuthLinkRequestSchema` | `src/models/ideal-auth-link-request.ts` |
| `IdealAuthLinkResponse` | `idealAuthLinkResponseSchema` | `src/models/ideal-auth-link-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postIdealProfileAuthenticate

- **Server**: `default20` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postIdealProfileAuthenticate(request: IDealProfiles.PostIdealProfileAuthenticateRequest, options?: RequestOptions): ApiPromise<IdealAuthenticateResponse, IDealProfiles.PostIdealProfileAuthenticateError>`
- **Wire**: `POST /ideal/profile/authenticate`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IdealAuthenticateResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `IDealProfiles.PostIdealProfileAuthenticateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IDealProfiles.PostIdealProfileAuthenticateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IdealAuthenticateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdealAuthenticateRequest` | `idealAuthenticateRequestSchema` | `src/models/ideal-authenticate-request.ts` |
| `IdealAuthenticateResponse` | `idealAuthenticateResponseSchema` | `src/models/ideal-authenticate-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postIdealProfileRegister

- **Server**: `default20` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postIdealProfileRegister(request: IDealProfiles.PostIdealProfileRegisterRequest, options?: RequestOptions): ApiPromise<ProfileRegistrationResponse, IDealProfiles.PostIdealProfileRegisterError>`
- **Wire**: `POST /ideal/profile/register`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProfileRegistrationResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `IDealProfiles.PostIdealProfileRegisterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IDealProfiles.PostIdealProfileRegisterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProfileRegistrationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileRegistrationRequest` | `profileRegistrationRequestSchema` | `src/models/profile-registration-request.ts` |
| `ProfileRegistrationResponse` | `profileRegistrationResponseSchema` | `src/models/profile-registration-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

