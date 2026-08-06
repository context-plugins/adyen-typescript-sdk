
# Type 18

The resource for which you want to receive notifications. Possible values:

* **balancePlatform**: receive notifications about balance changes in your entire balance platform.

* **accountHolder**: receive notifications about balance changes of a specific user.

* **balanceAccount**: receive notifications about balance changes in a specific balance account.

## Enumeration

`Type18`

## Fields

| Name |
|  --- |
| `BalanceAccount` |
| `AccountHolder` |
| `BalancePlatform` |

## Example

```ts
import { Type18 } from 'adyen';

const type18 = Type18.AccountHolder;
```

