import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Currency = {
  amount?: number;
  currencyCode: string;
  maxAmount?: number;
  percentage?: number;
};

export const currencySchema: Schema<Currency> = s.object<Currency>({
  amount: s.optional(s.number()),
  currencyCode: s.string(),
  maxAmount: s.optional(s.number()),
  percentage: s.optional(s.number()),
});
