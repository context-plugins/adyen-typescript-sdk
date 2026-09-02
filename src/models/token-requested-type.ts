import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TokenRequestedType = {
  Transaction: "Transaction",
  Customer: "Customer",
} as const;
export type TokenRequestedType = (typeof TokenRequestedType)[keyof typeof TokenRequestedType] | (string & {});

export const tokenRequestedTypeSchema: EnumSchema<TokenRequestedType> =
  s.enumOf<TokenRequestedType>(TokenRequestedType);
