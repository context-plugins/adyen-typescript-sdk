import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type281 = {
  SgLocal: "sgLocal",
} as const;
export type Type281 = (typeof Type281)[keyof typeof Type281] | (string & {});

export const type281Schema: EnumSchema<Type281> = s.enumOf<Type281>(Type281);
