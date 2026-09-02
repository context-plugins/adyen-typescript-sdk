<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksCompanyLevel — operations

Accessor: `client.webhooksCompanyLevel` · Source: `src/resources/webhooks-company-level.ts` · 7 operations · Request and error types: namespace `WebhooksCompanyLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteCompaniesCompanyIdWebhooksWebhookId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteCompaniesCompanyIdWebhooksWebhookId(request: WebhooksCompanyLevel.DeleteCompaniesCompanyIdWebhooksWebhookIdRequest, options?: RequestOptions): ApiPromise<undefined, WebhooksCompanyLevel.DeleteCompaniesCompanyIdWebhooksWebhookIdError>`
- **Wire**: `DELETE /companies/{companyId}/webhooks/{webhookId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `WebhooksCompanyLevel.DeleteCompaniesCompanyIdWebhooksWebhookIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksCompanyLevel.DeleteCompaniesCompanyIdWebhooksWebhookIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyIdWebhooks

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdWebhooks(request: WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksRequest, options?: RequestOptions): ApiPromise<ListWebhooksResponse, WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksError>`
- **Wire**: `GET /companies/{companyId}/webhooks`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListWebhooksResponse`
- **Error**: `WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `pageNumber` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListWebhooksResponse` | `listWebhooksResponseSchema` | `src/models/list-webhooks-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getCompaniesCompanyIdWebhooksWebhookId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getCompaniesCompanyIdWebhooksWebhookId(request: WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksWebhookIdRequest, options?: RequestOptions): ApiPromise<Webhook, WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksWebhookIdError>`
- **Wire**: `GET /companies/{companyId}/webhooks/{webhookId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Webhook`
- **Error**: `WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksWebhookIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksCompanyLevel.GetCompaniesCompanyIdWebhooksWebhookIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchCompaniesCompanyIdWebhooksWebhookId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchCompaniesCompanyIdWebhooksWebhookId(request: WebhooksCompanyLevel.PatchCompaniesCompanyIdWebhooksWebhookIdRequest, options?: RequestOptions): ApiPromise<Webhook, WebhooksCompanyLevel.PatchCompaniesCompanyIdWebhooksWebhookIdError>`
- **Wire**: `PATCH /companies/{companyId}/webhooks/{webhookId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Webhook`
- **Error**: `WebhooksCompanyLevel.PatchCompaniesCompanyIdWebhooksWebhookIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksCompanyLevel.PatchCompaniesCompanyIdWebhooksWebhookIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |
| `body` | `body` | `UpdateCompanyWebhookRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCompanyWebhookRequest` | `updateCompanyWebhookRequestSchema` | `src/models/update-company-webhook-request.ts` |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postCompaniesCompanyIdWebhooks

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCompaniesCompanyIdWebhooks(request: WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksRequest, options?: RequestOptions): ApiPromise<Webhook, WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksError>`
- **Wire**: `POST /companies/{companyId}/webhooks`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Webhook`
- **Error**: `WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `body` | `body` | `CreateCompanyWebhookRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCompanyWebhookRequest` | `createCompanyWebhookRequestSchema` | `src/models/create-company-webhook-request.ts` |
| `Webhook` | `webhookSchema` | `src/models/webhook.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac(request: WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRequest, options?: RequestOptions): ApiPromise<GenerateHmacKeyResponse, WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError>`
- **Wire**: `POST /companies/{companyId}/webhooks/{webhookId}/generateHmac`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GenerateHmacKeyResponse`
- **Error**: `WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GenerateHmacKeyResponse` | `generateHmacKeyResponseSchema` | `src/models/generate-hmac-key-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postCompaniesCompanyIdWebhooksWebhookIdTest

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postCompaniesCompanyIdWebhooksWebhookIdTest(request: WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdTestRequest, options?: RequestOptions): ApiPromise<TestWebhookResponse, WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdTestError>`
- **Wire**: `POST /companies/{companyId}/webhooks/{webhookId}/test`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TestWebhookResponse`
- **Error**: `WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdTestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhooksCompanyLevel.PostCompaniesCompanyIdWebhooksWebhookIdTestRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `companyId` | `path` | `string` | yes |
| `webhookId` | `path` | `string` | yes |
| `body` | `body` | `TestCompanyWebhookRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestCompanyWebhookRequest` | `testCompanyWebhookRequestSchema` | `src/models/test-company-webhook-request.ts` |
| `TestWebhookResponse` | `testWebhookResponseSchema` | `src/models/test-webhook-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

