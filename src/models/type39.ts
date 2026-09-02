import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type39 = {
  EftDirectdebitCa: "eft_directdebit_CA",
} as const;
export type Type39 = (typeof Type39)[keyof typeof Type39] | (string & {});

export const type39Schema: EnumSchema<Type39> = s.enumOf<Type39>(Type39);
