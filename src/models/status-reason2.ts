import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The reason for updating the status of the payment instrument.
 *
 * Possible values: **lost**, **stolen**, **damaged**, **suspectedFraud**, **expired**,
 * **endOfLife**, **accountClosure**, **other**. If the reason is **other**, you must also send the
 * `statusComment` parameter describing the status change.
 */
export const StatusReason2 = {
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
export type StatusReason2 = (typeof StatusReason2)[keyof typeof StatusReason2] | (string & {});

export const statusReason2Schema: EnumSchema<StatusReason2> = s.enumOf<StatusReason2>(StatusReason2);
