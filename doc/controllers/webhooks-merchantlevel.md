# Webhooks-Merchantlevel

```ts
const webhooksMerchantlevelApi = new WebhooksMerchantlevelApi(client);
```

## Class Name

`WebhooksMerchantlevelApi`

## Methods

* [Get-Merchants-Merchant Id-Webhooks](../../doc/controllers/webhooks-merchantlevel.md#get-merchants-merchant-id-webhooks)
* [Post-Merchants-Merchant Id-Webhooks](../../doc/controllers/webhooks-merchantlevel.md#post-merchants-merchant-id-webhooks)
* [Get-Merchants-Merchant Id-Webhooks-Webhook Id](../../doc/controllers/webhooks-merchantlevel.md#get-merchants-merchant-id-webhooks-webhook-id)
* [Delete-Merchants-Merchant Id-Webhooks-Webhook Id](../../doc/controllers/webhooks-merchantlevel.md#delete-merchants-merchant-id-webhooks-webhook-id)
* [Patch-Merchants-Merchant Id-Webhooks-Webhook Id](../../doc/controllers/webhooks-merchantlevel.md#patch-merchants-merchant-id-webhooks-webhook-id)
* [Post-Merchants-Merchant Id-Webhooks-Webhook Id-Generate Hmac](../../doc/controllers/webhooks-merchantlevel.md#post-merchants-merchant-id-webhooks-webhook-id-generate-hmac)
* [Post-Merchants-Merchant Id-Webhooks-Webhook Id-Test](../../doc/controllers/webhooks-merchantlevel.md#post-merchants-merchant-id-webhooks-webhook-id-test)


# Get-Merchants-Merchant Id-Webhooks

Lists all webhook configurations for the merchant account.

> This call does not return webhook configurations for the company account to which the specified merchant account belongs. You can see these in your Customer Area under **Developers** > **Webhooks**.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Webhooks read
* Management API—Webhooks read and write

```ts
async getMerchantsMerchantIdWebhooks(
  merchantId: string,
  pageNumber?: number,
  pageSize?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListWebhooksResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `pageNumber` | `number \| undefined` | Query, Optional | The number of the page to fetch. |
| `pageSize` | `number \| undefined` | Query, Optional | The number of items to have on a page, maximum 100. The default is 10 items on a page. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ListWebhooksResponse`](../../doc/models/list-webhooks-response.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

try {
  const response = await webhooksMerchantLevelApi.getMerchantsMerchantIdWebhooks(merchantId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "_links": {
    "first": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks?pageNumber=1&pageSize=10"
    },
    "last": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks?pageNumber=1&pageSize=10"
    },
    "self": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks?pageNumber=1&pageSize=10"
    }
  },
  "itemsTotal": 1,
  "pagesTotal": 1,
  "data": [
    {
      "id": "S2-3E5E42476641",
      "type": "standard",
      "url": "YOUR_WEBHOOK_URL",
      "description": "Webhook for YOUR_MERCHANT_ACCOUNT - YOUR_MERCHANT_CODE",
      "username": "",
      "hasPassword": false,
      "active": true,
      "hasError": false,
      "communicationFormat": "json",
      "acceptsExpiredCertificate": false,
      "acceptsSelfSignedCertificate": false,
      "acceptsUntrustedRootCertificate": false,
      "populateSoapActionHeader": false,
      "additionalSettings": {
        "properties": {
          "includePosTerminalInfo": false,
          "includeARN": false,
          "includePosDetails": false,
          "includeCardInfoForRecurringContractNotification": false,
          "includeRiskData": false,
          "includeRiskExperimentReference": false,
          "includeSoapSecurityHeader": false,
          "includeContactlessWalletTokenInformation": false,
          "includeAcquirerReference": false,
          "includeRiskProfileReference": false,
          "includeOriginalMerchantReferenceCancelOrRefundNotification": false,
          "includeNfcTokenInformation": false,
          "includeSubvariant": false,
          "includeThreeDSVersion": false,
          "includeInstallmentsInfo": false,
          "includeAliasInfo": false,
          "includeShopperCountry": false,
          "includeRawThreeDSecureResult": false,
          "includeAirlineData": false,
          "includeGrossCurrencyChargebackDetails": false,
          "includeThreeDSecureResult": false,
          "includeMetadataIn3DSecurePaymentNotification": false,
          "includeOriginalReferenceForChargebackReversed": false,
          "addAcquirerResult": false,
          "includeDeliveryAddress": false,
          "includeRetryAttempts": false,
          "includeExtraCosts": false,
          "includeCardHolderName": false,
          "includeShopperDetail": false,
          "includeBankAccountDetails": false,
          "includeMandateDetails": false,
          "includeAuthAmountForDynamicZeroAuth": false,
          "includeIssuerCountry": false,
          "includeAcquirerErrorDetails": false,
          "includeCoBrandedWith": false,
          "includeShopperInteraction": false,
          "includeDeviceAndBrowserInfo": false,
          "addRawAcquirerResult": false,
          "includeCardBin": false,
          "includeFundingSource": false,
          "includeThreeDS2ChallengeInformation": false,
          "includeRiskProfile": false,
          "includeRealtimeAccountUpdaterStatus": false,
          "includeDunningProjectData": false,
          "includePaymentResultInOrderClosedNotification": false,
          "includeCardBinDetails": false,
          "includeNotesInManualReviewNotifications": false,
          "includeZeroAuthFlag": false,
          "addCaptureReferenceToDisputeNotification": false,
          "includePayPalDetails": false,
          "includeRawThreeDSecureDetailsResult": false,
          "includeBankVerificationResults": false,
          "includeCaptureDelayHours": false,
          "addPaymentAccountReference": false,
          "includePayULatamDetails": false,
          "includeStore": false,
          "returnAvsData": false,
          "includeWeChatPayOpenid": false,
          "includeUpiVpa": false,
          "includeUpiMetadata": false,
          "includeCustomRoutingFlagging": false,
          "includeTokenisedPaymentMetaData": false
        }
      },
      "_links": {
        "self": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks/S2-3E5E42476641"
        },
        "generateHmac": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks/S2-3E5E42476641/generateHmac"
        },
        "merchant": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
        },
        "testWebhook": {
          "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks/S2-3E5E42476641/test"
        }
      }
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Post-Merchants-Merchant Id-Webhooks

Subscribe to receive webhook notifications about events related to your merchant account. You can add basic authentication to make sure the data is secure.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Webhooks read and write

```ts
async postMerchantsMerchantIdWebhooks(
  merchantId: string,
  body?: CreateMerchantWebhookRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Webhook>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `body` | [`CreateMerchantWebhookRequest \| undefined`](../../doc/models/create-merchant-webhook-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Webhook`](../../doc/models/webhook.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const body: CreateMerchantWebhookRequest = {
  active: true,
  communicationFormat: CommunicationFormat.Json,
  type: 'standard',
  url: 'YOUR_WEBHOOK_URL',
  acceptsExpiredCertificate: false,
  acceptsSelfSignedCertificate: true,
  acceptsUntrustedRootCertificate: true,
  password: 'YOUR_PASSWORD',
  populateSoapActionHeader: false,
  username: 'YOUR_USER',
};

try {
  const response = await webhooksMerchantLevelApi.postMerchantsMerchantIdWebhooks(
    merchantId,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "S2-31433949437F",
  "type": "standard",
  "url": "YOUR_WEBHOOK_URL",
  "description": "Webhook for YOUR_MERCHANT_ACCOUNT - YOUR_MERCHANT_CODE",
  "username": "myuser",
  "hasPassword": true,
  "active": true,
  "hasError": false,
  "communicationFormat": "json",
  "acceptsExpiredCertificate": false,
  "acceptsSelfSignedCertificate": true,
  "acceptsUntrustedRootCertificate": true,
  "certificateAlias": "signed-test.adyen.com_2024",
  "populateSoapActionHeader": false,
  "additionalSettings": {
    "properties": {
      "includePosTerminalInfo": false,
      "includeARN": false,
      "includePosDetails": false,
      "includeCardInfoForRecurringContractNotification": false,
      "includeRiskData": false,
      "includeRiskExperimentReference": false,
      "includeSoapSecurityHeader": false,
      "includeContactlessWalletTokenInformation": false,
      "includeAcquirerReference": false,
      "includeRiskProfileReference": false,
      "includeOriginalMerchantReferenceCancelOrRefundNotification": false,
      "includeNfcTokenInformation": false,
      "includeSubvariant": false,
      "includeThreeDSVersion": false,
      "includeInstallmentsInfo": false,
      "includeAliasInfo": false,
      "includeShopperCountry": false,
      "includeRawThreeDSecureResult": false,
      "includeAirlineData": false,
      "includeGrossCurrencyChargebackDetails": false,
      "includeThreeDSecureResult": false,
      "includeMetadataIn3DSecurePaymentNotification": false,
      "includeOriginalReferenceForChargebackReversed": false,
      "addAcquirerResult": false,
      "includeDeliveryAddress": false,
      "includeRetryAttempts": false,
      "includeExtraCosts": false,
      "includeCardHolderName": false,
      "includeShopperDetail": false,
      "includeBankAccountDetails": false,
      "includeMandateDetails": false,
      "includeAuthAmountForDynamicZeroAuth": false,
      "includeIssuerCountry": false,
      "includeAcquirerErrorDetails": false,
      "includeCoBrandedWith": false,
      "includeShopperInteraction": false,
      "includeDeviceAndBrowserInfo": false,
      "addRawAcquirerResult": false,
      "includeCardBin": false,
      "includeFundingSource": false,
      "includeThreeDS2ChallengeInformation": false,
      "includeRiskProfile": false,
      "includeRealtimeAccountUpdaterStatus": false,
      "includeDunningProjectData": false,
      "includePaymentResultInOrderClosedNotification": false,
      "includeCardBinDetails": false,
      "includeNotesInManualReviewNotifications": false,
      "includeZeroAuthFlag": false,
      "addCaptureReferenceToDisputeNotification": false,
      "includePayPalDetails": false,
      "includeRawThreeDSecureDetailsResult": false,
      "includeBankVerificationResults": false,
      "includeCaptureDelayHours": false,
      "addPaymentAccountReference": false,
      "includePayULatamDetails": false,
      "includeStore": false,
      "returnAvsData": false,
      "includeWeChatPayOpenid": false,
      "includeUpiVpa": false,
      "includeUpiMetadata": false,
      "includeCustomRoutingFlagging": false,
      "includeTokenisedPaymentMetaData": false
    }
  },
  "_links": {
    "self": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks/S2-31433949437F"
    },
    "generateHmac": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks/S2-31433949437F/generateHmac"
    },
    "merchant": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
    },
    "testWebhook": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks/S2-31433949437F/test"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Get-Merchants-Merchant Id-Webhooks-Webhook Id

Returns the configuration for the webhook identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Webhooks read
* Management API—Webhooks read and write

```ts
async getMerchantsMerchantIdWebhooksWebhookId(
  merchantId: string,
  webhookId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Webhook>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `webhookId` | `string` | Template, Required | Unique identifier of the webhook configuration. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Webhook`](../../doc/models/webhook.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const webhookId = 'webhookId6';

try {
  const response = await webhooksMerchantLevelApi.getMerchantsMerchantIdWebhooksWebhookId(
    merchantId,
    webhookId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "S2-3E5E42476641",
  "type": "standard",
  "url": "YOUR_WEBHOOK_URL",
  "description": "Webhook for YOUR_MERCHANT_ACCOUNT - YOUR_MERCHANT_CODE",
  "username": "",
  "hasPassword": false,
  "active": true,
  "hasError": false,
  "communicationFormat": "json",
  "acceptsExpiredCertificate": false,
  "acceptsSelfSignedCertificate": false,
  "acceptsUntrustedRootCertificate": false,
  "populateSoapActionHeader": false,
  "additionalSettings": {
    "properties": {
      "includePosTerminalInfo": false,
      "includeARN": false,
      "includePosDetails": false,
      "includeCardInfoForRecurringContractNotification": false,
      "includeRiskData": false,
      "includeRiskExperimentReference": false,
      "includeSoapSecurityHeader": false,
      "includeContactlessWalletTokenInformation": false,
      "includeAcquirerReference": false,
      "includeRiskProfileReference": false,
      "includeOriginalMerchantReferenceCancelOrRefundNotification": false,
      "includeNfcTokenInformation": false,
      "includeSubvariant": false,
      "includeThreeDSVersion": false,
      "includeInstallmentsInfo": false,
      "includeAliasInfo": false,
      "includeShopperCountry": false,
      "includeRawThreeDSecureResult": false,
      "includeAirlineData": false,
      "includeGrossCurrencyChargebackDetails": false,
      "includeThreeDSecureResult": false,
      "includeMetadataIn3DSecurePaymentNotification": false,
      "includeOriginalReferenceForChargebackReversed": false,
      "addAcquirerResult": false,
      "includeDeliveryAddress": false,
      "includeRetryAttempts": false,
      "includeExtraCosts": false,
      "includeCardHolderName": false,
      "includeShopperDetail": false,
      "includeBankAccountDetails": false,
      "includeMandateDetails": false,
      "includeAuthAmountForDynamicZeroAuth": false,
      "includeIssuerCountry": false,
      "includeAcquirerErrorDetails": false,
      "includeCoBrandedWith": false,
      "includeShopperInteraction": false,
      "includeDeviceAndBrowserInfo": false,
      "addRawAcquirerResult": false,
      "includeCardBin": false,
      "includeFundingSource": false,
      "includeThreeDS2ChallengeInformation": false,
      "includeRiskProfile": false,
      "includeRealtimeAccountUpdaterStatus": false,
      "includeDunningProjectData": false,
      "includePaymentResultInOrderClosedNotification": false,
      "includeCardBinDetails": false,
      "includeNotesInManualReviewNotifications": false,
      "includeZeroAuthFlag": false,
      "addCaptureReferenceToDisputeNotification": false,
      "includePayPalDetails": false,
      "includeRawThreeDSecureDetailsResult": false,
      "includeBankVerificationResults": false,
      "includeCaptureDelayHours": false,
      "addPaymentAccountReference": false,
      "includePayULatamDetails": false,
      "includeStore": false,
      "returnAvsData": false,
      "includeWeChatPayOpenid": false,
      "includeUpiVpa": false,
      "includeUpiMetadata": false,
      "includeCustomRoutingFlagging": false,
      "includeTokenisedPaymentMetaData": false
    }
  },
  "_links": {
    "self": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks/S2-3E5E42476641"
    },
    "generateHmac": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks/S2-3E5E42476641/generateHmac"
    },
    "merchant": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
    },
    "testWebhook": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks/S2-3E5E42476641/test"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Delete-Merchants-Merchant Id-Webhooks-Webhook Id

Remove the configuration for the webhook identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Webhooks read and write

```ts
async deleteMerchantsMerchantIdWebhooksWebhookId(
  merchantId: string,
  webhookId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `webhookId` | `string` | Template, Required | Unique identifier of the webhook configuration. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: No Content - look at the actual response code for the status of the request.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const merchantId = 'merchantId6';

const webhookId = 'webhookId6';

try {
  const response = await webhooksMerchantLevelApi.deleteMerchantsMerchantIdWebhooksWebhookId(
    merchantId,
    webhookId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Patch-Merchants-Merchant Id-Webhooks-Webhook Id

Make changes to the configuration of the webhook identified in the path. The request contains the new values you want to have in the webhook configuration. The response contains the full configuration for the webhook, which includes the new values from the request.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Webhooks read and write

```ts
async patchMerchantsMerchantIdWebhooksWebhookId(
  merchantId: string,
  webhookId: string,
  body?: UpdateMerchantWebhookRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Webhook>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `webhookId` | `string` | Template, Required | Unique identifier of the webhook configuration. |
| `body` | [`UpdateMerchantWebhookRequest \| undefined`](../../doc/models/update-merchant-webhook-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Webhook`](../../doc/models/webhook.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const webhookId = 'webhookId6';

const body: UpdateMerchantWebhookRequest = {
  active: true,
};

try {
  const response = await webhooksMerchantLevelApi.patchMerchantsMerchantIdWebhooksWebhookId(
    merchantId,
    webhookId,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "S2-3E5E42476641",
  "type": "standard",
  "url": "YOUR_WEBHOOK_URL",
  "description": "Webhook for YOUR_MERCHANT_ACCOUNT - YOUR_MERCHANT_CODE",
  "username": "",
  "hasPassword": false,
  "active": true,
  "hasError": false,
  "communicationFormat": "json",
  "acceptsExpiredCertificate": false,
  "acceptsSelfSignedCertificate": false,
  "acceptsUntrustedRootCertificate": false,
  "populateSoapActionHeader": false,
  "additionalSettings": {
    "properties": {
      "includePosTerminalInfo": false,
      "includeARN": false,
      "includePosDetails": false,
      "includeCardInfoForRecurringContractNotification": false,
      "includeRiskData": false,
      "includeRiskExperimentReference": false,
      "includeSoapSecurityHeader": false,
      "includeContactlessWalletTokenInformation": false,
      "includeAcquirerReference": false,
      "includeRiskProfileReference": false,
      "includeOriginalMerchantReferenceCancelOrRefundNotification": false,
      "includeNfcTokenInformation": false,
      "includeSubvariant": false,
      "includeThreeDSVersion": false,
      "includeInstallmentsInfo": false,
      "includeAliasInfo": false,
      "includeShopperCountry": false,
      "includeRawThreeDSecureResult": false,
      "includeAirlineData": false,
      "includeGrossCurrencyChargebackDetails": false,
      "includeThreeDSecureResult": false,
      "includeMetadataIn3DSecurePaymentNotification": false,
      "includeOriginalReferenceForChargebackReversed": false,
      "addAcquirerResult": false,
      "includeDeliveryAddress": false,
      "includeRetryAttempts": false,
      "includeExtraCosts": false,
      "includeCardHolderName": false,
      "includeShopperDetail": false,
      "includeBankAccountDetails": false,
      "includeMandateDetails": false,
      "includeAuthAmountForDynamicZeroAuth": false,
      "includeIssuerCountry": false,
      "includeAcquirerErrorDetails": false,
      "includeCoBrandedWith": false,
      "includeShopperInteraction": false,
      "includeDeviceAndBrowserInfo": false,
      "addRawAcquirerResult": false,
      "includeCardBin": false,
      "includeFundingSource": false,
      "includeThreeDS2ChallengeInformation": false,
      "includeRiskProfile": false,
      "includeRealtimeAccountUpdaterStatus": false,
      "includeDunningProjectData": false,
      "includePaymentResultInOrderClosedNotification": false,
      "includeCardBinDetails": false,
      "includeNotesInManualReviewNotifications": false,
      "includeZeroAuthFlag": false,
      "addCaptureReferenceToDisputeNotification": false,
      "includePayPalDetails": false,
      "includeRawThreeDSecureDetailsResult": false,
      "includeBankVerificationResults": false,
      "includeCaptureDelayHours": false,
      "addPaymentAccountReference": false,
      "includePayULatamDetails": false,
      "includeStore": false,
      "returnAvsData": false,
      "includeWeChatPayOpenid": false,
      "includeUpiVpa": false,
      "includeUpiMetadata": false,
      "includeCustomRoutingFlagging": false,
      "includeTokenisedPaymentMetaData": false
    }
  },
  "_links": {
    "self": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks/S2-3E5E42476641"
    },
    "generateHmac": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks/S2-3E5E42476641/generateHmac"
    },
    "merchant": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
    },
    "testWebhook": {
      "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks/S2-3E5E42476641/test"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Post-Merchants-Merchant Id-Webhooks-Webhook Id-Generate Hmac

Returns an [HMAC key](https://en.wikipedia.org/wiki/HMAC) for the webhook identified in the path. This key allows you to check the integrity and the origin of the notifications you receive.By creating an HMAC key, you start receiving [HMAC-signed notifications](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures#enable-hmac-signatures) from Adyen. Find out more about how to [verify HMAC signatures](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures).

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Webhooks read and write

```ts
async postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac(
  merchantId: string,
  webhookId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateHmacKeyResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `webhookId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GenerateHmacKeyResponse`](../../doc/models/generate-hmac-key-response.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const webhookId = 'webhookId6';

try {
  const response = await webhooksMerchantLevelApi.postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac(
    merchantId,
    webhookId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "hmacKey": "7052E6804F0AF40DCC390464C817F4F963516FA42AC8816D518DC5D39F41E902"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |


# Post-Merchants-Merchant Id-Webhooks-Webhook Id-Test

Sends sample notifications to test if the webhook is set up correctly.

We send four test notifications for each event code you choose. They cover success and failure scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in the merchant accounts. For custom notifications, we only send the specified custom notification.

The response describes the result of the test. The `status` field tells you if the test was successful or not. You can use the other fields to troubleshoot unsuccessful tests.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

* Management API—Webhooks read and write

```ts
async postMerchantsMerchantIdWebhooksWebhookIdTest(
  merchantId: string,
  webhookId: string,
  body?: TestWebhookRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TestWebhookResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Template, Required | The unique identifier of the merchant account. |
| `webhookId` | `string` | Template, Required | Unique identifier of the webhook configuration. |
| `body` | [`TestWebhookRequest \| undefined`](../../doc/models/test-webhook-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TestWebhookResponse`](../../doc/models/test-webhook-response.md).

## Example Usage

```ts
const merchantId = 'merchantId6';

const webhookId = 'webhookId6';

const body: TestWebhookRequest = {
  types: [
    'AUTHORISATION'
  ],
};

try {
  const response = await webhooksMerchantLevelApi.postMerchantsMerchantIdWebhooksWebhookIdTest(
    merchantId,
    webhookId,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof RestServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "data": [
    {
      "merchantId": "YOUR_MERCHANT_ACCOUNT",
      "output": "",
      "requestSent": "{\"live\":\"false\",\"notificationItems\":[{\"NotificationRequestItem\":{\"amount\":{\"currency\":\"EUR\",\"value\":21000},\"eventCode\":\"AUTHORISATION\",\"eventDate\":\"2022-05-10T17:02:03+02:00\",\"merchantAccountCode\":\"YOUR_MERCHANT_ACCOUNT\",\"merchantReference\":\"4TZLD23Y\",\"operations\":[\"CANCEL\",\"CAPTURE\",\"REFUND\"],\"paymentMethod\":\"visa\",\"pspReference\":\"E05WW50L6IOBRGA0\",\"reason\":\"\",\"success\":\"true\"}}]}",
      "responseCode": "200",
      "responseTime": "532 ms",
      "status": "success"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |

