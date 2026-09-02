import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TokenRequestedType1 = {
  Transaction: "Transaction",
  Customer: "Customer",
} as const;
export type TokenRequestedType1 =
  | (typeof TokenRequestedType1)[keyof typeof TokenRequestedType1]
  | (string & {});

export const tokenRequestedType1Schema: EnumSchema<TokenRequestedType1> =
  s.enumOf<TokenRequestedType1>(TokenRequestedType1);
