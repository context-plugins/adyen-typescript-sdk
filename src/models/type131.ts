import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type131 = {
  Daily: "daily",
  Lifetime: "lifetime",
  Monthly: "monthly",
  PerTransaction: "perTransaction",
  Rolling: "rolling",
  Sliding: "sliding",
  Weekly: "weekly",
} as const;
export type Type131 = (typeof Type131)[keyof typeof Type131] | (string & {});

export const type131Schema: EnumSchema<Type131> = s.enumOf<Type131>(Type131);
