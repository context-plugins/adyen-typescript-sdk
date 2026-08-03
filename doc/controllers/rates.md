# Rates

```ts
const ratesApi = new RatesApi(client);
```

## Class Name

`RatesApi`


# Post-Rates-Calculate

Returns the calculated amounts and rates required to convert the currency of a transaction.

:information_source: **Note** This endpoint does not require authentication.

```ts
async postRatesCalculate(
  body: RatesCalculateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RatesCalculateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RatesCalculateRequest`](../../doc/models/rates-calculate-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RatesCalculateResponse`](../../doc/models/rates-calculate-response.md).

## Example Usage

```ts
const body: RatesCalculateRequest = {
  exchangeCalculations: [
    {
      exchangeSide: ExchangeSide2.Buy,
      sourceAmount: {
        currency: 'CZK',
        value: BigInt(112300),
      },
      targetCurrency: 'EUR',
      type: RateType2.SplitPayment,
    },
    {
      exchangeSide: ExchangeSide2.Sell,
      sourceAmount: {
        currency: 'CZK',
        value: BigInt(24000),
      },
      targetCurrency: 'USD',
      type: RateType2.SplitRefund,
    }
  ],
};

try {
  const response = await ratesApi.postRatesCalculate(body);

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
    if (error instanceof RatesCalculate401Error) {
      console.log(error.result);
    } else if (error instanceof RatesCalculate403Error) {
      console.log(error.result);
    } else if (error instanceof RatesCalculate422Error) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "exchangeCalculations": [
    {
      "type": "splitPayment",
      "exchangeSide": "buy",
      "sourceAmount": {
        "value": 112300,
        "currency": "CZK"
      },
      "targetAmount": {
        "value": 4480,
        "currency": "EUR"
      },
      "appliedExchangeRate": 0.039893143366
    },
    {
      "type": "splitRefund",
      "exchangeSide": "sell",
      "sourceAmount": {
        "value": 24000,
        "currency": "CZK"
      },
      "targetAmount": {
        "value": 992,
        "currency": "USD"
      },
      "appliedExchangeRate": 0.0413333333333
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`RatesCalculate401Error`](../../doc/models/rates-calculate-401-error.md) |
| 403 | Forbidden | [`RatesCalculate403Error`](../../doc/models/rates-calculate-403-error.md) |
| 422 | Unprocessable Entity - a request validation error. | [`RatesCalculate422Error`](../../doc/models/rates-calculate-422-error.md) |

