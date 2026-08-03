
# Status 53

The result of the transfer.

For example:

- **received**: an outgoing transfer request is created.
- **refused**: the transfer request is rejected by Adyen for one of the following reasons:
  - Transfer limit exceeded.
  - Transaction rule requirements violated.
- **authorised**: the transfer request is authorized and the funds are reserved.
- **booked**: the funds are deducted from your user's balance account.
- **failed**: the transfer is rejected by the counterparty's bank.
- **returned**: the transfer is returned by the counterparty's bank.

## Enumeration

`Status53`

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
import { Status53 } from 'adyenlib';

const status53 = Status53.PaymentCost;
```

