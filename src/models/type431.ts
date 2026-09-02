import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type431 = {
  UsInternationalAchPriorityRequirement: "usInternationalAchPriorityRequirement",
} as const;
export type Type431 = (typeof Type431)[keyof typeof Type431] | (string & {});

export const type431Schema: EnumSchema<Type431> = s.enumOf<Type431>(Type431);
