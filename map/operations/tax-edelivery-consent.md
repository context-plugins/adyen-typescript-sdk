<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaxEDeliveryConsent — operations

Accessor: `client.taxEDeliveryConsent` · Source: `src/resources/tax-edelivery-consent.ts` · 2 operations · Request and error types: namespace `TaxEDeliveryConsent`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### postLegalEntitiesIdCheckTaxElectronicDeliveryConsent

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postLegalEntitiesIdCheckTaxElectronicDeliveryConsent(request: TaxEDeliveryConsent.PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentRequest, options?: RequestOptions): ApiPromise<CheckTaxElectronicDeliveryConsentResponse, TaxEDeliveryConsent.PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError>`
- **Wire**: `POST /legalEntities/{id}/checkTaxElectronicDeliveryConsent`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckTaxElectronicDeliveryConsentResponse`
- **Error**: `TaxEDeliveryConsent.PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TaxEDeliveryConsent.PostLegalEntitiesIdCheckTaxElectronicDeliveryConsentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckTaxElectronicDeliveryConsentResponse` | `checkTaxElectronicDeliveryConsentResponseSchema` | `src/models/check-tax-electronic-delivery-consent-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postLegalEntitiesIdSetTaxElectronicDeliveryConsent

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postLegalEntitiesIdSetTaxElectronicDeliveryConsent(request: TaxEDeliveryConsent.PostLegalEntitiesIdSetTaxElectronicDeliveryConsentRequest, options?: RequestOptions): ApiPromise<undefined, TaxEDeliveryConsent.PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError>`
- **Wire**: `POST /legalEntities/{id}/setTaxElectronicDeliveryConsent`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TaxEDeliveryConsent.PostLegalEntitiesIdSetTaxElectronicDeliveryConsentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TaxEDeliveryConsent.PostLegalEntitiesIdSetTaxElectronicDeliveryConsentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `SetTaxElectronicDeliveryConsentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SetTaxElectronicDeliveryConsentRequest` | `setTaxElectronicDeliveryConsentRequestSchema` | `src/models/set-tax-electronic-delivery-consent-request.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

