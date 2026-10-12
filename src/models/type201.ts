import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the webhook you are configuring. Set to **balance**. */
export const Type201 = {
  Balance: "balance",
} as const;
export type Type201 = (typeof Type201)[keyof typeof Type201] | (string & {});

export const type201Schema: EnumSchema<Type201> = s.enumOf<Type201>(Type201);
