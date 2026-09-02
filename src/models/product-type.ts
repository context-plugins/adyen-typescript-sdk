import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductType = {
  Onboarding: "onboarding",
  Platform: "platform",
  Bank: "bank",
} as const;
export type ProductType = (typeof ProductType)[keyof typeof ProductType] | (string & {});

export const productTypeSchema: EnumSchema<ProductType> = s.enumOf<ProductType>(ProductType);
