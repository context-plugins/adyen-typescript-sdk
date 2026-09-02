<!-- Generated file — do not edit; regenerated with the SDK. -->

# SessionAuthentication — operations

Accessor: `client.sessionAuthentication` · Source: `src/resources/session-authentication.ts` · 2 operations · Request and error types: namespace `SessionAuthentication`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### postAuthCertificate

- **Server**: `default25` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postAuthCertificate(request: SessionAuthentication.PostAuthCertificateRequest, options?: RequestOptions): ApiPromise<CertificateLoadingResponse, SessionAuthentication.PostAuthCertificateError>`
- **Wire**: `POST /auth/certificate`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CertificateLoadingResponse`
- **Error**: `SessionAuthentication.PostAuthCertificateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SessionAuthentication.PostAuthCertificateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xApiKey` | `header` | `X-API-Key` | `string` | no |
| `body` | `body` | — | `CertificateLoadingRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CertificateLoadingRequest` | `certificateLoadingRequestSchema` | `src/models/certificate-loading-request.ts` |
| `CertificateLoadingResponse` | `certificateLoadingResponseSchema` | `src/models/certificate-loading-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postSessions2

- **Server**: `default17` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postSessions2(request: SessionAuthentication.PostSessions2Request, options?: RequestOptions): ApiPromise<AuthenticationSessionResponse, SessionAuthentication.PostSessions2Error>`
- **Wire**: `POST /sessions`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AuthenticationSessionResponse`
- **Error**: `SessionAuthentication.PostSessions2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SessionAuthentication.PostSessions2Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AuthenticationSessionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthenticationSessionRequest` | `authenticationSessionRequestSchema` | `src/models/authentication-session-request.ts` |
| `AuthenticationSessionResponse` | `authenticationSessionResponseSchema` | `src/models/authentication-session-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

