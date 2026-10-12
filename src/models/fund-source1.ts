import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { card1Schema, type Card1 } from "./card1.js";
import { nameSchema, type Name } from "./name.js";

/** The person or entity funding the money. */
export type FundSource1 = {
  /** A map of name-value pairs for passing additional or industry-specific data. */
  additionalData?: Record<string, string>;
  /** The address where to send the invoice. */
  billingAddress?: Address;
  /**
   * Credit card data.
   *
   * Optional if `shopperReference` and `selectedRecurringDetailReference` are provided.
   */
  card?: Card1;
  /** Email address of the person. */
  shopperEmail?: string;
  /** Name of the person. */
  shopperName?: Name;
  /** Phone number of the person */
  telephoneNumber?: string;
};

export const fundSource1Schema: Schema<FundSource1> = s.object<FundSource1>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  billingAddress: s.optional(s.lazy(() => addressSchema)),
  card: s.optional(s.lazy(() => card1Schema)),
  shopperEmail: s.optional(s.string()),
  shopperName: s.optional(s.lazy(() => nameSchema)),
  telephoneNumber: s.optional(s.string()),
});
