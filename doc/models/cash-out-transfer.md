
# Cash Out Transfer

## Structure

`CashOutTransfer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | The amount of the cashout instruction transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). |
| `id` | `string` | Required | The reference of the cashout transfer. |
| `type` | [`Type121Enum`](../../doc/models/type-121-enum.md) | Required | The type of the cashout transfer.<br><br>Possible values:<br><br>- **cashoutRepayment**: Corresponds to the transfer created to deduct the cashout amount after settlement.<br>- **cashoutFee**: Corresponds to the transfer created to debit the cashout fee form the user's balance account. |

## Example

```ts
import { CashOutTransfer, Type121Enum } from 'adyen';

const cashOutTransfer: CashOutTransfer = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  id: 'id2',
  type: Type121Enum.CashoutRepayment,
};
```

