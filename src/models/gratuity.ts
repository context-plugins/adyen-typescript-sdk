import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Gratuity = {
  /**
   * Indicates whether one of the predefined tipping options is to let the shopper enter a custom
   * tip. If **true**, only three of the other options defined in `predefinedTipEntries` are shown.
   */
  allowCustomAmount?: boolean;
  /** The currency that the tipping settings apply to. */
  currency?: string;
  /**
   * Tipping options the shopper can choose from if `usePredefinedTipEntries` is **true**. The
   * maximum number of predefined options is four, or three plus the option to enter a custom tip.
   * The options can be a mix of:
   *
   * - A percentage of the transaction amount. Example: **5%**
   * - A tip amount in [minor units](https://docs.adyen.com/development-resources/currency-codes).
   *   Example: **500** for a EUR 5 tip.
   */
  predefinedTipEntries?: string[];
  /**
   * Indicates whether the terminal shows a prompt to enter a tip (**false**), or predefined tipping
   * options to choose from (**true**).
   */
  usePredefinedTipEntries?: boolean;
};

export const gratuitySchema: Schema<Gratuity> = s.object<Gratuity>({
  allowCustomAmount: s.optional(s.boolean()),
  currency: s.optional(s.string()),
  predefinedTipEntries: s.optional(s.array(s.string())),
  usePredefinedTipEntries: s.optional(s.boolean()),
});
