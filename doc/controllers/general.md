# General

```ts
const generalApi = new GeneralApi(client);
```

## Class Name

`GeneralApi`

## Methods

* [Post-Create Permit](../../doc/controllers/general.md#post-create-permit)
* [Post-Disable](../../doc/controllers/general.md#post-disable)
* [Post-Disable Permit](../../doc/controllers/general.md#post-disable-permit)
* [Post-List Recurring Details](../../doc/controllers/general.md#post-list-recurring-details)
* [Post-Notify Shopper](../../doc/controllers/general.md#post-notify-shopper)
* [Post-Schedule Account Updater](../../doc/controllers/general.md#post-schedule-account-updater)
* [Post-Get 3 Ds Availability](../../doc/controllers/general.md#post-get-3-ds-availability)
* [Post-Get Cost Estimate](../../doc/controllers/general.md#post-get-cost-estimate)
* [Post-Change Status](../../doc/controllers/general.md#post-change-status)
* [Post-Check Balance](../../doc/controllers/general.md#post-check-balance)
* [Post-Issue](../../doc/controllers/general.md#post-issue)
* [Post-Load](../../doc/controllers/general.md#post-load)
* [Post-Merge Balance](../../doc/controllers/general.md#post-merge-balance)
* [Post-Void Transaction](../../doc/controllers/general.md#post-void-transaction)
* [Post-Request Subject Erasure](../../doc/controllers/general.md#post-request-subject-erasure)
* [Post-Create Test Card Ranges](../../doc/controllers/general.md#post-create-test-card-ranges)
* [Post-Create Notification Configuration](../../doc/controllers/general.md#post-create-notification-configuration)
* [Post-Delete Notification Configurations](../../doc/controllers/general.md#post-delete-notification-configurations)
* [Post-Get Notification Configuration](../../doc/controllers/general.md#post-get-notification-configuration)
* [Post-Get Notification Configuration List](../../doc/controllers/general.md#post-get-notification-configuration-list)
* [Post-Test Notification Configuration](../../doc/controllers/general.md#post-test-notification-configuration)
* [Post-Update Notification Configuration](../../doc/controllers/general.md#post-update-notification-configuration)
* [Post-Account Holder Balance](../../doc/controllers/general.md#post-account-holder-balance)
* [Post-Account Holder Transaction List](../../doc/controllers/general.md#post-account-holder-transaction-list)
* [Post-Debit Account Holder](../../doc/controllers/general.md#post-debit-account-holder)
* [Post-Payout Account Holder](../../doc/controllers/general.md#post-payout-account-holder)
* [Post-Refund Funds Transfer](../../doc/controllers/general.md#post-refund-funds-transfer)
* [Post-Refund Not Paid Out Transfers](../../doc/controllers/general.md#post-refund-not-paid-out-transfers)
* [Post-Setup Beneficiary](../../doc/controllers/general.md#post-setup-beneficiary)
* [Post-Transfer Funds](../../doc/controllers/general.md#post-transfer-funds)
* [Post-Accept Dispute](../../doc/controllers/general.md#post-accept-dispute)
* [Post-Defend Dispute](../../doc/controllers/general.md#post-defend-dispute)
* [Post-Delete Dispute Defense Document](../../doc/controllers/general.md#post-delete-dispute-defense-document)
* [Post-Retrieve Applicable Defense Reasons](../../doc/controllers/general.md#post-retrieve-applicable-defense-reasons)
* [Post-Supply Defense Document](../../doc/controllers/general.md#post-supply-defense-document)
* [Post-Sessions](../../doc/controllers/general.md#post-sessions)
* [Post-Assign Terminals](../../doc/controllers/general.md#post-assign-terminals)
* [Post-Find Terminal](../../doc/controllers/general.md#post-find-terminal)
* [Post-Get Stores Under Account](../../doc/controllers/general.md#post-get-stores-under-account)
* [Post-Get Terminal Details](../../doc/controllers/general.md#post-get-terminal-details)
* [Post-Get Terminals Under Account](../../doc/controllers/general.md#post-get-terminals-under-account)


# Post-Create Permit

**This endpoint is deprecated.**

Create permits for a recurring contract, including support for defining restrictions.

```ts
async postCreatePermit(
  body?: CreatePermitRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreatePermitResult>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreatePermitRequest \| undefined`](../../doc/models/create-permit-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CreatePermitResult`](../../doc/models/create-permit-result.md).

## Example Usage

```ts
const body: CreatePermitRequest = {
  merchantAccount: 'merchantAccount2',
  permits: [
    {
    }
  ],
  recurringDetailReference: 'recurringDetailReference6',
  shopperReference: 'shopperReference4',
};

try {
  const response = await generalApi.postCreatePermit(body);

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Post-Disable

Disables stored payment details to stop charging a shopper with this particular recurring detail ID.

For more information, refer to [Disable stored details](https://docs.adyen.com/online-payments/classic-integrations/classic-api-integration/tokenization/disable-stored-details).

```ts
async postDisable(
  body?: DisableRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DisableResult>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DisableRequest \| undefined`](../../doc/models/disable-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DisableResult`](../../doc/models/disable-result.md).

## Example Usage

```ts
const body: DisableRequest = {
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  shopperReference: 'YOUR_SHOPPER_REFERENCE',
  recurringDetailReference: '8314442372419167',
};

try {
  const response = await generalApi.postDisable(body);

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Post-Disable Permit

**This endpoint is deprecated.**

Disable a permit that was previously linked to a recurringDetailReference.

```ts
async postDisablePermit(
  body?: DisablePermitRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DisablePermitResult>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DisablePermitRequest \| undefined`](../../doc/models/disable-permit-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DisablePermitResult`](../../doc/models/disable-permit-result.md).

## Example Usage

```ts
try {
  const response = await generalApi.postDisablePermit();

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Post-List Recurring Details

Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.

For more information, refer to [Retrieve stored details](https://docs.adyen.com/classic-integration/recurring-payments/retrieve-stored-details/).

```ts
async postListRecurringDetails(
  body?: RecurringDetailsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RecurringDetailsResult>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RecurringDetailsRequest \| undefined`](../../doc/models/recurring-details-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RecurringDetailsResult`](../../doc/models/recurring-details-result.md).

## Example Usage

```ts
const body: RecurringDetailsRequest = {
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  shopperReference: 'YOUR_SHOPPER_REFERENCE',
  recurring: {
    contract: ContractEnum.RECURRING,
  },
};

try {
  const response = await generalApi.postListRecurringDetails(body);

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Post-Notify Shopper

Sends a request to the issuer so they can inform the shopper about the upcoming recurring payment. This endpoint is used only for local acquiring in India. For more information, refer to [Recurring card payments in India](https://docs.adyen.com/payment-methods/cards/cards-recurring-india).

```ts
async postNotifyShopper(
  body?: NotifyShopperRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NotifyShopperResult>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`NotifyShopperRequest \| undefined`](../../doc/models/notify-shopper-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`NotifyShopperResult`](../../doc/models/notify-shopper-result.md).

## Example Usage

```ts
const body: NotifyShopperRequest = {
  amount: {
    currency: 'INR',
    value: BigInt(1000),
  },
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  reference: 'Example reference',
  shopperReference: 'YOUR_SHOPPER_REFERENCE',
  billingDate: '2021-03-16',
  displayedReference: 'exampleDisplayedReference',
  storedPaymentMethodId: '8415995487234100',
};

try {
  const response = await generalApi.postNotifyShopper(body);

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "message": "Request Processed Successfully",
  "resultCode": "Success",
  "shopperNotificationReference": "9915003646742627",
  "storedPaymentMethodId": "8415995487234100",
  "pspReference": "M5N7TQ4TG5PFWR50",
  "reference": "Example reference",
  "displayedReference": "exampleDisplayedReference"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Post-Schedule Account Updater

When making the API call, you can submit either the credit card information, or the recurring detail reference and the shopper reference:

* If the card information is provided, all the sub-fields for `card` are mandatory.
* If the recurring detail reference is provided, the fields for `shopperReference` and `selectedRecurringDetailReference` are mandatory.

```ts
async postScheduleAccountUpdater(
  body?: ScheduleAccountUpdaterRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ScheduleAccountUpdaterResult>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ScheduleAccountUpdaterRequest \| undefined`](../../doc/models/schedule-account-updater-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ScheduleAccountUpdaterResult`](../../doc/models/schedule-account-updater-result.md).

## Example Usage

```ts
const body: ScheduleAccountUpdaterRequest = {
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  reference: 'YOUR_REFERENCE',
  card: {
    expiryMonth: '03',
    expiryYear: '2030',
    holderName: 'Adyen Test',
    number: '4111111111111111',
  },
};

try {
  const response = await generalApi.postScheduleAccountUpdater(body);

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "pspReference": "QFQTPCQ8HXSKGK82",
  "result": "Success"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Post-Get 3 Ds Availability

Verifies whether 3D Secure is available for the specified BIN or card brand. For 3D Secure 2, this endpoint also returns device fingerprinting keys.

For more information, refer to [3D Secure 2](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).

```ts
async postGet3dsAvailability(
  body?: ThreeDSAvailabilityRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ThreeDSAvailabilityResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ThreeDSAvailabilityRequest \| undefined`](../../doc/models/three-ds-availability-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ThreeDSAvailabilityResponse`](../../doc/models/three-ds-availability-response.md).

## Example Usage

```ts
const body: ThreeDSAvailabilityRequest = {
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  cardNumber: '4111111111111111',
};

try {
  const response = await generalApi.postGet3dsAvailability(body);

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "threeDS1Supported": true,
  "threeDS2CardRangeDetails": [],
  "threeDS2supported": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Post-Get Cost Estimate

> This API is available only for merchants operating in Australia, the EU, and the UK.

Use the Adyen Cost Estimation API to pre-calculate interchange and scheme fee costs. Knowing these costs prior actual payment authorisation gives you an opportunity to charge those costs to the cardholder, if necessary.

To retrieve this information, make the call to the `/getCostEstimate` endpoint. The response to this call contains the amount of the interchange and scheme fees charged by the network for this transaction, and also which surcharging policy is possible (based on current regulations).

> Since not all information is known in advance (for example, if the cardholder will successfully authenticate via 3D Secure or if you also plan to provide additional Level 2/3 data), the returned amounts are based on a set of assumption criteria you define in the `assumptions` parameter.

```ts
async postGetCostEstimate(
  body?: CostEstimateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CostEstimateResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CostEstimateRequest \| undefined`](../../doc/models/cost-estimate-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CostEstimateResponse`](../../doc/models/cost-estimate-response.md).

## Example Usage

```ts
const body: CostEstimateRequest = {
  amount: {
    currency: 'EUR',
    value: BigInt(1234),
  },
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  assumptions: {
    assume3DSecureAuthenticated: true,
    assumeLevel3Data: true,
  },
  cardNumber: '5101180000000007',
  merchantDetails: {
    countryCode: 'NL',
    enrolledIn3DSecure: true,
    mcc: '7411',
  },
  shopperInteraction: ShopperInteractionEnum.Ecommerce,
};

try {
  const response = await generalApi.postGetCostEstimate(body);

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "costEstimateAmount": {
    "currency": "EUR",
    "value": 12
  },
  "resultCode": "Success"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Post-Change Status

Changes the status of the provided payment method to the specified status.

```ts
async postChangeStatus(
  body?: StoredValueStatusChangeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StoredValueStatusChangeResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`StoredValueStatusChangeRequest \| undefined`](../../doc/models/stored-value-status-change-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`StoredValueStatusChangeResponse`](../../doc/models/stored-value-status-change-response.md).

## Example Usage

```ts
try {
  const response = await generalApi.postChangeStatus();

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Post-Check Balance

Checks the balance of the provided payment method.

```ts
async postCheckBalance(
  body?: StoredValueBalanceCheckRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StoredValueBalanceCheckResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`StoredValueBalanceCheckRequest \| undefined`](../../doc/models/stored-value-balance-check-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`StoredValueBalanceCheckResponse`](../../doc/models/stored-value-balance-check-response.md).

## Example Usage

```ts
try {
  const response = await generalApi.postCheckBalance();

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Post-Issue

Issues a new card of the given payment method.

```ts
async postIssue(
  body?: StoredValueIssueRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StoredValueIssueResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`StoredValueIssueRequest \| undefined`](../../doc/models/stored-value-issue-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`StoredValueIssueResponse`](../../doc/models/stored-value-issue-response.md).

## Example Usage

```ts
try {
  const response = await generalApi.postIssue();

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Post-Load

Loads the payment method with the specified funds.

```ts
async postLoad(
  body?: StoredValueLoadRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StoredValueLoadResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`StoredValueLoadRequest \| undefined`](../../doc/models/stored-value-load-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`StoredValueLoadResponse`](../../doc/models/stored-value-load-response.md).

## Example Usage

```ts
try {
  const response = await generalApi.postLoad();

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Post-Merge Balance

Increases the balance of the paymentmethod by the full amount left on the source paymentmethod

```ts
async postMergeBalance(
  body?: StoredValueBalanceMergeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StoredValueBalanceMergeResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`StoredValueBalanceMergeRequest \| undefined`](../../doc/models/stored-value-balance-merge-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`StoredValueBalanceMergeResponse`](../../doc/models/stored-value-balance-merge-response.md).

## Example Usage

```ts
try {
  const response = await generalApi.postMergeBalance();

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Post-Void Transaction

Voids the referenced stored value transaction.

```ts
async postVoidTransaction(
  body?: StoredValueVoidRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StoredValueVoidResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`StoredValueVoidRequest \| undefined`](../../doc/models/stored-value-void-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`StoredValueVoidResponse`](../../doc/models/stored-value-void-response.md).

## Example Usage

```ts
try {
  const response = await generalApi.postVoidTransaction();

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
    if (error instanceof ServiceError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceError`](../../doc/models/service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceError`](../../doc/models/service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceError`](../../doc/models/service-error.md) |


# Post-Request Subject Erasure

Sends the PSP reference containing the shopper data that should be deleted.

```ts
async postRequestSubjectErasure(
  body?: SubjectErasureByPspReferenceRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SubjectErasureResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SubjectErasureByPspReferenceRequest \| undefined`](../../doc/models/subject-erasure-by-psp-reference-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SubjectErasureResponse`](../../doc/models/subject-erasure-response.md).

## Example Usage

```ts
try {
  const response = await generalApi.postRequestSubjectErasure();

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Create Test Card Ranges

Creates one or more test card ranges.

```ts
async postCreateTestCardRanges(
  body?: CreateTestCardRangesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateTestCardRangesResult>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateTestCardRangesRequest \| undefined`](../../doc/models/create-test-card-ranges-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CreateTestCardRangesResult`](../../doc/models/create-test-card-ranges-result.md).

## Example Usage

```ts
const body: CreateTestCardRangesRequest = {
  accountCode: 'accountCode4',
  accountTypeCode: 'accountTypeCode0',
  testCardRanges: [
    {
      cardHolderName: 'cardHolderName0',
      expiryMonth: ExpiryMonthEnum.DECEMBER,
      expiryYear: 138,
      rangeEnd: 'rangeEnd6',
      rangeStart: 'rangeStart4',
    }
  ],
};

try {
  const response = await generalApi.postCreateTestCardRanges(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Create Notification Configuration

Creates a subscription to notifications informing you of events on your platform. After the subscription is created, the events specified in the configuration will be sent to the URL specified in the configuration. Subscriptions must be configured on a per-event basis (as opposed to, for example, a per-account holder basis), so all event notifications of a marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have multiple endpoints if desired; an event notification may be sent to as many or as few different endpoints as configured.

```ts
async postCreateNotificationConfiguration(
  body?: CreateNotificationConfigurationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetNotificationConfigurationResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateNotificationConfigurationRequest \| undefined`](../../doc/models/create-notification-configuration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetNotificationConfigurationResponse`](../../doc/models/get-notification-configuration-response.md).

## Example Usage

```ts
const body: CreateNotificationConfigurationRequest = {
  configurationDetails: {
    active: true,
    description: 'Unique description 123',
    eventConfigs: [
      {
        eventType: EventTypeEnum.ACCOUNTHOLDERVERIFICATION,
        includeMode: IncludeModeEnum.INCLUDE,
      }
    ],
    notifyPassword: 'testPassword',
    notifyURL: 'https://www.adyen.com/notification-handler',
    notifyUsername: 'testUserName',
    sslProtocol: SslProtocolEnum.TLSv13,
  },
};

try {
  const response = await generalApi.postCreateNotificationConfiguration(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "pspReference": "8516178952380553",
  "configurationDetails": {
    "active": true,
    "description": "Unique description 123",
    "eventConfigs": [
      {
        "eventType": "ACCOUNT_HOLDER_VERIFICATION",
        "includeMode": "INCLUDE"
      }
    ],
    "notificationId": 28468,
    "notifyURL": "https://www.adyen.com/notification-handler",
    "sslProtocol": "TLSv13"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Delete Notification Configurations

Deletes an existing notification subscription configuration. After the subscription is deleted, no further event notifications will be sent to the URL defined in the subscription.

```ts
async postDeleteNotificationConfigurations(
  body?: DeleteNotificationConfigurationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenericResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeleteNotificationConfigurationRequest \| undefined`](../../doc/models/delete-notification-configuration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GenericResponse`](../../doc/models/generic-response.md).

## Example Usage

```ts
const body: DeleteNotificationConfigurationRequest = {
  notificationIds: [
    BigInt(27891)
  ],
};

try {
  const response = await generalApi.postDeleteNotificationConfigurations(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "pspReference": "8516480472498802"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Get Notification Configuration

Returns the details of the configuration of a notification subscription.

```ts
async postGetNotificationConfiguration(
  body?: GetNotificationConfigurationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetNotificationConfigurationResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetNotificationConfigurationRequest \| undefined`](../../doc/models/get-notification-configuration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetNotificationConfigurationResponse`](../../doc/models/get-notification-configuration-response.md).

## Example Usage

```ts
const body: GetNotificationConfigurationRequest = {
  notificationId: BigInt(21259),
};

try {
  const response = await generalApi.postGetNotificationConfiguration(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "pspReference": "8616480378704419",
  "configurationDetails": {
    "active": true,
    "apiVersion": 5,
    "description": "test",
    "eventConfigs": [
      {
        "eventType": "ACCOUNT_HOLDER_VERIFICATION",
        "includeMode": "INCLUDE"
      }
    ],
    "notificationId": 50054,
    "notifyURL": "https://www.adyen.com/notification-handler",
    "sslProtocol": "TLSv13"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Get Notification Configuration List

Returns the details of the configurations of all of the notification subscriptions in the platform of the executing user.

```ts
async postGetNotificationConfigurationList(
  body?: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetNotificationConfigurationListResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown \| undefined` | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetNotificationConfigurationListResponse`](../../doc/models/get-notification-configuration-list-response.md).

## Example Usage

```ts
const body = {  };

try {
  const response = await generalApi.postGetNotificationConfigurationList(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "pspReference": "8516480437185726",
  "configurations": [
    {
      "active": true,
      "description": "Unique description 12223",
      "eventConfigs": [
        {
          "eventType": "ACCOUNT_HOLDER_VERIFICATION",
          "includeMode": "INCLUDE"
        }
      ],
      "notificationId": 27893,
      "notifyURL": "https://www.adyen.com/notification-handler",
      "sslProtocol": "TLSv13"
    },
    {
      "active": true,
      "description": "just testing things",
      "eventConfigs": [
        {
          "eventType": "ACCOUNT_HOLDER_VERIFICATION",
          "includeMode": "INCLUDE"
        }
      ],
      "notificationId": 25032,
      "notifyURL": "https://www.adyen.com/notification-handler",
      "sslProtocol": "TLSv13"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Test Notification Configuration

Tests an existing notification subscription configuration. For each event type specified, a test notification will be generated and sent to the URL configured in the subscription specified.

```ts
async postTestNotificationConfiguration(
  body?: TestNotificationConfigurationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TestNotificationConfigurationResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TestNotificationConfigurationRequest \| undefined`](../../doc/models/test-notification-configuration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TestNotificationConfigurationResponse`](../../doc/models/test-notification-configuration-response.md).

## Example Usage

```ts
const body: TestNotificationConfigurationRequest = {
  notificationId: BigInt(25032),
  eventTypes: [
    EventType1Enum.ACCOUNTHOLDERVERIFICATION
  ],
};

try {
  const response = await generalApi.postTestNotificationConfiguration(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "pspReference": "8616480452462678",
  "errorMessages": [
    "The server did not respond with HTTP 2XX"
  ],
  "eventTypes": [
    "ACCOUNT_HOLDER_VERIFICATION"
  ],
  "exchangeMessages": [
    {
      "messageCode": "Number",
      "messageDescription": "1"
    },
    {
      "messageCode": "Title",
      "messageDescription": "Test 1: 8616480452462678"
    }
  ],
  "notificationId": 25032,
  "okMessages": [
    "...",
    "ResponseTime_ms: 262",
    "ResponseCode: 404"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Update Notification Configuration

Updates an existing notification subscription configuration. If you are updating the event types, you must provide all event types, otherwise the previous event type configuration will be overwritten.

```ts
async postUpdateNotificationConfiguration(
  body?: UpdateNotificationConfigurationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetNotificationConfigurationResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateNotificationConfigurationRequest \| undefined`](../../doc/models/update-notification-configuration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetNotificationConfigurationResponse`](../../doc/models/get-notification-configuration-response.md).

## Example Usage

```ts
const body: UpdateNotificationConfigurationRequest = {
  configurationDetails: {
    active: false,
    description: 'Test notif config 756',
    eventConfigs: [
      {
        eventType: EventTypeEnum.ACCOUNTHOLDERCREATED,
        includeMode: IncludeModeEnum.EXCLUDE,
      },
      {
        eventType: EventTypeEnum.ACCOUNTCREATED,
        includeMode: IncludeModeEnum.INCLUDE,
      }
    ],
    notificationId: BigInt(21259),
    notifyPassword: 'testPassword2',
    notifyURL: 'https://www.adyen.com/notification-handler',
    notifyUsername: 'testUserName2',
    sslProtocol: SslProtocolEnum.TLSv13,
  },
};

try {
  const response = await generalApi.postUpdateNotificationConfiguration(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "pspReference": "8516178952580574",
  "configurationDetails": {
    "active": false,
    "description": "Test notif config 756",
    "eventConfigs": [
      {
        "eventType": "ACCOUNT_CREATED",
        "includeMode": "INCLUDE"
      },
      {
        "eventType": "ACCOUNT_HOLDER_CREATED",
        "includeMode": "EXCLUDE"
      }
    ],
    "notificationId": 21259,
    "notifyURL": "https://www.adyen.com/notification-handler",
    "sslProtocol": "TLSv13"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Account Holder Balance

Returns the account balances of an account holder. An account's balances are organized according by currencies. This mean that an account may have multiple balances: one for each currency.

```ts
async postAccountHolderBalance(
  body?: CloseAccountHolderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountHolderBalanceResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CloseAccountHolderRequest \| undefined`](../../doc/models/close-account-holder-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountHolderBalanceResponse`](../../doc/models/account-holder-balance-response.md).

## Example Usage

```ts
const body: CloseAccountHolderRequest = {
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
};

try {
  const response = await generalApi.postAccountHolderBalance(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Account Holder Transaction List

Returns a list of transactions for an account holder's accounts. You can specify the accounts and transaction statuses to be included on the list. The call returns a maximum of 50 transactions for each account. To retrieve all transactions, you must make another call with the 'page' value incremented. Transactions are listed in chronological order, with the most recent transaction first.

```ts
async postAccountHolderTransactionList(
  body?: AccountHolderTransactionListRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountHolderTransactionListResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AccountHolderTransactionListRequest \| undefined`](../../doc/models/account-holder-transaction-list-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AccountHolderTransactionListResponse`](../../doc/models/account-holder-transaction-list-response.md).

## Example Usage

```ts
const body: AccountHolderTransactionListRequest = {
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
  transactionListsPerAccount: [
    {
      accountCode: '195752115',
      page: 1,
    }
  ],
};

try {
  const response = await generalApi.postAccountHolderTransactionList(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Debit Account Holder

Sends a direct debit request to an account holder's bank account. If the direct debit is successful, the funds are settled in the accounts specified in the split instructions. Adyen sends the result of the direct debit in a [`DIRECT_DEBIT_INITIATED`](https://docs.adyen.com/api-explorer/#/NotificationService/latest/post/DIRECT_DEBIT_INITIATED) notification webhook.

To learn more about direct debits, see [Top up accounts](https://docs.adyen.com/classic-platforms/top-up-accounts).

```ts
async postDebitAccountHolder(
  body?: DebitAccountHolderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DebitAccountHolderResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DebitAccountHolderRequest \| undefined`](../../doc/models/debit-account-holder-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DebitAccountHolderResponse`](../../doc/models/debit-account-holder-response.md).

## Example Usage

```ts
const body: DebitAccountHolderRequest = {
  accountHolderCode: 'ACCOUNT_HOLDER_CODE',
  amount: {
    currency: 'USD',
    value: BigInt(6200),
  },
  bankAccountUUID: '000b81aa-ae7e-4492-aa7e-72b2129dce0c',
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  splits: [
    {
      type: Type60Enum.MarketPlace,
      account: '8535516988037431',
      amount: {
        value: BigInt(6000),
      },
      reference: 'YOUR_SPLIT_REFERENCE_1',
    },
    {
      type: Type60Enum.Commission,
      amount: {
        value: BigInt(200),
      },
      reference: 'YOUR_SPLIT_REFERENCE_2',
    }
  ],
  description: 'YOUR_DESCRIPTION',
};

try {
  const response = await generalApi.postDebitAccountHolder(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Payout Account Holder

Pays out a specified amount from an account to the bank account of account holder.

```ts
async postPayoutAccountHolder(
  body?: PayoutAccountHolderRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PayoutAccountHolderResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PayoutAccountHolderRequest \| undefined`](../../doc/models/payout-account-holder-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PayoutAccountHolderResponse`](../../doc/models/payout-account-holder-response.md).

## Example Usage

```ts
const body: PayoutAccountHolderRequest = {
  accountCode: '118731451',
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
  amount: {
    currency: 'EUR',
    value: BigInt(99792),
  },
  bankAccountUUID: '000b81aa-ae7e-4492-aa7e-72b2129dce0c',
  description: '12345 – Test',
};

try {
  const response = await generalApi.postPayoutAccountHolder(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Refund Funds Transfer

Refunds funds transferred from one account to another. Both accounts must be in the same platform, but can have different account holders.

```ts
async postRefundFundsTransfer(
  body?: RefundFundsTransferRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RefundFundsTransferResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RefundFundsTransferRequest \| undefined`](../../doc/models/refund-funds-transfer-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RefundFundsTransferResponse`](../../doc/models/refund-funds-transfer-response.md).

## Example Usage

```ts
const body: RefundFundsTransferRequest = {
  amount: {
    currency: 'EUR',
    value: BigInt(1000),
  },
  originalReference: 'PSP_REFERENCE_OF_TRANSFER_TO_REFUND',
  merchantReference: 'YOUR_REFERENCE_ID',
};

try {
  const response = await generalApi.postRefundFundsTransfer(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Refund Not Paid Out Transfers

Refunds all the transactions of an account that have taken place since the most recent payout. This request is on a account basis (as opposed to a payment basis), so only the portion of the payment that was made to the specified account is refunded. The commissions, fees, and payments to other accounts remain in the accounts to which they were sent as designated by the original payment's split details.

```ts
async postRefundNotPaidOutTransfers(
  body?: RefundNotPaidOutTransfersRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenericResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RefundNotPaidOutTransfersRequest \| undefined`](../../doc/models/refund-not-paid-out-transfers-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GenericResponse`](../../doc/models/generic-response.md).

## Example Usage

```ts
const body: RefundNotPaidOutTransfersRequest = {
  accountCode: '189184578',
  accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
};

try {
  const response = await generalApi.postRefundNotPaidOutTransfers(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Setup Beneficiary

Defines a benefactor and a beneficiary relationship between two accounts. At the time of benefactor/beneficiary setup, the funds in the benefactor account are transferred to the beneficiary account, and any further payments to the benefactor account are automatically sent to the beneficiary account. A series of benefactor/beneficiaries may not exceed four beneficiaries and may not have a cycle in it.

```ts
async postSetupBeneficiary(
  body?: SetupBeneficiaryRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenericResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SetupBeneficiaryRequest \| undefined`](../../doc/models/setup-beneficiary-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GenericResponse`](../../doc/models/generic-response.md).

## Example Usage

```ts
const body: SetupBeneficiaryRequest = {
  destinationAccountCode: '128952522',
  sourceAccountCode: '134498192',
  merchantReference: 'YOUR_REFERENCE_ID',
};

try {
  const response = await generalApi.postSetupBeneficiary(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Transfer Funds

Transfers funds from one account to another account. Both accounts must be in the same platform, but can have different account holders. The transfer must include a transfer code, which should be determined by the platform, in compliance with local regulations.

```ts
async postTransferFunds(
  body?: TransferFundsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransferFundsResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TransferFundsRequest \| undefined`](../../doc/models/transfer-funds-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TransferFundsResponse`](../../doc/models/transfer-funds-response.md).

## Example Usage

```ts
const body: TransferFundsRequest = {
  amount: {
    currency: 'EUR',
    value: BigInt(2000),
  },
  destinationAccountCode: '190324759',
  sourceAccountCode: '100000000',
  transferCode: 'TransferCode_1',
};

try {
  const response = await generalApi.postTransferFunds(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Accept Dispute

Accepts a specific dispute.

```ts
async postAcceptDispute(
  body?: AcceptDisputeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AcceptDisputeResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AcceptDisputeRequest \| undefined`](../../doc/models/accept-dispute-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AcceptDisputeResponse`](../../doc/models/accept-dispute-response.md).

## Example Usage

```ts
const body: AcceptDisputeRequest = {
  disputePspReference: 'DZ4DPSHB4WD2WN82',
  merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
};

try {
  const response = await generalApi.postAcceptDispute(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "disputeServiceResult": {
    "success": true
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Defend Dispute

Defends a specific dispute.

```ts
async postDefendDispute(
  body?: DefendDisputeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DefendDisputeResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DefendDisputeRequest \| undefined`](../../doc/models/defend-dispute-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DefendDisputeResponse`](../../doc/models/defend-dispute-response.md).

## Example Usage

```ts
const body: DefendDisputeRequest = {
  defenseReasonCode: 'SupplyDefenseMaterial',
  disputePspReference: 'DZ4DPSHB4WD2WN82',
  merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
};

try {
  const response = await generalApi.postDefendDispute(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "disputeServiceResult": {
    "success": true
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Delete Dispute Defense Document

Deletes a specific dispute defense document that was supplied earlier.

```ts
async postDeleteDisputeDefenseDocument(
  body?: DeleteDefenseDocumentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteDefenseDocumentResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DeleteDefenseDocumentRequest \| undefined`](../../doc/models/delete-defense-document-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DeleteDefenseDocumentResponse`](../../doc/models/delete-defense-document-response.md).

## Example Usage

```ts
const body: DeleteDefenseDocumentRequest = {
  defenseDocumentType: 'DefenseMaterial',
  disputePspReference: 'DZ4DPSHB4WD2WN82',
  merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
};

try {
  const response = await generalApi.postDeleteDisputeDefenseDocument(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "disputeServiceResult": {
    "success": true
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Retrieve Applicable Defense Reasons

Returns a list of all applicable defense reasons to defend a specific dispute.

```ts
async postRetrieveApplicableDefenseReasons(
  body?: DefenseReasonsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DefenseReasonsResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DefenseReasonsRequest \| undefined`](../../doc/models/defense-reasons-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DefenseReasonsResponse`](../../doc/models/defense-reasons-response.md).

## Example Usage

```ts
const body: DefenseReasonsRequest = {
  disputePspReference: 'DZ4DPSHB4WD2WN82',
  merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
};

try {
  const response = await generalApi.postRetrieveApplicableDefenseReasons(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "defenseReasons": [
    {
      "defenseDocumentTypes": [
        {
          "available": false,
          "defenseDocumentTypeCode": "TIDorInvoice",
          "requirementLevel": "Optional"
        },
        {
          "available": false,
          "defenseDocumentTypeCode": "GoodsNotReturned",
          "requirementLevel": "Required"
        }
      ],
      "defenseReasonCode": "GoodsNotReturned",
      "satisfied": false
    },
    {
      "defenseDocumentTypes": [
        {
          "available": false,
          "defenseDocumentTypeCode": "TIDorInvoice",
          "requirementLevel": "Optional"
        },
        {
          "available": false,
          "defenseDocumentTypeCode": "GoodsRepairedOrReplaced",
          "requirementLevel": "Required"
        }
      ],
      "defenseReasonCode": "GoodsRepairedOrReplaced",
      "satisfied": false
    },
    {
      "defenseDocumentTypes": [
        {
          "available": false,
          "defenseDocumentTypeCode": "GoodsWereAsDescribed",
          "requirementLevel": "Required"
        },
        {
          "available": false,
          "defenseDocumentTypeCode": "TIDorInvoice",
          "requirementLevel": "Required"
        }
      ],
      "defenseReasonCode": "GoodsWereAsDescribed",
      "satisfied": false
    },
    {
      "defenseDocumentTypes": [
        {
          "available": false,
          "defenseDocumentTypeCode": "TIDorInvoice",
          "requirementLevel": "Optional"
        },
        {
          "available": false,
          "defenseDocumentTypeCode": "DefenseMaterial",
          "requirementLevel": "Required"
        }
      ],
      "defenseReasonCode": "SupplyDefenseMaterial",
      "satisfied": false
    }
  ],
  "disputeServiceResult": {
    "success": true
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Supply Defense Document

Supplies a specific dispute defense document.

```ts
async postSupplyDefenseDocument(
  body?: SupplyDefenseDocumentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SupplyDefenseDocumentResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SupplyDefenseDocumentRequest \| undefined`](../../doc/models/supply-defense-document-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SupplyDefenseDocumentResponse`](../../doc/models/supply-defense-document-response.md).

## Example Usage

```ts
const body: SupplyDefenseDocumentRequest = {
  defenseDocuments: [
    {
      content: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==',
      contentType: 'application/pdf',
      defenseDocumentTypeCode: 'DefenseMaterial',
    }
  ],
  disputePspReference: 'DZ4DPSHB4WD2WN82',
  merchantAccountCode: 'YOUR_MERCHANT_ACCOUNT',
};

try {
  const response = await generalApi.postSupplyDefenseDocument(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "disputeServiceResult": {
    "success": true
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Sessions

**This endpoint is deprecated.**

Establishes a secure communications session between the POS Mobile SDK and the Adyen payments platform, through mutual authentication.
The request sends a setup token that identifies the SDK and the device. The response returns a session token that the SDK can use to authenticate responses received from the Adyen payments platform.

> This request applies to **mobile in-person** transactions. You cannot use this request to create online payments sessions.

```ts
async postSessions(
  body?: CreateSessionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CertificateLoadingResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateSessionRequest \| undefined`](../../doc/models/create-session-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: Created - the request has been fulfilled and has resulted in one or more new resources being created.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CertificateLoadingResponse`](../../doc/models/certificate-loading-response.md).

## Example Usage

```ts
const body: CreateSessionRequest = {
  merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  setupToken: 'SETUP_TOKEN',
  store: 'YOUR_STORE_ID',
};

try {
  const response = await generalApi.postSessions(body);

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
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "APP_SESSION_ID",
  "installationId": "INSTALLATION_ID",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "store": "YOUR_STORE_ID",
  "sdkData": "SDK_DATA_BLOB"
}
```


# Post-Assign Terminals

**This endpoint is deprecated.**

Assigns one or more payment terminals to a merchant account or a store. You can also use this endpoint to reassign terminals between merchant accounts or stores, and to unassign a terminal and return it to company inventory.

> From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).

```ts
async postAssignTerminals(
  body?: AssignTerminalsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AssignTerminalsResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AssignTerminalsRequest \| undefined`](../../doc/models/assign-terminals-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AssignTerminalsResponse`](../../doc/models/assign-terminals-response.md).

## Example Usage

```ts
const body: AssignTerminalsRequest = {
  companyAccount: 'YOUR_COMPANY_ACCOUNT',
  terminals: [
    'P400Plus-275479597'
  ],
};

try {
  const response = await generalApi.postAssignTerminals(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "results": {
    "P400Plus-275479597": "RemoveConfigScheduled"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Find Terminal

**This endpoint is deprecated.**

Returns the company account, merchant account, or store that a payment terminal is assigned to.

> From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).

```ts
async postFindTerminal(
  body?: FindTerminalRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FindTerminalResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`FindTerminalRequest \| undefined`](../../doc/models/find-terminal-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`FindTerminalResponse`](../../doc/models/find-terminal-response.md).

## Example Usage

```ts
const body: FindTerminalRequest = {
  terminal: 'M400-401972715',
};

try {
  const response = await generalApi.postFindTerminal(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "companyAccount": "YOUR_COMPANY_ACCOUNT",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "merchantInventory": false,
  "store": "YOUR_STORE",
  "terminal": "M400-401972715"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Get Stores Under Account

**This endpoint is deprecated.**

Returns a list of stores associated with a company account or a merchant account, including the status of each store.

> From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).

```ts
async postGetStoresUnderAccount(
  body?: GetStoresUnderAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetStoresUnderAccountResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetStoresUnderAccountRequest \| undefined`](../../doc/models/get-stores-under-account-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetStoresUnderAccountResponse`](../../doc/models/get-stores-under-account-response.md).

## Example Usage

```ts
const body: GetStoresUnderAccountRequest = {
  companyAccount: 'YOUR_COMPANY_ACCOUNT',
};

try {
  const response = await generalApi.postGetStoresUnderAccount(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "stores": [
    {
      "store": "YOUR_STORE",
      "description": "YOUR_STORE",
      "address": {
        "city": "The City",
        "countryCode": "NL",
        "postalCode": "1234",
        "streetAddress": "The Street"
      },
      "status": "Active",
      "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Get Terminal Details

**This endpoint is deprecated.**

Returns the details of a payment terminal, including where the terminal is assigned to. The response returns the same details that are provided in the terminal list in your Customer Area and in the Terminal Fleet report.

> From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).

```ts
async postGetTerminalDetails(
  body?: GetTerminalDetailsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTerminalDetailsResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetTerminalDetailsRequest \| undefined`](../../doc/models/get-terminal-details-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetTerminalDetailsResponse`](../../doc/models/get-terminal-details-response.md).

## Example Usage

```ts
const body: GetTerminalDetailsRequest = {
  terminal: 'M400-401972715',
};

try {
  const response = await generalApi.postGetTerminalDetails(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "companyAccount": "YOUR_COMPANY_ACCOUNT",
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "merchantInventory": false,
  "store": "YOUR_STORE",
  "terminal": "M400-401972715",
  "deviceModel": "M400",
  "serialNumber": "401-972-715",
  "permanentTerminalId": "88912016",
  "terminalStatus": "SwitchedOff",
  "firmwareVersion": "Verifone_VOS 1.57.6",
  "country": "NETHERLANDS",
  "storeDetails": {
    "store": "YOUR_STORE",
    "description": "TestStore",
    "address": {
      "city": "The City",
      "countryCode": "NL",
      "postalCode": "1234",
      "streetAddress": "The Street"
    }
  },
  "ethernetMac": "60:c7:98:5a:69:cd",
  "ethernetIp": "192.168.2.11",
  "wifiMac": "c4:ac:59:47:f3:71",
  "wifiIp": "192.168.2.12",
  "dhcpEnabled": false
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |


# Post-Get Terminals Under Account

**This endpoint is deprecated.**

Returns a list of payment terminals associated with a company account, merchant account, or store. The response shows whether the terminals are in the inventory, or in-store (ready for boarding or already boarded).

> From January 1, 2025 POS Terminal Management API is deprecated and support stops on April 1, 2025. To automate the management of your terminal fleet, use our [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).

```ts
async postGetTerminalsUnderAccount(
  body?: GetTerminalsUnderAccountRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTerminalsUnderAccountResponse>>
```

## Authentication

This endpoint requires [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetTerminalsUnderAccountRequest \| undefined`](../../doc/models/get-terminals-under-account-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetTerminalsUnderAccountResponse`](../../doc/models/get-terminals-under-account-response.md).

## Example Usage

```ts
const body: GetTerminalsUnderAccountRequest = {
  companyAccount: 'YOUR_COMPANY_ACCOUNT',
};

try {
  const response = await generalApi.postGetTerminalsUnderAccount(body);

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
    if (error instanceof ServiceErrorError1Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "companyAccount": "YOUR_COMPANY_ACCOUNT",
  "merchantAccounts": [
    {
      "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
      "inStoreTerminals": [
        "P400Plus-275479597"
      ],
      "stores": [
        {
          "store": "YOUR_STORE",
          "inStoreTerminals": [
            "M400-401972715"
          ]
        }
      ]
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - a problem reading or understanding the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 401 | Unauthorized - authentication required. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`ServiceErrorError1Error`](../../doc/models/service-error-error-1-error.md) |

