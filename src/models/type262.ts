import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type262 = {
  MerchantPurchaseData: "merchantPurchaseData",
} as const;
export type Type262 = (typeof Type262)[keyof typeof Type262] | (string & {});

export const type262Schema: EnumSchema<Type262> = s.enumOf<Type262>(Type262);
