import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type66 = {
  Samsungpay: "samsungpay",
} as const;
export type Type66 = (typeof Type66)[keyof typeof Type66] | (string & {});

export const type66Schema: EnumSchema<Type66> = s.enumOf<Type66>(Type66);
