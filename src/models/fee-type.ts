import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeeType = {
  MerchantPays: "merchantPays",
  ShopperPays: "shopperPays",
} as const;
export type FeeType = (typeof FeeType)[keyof typeof FeeType] | (string & {});

export const feeTypeSchema: EnumSchema<FeeType> = s.enumOf<FeeType>(FeeType);
