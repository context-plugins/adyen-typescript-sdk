import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
