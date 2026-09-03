import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type73 = {
  Accounting: "accounting",
  Tracing: "tracing",
  Tracking: "tracking",
} as const;
export type Type73 = (typeof Type73)[keyof typeof Type73] | (string & {});

export const type73Schema: EnumSchema<Type73> = s.enumOf<Type73>(Type73);
