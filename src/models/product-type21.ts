import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of product that you expected to receive.
 *
 * Possible values: **goods**, **services**.
 */
export const ProductType21 = {
  Goods: "goods",
  Services: "services",
} as const;
export type ProductType21 = (typeof ProductType21)[keyof typeof ProductType21] | (string & {});

export const productType21Schema: EnumSchema<ProductType21> = s.enumOf<ProductType21>(ProductType21);
