import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type252 = {
  IssuingTransactionData: "issuingTransactionData",
} as const;
export type Type252 = (typeof Type252)[keyof typeof Type252] | (string & {});

export const type252Schema: EnumSchema<Type252> = s.enumOf<Type252>(Type252);
