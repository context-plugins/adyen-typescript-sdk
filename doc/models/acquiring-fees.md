
# Acquiring Fees

Deducts the acquiring fees (the aggregated amount of interchange and scheme fee) from the specified balance account.

Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.

## Enumeration

`AcquiringFees`

## Fields

| Name |
|  --- |
| `DeductFromLiableAccount` |
| `DeductFromOneBalanceAccount` |

## Example

```ts
import { AcquiringFees } from 'adyenlib';

const acquiringFees = AcquiringFees.DeductFromLiableAccount;
```

