
# Chargeback Cost Allocation Enum

Deducts the chargeback costs from the specified balance account.

Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**

## Enumeration

`ChargebackCostAllocationEnum`

## Fields

| Name |
|  --- |
| `DeductFromLiableAccount` |
| `DeductFromOneBalanceAccount` |

## Example

```ts
import { ChargebackCostAllocationEnum } from 'adyen';

const chargebackCostAllocation = ChargebackCostAllocationEnum.DeductFromLiableAccount;
```

