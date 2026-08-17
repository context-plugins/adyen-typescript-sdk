
# Acquiring Fees Enum

Deducts the acquiring fees (the aggregated amount of interchange and scheme fee) from the specified balance account.

Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.

## Enumeration

`AcquiringFeesEnum`

## Fields

| Name |
|  --- |
| `DeductFromLiableAccount` |
| `DeductFromOneBalanceAccount` |

## Example

```ts
import { AcquiringFeesEnum } from 'adyen';

const acquiringFees = AcquiringFeesEnum.DeductFromLiableAccount;
```

