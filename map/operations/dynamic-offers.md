<!-- Generated file — do not edit; regenerated with the SDK. -->

# DynamicOffers — operations

Accessor: `client.dynamicOffers` · Source: `src/resources/dynamic-offers.ts` · 3 operations · Request and error types: namespace `DynamicOffers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getDynamicOffers

- **Server**: `default15` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getDynamicOffers(request: DynamicOffers.GetDynamicOffersRequest, options?: RequestOptions): ApiPromise<GetDynamicOffersResponse, DynamicOffers.GetDynamicOffersError>`
- **Wire**: `GET /dynamicOffers`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetDynamicOffersResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `DynamicOffers.GetDynamicOffersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DynamicOffers.GetDynamicOffersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `accountHolderId` | `query` | `string` | yes |
| `financingType` | `query` | `FinancingType` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FinancingType` | `financingTypeSchema` | `src/models/financing-type.ts` |
| `GetDynamicOffersResponse` | `getDynamicOffersResponseSchema` | `src/models/get-dynamic-offers-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postDynamicOffersIdCalculate

- **Server**: `default15` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDynamicOffersIdCalculate(request: DynamicOffers.PostDynamicOffersIdCalculateRequest, options?: RequestOptions): ApiPromise<CalculatedGrantOffer, DynamicOffers.PostDynamicOffersIdCalculateError>`
- **Wire**: `POST /dynamicOffers/{id}/calculate`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CalculatedGrantOffer`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `DynamicOffers.PostDynamicOffersIdCalculateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DynamicOffers.PostDynamicOffersIdCalculateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `CalculateGrantOfferRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CalculateGrantOfferRequest` | `calculateGrantOfferRequestSchema` | `src/models/calculate-grant-offer-request.ts` |
| `CalculatedGrantOffer` | `calculatedGrantOfferSchema` | `src/models/calculated-grant-offer.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

### postDynamicOffersIdGrantOffer

- **Server**: `default15` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postDynamicOffersIdGrantOffer(request: DynamicOffers.PostDynamicOffersIdGrantOfferRequest, options?: RequestOptions): ApiPromise<GrantOffer1, DynamicOffers.PostDynamicOffersIdGrantOfferError>`
- **Wire**: `POST /dynamicOffers/{id}/grantOffer`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GrantOffer1`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `DynamicOffers.PostDynamicOffersIdGrantOfferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DynamicOffers.PostDynamicOffersIdGrantOfferRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `CreateGrantOfferRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateGrantOfferRequest` | `createGrantOfferRequestSchema` | `src/models/create-grant-offer-request.ts` |
| `GrantOffer1` | `grantOffer1Schema` | `src/models/grant-offer1.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

