
# Tip Enum

Books the tips (gratuity) to the specified balance account.

Possible values: **addToLiableAccount**, **addToOneBalanceAccount**.

## Enumeration

`TipEnum`

## Fields

| Name |
|  --- |
| `AddToLiableAccount` |
| `AddToOneBalanceAccount` |

## Example

```ts
import { TipEnum } from 'adyen';

const tip = TipEnum.AddToLiableAccount;
```

