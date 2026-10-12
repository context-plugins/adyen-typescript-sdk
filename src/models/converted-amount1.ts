import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Amount after a currency conversion. */
export type ConvertedAmount1 = {
  /** Value of an amount. */
  amountValue: number;
  /** Currency of a monetary amount. */
  currency: string;
};

export const convertedAmount1Schema: Schema<ConvertedAmount1> = s.object<ConvertedAmount1>({
  amountValue: s.float64(),
  currency: s.string(),
  _keysMap: {
    amountValue: "AmountValue",
    currency: "Currency",
  },
});
