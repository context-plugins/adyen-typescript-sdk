
# Dynamic Offer Repayment 2

Contains information about the repayment configuration of the grant.

## Structure

`DynamicOfferRepayment2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `term` | [`RepaymentTerm`](../../doc/models/repayment-term.md) | Required | Contains information about the time period in which your user must repay the total amount of the grant. |

## Example

```ts
import { DynamicOfferRepayment2 } from 'adyen';

const dynamicOfferRepayment2: DynamicOfferRepayment2 = {
  term: {
    estimatedDays: 248,
    maximumDays: 24,
  },
};
```

