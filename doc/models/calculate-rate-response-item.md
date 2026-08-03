
# Calculate Rate Response Item

The response parameters returned when you calculate an amount in a different currency.

*This model accepts additional fields of type unknown.*

## Structure

`CalculateRateResponseItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appliedExchangeRate` | `number \| undefined` | Optional | The exchange rate to convert the source currency to the target currency. This includes Adyen's markup. |
| `exchangeSide` | `string \| undefined` | Optional | The operation performed on the source amount. Possible values:<br><br>* **buy**<br>* **sell** |
| `sourceAmount` | [`SourceAmount \| undefined`](../../doc/models/source-amount.md) | Optional | - |
| `targetAmount` | [`TargetAmount \| undefined`](../../doc/models/target-amount.md) | Optional | - |
| `type` | `string \| undefined` | Optional | The type of transaction. Possible values:<br><br>* **splitPayment**: for payments<br>* **splitRefund**: for refunds |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CalculateRateResponseItem } from 'adyenlib';

const calculateRateResponseItem: CalculateRateResponseItem = {
  appliedExchangeRate: 168.82,
  exchangeSide: 'exchangeSide4',
  sourceAmount: {
    currency: 'currency8',
    value: BigInt(232),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  targetAmount: {
    currency: 'currency8',
    value: BigInt(168),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  type: 'type6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

