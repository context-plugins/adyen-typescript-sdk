
# Scheme Fee Enum

Deducts the scheme fee from the specified balance account.

Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.

## Enumeration

`SchemeFeeEnum`

## Fields

| Name |
|  --- |
| `DeductFromLiableAccount` |
| `DeductFromOneBalanceAccount` |

## Example

```ts
import { SchemeFeeEnum } from 'adyen';

const schemeFee = SchemeFeeEnum.DeductFromLiableAccount;
```

