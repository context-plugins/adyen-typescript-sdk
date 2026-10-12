<!-- Generated file — do not edit; regenerated with the SDK. -->

# NetworkTokens — operations

Accessor: `client.networkTokens` · Source: `src/resources/network-tokens.ts` · 2 operations · Request and error types: namespace `NetworkTokens`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getNetworkTokensNetworkTokenId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getNetworkTokensNetworkTokenId(request: NetworkTokens.GetNetworkTokensNetworkTokenIdRequest, options?: RequestOptions): ApiPromise<GetNetworkTokenResponse, NetworkTokens.GetNetworkTokensNetworkTokenIdError>`
- **Wire**: `GET /networkTokens/{networkTokenId}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetNetworkTokenResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `NetworkTokens.GetNetworkTokensNetworkTokenIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [401] `RestServiceError` · `"restServiceError2"` [403] `RestServiceError` · `"restServiceError3"` [422] `RestServiceError` · `"restServiceError4"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NetworkTokens.GetNetworkTokensNetworkTokenIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `networkTokenId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetNetworkTokenResponse` | `getNetworkTokenResponseSchema` | `src/models/get-network-token-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchNetworkTokensNetworkTokenId

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchNetworkTokensNetworkTokenId(request: NetworkTokens.PatchNetworkTokensNetworkTokenIdRequest, options?: RequestOptions): ApiPromise<undefined, NetworkTokens.PatchNetworkTokensNetworkTokenIdError>`
- **Wire**: `PATCH /networkTokens/{networkTokenId}`
- **Auth**: any of `clientKey`, `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `NetworkTokens.PatchNetworkTokensNetworkTokenIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [401] `RestServiceError` · `"restServiceError2"` [403] `RestServiceError` · `"restServiceError3"` [422] `RestServiceError` · `"restServiceError4"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NetworkTokens.PatchNetworkTokensNetworkTokenIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `networkTokenId` | `path` | `string` | yes |
| `body` | `body` | `UpdateNetworkTokenRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateNetworkTokenRequest` | `updateNetworkTokenRequestSchema` | `src/models/update-network-token-request.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

