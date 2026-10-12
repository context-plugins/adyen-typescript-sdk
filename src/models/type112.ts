import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of entity that owns the bank account or card.
 *
 * Possible values: **individual**, **organization**, or **unknown**.
 *
 * Required when `category` is **card**. In this case, the value must be **individual**.
 */
export const Type112 = {
  Individual: "individual",
  Organization: "organization",
  Unknown: "unknown",
} as const;
export type Type112 = (typeof Type112)[keyof typeof Type112] | (string & {});

export const type112Schema: EnumSchema<Type112> = s.enumOf<Type112>(Type112);
