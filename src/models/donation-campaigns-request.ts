import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DonationCampaignsRequest = {
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes/).
   */
  currency: string;
  /** Locale on the shopper interaction device. */
  locale?: string;
  /** Your merchant account identifier. */
  merchantAccount: string;
  /**
   * Required for Adyen for Platforms integrations if you are a platform model. This is your
   * [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference)
   * (on [balance platform](https://docs.adyen.com/platforms)) or the
   * [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference)
   * (in the [classic
   * integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store))
   * for the ecommerce or point-of-sale store that is processing the payment.
   */
  store?: string;
};

export const donationCampaignsRequestSchema: Schema<DonationCampaignsRequest> =
  s.object<DonationCampaignsRequest>({
    currency: s.string(),
    locale: s.optional(s.string()),
    merchantAccount: s.string(),
    store: s.optional(s.string()),
  });
