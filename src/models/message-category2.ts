import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageCategory2 = {
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
export type MessageCategory2 = (typeof MessageCategory2)[keyof typeof MessageCategory2] | (string & {});

export const messageCategory2Schema: EnumSchema<MessageCategory2> =
  s.enumOf<MessageCategory2>(MessageCategory2);
