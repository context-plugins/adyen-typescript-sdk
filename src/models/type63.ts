import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type63 = {
  Rakutenpay: "rakutenpay",
} as const;
export type Type63 = (typeof Type63)[keyof typeof Type63] | (string & {});

export const type63Schema: EnumSchema<Type63> = s.enumOf<Type63>(Type63);
