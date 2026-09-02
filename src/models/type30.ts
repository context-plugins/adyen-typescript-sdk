import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type30 = {
  DirectdebitAu: "directdebit_AU",
} as const;
export type Type30 = (typeof Type30)[keyof typeof Type30] | (string & {});

export const type30Schema: EnumSchema<Type30> = s.enumOf<Type30>(Type30);
