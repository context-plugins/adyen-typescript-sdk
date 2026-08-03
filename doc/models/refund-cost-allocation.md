
# Refund Cost Allocation

Deducts the refund costs from the specified balance account.

Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**

## Enumeration

`RefundCostAllocation`

## Fields

| Name |
|  --- |
| `DeductFromLiableAccount` |
| `DeductFromOneBalanceAccount` |

## Example

```ts
import { RefundCostAllocation } from 'adyenlib';

const refundCostAllocation = RefundCostAllocation.DeductFromLiableAccount;
```

