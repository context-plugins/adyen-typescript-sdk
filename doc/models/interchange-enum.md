
# Interchange Enum

Deducts the interchange fee from specified balance account.

Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.

## Enumeration

`InterchangeEnum`

## Fields

| Name |
|  --- |
| `DeductFromLiableAccount` |
| `DeductFromOneBalanceAccount` |

## Example

```ts
import { InterchangeEnum } from 'adyen';

const interchange = InterchangeEnum.DeductFromLiableAccount;
```

