import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type242 = {
  InterchangeData: "interchangeData",
} as const;
export type Type242 = (typeof Type242)[keyof typeof Type242] | (string & {});

export const type242Schema: EnumSchema<Type242> = s.enumOf<Type242>(Type242);
