import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The payment method type. */
export const Type46 = {
  PsePayulatam: "pse_payulatam",
} as const;
export type Type46 = (typeof Type46)[keyof typeof Type46] | (string & {});

export const type46Schema: EnumSchema<Type46> = s.enumOf<Type46>(Type46);
