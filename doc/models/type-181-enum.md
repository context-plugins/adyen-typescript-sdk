
# Type 181 Enum

The resource for which you want to receive notifications. Possible values:

* **balancePlatform**: receive notifications about balance changes in your entire balance platform.

* **accountHolder**: receive notifications about balance changes of a specific user.

* **balanceAccount**: receive notifications about balance changes in a specific balance account.

## Enumeration

`Type181Enum`

## Fields

| Name |
|  --- |
| `BalanceAccount` |
| `AccountHolder` |
| `BalancePlatform` |

## Example

```ts
import { Type181Enum } from 'adyen';

const type181 = Type181Enum.BalanceAccount;
```

