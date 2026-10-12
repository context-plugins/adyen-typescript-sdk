import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The reason for the status of the payment instrument.
 *
 * Possible values: **accountClosure**, **damaged**, **endOfLife**, **expired**, **lost**,
 * **stolen**, **suspectedFraud**, **transactionRule**, **other**. If the reason is **other**, you
 * must also send the `statusComment` parameter describing the status change.
 */
export const StatusReason = {
  AccountClosure: "accountClosure",
  Damaged: "damaged",
  EndOfLife: "endOfLife",
  Expired: "expired",
  Lost: "lost",
  Other: "other",
  Stolen: "stolen",
  SuspectedFraud: "suspectedFraud",
  TransactionRule: "transactionRule",
} as const;
export type StatusReason = (typeof StatusReason)[keyof typeof StatusReason] | (string & {});

export const statusReasonSchema: EnumSchema<StatusReason> = s.enumOf<StatusReason>(StatusReason);
