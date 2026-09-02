import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type421 = {
  UsInternationalAchAddressRequirement: "usInternationalAchAddressRequirement",
} as const;
export type Type421 = (typeof Type421)[keyof typeof Type421] | (string & {});

export const type421Schema: EnumSchema<Type421> = s.enumOf<Type421>(Type421);
