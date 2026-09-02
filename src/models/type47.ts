import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type47 = {
  Masterpass: "masterpass",
} as const;
export type Type47 = (typeof Type47)[keyof typeof Type47] | (string & {});

export const type47Schema: EnumSchema<Type47> = s.enumOf<Type47>(Type47);
