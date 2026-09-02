import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type71 = {
  UpiIntent: "upi_intent",
} as const;
export type Type71 = (typeof Type71)[keyof typeof Type71] | (string & {});

export const type71Schema: EnumSchema<Type71> = s.enumOf<Type71>(Type71);
