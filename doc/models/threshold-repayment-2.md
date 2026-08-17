
# Threshold Repayment 2

An object containing the details of the 30-day repayment threshold.

## Structure

`ThresholdRepayment2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | The amount to be repaid on a 30-day basis. |

## Example

```ts
import { ThresholdRepayment2 } from 'adyen';

const thresholdRepayment2: ThresholdRepayment2 = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
};
```

