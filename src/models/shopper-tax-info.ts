import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShopperTaxInfo = {
  /**
   * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * country code associated with the provided tax identification number. Currently used only for
   * Indian PA-CB tax verification, when applicable.
   */
  taxCountryCode: string;
  /** The shopper’s tax identification number. */
  taxIdentificationNumber: string;
};

export const shopperTaxInfoSchema: Schema<ShopperTaxInfo> = s.object<ShopperTaxInfo>({
  taxCountryCode: s.string(),
  taxIdentificationNumber: s.string(),
});
