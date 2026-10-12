import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferNotificationMerchantData = {
  /** The unique identifier of the merchant's acquirer. */
  acquirerId?: string;
  /** The city where the merchant is located. */
  city?: string;
  /** The country where the merchant is located. */
  country?: string;
  /**
   * The two-character country code of the merchant's location, in [ISO 3166-1
   * alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
   */
  countryCode?: string;
  /** The merchant category code. */
  mcc?: string;
  /** The unique identifier of the merchant. */
  merchantId?: string;
  /** The name of the merchant's shop or service. */
  name?: string;
  /** The postal code of the merchant. */
  postalCode?: string;
};

export const transferNotificationMerchantDataSchema: Schema<TransferNotificationMerchantData> =
  s.object<TransferNotificationMerchantData>({
    acquirerId: s.optional(s.string()),
    city: s.optional(s.string()),
    country: s.optional(s.string()),
    countryCode: s.optional(s.string()),
    mcc: s.optional(s.string()),
    merchantId: s.optional(s.string()),
    name: s.optional(s.string()),
    postalCode: s.optional(s.string()),
  });
