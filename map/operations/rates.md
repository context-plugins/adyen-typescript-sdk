<!-- Generated file — do not edit; regenerated with the SDK. -->

# Rates — operations

Accessor: `client.rates` · Source: `src/resources/rates.ts` · 1 operation · Request and error types: namespace `Rates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postRatesCalculate

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postRatesCalculate(request: Rates.PostRatesCalculateRequest, options?: RequestOptions): ApiPromise<CalculateRateResponse, Rates.PostRatesCalculateError>`
- **Wire**: `POST /rates/calculate`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CalculateRateResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `Rates.PostRatesCalculateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Rates.PostRatesCalculateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CalculateRateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CalculateRateRequest` | `calculateRateRequestSchema` | `src/models/calculate-rate-request.ts` |
| `CalculateRateResponse` | `calculateRateResponseSchema` | `src/models/calculate-rate-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

