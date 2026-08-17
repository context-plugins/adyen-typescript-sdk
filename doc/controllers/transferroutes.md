# Transferroutes

```ts
const transferroutesApi = new TransferroutesApi(client);
```

## Class Name

`TransferroutesApi`


# Post-Transfer Routes-Calculate

Returns available transfer routes based on a combination of transfer `country`, `currency`, `counterparty`, and `priorities`. Use this endpoint to find optimal transfer priorities and associated requirements before you [make a transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers).

```ts
async postTransferRoutesCalculate(
  body?: TransferRouteRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransferRouteResponse>>
```

## Authentication

This endpoint requires [clientKey](../../doc/auth/custom-query-parameter.md) **OR** [BasicAuth](../../doc/auth/basic-authentication.md) **OR** [ApiKeyAuth](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TransferRouteRequest \| undefined`](../../doc/models/transfer-route-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - the request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TransferRouteResponse`](../../doc/models/transfer-route-response.md).

## Example Usage

```ts
const body: TransferRouteRequest = {
  balancePlatform: 'YOUR_BALANCE_PLATFORM',
  category: 'bank',
  currency: 'USD',
  counterparty: {
    bankAccount: {
      accountIdentification: {
        iban: 'NL91ABNA0417164300',
        type: 'iban',
      },
    },
  },
};

try {
  const response = await transferRoutesApi.postTransferRoutesCalculate(body);

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
  "transferRoutes": [
    {
      "country": "NL",
      "currency": "USD",
      "priority": "crossBorder",
      "requirements": [
        {
          "description": "Amount of transfer must be at least 100, and no greater than 99999999999",
          "max": 99999999999,
          "min": 100,
          "type": "amountMinMaxRequirement"
        },
        {
          "description": "Country, street and city is required.",
          "requiredAddressFields": [
            "line1",
            "city",
            "country"
          ],
          "type": "addressRequirement"
        },
        {
          "description": "Bank account identification type must be iban or numberAndBic",
          "bankAccountIdentificationTypes": [
            "iban",
            "numberAndBic"
          ],
          "type": "bankAccountIdentificationTypeRequirement"
        },
        {
          "issuingCountryCode": "NL",
          "paymentInstrumentType": "BankAccount",
          "type": "paymentInstrumentRequirement"
        }
      ]
    },
    {
      "country": "NL",
      "currency": "USD",
      "priority": "wire",
      "requirements": [
        {
          "description": "Amount of transfer must be at least 100, and no greater than 99999999999",
          "max": 99999999999,
          "min": 100,
          "type": "amountMinMaxRequirement"
        },
        {
          "description": "Country, street and city is required.",
          "requiredAddressFields": [
            "line1",
            "city",
            "country"
          ],
          "type": "addressRequirement"
        },
        {
          "description": "Bank account identification type must be iban or numberAndBic",
          "bankAccountIdentificationTypes": [
            "iban",
            "numberAndBic"
          ],
          "type": "bankAccountIdentificationTypeRequirement"
        },
        {
          "issuingCountryCode": "NL",
          "paymentInstrumentType": "BankAccount",
          "type": "paymentInstrumentRequirement"
        }
      ]
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized - authentication required. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 403 | Forbidden - insufficient permissions to process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RestServiceError`](../../doc/models/rest-service-error.md) |
| 500 | Internal Server Error - the server could not process the request. | [`RestServiceError`](../../doc/models/rest-service-error.md) |

