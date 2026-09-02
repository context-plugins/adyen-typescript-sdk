import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type16 = {
  Cashapp: "cashapp",
} as const;
export type Type16 = (typeof Type16)[keyof typeof Type16] | (string & {});

export const type16Schema: EnumSchema<Type16> = s.enumOf<Type16>(Type16);
