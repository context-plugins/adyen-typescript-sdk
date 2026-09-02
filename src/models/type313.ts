import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type313 = {
  Individual: "individual",
  Organization: "organization",
  Unknown: "unknown",
} as const;
export type Type313 = (typeof Type313)[keyof typeof Type313] | (string & {});

export const type313Schema: EnumSchema<Type313> = s.enumOf<Type313>(Type313);
