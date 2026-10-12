import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountDetailSchema, type BankAccountDetail } from "./bank-account-detail.js";
import { businessDetails3Schema, type BusinessDetails3 } from "./business-details3.js";
import { individualDetails3Schema, type IndividualDetails3 } from "./individual-details3.js";
import { legalArrangementDetailSchema, type LegalArrangementDetail } from "./legal-arrangement-detail.js";
import { payoutMethodSchema, type PayoutMethod } from "./payout-method.js";
import { storeDetailSchema, type StoreDetail } from "./store-detail.js";
import { viasAddress6Schema, type ViasAddress6 } from "./vias-address6.js";
import { viasAddress9Schema, type ViasAddress9 } from "./vias-address9.js";
import { viasPhoneNumber3Schema, type ViasPhoneNumber3 } from "./vias-phone-number3.js";

/** The details of the prospective account holder. */
export type AccountHolderDetails1 = {
  /** The address of the account holder. */
  address: ViasAddress9;
  /**
   * Array of bank accounts associated with the account holder. For details about the required
   * `bankAccountDetail` fields, see [Required
   * information](https://docs.adyen.com/classic-platforms/verification-process/required-information).
   */
  bankAccountDetails?: BankAccountDetail[];
  /** The opaque reference value returned by the Adyen API during bank account login. */
  bankAggregatorDataReference?: string;
  /**
   * Details about the business or nonprofit account holder. Required when creating an account
   * holder with `legalEntity` **Business** or **NonProfit**.
   */
  businessDetails?: BusinessDetails3;
  /** The email address of the account holder. */
  email?: string;
  /**
   * The phone number of the account holder provided as a single string. It will be handled as a
   * landline phone. **Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"
   */
  fullPhoneNumber?: string;
  /**
   * Details about the individual account holder. Required when creating an account holder with
   * `legalEntity` **Individual**.
   */
  individualDetails?: IndividualDetails3;
  /**
   * Date when you last reviewed the account holder's information, in ISO-8601 YYYY-MM-DD format.
   * For example, **2020-01-31**.
   */
  lastReviewDate?: string;
  /**
   * An array containing information about the account holder's [legal
   * arrangements](https://docs.adyen.com/classic-platforms/verification-process/legal-arrangements).
   */
  legalArrangements?: LegalArrangementDetail[];
  /**
   * The Merchant Category Code of the account holder. > If not specified in the request, this will
   * be derived from the platform account (which is configured by Adyen).
   */
  merchantCategoryCode?: string;
  /**
   * A set of key and value pairs for general use by the account holder or merchant. The keys do not
   * have specific names and may be used for storing miscellaneous data as desired. > The values
   * being stored have a maximum length of eighty (80) characters and will be truncated if
   * necessary. > Note that during an update of metadata, the omission of existing key-value pairs
   * will result in the deletion of those key-value pairs.
   */
  metadata?: Record<string, string>;
  /**
   * Array of tokenized card details associated with the account holder. For details about how you
   * can use the tokens to pay out, refer to [Pay out to
   * cards](https://docs.adyen.com/classic-platforms/payout-to-cards).
   */
  payoutMethods?: PayoutMethod[];
  /** The phone number of the account holder. > Required if a `fullPhoneNumber` is not provided. */
  phoneNumber?: ViasPhoneNumber3;
  /** The principal business address of the account holder. */
  principalBusinessAddress?: ViasAddress6;
  /**
   * Array of stores associated with the account holder. Required when onboarding account holders
   * that have an Adyen [point of sale](https://docs.adyen.com/classic-platforms/platforms-for-pos).
   */
  storeDetails?: StoreDetail[];
  /** The URL of the website of the account holder. */
  webAddress?: string;
};

export const accountHolderDetails1Schema: Schema<AccountHolderDetails1> = s.object<AccountHolderDetails1>({
  address: viasAddress9Schema,
  bankAccountDetails: s.optional(s.array(s.lazy(() => bankAccountDetailSchema))),
  bankAggregatorDataReference: s.optional(s.string()),
  businessDetails: s.optional(s.lazy(() => businessDetails3Schema)),
  email: s.optional(s.string()),
  fullPhoneNumber: s.optional(s.string()),
  individualDetails: s.optional(s.lazy(() => individualDetails3Schema)),
  lastReviewDate: s.optional(s.string()),
  legalArrangements: s.optional(s.array(s.lazy(() => legalArrangementDetailSchema))),
  merchantCategoryCode: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.string())),
  payoutMethods: s.optional(s.array(s.lazy(() => payoutMethodSchema))),
  phoneNumber: s.optional(s.lazy(() => viasPhoneNumber3Schema)),
  principalBusinessAddress: s.optional(s.lazy(() => viasAddress6Schema)),
  storeDetails: s.optional(s.array(s.lazy(() => storeDetailSchema))),
  webAddress: s.optional(s.string()),
});
