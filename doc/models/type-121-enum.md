
# Type 121 Enum

The type of the cashout transfer.

Possible values:

- **cashoutRepayment**: Corresponds to the transfer created to deduct the cashout amount after settlement.
- **cashoutFee**: Corresponds to the transfer created to debit the cashout fee form the user's balance account.

## Enumeration

`Type121Enum`

## Fields

| Name |
|  --- |
| `CashoutRepayment` |
| `CashoutFee` |

## Example

```ts
import { Type121Enum } from 'adyen';

const type121 = Type121Enum.CashoutRepayment;
```

