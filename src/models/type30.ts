import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * **eft**
 */
export const Type30 = {
  EftDirectdebitCa: "eft_directdebit_CA",
} as const;
export type Type30 = (typeof Type30)[keyof typeof Type30] | (string & {});

export const type30Schema: EnumSchema<Type30> = s.enumOf<Type30>(Type30);
