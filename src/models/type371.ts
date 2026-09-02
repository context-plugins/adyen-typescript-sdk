import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type371 = {
  PaymentInstrumentRequirement: "paymentInstrumentRequirement",
} as const;
export type Type371 = (typeof Type371)[keyof typeof Type371] | (string & {});

export const type371Schema: EnumSchema<Type371> = s.enumOf<Type371>(Type371);
