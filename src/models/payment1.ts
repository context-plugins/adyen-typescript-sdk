import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Payment1 = {
  contactlessCurrency?: string;
  hideMinorUnitsInCurrencies?: string[];
};

export const payment1Schema: Schema<Payment1> = s.object<Payment1>({
  contactlessCurrency: s.optional(s.string()),
  hideMinorUnitsInCurrencies: s.optional(s.array(s.string())),
});
