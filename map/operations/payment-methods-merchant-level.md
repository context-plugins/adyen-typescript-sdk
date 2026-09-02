<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentMethodsMerchantLevel — operations

Accessor: `client.paymentMethodsMerchantLevel` · Source: `src/resources/payment-methods-merchant-level.ts` · 6 operations · Request and error types: namespace `PaymentMethodsMerchantLevel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getMerchantsMerchantIdPaymentMethodSettings

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdPaymentMethodSettings(request: PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsRequest, options?: RequestOptions): ApiPromise<PaymentMethodResponse, PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsError>`
- **Wire**: `GET /merchants/{merchantId}/paymentMethodSettings`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentMethodResponse`
- **Error**: `PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [429] `RestServiceError` · `"restServiceError6"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `storeId` | `query` | `string` | no |
| `businessLineId` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageNumber` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentMethodResponse` | `paymentMethodResponseSchema` | `src/models/payment-method-response.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId(request: PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest, options?: RequestOptions): ApiPromise<ManagementPaymentMethod, PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError>`
- **Wire**: `GET /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ManagementPaymentMethod`
- **Error**: `PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [429] `RestServiceError` · `"restServiceError6"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `paymentMethodId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ManagementPaymentMethod` | `managementPaymentMethodSchema` | `src/models/management-payment-method.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains(request: PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsRequest, options?: RequestOptions): ApiPromise<ApplePayResponseInfo, PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsError>`
- **Wire**: `GET /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}/getApplePayDomains`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApplePayResponseInfo`
- **Error**: `PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentMethodsMerchantLevel.GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `paymentMethodId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplePayResponseInfo` | `applePayResponseInfoSchema` | `src/models/apple-pay-response-info.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId(request: PaymentMethodsMerchantLevel.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest, options?: RequestOptions): ApiPromise<ManagementPaymentMethod, PaymentMethodsMerchantLevel.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError>`
- **Wire**: `PATCH /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ManagementPaymentMethod`
- **Error**: `PaymentMethodsMerchantLevel.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [429] `RestServiceError` · `"restServiceError6"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentMethodsMerchantLevel.PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `paymentMethodId` | `path` | `string` | yes |
| `body` | `body` | `UpdatePaymentMethodInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdatePaymentMethodInfo` | `updatePaymentMethodInfoSchema` | `src/models/update-payment-method-info.ts` |
| `ManagementPaymentMethod` | `managementPaymentMethodSchema` | `src/models/management-payment-method.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchantsMerchantIdPaymentMethodSettings

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdPaymentMethodSettings(request: PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsRequest, options?: RequestOptions): ApiPromise<ManagementPaymentMethod, PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsError>`
- **Wire**: `POST /merchants/{merchantId}/paymentMethodSettings`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ManagementPaymentMethod`
- **Error**: `PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [429] `RestServiceError` · `"restServiceError6"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `body` | `body` | `PaymentMethodSetupInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentMethodSetupInfo` | `paymentMethodSetupInfoSchema` | `src/models/payment-method-setup-info.ts` |
| `ManagementPaymentMethod` | `managementPaymentMethodSchema` | `src/models/management-payment-method.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

### postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains(request: PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsRequest, options?: RequestOptions): ApiPromise<undefined, PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsError>`
- **Wire**: `POST /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}/addApplePayDomains`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"restServiceError"` [400] `RestServiceError` · `"restServiceError2"` [401] `RestServiceError` · `"restServiceError3"` [403] `RestServiceError` · `"restServiceError4"` [422] `RestServiceError` · `"restServiceError5"` [429] `RestServiceError` · `"restServiceError6"` [500] `RestServiceError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentMethodsMerchantLevel.PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `merchantId` | `path` | `string` | yes |
| `paymentMethodId` | `path` | `string` | yes |
| `body` | `body` | `ApplePayInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplePayInfo` | `applePayInfoSchema` | `src/models/apple-pay-info.ts` |
| `RestServiceError` | `restServiceErrorSchema` | `src/models/rest-service-error.ts` |

