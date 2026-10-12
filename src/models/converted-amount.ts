import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConvertedAmount = {
  /** Value of an amount. */
  amountValue: number;
  /** Currency of a monetary amount. */
  currency: string;
};

export const convertedAmountSchema: Schema<ConvertedAmount> = s.object<ConvertedAmount>({
  amountValue: s.float64(),
  currency: s.string(),
  _keysMap: {
    amountValue: "AmountValue",
    currency: "Currency",
  },
});
