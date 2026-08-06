
# Threshold Repayment 21

Contains the minimum threshold amount that your user must repay every 30-day period.

*This model accepts additional fields of type unknown.*

## Structure

`ThresholdRepayment21`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount5`](../../doc/models/amount-5.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ThresholdRepayment21 } from 'adyen';

const thresholdRepayment21: ThresholdRepayment21 = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

