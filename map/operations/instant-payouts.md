<!-- Generated file — do not edit; regenerated with the SDK. -->

# InstantPayouts — operations

Accessor: `client.instantPayouts` · Source: `src/resources/instant-payouts.ts` · 1 operation · Request and error types: namespace `InstantPayouts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### postPayout

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postPayout(request: InstantPayouts.PostPayoutRequest, options?: RequestOptions): ApiPromise<PayoutResponse, InstantPayouts.PostPayoutError>`
- **Wire**: `POST /payout`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PayoutResponse`
- **Error**: `InstantPayouts.PostPayoutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError"` [400] `ServiceError` · `"serviceError2"` [401] `ServiceError` · `"serviceError3"` [403] `ServiceError` · `"serviceError4"` [422] `ServiceError` · `"serviceError5"` [500] `ServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InstantPayouts.PostPayoutRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PayoutRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutRequest` | `payoutRequestSchema` | `src/models/payout-request.ts` |
| `PayoutResponse` | `payoutResponseSchema` | `src/models/payout-response.ts` |
| `ServiceError` | `serviceErrorSchema` | `src/models/service-error.ts` |

