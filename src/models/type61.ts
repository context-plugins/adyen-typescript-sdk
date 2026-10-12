import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of terminal action: Update Release. */
export const Type61 = {
  ReleaseUpdate: "ReleaseUpdate",
} as const;
export type Type61 = (typeof Type61)[keyof typeof Type61] | (string & {});

export const type61Schema: EnumSchema<Type61> = s.enumOf<Type61>(Type61);
