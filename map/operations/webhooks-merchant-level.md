<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksMerchantLevel — operations

Accessor: `client.webhooksMerchantLevel` · Source: `src/resources/webhooks-merchant-level.ts` · 7 operations · Request and error types: namespace `WebhooksMerchantLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteMerchantsMerchantIdWebhooksWebhookId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteMerchantsMerchantIdWebhooksWebhookId(request: WebhooksMerchantLevel.DeleteMerchantsMerchantIdWebhooksWebhookIdRequest, options?: RequestOptions): ApiPromise<undefined, WebhooksMerchantLevel.DeleteMerchantsMerchantIdWebhooksWebhookIdError>`
- **Wire**: `DELETE /merchants/{merchantId}/webhooks/{webhookId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AdyenError` with `kind: "api"`, an instance of `WebhooksMerchantLevel.DeleteMerchantsMerchantIdWebhooksWebhookIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksMerchantLevel.DeleteMerchantsMerchantIdWebhooksWebhookIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdWebhooks

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdWebhooks(request: WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksRequest, options?: RequestOptions): ApiPromise<ListWebhooksResponse, WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksError>`
- **Wire**: `GET /merchants/{merchantId}/webhooks`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListWebhooksResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `pageNumber` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListWebhooksResponse` | `listWebhooksResponseSchema` | `src/models/list-webhooks-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdWebhooksWebhookId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdWebhooksWebhookId(request: WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksWebhookIdRequest, options?: RequestOptions): ApiPromise<Webhook, WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksWebhookIdError>`
- **Wire**: `GET /merchants/{merchantId}/webhooks/{webhookId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Webhook`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksWebhookIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksMerchantLevel.GetMerchantsMerchantIdWebhooksWebhookIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchMerchantsMerchantIdWebhooksWebhookId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchMerchantsMerchantIdWebhooksWebhookId(request: WebhooksMerchantLevel.PatchMerchantsMerchantIdWebhooksWebhookIdRequest, options?: RequestOptions): ApiPromise<Webhook, WebhooksMerchantLevel.PatchMerchantsMerchantIdWebhooksWebhookIdError>`
- **Wire**: `PATCH /merchants/{merchantId}/webhooks/{webhookId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Webhook`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `WebhooksMerchantLevel.PatchMerchantsMerchantIdWebhooksWebhookIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksMerchantLevel.PatchMerchantsMerchantIdWebhooksWebhookIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |
| `body` | `body` | `UpdateMerchantWebhookRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateMerchantWebhookRequest` | `updateMerchantWebhookRequestSchema` | `src/models/update-merchant-webhook-request.ts` |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchantsMerchantIdWebhooks

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdWebhooks(request: WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksRequest, options?: RequestOptions): ApiPromise<Webhook, WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksError>`
- **Wire**: `POST /merchants/{merchantId}/webhooks`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Webhook`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `body` | `body` | `CreateMerchantWebhookRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateMerchantWebhookRequest` | `createMerchantWebhookRequestSchema` | `src/models/create-merchant-webhook-request.ts` |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac(request: WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacRequest, options?: RequestOptions): ApiPromise<GenerateHmacKeyResponse, WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError>`
- **Wire**: `POST /merchants/{merchantId}/webhooks/{webhookId}/generateHmac`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GenerateHmacKeyResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GenerateHmacKeyResponse` | `generateHmacKeyResponseSchema` | `src/models/generate-hmac-key-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchantsMerchantIdWebhooksWebhookIdTest

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdWebhooksWebhookIdTest(request: WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdTestRequest, options?: RequestOptions): ApiPromise<TestWebhookResponse, WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdTestError>`
- **Wire**: `POST /merchants/{merchantId}/webhooks/{webhookId}/test`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TestWebhookResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdTestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksMerchantLevel.PostMerchantsMerchantIdWebhooksWebhookIdTestRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |
| `body` | `body` | `TestWebhookRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestWebhookRequest` | `testWebhookRequestSchema` | `src/models/test-webhook-request.ts` |
| `TestWebhookResponse` | `testWebhookResponseSchema` | `src/models/test-webhook-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

