<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reviewing — operations

Accessor: `client.reviewing` · Source: `src/resources/reviewing.ts` · 2 operations · Request and error types: namespace `Reviewing`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### postConfirmThirdParty

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postConfirmThirdParty(request: Reviewing.PostConfirmThirdPartyRequest, options?: RequestOptions): ApiPromise<ModifyResponse, Reviewing.PostConfirmThirdPartyError>`
- **Wire**: `POST /confirmThirdParty`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ModifyResponse`
- **Error**: `Reviewing.PostConfirmThirdPartyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reviewing.PostConfirmThirdPartyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ModifyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModifyRequest` | `modifyRequestSchema` | `src/models/modify-request.ts` |
| `ModifyResponse` | `modifyResponseSchema` | `src/models/modify-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postDeclineThirdParty

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDeclineThirdParty(request: Reviewing.PostDeclineThirdPartyRequest, options?: RequestOptions): ApiPromise<ModifyResponse, Reviewing.PostDeclineThirdPartyError>`
- **Wire**: `POST /declineThirdParty`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ModifyResponse`
- **Error**: `Reviewing.PostDeclineThirdPartyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reviewing.PostDeclineThirdPartyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ModifyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModifyRequest` | `modifyRequestSchema` | `src/models/modify-request.ts` |
| `ModifyResponse` | `modifyResponseSchema` | `src/models/modify-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

