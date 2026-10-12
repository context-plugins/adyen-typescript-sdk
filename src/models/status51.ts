import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The result of the transfer.
 *
 * For example:
 *
 * - **received**: an outgoing transfer request is created.
 * - **refused**: the transfer request is rejected by Adyen for one of the following reasons:
 *   - Transfer limit exceeded.
 *   - Transaction rule requirements violated.
 * - **authorised**: the transfer request is authorized and the funds are reserved.
 * - **booked**: the funds are deducted from your user's balance account.
 *  - **failed**: the transfer is rejected by the counterparty's bank.
 * - **returned**: the transfer is returned by the counterparty's bank.
 */
export const Status51 = {
  ApprovalPending: "approvalPending",
  AtmWithdrawal: "atmWithdrawal",
  AtmWithdrawalReversalPending: "atmWithdrawalReversalPending",
  AtmWithdrawalReversed: "atmWithdrawalReversed",
  AuthAdjustmentAuthorised: "authAdjustmentAuthorised",
  AuthAdjustmentError: "authAdjustmentError",
  AuthAdjustmentRefused: "authAdjustmentRefused",
  Authorised: "authorised",
  BankTransfer: "bankTransfer",
  BankTransferPending: "bankTransferPending",
  Booked: "booked",
  BookingPending: "bookingPending",
  Cancelled: "cancelled",
  CapturePending: "capturePending",
  CaptureReversalPending: "captureReversalPending",
  CaptureReversed: "captureReversed",
  Captured: "captured",
  CapturedExternally: "capturedExternally",
  Chargeback: "chargeback",
  ChargebackExternally: "chargebackExternally",
  ChargebackPending: "chargebackPending",
  ChargebackReversalPending: "chargebackReversalPending",
  ChargebackReversed: "chargebackReversed",
  Credited: "credited",
  DepositCorrection: "depositCorrection",
  DepositCorrectionPending: "depositCorrectionPending",
  Dispute: "dispute",
  DisputeClosed: "disputeClosed",
  DisputeExpired: "disputeExpired",
  DisputeNeedsReview: "disputeNeedsReview",
  Error: "error",
  Expired: "expired",
  Failed: "failed",
  Fee: "fee",
  FeePending: "feePending",
  InterchangeAdjusted: "interchangeAdjusted",
  InternalTransfer: "internalTransfer",
  InternalTransferPending: "internalTransferPending",
  InvoiceDeduction: "invoiceDeduction",
  InvoiceDeductionPending: "invoiceDeductionPending",
  ManualCorrectionPending: "manualCorrectionPending",
  ManuallyCorrected: "manuallyCorrected",
  MatchedStatement: "matchedStatement",
  MatchedStatementPending: "matchedStatementPending",
  MerchantPayin: "merchantPayin",
  MerchantPayinPending: "merchantPayinPending",
  MerchantPayinReversed: "merchantPayinReversed",
  MerchantPayinReversedPending: "merchantPayinReversedPending",
  MiscCost: "miscCost",
  MiscCostPending: "miscCostPending",
  PaymentCost: "paymentCost",
  PaymentCostPending: "paymentCostPending",
  Pending: "pending",
  PendingApproval: "pendingApproval",
  PendingExecution: "pendingExecution",
  Received: "received",
  RefundPending: "refundPending",
  RefundReversalPending: "refundReversalPending",
  RefundReversed: "refundReversed",
  Refunded: "refunded",
  RefundedExternally: "refundedExternally",
  Refused: "refused",
  Rejected: "rejected",
  ReserveAdjustment: "reserveAdjustment",
  ReserveAdjustmentPending: "reserveAdjustmentPending",
  Returned: "returned",
  Reversed: "reversed",
  SecondChargeback: "secondChargeback",
  SecondChargebackPending: "secondChargebackPending",
  Undefined: "undefined",
} as const;
export type Status51 = (typeof Status51)[keyof typeof Status51] | (string & {});

export const status51Schema: EnumSchema<Status51> = s.enumOf<Status51>(Status51);
