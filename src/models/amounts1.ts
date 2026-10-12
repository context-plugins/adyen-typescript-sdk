import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The object that contains the fixed donation amounts that the shopper can select from. */
export type Amounts1 = {
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes/).
   */
  currency: string;
  /**
   * The amounts of the donation (in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes/)).
   */
  values: number[];
};

export const amounts1Schema: Schema<Amounts1> = s.object<Amounts1>({
  currency: s.string(),
  values: s.array(s.int()),
});
