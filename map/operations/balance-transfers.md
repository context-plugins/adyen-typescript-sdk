<!-- Generated file — do not edit; regenerated with the SDK. -->

# BalanceTransfers — operations

Accessor: `client.balanceTransfers` · Source: `src/resources/balance-transfers.ts` · 1 operation · Request and error types: namespace `BalanceTransfers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postBalanceTransfers

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postBalanceTransfers(request: BalanceTransfers.PostBalanceTransfersRequest, options?: RequestOptions): ApiPromise<BalanceTransferResponse, BalanceTransfers.PostBalanceTransfersError>`
- **Wire**: `POST /balanceTransfers`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BalanceTransferResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `BalanceTransfers.PostBalanceTransfersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaultErrorResponseEntity"` [401] `DefaultErrorResponseEntity` · `"defaultErrorResponseEntity2"` [422] `DefaultErrorResponseEntity` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BalanceTransfers.PostBalanceTransfersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BalanceTransferRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceTransferRequest` | `balanceTransferRequestSchema` | `src/models/balance-transfer-request.ts` |
| `BalanceTransferResponse` | `balanceTransferResponseSchema` | `src/models/balance-transfer-response.ts` |
| `DefaultErrorResponseEntity` | `defaultErrorResponseEntitySchema` | `src/models/default-error-response-entity.ts` |

