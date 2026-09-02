import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type2 = {
  AfterpayDefault: "afterpay_default",
  Afterpaytouch: "afterpaytouch",
  AfterpayB2B: "afterpay_b2b",
  Clearpay: "clearpay",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
