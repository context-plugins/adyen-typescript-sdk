
# Calculate Rate Request Item

The request parameters required to calculate an amount in a different currency.

*This model accepts additional fields of type unknown.*

## Structure

`CalculateRateRequestItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exchangeSide` | [`ExchangeSide2`](../../doc/models/exchange-side-2.md) | Required | - |
| `sourceAmount` | [`SourceAmount`](../../doc/models/source-amount.md) | Required | - |
| `targetCurrency` | `string` | Required | The currency to which you want to convert the source amount. |
| `type` | [`RateType2`](../../doc/models/rate-type-2.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CalculateRateRequestItem, ExchangeSide2, RateType2 } from 'adyen';

const calculateRateRequestItem: CalculateRateRequestItem = {
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
};
```

