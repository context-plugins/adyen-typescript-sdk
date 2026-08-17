
# Calculate Rate Response

The response returned when you calculate an amount in a different currency.

## Structure

`CalculateRateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exchangeCalculations` | [`CalculateRateResponseItem[] \| undefined`](../../doc/models/calculate-rate-response-item.md) | Optional | An array of objects, where each object returns a currency and value for which you performed an exchange calculation. You can use the calculated amounts in your payment requests. |

## Example

```ts
import { CalculateRateResponse } from 'adyen';

const calculateRateResponse: CalculateRateResponse = {
  exchangeCalculations: [
    {
      appliedExchangeRate: 140.08,
      exchangeSide: 'exchangeSide0',
      sourceAmount: {
        currency: 'currency8',
        value: BigInt(232),
      },
      targetAmount: {
        currency: 'currency8',
        value: BigInt(168),
      },
      type: 'type2',
    }
  ],
};
```

