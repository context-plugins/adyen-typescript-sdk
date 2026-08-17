
# Threshold Repayment

## Structure

`ThresholdRepayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | The amount to be repaid on a 30-day basis. |

## Example

```ts
import { ThresholdRepayment } from 'adyen';

const thresholdRepayment: ThresholdRepayment = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
};
```

