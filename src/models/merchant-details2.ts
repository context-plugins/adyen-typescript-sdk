import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Additional data for merchants who don't use Adyen as the payment authorisation gateway. */
export type MerchantDetails2 = {
  /**
   * 2-letter ISO 3166 country code of the card acceptor location. > This parameter is required for
   * the merchants who don't use Adyen as the payment authorisation gateway.
   */
  countryCode?: string;
  /** If true, indicates that the merchant is enrolled in 3D Secure for the card network. */
  enrolledIn3DSecure?: boolean;
  /**
   * The merchant category code (MCC) is a four-digit number which relates to a particular market
   * segment. This code reflects the predominant activity that is conducted by the merchant.
   *
   * The list of MCCs can be found [here](https://en.wikipedia.org/wiki/Merchant_category_code).
   */
  mcc?: string;
};

export const merchantDetails2Schema: Schema<MerchantDetails2> = s.object<MerchantDetails2>({
  countryCode: s.optional(s.string()),
  enrolledIn3DSecure: s.optional(s.boolean()),
  mcc: s.optional(s.string()),
});
