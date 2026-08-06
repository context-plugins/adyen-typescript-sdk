
# Balance Transfer Type 2

The type of balance transfer. Possible values: **tax**, **fee**, **terminalSale**, **credit**, **debit**, and **adjustment**.

## Enumeration

`BalanceTransferType2`

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
import { BalanceTransferType2 } from 'adyen';

const balanceTransferType2 = BalanceTransferType2.Debit;
```

