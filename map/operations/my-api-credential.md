<!-- Generated file — do not edit; regenerated with the SDK. -->

# MyApiCredential — operations

Accessor: `client.myApiCredential` · Source: `src/resources/my-api-credential.ts` · 6 operations · Request and error types: namespace `MyApiCredential`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteMeAllowedOriginsOriginId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteMeAllowedOriginsOriginId(request: MyApiCredential.DeleteMeAllowedOriginsOriginIdRequest, options?: RequestOptions): ApiPromise<undefined, MyApiCredential.DeleteMeAllowedOriginsOriginIdError>`
- **Wire**: `DELETE /me/allowedOrigins/{originId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `MyApiCredential.DeleteMeAllowedOriginsOriginIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MyApiCredential.DeleteMeAllowedOriginsOriginIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `originId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMe

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMe(options?: RequestOptions): ApiPromise<MeApiCredential, MyApiCredential.GetMeError>`
- **Wire**: `GET /me`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MeApiCredential`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `MyApiCredential.GetMeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `MeApiCredential` | `meApiCredentialSchema` | `src/models/me-api-credential.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMeAllowedOrigins

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMeAllowedOrigins(options?: RequestOptions): ApiPromise<AllowedOriginsResponse, MyApiCredential.GetMeAllowedOriginsError>`
- **Wire**: `GET /me/allowedOrigins`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AllowedOriginsResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `MyApiCredential.GetMeAllowedOriginsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `AllowedOriginsResponse` | `allowedOriginsResponseSchema` | `src/models/allowed-origins-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMeAllowedOriginsOriginId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMeAllowedOriginsOriginId(request: MyApiCredential.GetMeAllowedOriginsOriginIdRequest, options?: RequestOptions): ApiPromise<AllowedOrigin, MyApiCredential.GetMeAllowedOriginsOriginIdError>`
- **Wire**: `GET /me/allowedOrigins/{originId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AllowedOrigin`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `MyApiCredential.GetMeAllowedOriginsOriginIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MyApiCredential.GetMeAllowedOriginsOriginIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `originId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AllowedOrigin` | `allowedOriginSchema` | `src/models/allowed-origin.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMeAllowedOrigins

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMeAllowedOrigins(request: MyApiCredential.PostMeAllowedOriginsRequest, options?: RequestOptions): ApiPromise<AllowedOrigin, MyApiCredential.PostMeAllowedOriginsError>`
- **Wire**: `POST /me/allowedOrigins`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AllowedOrigin`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `MyApiCredential.PostMeAllowedOriginsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MyApiCredential.PostMeAllowedOriginsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateAllowedOriginRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAllowedOriginRequest` | `createAllowedOriginRequestSchema` | `src/models/create-allowed-origin-request.ts` |
| `AllowedOrigin` | `allowedOriginSchema` | `src/models/allowed-origin.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMeGenerateClientKey

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMeGenerateClientKey(options?: RequestOptions): ApiPromise<GenerateClientKeyResponse, MyApiCredential.PostMeGenerateClientKeyError>`
- **Wire**: `POST /me/generateClientKey`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GenerateClientKeyResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `MyApiCredential.PostMeGenerateClientKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GenerateClientKeyResponse` | `generateClientKeyResponseSchema` | `src/models/generate-client-key-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

