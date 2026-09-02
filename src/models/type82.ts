import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type82 = {
  AddressRequirement: "addressRequirement",
} as const;
export type Type82 = (typeof Type82)[keyof typeof Type82] | (string & {});

export const type82Schema: EnumSchema<Type82> = s.enumOf<Type82>(Type82);
