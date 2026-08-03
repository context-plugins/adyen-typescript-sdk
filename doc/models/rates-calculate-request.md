
# Rates Calculate Request

*This model accepts additional fields of type unknown.*

## Structure

`RatesCalculateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exchangeCalculations` | [`CalculateRateRequestItem[]`](../../doc/models/calculate-rate-request-item.md) | Required | An array of objects, where each object defines a currency and value for which you want to perform an exchange calculation.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `1000` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ExchangeSide2, RateType2, RatesCalculateRequest } from 'adyenlib';

const ratesCalculateRequest: RatesCalculateRequest = {
  exchangeCalculations: [
    {
      exchangeSide: ExchangeSide2.Buy,
      sourceAmount: {
        currency: 'currency8',
        value: BigInt(232),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      targetCurrency: 'targetCurrency8',
      type: RateType2.Transfer,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

