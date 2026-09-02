import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
