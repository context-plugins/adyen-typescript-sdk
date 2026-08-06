
# Type 122

The type of the cashout transfer.

Possible values:

- **cashoutRepayment**: Corresponds to the transfer created to deduct the cashout amount after settlement.
- **cashoutFee**: Corresponds to the transfer created to debit the cashout fee form the user's balance account.

## Enumeration

`Type122`

## Fields

| Name |
|  --- |
| `CashoutRepayment` |
| `CashoutFee` |

## Example

```ts
import { Type122 } from 'adyen';

const type122 = Type122.CashoutRepayment;
```

