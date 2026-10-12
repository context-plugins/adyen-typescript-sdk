import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { cardSchema, type Card } from "./card.js";
import { nameSchema, type Name } from "./name.js";

export type FundSource2 = {
  /** A map of name-value pairs for passing additional or industry-specific data. */
  additionalData?: Record<string, string>;
  /** The address where to send the invoice. */
  billingAddress?: Address;
  /**
   * Credit card data.
   *
   * Optional if `shopperReference` and `selectedRecurringDetailReference` are provided.
   */
  card?: Card;
  /** Email address of the person. */
  shopperEmail?: string;
  /** Name of the person. */
  shopperName?: Name;
  /** Phone number of the person */
  telephoneNumber?: string;
};

export const fundSource2Schema: Schema<FundSource2> = s.object<FundSource2>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  billingAddress: s.optional(s.lazy(() => addressSchema)),
  card: s.optional(s.lazy(() => cardSchema)),
  shopperEmail: s.optional(s.string()),
  shopperName: s.optional(s.lazy(() => nameSchema)),
  telephoneNumber: s.optional(s.string()),
});
