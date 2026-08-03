
# Interchange

Deducts the interchange fee from specified balance account.

Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.

## Enumeration

`Interchange`

## Fields

| Name |
|  --- |
| `DeductFromLiableAccount` |
| `DeductFromOneBalanceAccount` |

## Example

```ts
import { Interchange } from 'adyenlib';

const interchange = Interchange.DeductFromLiableAccount;
```

