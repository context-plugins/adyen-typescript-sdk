import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencySchema, type Currency } from "./currency.js";

export type Configuration = {
  /**
   * Payment method, like **eftpos_australia** or **mc**. See the [possible
   * values](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).
   */
  brand: string;
  /** Set to **true** to apply surcharges only to commercial/business cards. */
  commercial?: boolean;
  /**
   * The country/region of the card issuer. If used, the surcharge settings only apply to the card
   * issued in that country/region.
   */
  country?: string[];
  /** Currency and percentage or amount of the surcharge. */
  currencies: Currency[];
  /**
   * Funding source. Possible values:
   * * **Credit**
   * * **Debit**
   */
  sources?: string[];
};

export const configurationSchema: Schema<Configuration> = s.object<Configuration>({
  brand: s.string(),
  commercial: s.optional(s.boolean()),
  country: s.optional(s.array(s.string())),
  currencies: s.array(s.lazy(() => currencySchema)),
  sources: s.optional(s.array(s.string())),
});
