
# Calculate Rate Request

The request to calculate an amount in a different currency.

## Structure

`CalculateRateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exchangeCalculations` | [`CalculateRateRequestItem[]`](../../doc/models/calculate-rate-request-item.md) | Required | An array of objects, where each object defines a currency and value for which you want to perform an exchange calculation.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `1000` |

## Example

```ts
import {
  CalculateRateRequest,
  ExchangeSide2Enum,
  RateType2Enum,
} from 'adyen';

const calculateRateRequest: CalculateRateRequest = {
  exchangeCalculations: [
    {
      exchangeSide: ExchangeSide2Enum.Buy,
      sourceAmount: {
        currency: 'currency8',
        value: BigInt(232),
      },
      targetCurrency: 'targetCurrency8',
      type: RateType2Enum.Transfer,
    }
  ],
};
```

