import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { card1Schema, type Card1 } from "./card1.js";
import { nameSchema, type Name } from "./name.js";
import { subMerchantSchema, type SubMerchant } from "./sub-merchant.js";

/** the person or entity receiving the money */
export type FundDestination1 = {
  /** Bank Account Number of the recipient */
  iban?: string;
  /** a map of name/value pairs for passing in additional/industry-specific data */
  additionalData?: Record<string, string>;
  /** The address where to send the invoice. */
  billingAddress?: Address;
  /**
   * Credit card data.
   *
   * Optional if `shopperReference` and `selectedRecurringDetailReference` are provided.
   */
  card?: Card1;
  /**
   * The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used
   * to select the most recently stored recurring detail.
   */
  selectedRecurringDetailReference?: string;
  /** the email address of the person */
  shopperEmail?: string;
  /** the name of the person */
  shopperName?: Name;
  /**
   * Required for recurring payments. Your reference to uniquely identify this shopper, for example
   * user ID or account ID. The value is case-sensitive and must be at least three characters. >
   * Your reference must not include personally identifiable information (PII) such as name or email
   * address.
   */
  shopperReference?: string;
  /**
   * Required for Back-to-Back/ purchase driven load in Wallet transactions. Contains the final
   * merchant who will be receiving the money, also known as subMerchant, information.
   */
  subMerchant?: SubMerchant;
  /** the telephone number of the person */
  telephoneNumber?: string;
  /** The purpose of a digital wallet transaction. */
  walletPurpose?: string;
};

export const fundDestination1Schema: Schema<FundDestination1> = s.object<FundDestination1>({
  iban: s.optional(s.string()),
  additionalData: s.optional(s.record(s.string(), s.string())),
  billingAddress: s.optional(s.lazy(() => addressSchema)),
  card: s.optional(s.lazy(() => card1Schema)),
  selectedRecurringDetailReference: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  shopperName: s.optional(s.lazy(() => nameSchema)),
  shopperReference: s.optional(s.string()),
  subMerchant: s.optional(s.lazy(() => subMerchantSchema)),
  telephoneNumber: s.optional(s.string()),
  walletPurpose: s.optional(s.string()),
  _keysMap: {
    iban: "IBAN",
  },
});
