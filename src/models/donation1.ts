import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The object that contains the details of the donation. */
export type Donation1 = {
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes/).
   */
  currency: string;
  /**
   * The [type of donation](https://docs.adyen.com/online-payments/donations/#donation-types).
   *
   * Possible values:
   * * **roundup**: a donation where the original transaction amount is rounded up as a donation.
   * * **fixedAmounts**: a donation where you show fixed donations amounts that the shopper can
   *   select from.
   *
   * @deprecated
   */
  donationType?: string;
  /**
   * The maximum amount a transaction can be rounded up to make a donation. This field is only
   * present when `donationType` is **roundup**.
   */
  maxRoundupAmount?: number;
  /**
   * The [type of donation](https://docs.adyen.com/online-payments/donations/#donation-types).
   *
   * Possible values:
   * * **roundup**: a donation where the original transaction amount is rounded up as a donation.
   * * **fixedAmounts**: a donation where you show fixed donation amounts that the shopper can
   *   select from.
   */
  type: string;
  /**
   * The fixed donation amounts in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes//#minor-units). This field
   * is only present when `donationType` is **fixedAmounts**.
   */
  values?: number[];
};

export const donation1Schema: Schema<Donation1> = s.object<Donation1>({
  currency: s.string(),
  donationType: s.optional(s.string()),
  maxRoundupAmount: s.optional(s.int()),
  type: s.string(),
  values: s.optional(s.array(s.int())),
});
