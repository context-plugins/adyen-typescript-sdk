import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * **masterpass**
 */
export const Type35 = {
  Masterpass: "masterpass",
} as const;
export type Type35 = (typeof Type35)[keyof typeof Type35] | (string & {});

export const type35Schema: EnumSchema<Type35> = s.enumOf<Type35>(Type35);
