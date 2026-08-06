
# Chargeback Cost Allocation

Deducts the chargeback costs from the specified balance account.

Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**

## Enumeration

`ChargebackCostAllocation`

## Fields

| Name |
|  --- |
| `DeductFromLiableAccount` |
| `DeductFromOneBalanceAccount` |

## Example

```ts
import { ChargebackCostAllocation } from 'adyen';

const chargebackCostAllocation = ChargebackCostAllocation.DeductFromLiableAccount;
```

