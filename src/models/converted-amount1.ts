import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConvertedAmount1 = {
  amountValue: number;
  currency: string;
};

export const convertedAmount1Schema: Schema<ConvertedAmount1> = s.object<ConvertedAmount1>({
  amountValue: s.number(),
  currency: s.string(),
  _keysMap: {
    amountValue: "AmountValue",
    currency: "Currency",
  },
});
