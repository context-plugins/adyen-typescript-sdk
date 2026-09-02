import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReversalReason1 = {
  CustCancel: "CustCancel",
  MerchantCancel: "MerchantCancel",
  Malfunction: "Malfunction",
  Unable2Compl: "Unable2Compl",
} as const;
export type ReversalReason1 = (typeof ReversalReason1)[keyof typeof ReversalReason1] | (string & {});

export const reversalReason1Schema: EnumSchema<ReversalReason1> = s.enumOf<ReversalReason1>(ReversalReason1);
