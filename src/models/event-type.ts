import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of event.
 *
 * Possible values: **ACCOUNT_CLOSED**, **ACCOUNT_CREATED**, **ACCOUNT_FUNDS_BELOW_THRESHOLD**,
 * **ACCOUNT_HOLDER_CREATED**, **ACCOUNT_HOLDER_LIMIT_REACHED**, **ACCOUNT_HOLDER_PAYOUT**,
 * **ACCOUNT_HOLDER_STATUS_CHANGE**, **ACCOUNT_HOLDER_STORE_STATUS_CHANGE**,
 * **ACCOUNT_HOLDER_UPCOMING_DEADLINE**, **ACCOUNT_HOLDER_UPDATED**,
 * **ACCOUNT_HOLDER_VERIFICATION**, **ACCOUNT_UPDATED**, **BENEFICIARY_SETUP**,
 * **COMPENSATE_NEGATIVE_BALANCE**, **DIRECT_DEBIT_INITIATED**, **PAYMENT_FAILURE**,
 * **REFUND_FUNDS_TRANSFER**, **REPORT_AVAILABLE**, **SCHEDULED_REFUNDS**, **TRANSFER_FUNDS**.
 */
export const EventType = {
  AccountClosed: "ACCOUNT_CLOSED",
  AccountCreated: "ACCOUNT_CREATED",
  AccountFundsBelowThreshold: "ACCOUNT_FUNDS_BELOW_THRESHOLD",
  AccountHolderCreated: "ACCOUNT_HOLDER_CREATED",
  AccountHolderLimitReached: "ACCOUNT_HOLDER_LIMIT_REACHED",
  AccountHolderMigrated: "ACCOUNT_HOLDER_MIGRATED",
  AccountHolderPayout: "ACCOUNT_HOLDER_PAYOUT",
  AccountHolderStatusChange: "ACCOUNT_HOLDER_STATUS_CHANGE",
  AccountHolderStoreStatusChange: "ACCOUNT_HOLDER_STORE_STATUS_CHANGE",
  AccountHolderUpcomingDeadline: "ACCOUNT_HOLDER_UPCOMING_DEADLINE",
  AccountHolderUpdated: "ACCOUNT_HOLDER_UPDATED",
  AccountHolderVerification: "ACCOUNT_HOLDER_VERIFICATION",
  AccountUpdated: "ACCOUNT_UPDATED",
  BeneficiarySetup: "BENEFICIARY_SETUP",
  CompensateNegativeBalance: "COMPENSATE_NEGATIVE_BALANCE",
  DirectDebitInitiated: "DIRECT_DEBIT_INITIATED",
  FundsMigrated: "FUNDS_MIGRATED",
  PaymentFailure: "PAYMENT_FAILURE",
  PendingCredit: "PENDING_CREDIT",
  RefundFundsTransfer: "REFUND_FUNDS_TRANSFER",
  ReportAvailable: "REPORT_AVAILABLE",
  ScheduledRefunds: "SCHEDULED_REFUNDS",
  ScoreSignalTriggered: "SCORE_SIGNAL_TRIGGERED",
  TransferFunds: "TRANSFER_FUNDS",
  TransferNotPaidoutTransfers: "TRANSFER_NOT_PAIDOUT_TRANSFERS",
} as const;
export type EventType = (typeof EventType)[keyof typeof EventType] | (string & {});

export const eventTypeSchema: EnumSchema<EventType> = s.enumOf<EventType>(EventType);
