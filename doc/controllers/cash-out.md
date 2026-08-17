# Cash Out

```ts
const cashOutApi = new CashOutApi(client);
```

## Class Name

`CashOutApi`


# Post-Cashouts

Initiates a [cashout](https://docs.adyen.com/platforms/cash-out-instantly) request.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postCashouts(
  body: CashOutInfo,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CashOut>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CashOutInfo`](../../doc/models/cash-out-info.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK - The request has succeeded.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CashOut`](../../doc/models/cash-out.md).

## Example Usage

```ts
const body: CashOutInfo = {
  amount: {
    currency: 'EUR',
    value: BigInt(50000),
  },
  instructingBalanceAccountId: 'BA00000000000000000000001',
  counterparty: {
    transferInstrumentId: 'SE00000000000000000000001',
  },
  description: 'Cashout to bank account',
  fee: {
    amount: {
      currency: 'EUR',
      value: BigInt(500),
    },
  },
  referenceForBeneficiary: 'CASHOUT-REF-001',
};

try {
  const response = await cashOutApi.postCashouts(body);

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
    if (error instanceof DefaultErrorResponseEntityError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "CO00000000000000000000001",
  "instructingBalanceAccountId": "BA00000000000000000000001",
  "amount": {
    "currency": "EUR",
    "value": 50000
  },
  "counterparty": {
    "transferInstrumentId": "SE00000000000000000000001"
  },
  "description": "Cashout to bank account",
  "referenceForBeneficiary": "CASHOUT-REF-001",
  "fee": {
    "amount": {
      "currency": "EUR",
      "value": 500
    }
  },
  "transfers": [
    {
      "id": "400F6060JMB1I0AB",
      "type": "cashoutRepayment",
      "amount": {
        "currency": "EUR",
        "value": 50500
      }
    },
    {
      "id": "400F6060JMB1I0AA",
      "type": "cashoutFee",
      "amount": {
        "currency": "EUR",
        "value": 500
      }
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request - The request is malformed or is not in the expected format. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 401 | Unauthorized - The API credential used in the request is invalid. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 403 | Forbidden - The API credential does not have the right permissions. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 404 | Not Found - The requested resource was not found. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 422 | Unprocessable Entity - A request validation error. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 429 | Too Many Requests - Request rate limit exceeded. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |
| 500 | Internal Service Error - An unrecoverable error occurred while trying to perform the request. | [`DefaultErrorResponseEntityError`](../../doc/models/default-error-response-entity-error.md) |

