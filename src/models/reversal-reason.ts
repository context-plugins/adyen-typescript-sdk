import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Reason of the payment or loyalty reversal. Possible values:
 * * **CustCancel**
 * * **MerchantCancel**
 * * **Malfunction**
 * * **Unable2Compl**
 */
export const ReversalReason = {
  CustCancel: "CustCancel",
  MerchantCancel: "MerchantCancel",
  Malfunction: "Malfunction",
  Unable2Compl: "Unable2Compl",
} as const;
export type ReversalReason = (typeof ReversalReason)[keyof typeof ReversalReason] | (string & {});

export const reversalReasonSchema: EnumSchema<ReversalReason> = s.enumOf<ReversalReason>(ReversalReason);
