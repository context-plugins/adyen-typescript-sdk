import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type381 = {
  Daily: "daily",
  Lifetime: "lifetime",
  Monthly: "monthly",
  PerTransaction: "perTransaction",
  Rolling: "rolling",
  Sliding: "sliding",
  Weekly: "weekly",
} as const;
export type Type381 = (typeof Type381)[keyof typeof Type381] | (string & {});

export const type381Schema: EnumSchema<Type381> = s.enumOf<Type381>(Type381);
