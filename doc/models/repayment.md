
# Repayment

An object containing the details of the 30-day repayment threshold.

## Structure

`Repayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `basisPoints` | `number` | Required | The repayment that is deducted daily from incoming net volume, in [basis points](https://www.investopedia.com/terms/b/basispoint.asp). |
| `term` | [`RepaymentTerm \| undefined`](../../doc/models/repayment-term.md) | Optional | An object containing the details of the configuration for repayment term. |
| `threshold` | [`ThresholdRepayment2 \| undefined`](../../doc/models/threshold-repayment-2.md) | Optional | An object containing the details of the 30-day repayment threshold. |

## Example

```ts
import { Repayment } from 'adyen';

const repayment: Repayment = {
  basisPoints: 18,
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

