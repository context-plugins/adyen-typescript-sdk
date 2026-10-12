<!-- Generated file — do not edit; regenerated with the SDK. -->

# Donations — operations

Accessor: `client.donations` · Source: `src/resources/donations.ts` · 2 operations · Request and error types: namespace `Donations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postDonationCampaigns

- **Signature**: `postDonationCampaigns(request: Donations.PostDonationCampaignsRequest, options?: RequestOptions): ApiPromise<DonationCampaignsResponse, Donations.PostDonationCampaignsError>`
- **Wire**: `POST /donationCampaigns`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `DonationCampaignsResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Donations.PostDonationCampaignsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Donations.PostDonationCampaignsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `DonationCampaignsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DonationCampaignsRequest` | `donationCampaignsRequestSchema` | `src/models/donation-campaigns-request.ts` |
| `DonationCampaignsResponse` | `donationCampaignsResponseSchema` | `src/models/donation-campaigns-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

### postDonations

- **Signature**: `postDonations(request: Donations.PostDonationsRequest, options?: RequestOptions): ApiPromise<DonationPaymentResponse, Donations.PostDonationsError>`
- **Wire**: `POST /donations`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `DonationPaymentResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Donations.PostDonationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Donations.PostDonationsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `DonationPaymentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DonationPaymentRequest` | `donationPaymentRequestSchema` | `src/models/donation-payment-request.ts` |
| `DonationPaymentResponse` | `donationPaymentResponseSchema` | `src/models/donation-payment-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

