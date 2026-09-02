import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type61 = {
  PaybybankPix: "paybybank_pix",
} as const;
export type Type61 = (typeof Type61)[keyof typeof Type61] | (string & {});

export const type61Schema: EnumSchema<Type61> = s.enumOf<Type61>(Type61);
