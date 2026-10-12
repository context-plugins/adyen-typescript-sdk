import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * **rakutenpay**
 */
export const Type47 = {
  Rakutenpay: "rakutenpay",
} as const;
export type Type47 = (typeof Type47)[keyof typeof Type47] | (string & {});

export const type47Schema: EnumSchema<Type47> = s.enumOf<Type47>(Type47);
