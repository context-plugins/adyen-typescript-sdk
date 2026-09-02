import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantRefundReason = {
  Fraud: "FRAUD",
  CustomerRequest: "CUSTOMER REQUEST",
  Return: "RETURN",
  Duplicate: "DUPLICATE",
  Other: "OTHER",
} as const;
export type MerchantRefundReason =
  | (typeof MerchantRefundReason)[keyof typeof MerchantRefundReason]
  | (string & {});

export const merchantRefundReasonSchema: EnumSchema<MerchantRefundReason> =
  s.enumOf<MerchantRefundReason>(MerchantRefundReason);
