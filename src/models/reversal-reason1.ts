import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Reason of the payment or loyalty reversal. Possible values:
 * * **CustCancel**
 * * **Malfunction**
 * * **MerchantCancel**
 * * **Unable2Compl**
 */
export const ReversalReason1 = {
  CustCancel: "CustCancel",
  MerchantCancel: "MerchantCancel",
  Malfunction: "Malfunction",
  Unable2Compl: "Unable2Compl",
} as const;
export type ReversalReason1 = (typeof ReversalReason1)[keyof typeof ReversalReason1] | (string & {});

export const reversalReason1Schema: EnumSchema<ReversalReason1> = s.enumOf<ReversalReason1>(ReversalReason1);
