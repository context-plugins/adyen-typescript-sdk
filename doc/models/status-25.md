
# Status 25

The status of the transfer event.

## Enumeration

`Status25`

## Fields

| Name |
|  --- |
| `ApprovalPending` |
| `AtmWithdrawal` |
| `AtmWithdrawalReversalPending` |
| `AtmWithdrawalReversed` |
| `AuthAdjustmentAuthorised` |
| `AuthAdjustmentError` |
| `AuthAdjustmentRefused` |
| `Authorised` |
| `BankTransfer` |
| `BankTransferPending` |
| `Booked` |
| `BookingPending` |
| `Cancelled` |
| `CapturePending` |
| `CaptureReversalPending` |
| `CaptureReversed` |
| `Captured` |
| `CapturedExternally` |
| `Chargeback` |
| `ChargebackExternally` |
| `ChargebackPending` |
| `ChargebackReversalPending` |
| `ChargebackReversed` |
| `Credited` |
| `DepositCorrection` |
| `DepositCorrectionPending` |
| `Dispute` |
| `DisputeClosed` |
| `DisputeExpired` |
| `DisputeNeedsReview` |
| `Error` |
| `Expired` |
| `Failed` |
| `Fee` |
| `FeePending` |
| `InterchangeAdjusted` |
| `InternalTransfer` |
| `InternalTransferPending` |
| `InvoiceDeduction` |
| `InvoiceDeductionPending` |
| `ManualCorrectionPending` |
| `ManuallyCorrected` |
| `MatchedStatement` |
| `MatchedStatementPending` |
| `MerchantPayin` |
| `MerchantPayinPending` |
| `MerchantPayinReversed` |
| `MerchantPayinReversedPending` |
| `MiscCost` |
| `MiscCostPending` |
| `PaymentCost` |
| `PaymentCostPending` |
| `Pending` |
| `PendingApproval` |
| `PendingExecution` |
| `Received` |
| `RefundPending` |
| `RefundReversalPending` |
| `RefundReversed` |
| `Refunded` |
| `RefundedExternally` |
| `Refused` |
| `Rejected` |
| `ReserveAdjustment` |
| `ReserveAdjustmentPending` |
| `Returned` |
| `Reversed` |
| `SecondChargeback` |
| `SecondChargebackPending` |
| `Undefined` |

## Example

```ts
import { Status25 } from 'adyen';

const status25 = Status25.AuthAdjustmentRefused;
```

