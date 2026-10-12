import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of product that you purchased.
 *
 * Possible values: **goods**, **services**.
 */
export const ProductType11 = {
  Goods: "goods",
  Services: "services",
} as const;
export type ProductType11 = (typeof ProductType11)[keyof typeof ProductType11] | (string & {});

export const productType11Schema: EnumSchema<ProductType11> = s.enumOf<ProductType11>(ProductType11);
