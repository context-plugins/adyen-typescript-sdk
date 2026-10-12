import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of token replacing the PAN of a payment card to identify the payment mean of the customer.
 * It allows, for a merchant, to use a token for a transaction only or for a longer period. Possible
 * values:
 * * **Transaction**
 * * **Customer**
 */
export const TokenRequestedType = {
  Transaction: "Transaction",
  Customer: "Customer",
} as const;
export type TokenRequestedType = (typeof TokenRequestedType)[keyof typeof TokenRequestedType] | (string & {});

export const tokenRequestedTypeSchema: EnumSchema<TokenRequestedType> =
  s.enumOf<TokenRequestedType>(TokenRequestedType);
