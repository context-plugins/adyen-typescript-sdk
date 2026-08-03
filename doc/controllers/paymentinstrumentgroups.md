# Paymentinstrumentgroups

```ts
const paymentinstrumentgroupsApi = new PaymentinstrumentgroupsApi(client);
```

## Class Name

`PaymentinstrumentgroupsApi`

## Methods

* [Post-Payment Instrument Groups](../../doc/controllers/paymentinstrumentgroups.md#post-payment-instrument-groups)
* [Get-Payment Instrument Groups-Id](../../doc/controllers/paymentinstrumentgroups.md#get-payment-instrument-groups-id)
* [Get-Payment Instrument Groups-Id-Transaction Rules](../../doc/controllers/paymentinstrumentgroups.md#get-payment-instrument-groups-id-transaction-rules)


# Post-Payment Instrument Groups

Creates a payment instrument group to associate and group payment instrument resources together. You can apply a transaction rule to a payment instrument group.

```ts
async postPaymentInstrumentGroups(
  body?: PaymentInstrumentGroupInfo,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentInstrumentGroup>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PaymentInstrumentGroupInfo \| undefined`](../../doc/models/payment-instrument-group-info.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentInstrumentGroup`](../../doc/models/payment-instrument-group.md).

## Example Usage

```ts
const body: PaymentInstrumentGroupInfo = {
  balancePlatform: 'YOUR_BALANCE_PLATFORM',
  txVariant: 'mc',
};

try {
  const response = await paymentInstrumentGroupsApi.postPaymentInstrumentGroups(body);

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
  "balancePlatform": "YOUR_BALANCE_PLATFORM",
  "txVariant": "mc",
  "id": "PG32272223222H5J4DCRVC9DH"
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


# Get-Payment Instrument Groups-Id

Returns the details of a payment instrument group.

```ts
async getPaymentInstrumentGroupsId(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentInstrumentGroup>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the payment instrument group. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentInstrumentGroup`](../../doc/models/payment-instrument-group.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await paymentInstrumentGroupsApi.getPaymentInstrumentGroupsId(id);

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
  "balancePlatform": "YOUR_BALANCE_PLATFORM",
  "txVariant": "mc",
  "id": "PG3227C223222B5CMD3FJFKGZ"
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


# Get-Payment Instrument Groups-Id-Transaction Rules

Returns a list of all the transaction rules associated with a payment instrument group.

```ts
async getPaymentInstrumentGroupsIdTransactionRules(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionRulesResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | The unique identifier of the payment instrument group. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TransactionRulesResponse`](../../doc/models/transaction-rules-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await paymentInstrumentGroupsApi.getPaymentInstrumentGroupsIdTransactionRules(id);

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
  "transactionRules": [
    {
      "aggregationLevel": "paymentInstrument",
      "description": "Up to 1000 EUR per card for the last 12 hours",
      "entityKey": {
        "entityReference": "PG3227C223222C5GXR3M5592Q",
        "entityType": "paymentInstrumentGroup"
      },
      "interval": {
        "duration": {
          "unit": "hours",
          "value": 12
        },
        "timeZone": "UTC",
        "type": "sliding"
      },
      "outcomeType": "hardBlock",
      "reference": "YOUR_REFERENCE_2918A",
      "requestType": "authorization",
      "ruleRestrictions": {
        "totalAmount": {
          "operation": "greaterThan",
          "value": {
            "currency": "EUR",
            "value": 100000
          }
        }
      },
      "status": "inactive",
      "type": "velocity",
      "id": "TR3227C223222C5GXR3XP596N"
    },
    {
      "aggregationLevel": "paymentInstrument",
      "description": "NL only",
      "entityKey": {
        "entityReference": "PG3227C223222C5GXR3M5592Q",
        "entityType": "paymentInstrumentGroup"
      },
      "interval": {
        "duration": {
          "unit": "hours",
          "value": 12
        },
        "timeZone": "UTC",
        "type": "sliding"
      },
      "outcomeType": "hardBlock",
      "reference": "myRule12345",
      "requestType": "authorization",
      "ruleRestrictions": {
        "totalAmount": {
          "operation": "greaterThan",
          "value": {
            "currency": "EUR",
            "value": 100000
          }
        }
      },
      "status": "inactive",
      "type": "velocity",
      "id": "TR3227C223222C5GXR3WC595H"
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

