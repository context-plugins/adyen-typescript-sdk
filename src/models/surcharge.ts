import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Surcharge = {
  /**
   * The [surcharge](https://docs.adyen.com/online-payments/surcharge/) amount to apply to the
   * transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).
   * When you apply surcharge, include the surcharge in the `amount.value` field.
   *
   * Review our [Surcharge compliance
   * guide](https://docs.adyen.com/development-resources/surcharge-compliance/) to learn about how
   * to comply with regulatory requirements when applying surcharge.
   */
  value: number;
};

export const surchargeSchema: Schema<Surcharge> = s.object<Surcharge>({
  value: s.int(),
});
