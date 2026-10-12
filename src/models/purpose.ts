import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the reason for creating the rule.
 *
 * Possible values:
 * * **fraud**: the rule is created to regulate fraudulent activity.
 * * **policy**: the rule is created to ensure that the transaction adheres to your business'
 *   policies. For example, if your business has policies about the Merchant Category Codes (MCCs)
 *   allowed on a transaction, you can create a rule to block transactions that have specific MCCs.
 */
export const Purpose = {
  Compliance: "compliance",
  Fraud: "fraud",
  InternalPolicy: "internalPolicy",
  Policy: "policy",
  System: "system",
} as const;
export type Purpose = (typeof Purpose)[keyof typeof Purpose] | (string & {});

export const purposeSchema: EnumSchema<Purpose> = s.enumOf<Purpose>(Purpose);
