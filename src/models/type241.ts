import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type241 = {
  NzLocal: "nzLocal",
} as const;
export type Type241 = (typeof Type241)[keyof typeof Type241] | (string & {});

export const type241Schema: EnumSchema<Type241> = s.enumOf<Type241>(Type241);
