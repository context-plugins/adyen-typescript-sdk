import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConvertedAmount = {
  amountValue: number;
  currency: string;
};

export const convertedAmountSchema: Schema<ConvertedAmount> = s.object<ConvertedAmount>({
  amountValue: s.number(),
  currency: s.string(),
  _keysMap: {
    amountValue: "AmountValue",
    currency: "Currency",
  },
});
