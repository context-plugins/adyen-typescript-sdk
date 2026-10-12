<!-- Generated file — do not edit; regenerated with the SDK. -->

# GrantOffersApi — operations

Accessor: `client.grantOffersApi` · Source: `src/resources/grant-offers-api.ts` · 4 operations · Request and error types: namespace `GrantOffersApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getGrantOffers

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGrantOffers(request: GrantOffersApi.GetGrantOffersRequest, options?: RequestOptions): ApiPromise<GrantOffers, GrantOffersApi.GetGrantOffersError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /grantOffers`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GrantOffers`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `GrantOffersApi.GetGrantOffersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantOffersApi.GetGrantOffersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountHolderId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GrantOffers` | `grantOffersSchema` | `src/models/grant-offers.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getGrantOffersGrantOfferId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGrantOffersGrantOfferId(request: GrantOffersApi.GetGrantOffersGrantOfferIdRequest, options?: RequestOptions): ApiPromise<GrantOffer, GrantOffersApi.GetGrantOffersGrantOfferIdError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /grantOffers/{grantOfferId}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GrantOffer`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `GrantOffersApi.GetGrantOffersGrantOfferIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantOffersApi.GetGrantOffersGrantOfferIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `grantOfferId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GrantOffer` | `grantOfferSchema` | `src/models/grant-offer.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getGrantOffersId

- **Server**: `default15` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGrantOffersId(request: GrantOffersApi.GetGrantOffersIdRequest, options?: RequestOptions): ApiPromise<GrantOffer1, GrantOffersApi.GetGrantOffersIdError>`
- **Wire**: `GET /grantOffers/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GrantOffer1`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `GrantOffersApi.GetGrantOffersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantOffersApi.GetGrantOffersIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GrantOffer1` | `grantOffer1Schema` | `src/models/grant-offer1.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### getGrantOffers1

- **Server**: `default15` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getGrantOffers1(request: GrantOffersApi.GetGrantOffers1Request, options?: RequestOptions): ApiPromise<GrantOffers, GrantOffersApi.GetGrantOffers1Error>`
- **Wire**: `GET /grantOffers`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GrantOffers`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `GrantOffersApi.GetGrantOffers1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GrantOffersApi.GetGrantOffers1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountHolderId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GrantOffers` | `grantOffersSchema` | `src/models/grant-offers.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

