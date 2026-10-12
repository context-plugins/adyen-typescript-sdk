import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Settings for payment features. */
export type Payment11 = {
  /**
   * The default currency for contactless payments on the payment terminal, in three-letter [ISO
   * 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code format.
   *
   * Contact Adyen before you update this setting for the first time. To enable you to change the
   * contactless currency, we first need to check if you meet the compliance requirements.
   */
  contactlessCurrency?: string;
  /**
   * Hides the minor units for the listed [ISO currency
   * codes](https://en.wikipedia.org/wiki/ISO_4217).
   */
  hideMinorUnitsInCurrencies?: string[];
};

export const payment11Schema: Schema<Payment11> = s.object<Payment11>({
  contactlessCurrency: s.optional(s.string()),
  hideMinorUnitsInCurrencies: s.optional(s.array(s.string())),
});
