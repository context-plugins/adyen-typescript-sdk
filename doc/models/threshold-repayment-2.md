
# Threshold Repayment 2

An object containing the details of the 30-day repayment threshold.

*This model accepts additional fields of type unknown.*

## Structure

`ThresholdRepayment2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount5`](../../doc/models/amount-5.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ThresholdRepayment2 } from 'adyen';

const thresholdRepayment2: ThresholdRepayment2 = {
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

