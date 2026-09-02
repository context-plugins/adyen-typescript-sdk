<!-- Generated file — do not edit; regenerated with the SDK. -->

# CashOutApi — operations

Accessor: `client.cashOutApi` · Source: `src/resources/cash-out-api.ts` · 1 operation · Request and error types: namespace `CashOutApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### postCashouts

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCashouts(request: CashOutApi.PostCashoutsRequest, options?: RequestOptions): ApiPromise<CashOut, CashOutApi.PostCashoutsError>`
- **Wire**: `POST /cashouts`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CashOut`
- **Error**: `CashOutApi.PostCashoutsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [400] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity3"` [403] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity4"` [404] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity5"` [422] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity6"` [429] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity7"` [500] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CashOutApi.PostCashoutsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CashOutInfo` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CashOutInfo` | `cashOutInfoSchema` | `src/models/cash-out-info.ts` |
| `CashOut` | `cashOutSchema` | `src/models/cash-out.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

