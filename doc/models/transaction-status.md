
# Transaction Status

## Enumeration

`TransactionStatus`

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
import { TransactionStatus } from 'adyenlib';

const transactionStatus = TransactionStatus.SecondChargebackCorrectionReceived;
```

