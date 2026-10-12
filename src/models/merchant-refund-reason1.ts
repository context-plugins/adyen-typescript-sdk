import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Your reason for the refund request. */
export const MerchantRefundReason1 = {
  Fraud: "FRAUD",
  CustomerRequest: "CUSTOMER REQUEST",
  Return: "RETURN",
  Duplicate: "DUPLICATE",
  Other: "OTHER",
} as const;
export type MerchantRefundReason1 =
  | (typeof MerchantRefundReason1)[keyof typeof MerchantRefundReason1]
  | (string & {});

export const merchantRefundReason1Schema: EnumSchema<MerchantRefundReason1> =
  s.enumOf<MerchantRefundReason1>(MerchantRefundReason1);
