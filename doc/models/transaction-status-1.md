
# Transaction Status 1

The status of the transaction.

> Permitted values: `PendingCredit`, `CreditFailed`, `CreditClosed`, `CreditSuspended`, `Credited`, `Converted`, `PendingDebit`, `DebitFailed`, `Debited`, `DebitReversedReceived`, `DebitedReversed`, `ChargebackReceived`, `Chargeback`, `ChargebackReversedReceived`, `ChargebackReversed`, `Payout`, `PayoutReversed`, `FundTransfer`, `PendingFundTransfer`, `ManualCorrected`.

## Enumeration

`TransactionStatus1`

## Fields

| Name |
|  --- |
| `BalanceNotPaidOutTransfer` |
| `BalancePlatformFundTransfer` |
| `BalancePlatformSweep` |
| `BalancePlatformSweepReturned` |
| `Chargeback` |
| `ChargebackCorrection` |
| `ChargebackCorrectionReceived` |
| `ChargebackReceived` |
| `ChargebackReversed` |
| `ChargebackReversedCorrection` |
| `ChargebackReversedCorrectionReceived` |
| `ChargebackReversedReceived` |
| `Converted` |
| `CreditClosed` |
| `CreditFailed` |
| `CreditReversed` |
| `CreditReversedReceived` |
| `CreditSuspended` |
| `Credited` |
| `DebitFailed` |
| `DebitReversedReceived` |
| `Debited` |
| `DebitedReversed` |
| `DepositCorrectionCredited` |
| `DepositCorrectionDebited` |
| `DepositCorrectionReceived` |
| `Fee` |
| `FeeReceived` |
| `FundTransfer` |
| `FundTransferReversed` |
| `InvoiceDeductionCredited` |
| `InvoiceDeductionDebited` |
| `InvoiceDeductionReceived` |
| `ManualCorrected` |
| `ManualCorrectionCredited` |
| `ManualCorrectionDebited` |
| `MerchantPayin` |
| `MerchantPayinReceived` |
| `MerchantPayinReversed` |
| `Payout` |
| `PayoutReversed` |
| `PendingCredit` |
| `PendingDebit` |
| `PendingFundTransfer` |
| `ReCredited` |
| `ReCreditedReceived` |
| `SecondChargeback` |
| `SecondChargebackCorrection` |
| `SecondChargebackCorrectionReceived` |
| `SecondChargebackReceived` |

## Example

```ts
import { TransactionStatus1 } from 'adyen';

const transactionStatus1 = TransactionStatus1.ReCredited;
```

