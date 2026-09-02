import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type222 = {
  IssuedCard: "issuedCard",
} as const;
export type Type222 = (typeof Type222)[keyof typeof Type222] | (string & {});

export const type222Schema: EnumSchema<Type222> = s.enumOf<Type222>(Type222);
