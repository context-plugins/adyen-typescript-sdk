import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type77 = {
  Zip: "zip",
  ZipPos: "zip_pos",
} as const;
export type Type77 = (typeof Type77)[keyof typeof Type77] | (string & {});

export const type77Schema: EnumSchema<Type77> = s.enumOf<Type77>(Type77);
