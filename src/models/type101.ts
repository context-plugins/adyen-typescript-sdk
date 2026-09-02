import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type101 = {
  AmountNonZeroDecimalsRequirement: "amountNonZeroDecimalsRequirement",
} as const;
export type Type101 = (typeof Type101)[keyof typeof Type101] | (string & {});

export const type101Schema: EnumSchema<Type101> = s.enumOf<Type101>(Type101);
