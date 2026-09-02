import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type292 = {
  InternalReview: "internalReview",
} as const;
export type Type292 = (typeof Type292)[keyof typeof Type292] | (string & {});

export const type292Schema: EnumSchema<Type292> = s.enumOf<Type292>(Type292);
