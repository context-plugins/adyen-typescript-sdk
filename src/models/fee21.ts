import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

/**
 * Contains the currency and value of the cashout fee, in [minor
 * units](https://docs.adyen.com/development-resources/currency-codes).
 */
export type Fee21 = {
  /** Contains the fee amount. */
  amount: Amount17;
};

export const fee21Schema: Schema<Fee21> = s.object<Fee21>({
  amount: amount17Schema,
});
