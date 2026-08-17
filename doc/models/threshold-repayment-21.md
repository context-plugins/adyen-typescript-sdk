
# Threshold Repayment 21

Contains the minimum threshold amount that your user must repay every 30-day period.

## Structure

`ThresholdRepayment21`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | The minimum threshold amount that your user must repay on every 30-day period. |

## Example

```ts
import { ThresholdRepayment21 } from 'adyen';

const thresholdRepayment21: ThresholdRepayment21 = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
};
```

