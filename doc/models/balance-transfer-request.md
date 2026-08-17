
# Balance Transfer Request

## Structure

`BalanceTransferRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | The amount of the transfer. |
| `fromMerchant` | `string` | Required | The unique identifier of the source merchant account from which funds are deducted.<br><br>**Constraints**: *Minimum Length*: `1` |
| `reference` | `string \| undefined` | Optional | A reference for the balance transfer. Maximum length: 80 characters.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `80` |
| `toMerchant` | `string` | Required | The unique identifier of the destination merchant account to which funds are transferred.<br><br>**Constraints**: *Minimum Length*: `1` |
| `type` | [`BalanceTransferType2Enum`](../../doc/models/balance-transfer-type-2-enum.md) | Required | The type of balance transfer. Possible values: **tax**, **fee**, **terminalSale**, **credit**, **debit**, and **adjustment**. |

## Example

```ts
import { BalanceTransferRequest, BalanceTransferType2Enum } from 'adyen';

const balanceTransferRequest: BalanceTransferRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  fromMerchant: 'fromMerchant8',
  toMerchant: 'toMerchant8',
  type: BalanceTransferType2Enum.TerminalSale,
  reference: 'reference6',
};
```

