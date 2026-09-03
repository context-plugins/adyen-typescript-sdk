import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type511 = {
  IssuedCard: "issuedCard",
} as const;
export type Type511 = (typeof Type511)[keyof typeof Type511] | (string & {});

export const type511Schema: EnumSchema<Type511> = s.enumOf<Type511>(Type511);
