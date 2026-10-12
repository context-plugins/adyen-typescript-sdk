import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * **applepay**
 */
export const Type7 = {
  Applepay: "applepay",
} as const;
export type Type7 = (typeof Type7)[keyof typeof Type7] | (string & {});

export const type7Schema: EnumSchema<Type7> = s.enumOf<Type7>(Type7);
