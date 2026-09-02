import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type192 = {
  Confirmation: "confirmation",
} as const;
export type Type192 = (typeof Type192)[keyof typeof Type192] | (string & {});

export const type192Schema: EnumSchema<Type192> = s.enumOf<Type192>(Type192);
