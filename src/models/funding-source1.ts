import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The funding source of the payment method.
 *
 * Possible values:
 * * **credit**
 * * **debit**
 * * **prepaid**
 * * **deferred_debit**
 * * **charged**
 * * **ANY**
 */
export const FundingSource1 = {
  Charged: "charged",
  Credit: "credit",
  Debit: "debit",
  DeferredDebit: "deferred_debit",
  Prepaid: "prepaid",
  Any: "ANY",
} as const;
export type FundingSource1 = (typeof FundingSource1)[keyof typeof FundingSource1] | (string & {});

export const fundingSource1Schema: EnumSchema<FundingSource1> = s.enumOf<FundingSource1>(FundingSource1);
