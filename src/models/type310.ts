import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * **bank**
 */
export const Type310 = {
  Bank: "bank",
} as const;
export type Type310 = (typeof Type310)[keyof typeof Type310] | (string & {});

export const type310Schema: EnumSchema<Type310> = s.enumOf<Type310>(Type310);
