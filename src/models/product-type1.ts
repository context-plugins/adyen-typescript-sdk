import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductType1 = {
  Goods: "goods",
  Services: "services",
} as const;
export type ProductType1 = (typeof ProductType1)[keyof typeof ProductType1] | (string & {});

export const productType1Schema: EnumSchema<ProductType1> = s.enumOf<ProductType1>(ProductType1);
