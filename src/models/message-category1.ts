import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageCategory1 = {
  Abort: "Abort",
  Admin: "Admin",
  BalanceInquiry: "BalanceInquiry",
  CardAcquisition: "CardAcquisition",
  Diagnosis: "Diagnosis",
  Display: "Display",
  EnableService: "EnableService",
  Event: "Event",
  GetTotals: "GetTotals",
  Input: "Input",
  InputUpdate: "InputUpdate",
  Login: "Login",
  Logout: "Logout",
  Loyalty: "Loyalty",
  Payment: "Payment",
  Print: "Print",
  Reconciliation: "Reconciliation",
  Reversal: "Reversal",
  StoredValue: "StoredValue",
  TransactionStatus: "TransactionStatus",
  None: "None",
} as const;
export type MessageCategory1 = (typeof MessageCategory1)[keyof typeof MessageCategory1] | (string & {});

export const messageCategory1Schema: EnumSchema<MessageCategory1> =
  s.enumOf<MessageCategory1>(MessageCategory1);
