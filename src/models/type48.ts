import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type48 = {
  Ratepay: "ratepay",
  RatepayDirectdebit: "ratepay_directdebit",
} as const;
export type Type48 = (typeof Type48)[keyof typeof Type48] | (string & {});

export const type48Schema: EnumSchema<Type48> = s.enumOf<Type48>(Type48);
