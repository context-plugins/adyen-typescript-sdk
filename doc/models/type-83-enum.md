
# Type 83 Enum

The type of transfer or transaction. For example, **refund**, **payment**, **internalTransfer**, **bankTransfer**.

## Enumeration

`Type83Enum`

## Fields

| Name |
|  --- |
| `Payment` |
| `Capture` |
| `CaptureReversal` |
| `Refund` |
| `RefundReversal` |
| `Chargeback` |
| `ChargebackCorrection` |
| `ChargebackReversal` |
| `ChargebackReversalCorrection` |
| `SecondChargeback` |
| `SecondChargebackCorrection` |
| `AtmWithdrawal` |
| `AtmWithdrawalReversal` |
| `InternalTransfer` |
| `InternalDirectDebit` |
| `ManualCorrection` |
| `InvoiceDeduction` |
| `DepositCorrection` |
| `ReserveAdjustment` |
| `BankTransfer` |
| `BankDirectDebit` |
| `CardTransfer` |
| `MiscCost` |
| `PaymentCost` |
| `Fee` |
| `Leftover` |
| `Grant` |
| `CapitalFundsCollection` |
| `CashOutInstruction` |
| `CashoutFee` |
| `CashoutRepayment` |
| `CashoutFunding` |
| `Repayment` |
| `Installment` |
| `InstallmentReversal` |
| `BalanceAdjustment` |
| `BalanceRollover` |
| `BalanceMigration` |

## Example

```ts
import { Type83Enum } from 'adyen';

const type83 = Type83Enum.Grant;
```

