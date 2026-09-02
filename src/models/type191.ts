import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type191 = {
  DkLocal: "dkLocal",
} as const;
export type Type191 = (typeof Type191)[keyof typeof Type191] | (string & {});

export const type191Schema: EnumSchema<Type191> = s.enumOf<Type191>(Type191);
