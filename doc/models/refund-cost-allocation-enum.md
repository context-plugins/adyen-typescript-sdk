
# Refund Cost Allocation Enum

Deducts the refund costs from the specified balance account.

Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**

## Enumeration

`RefundCostAllocationEnum`

## Fields

| Name |
|  --- |
| `DeductFromLiableAccount` |
| `DeductFromOneBalanceAccount` |

## Example

```ts
import { RefundCostAllocationEnum } from 'adyen';

const refundCostAllocation = RefundCostAllocationEnum.DeductFromLiableAccount;
```

