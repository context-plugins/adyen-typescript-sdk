
# Scheme Fee

Deducts the scheme fee from the specified balance account.

Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.

## Enumeration

`SchemeFee`

## Fields

| Name |
|  --- |
| `DeductFromLiableAccount` |
| `DeductFromOneBalanceAccount` |

## Example

```ts
import { SchemeFee } from 'adyen';

const schemeFee = SchemeFee.DeductFromLiableAccount;
```

