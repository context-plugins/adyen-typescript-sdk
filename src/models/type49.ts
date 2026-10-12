import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * **riverty**
 */
export const Type49 = {
  Riverty: "riverty",
  RivertyAccount: "riverty_account",
  RivertyInstallments: "riverty_installments",
  SepadirectdebitRiverty: "sepadirectdebit_riverty",
} as const;
export type Type49 = (typeof Type49)[keyof typeof Type49] | (string & {});

export const type49Schema: EnumSchema<Type49> = s.enumOf<Type49>(Type49);
