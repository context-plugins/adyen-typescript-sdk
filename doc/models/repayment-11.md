
# Repayment 11

Contains information about the repayment configuration of the grant.

## Structure

`Repayment11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `basisPoints` | `number` | Required | The percentage of your user's incoming net volume that is deducted for repaying the grant. The percentage expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp). |
| `term` | [`RepaymentTerm \| undefined`](../../doc/models/repayment-term.md) | Optional | Contains information about the time period in which your user must repay the total amount of the grant. |
| `threshold` | [`ThresholdRepayment21 \| undefined`](../../doc/models/threshold-repayment-21.md) | Optional | Contains the minimum threshold amount that your user must repay every 30-day period. |

## Example

```ts
import { Repayment11 } from 'adyen';

const repayment11: Repayment11 = {
  basisPoints: 238,
  term: {
    estimatedDays: 248,
    maximumDays: 24,
  },
  threshold: {
    amount: {
      currency: 'currency2',
      value: BigInt(110),
    },
  },
};
```

