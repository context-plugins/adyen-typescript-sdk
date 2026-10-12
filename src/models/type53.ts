import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The payment method type. */
export const Type53 = {
  Twint: "twint",
} as const;
export type Type53 = (typeof Type53)[keyof typeof Type53] | (string & {});

export const type53Schema: EnumSchema<Type53> = s.enumOf<Type53>(Type53);
