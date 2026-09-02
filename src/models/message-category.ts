import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageCategory = {
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
export type MessageCategory = (typeof MessageCategory)[keyof typeof MessageCategory] | (string & {});

export const messageCategorySchema: EnumSchema<MessageCategory> = s.enumOf<MessageCategory>(MessageCategory);
