
# Dynamic Offer Repayment

## Structure

`DynamicOfferRepayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `term` | [`RepaymentTerm`](../../doc/models/repayment-term.md) | Required | Contains information about the time period in which your user must repay the total amount of the grant. |

## Example

```ts
import { DynamicOfferRepayment } from 'adyen';

const dynamicOfferRepayment: DynamicOfferRepayment = {
  term: {
    estimatedDays: 248,
    maximumDays: 24,
  },
};
```

