import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type112 = {
  Individual: "individual",
  Organization: "organization",
  Unknown: "unknown",
} as const;
export type Type112 = (typeof Type112)[keyof typeof Type112] | (string & {});

export const type112Schema: EnumSchema<Type112> = s.enumOf<Type112>(Type112);
