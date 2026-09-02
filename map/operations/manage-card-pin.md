<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageCardPin — operations

Accessor: `client.manageCardPin` · Source: `src/resources/manage-card-pin.ts` · 3 operations · Request and error types: namespace `ManageCardPin`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getPublicKey

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getPublicKey(request: ManageCardPin.GetPublicKeyRequest, options?: RequestOptions): ApiPromise<PublicKeyResponse, ManageCardPin.GetPublicKeyError>`
- **Wire**: `GET /publicKey`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicKeyResponse`
- **Error**: `ManageCardPin.GetPublicKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [401] `RestServiceError` · `"restServiceError2"` [403] `RestServiceError` · `"restServiceError3"` [422] `RestServiceError` · `"restServiceError4"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageCardPin.GetPublicKeyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `purpose` | `query` | `string` | no |
| `format` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicKeyResponse` | `publicKeyResponseSchema` | `src/models/public-key-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postPinsChange

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postPinsChange(request: ManageCardPin.PostPinsChangeRequest, options?: RequestOptions): ApiPromise<PinChangeResponse, ManageCardPin.PostPinsChangeError>`
- **Wire**: `POST /pins/change`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PinChangeResponse`
- **Error**: `ManageCardPin.PostPinsChangeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [401] `RestServiceError` · `"restServiceError2"` [403] `RestServiceError` · `"restServiceError3"` [422] `RestServiceError` · `"restServiceError4"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageCardPin.PostPinsChangeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PinChangeRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PinChangeRequest` | `pinChangeRequestSchema` | `src/models/pin-change-request.ts` |
| `PinChangeResponse` | `pinChangeResponseSchema` | `src/models/pin-change-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postPinsReveal

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postPinsReveal(request: ManageCardPin.PostPinsRevealRequest, options?: RequestOptions): ApiPromise<RevealPinResponse, ManageCardPin.PostPinsRevealError>`
- **Wire**: `POST /pins/reveal`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RevealPinResponse`
- **Error**: `ManageCardPin.PostPinsRevealError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [401] `RestServiceError` · `"restServiceError2"` [403] `RestServiceError` · `"restServiceError3"` [422] `RestServiceError` · `"restServiceError4"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ManageCardPin.PostPinsRevealRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RevealPinRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RevealPinRequest` | `revealPinRequestSchema` | `src/models/reveal-pin-request.ts` |
| `RevealPinResponse` | `revealPinResponseSchema` | `src/models/reveal-pin-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

