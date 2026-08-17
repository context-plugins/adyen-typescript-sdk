
# Threshold Repayment 1

## Structure

`ThresholdRepayment1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | The minimum threshold amount that your user must repay on every 30-day period. |

## Example

```ts
import { ThresholdRepayment1 } from 'adyen';

const thresholdRepayment1: ThresholdRepayment1 = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
};
```

