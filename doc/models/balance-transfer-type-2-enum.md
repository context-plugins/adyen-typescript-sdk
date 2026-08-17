
# Balance Transfer Type 2 Enum

The type of balance transfer. Possible values: **tax**, **fee**, **terminalSale**, **credit**, **debit**, and **adjustment**.

## Enumeration

`BalanceTransferType2Enum`

## Fields

| Name |
|  --- |
| `Tax` |
| `Fee` |
| `TerminalSale` |
| `Credit` |
| `Debit` |
| `Adjustment` |

## Example

```ts
import { BalanceTransferType2Enum } from 'adyen';

const balanceTransferType2 = BalanceTransferType2Enum.Debit;
```

