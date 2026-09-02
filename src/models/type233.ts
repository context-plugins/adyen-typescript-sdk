import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type233 = {
  Back: "BACK",
  Front: "FRONT",
  Undefined: "UNDEFINED",
} as const;
export type Type233 = (typeof Type233)[keyof typeof Type233] | (string & {});

export const type233Schema: EnumSchema<Type233> = s.enumOf<Type233>(Type233);
