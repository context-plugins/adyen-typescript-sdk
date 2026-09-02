import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Payment11 = {
  contactlessCurrency?: string;
  hideMinorUnitsInCurrencies?: string[];
};

export const payment11Schema: Schema<Payment11> = s.object<Payment11>({
  contactlessCurrency: s.optional(s.string()),
  hideMinorUnitsInCurrencies: s.optional(s.array(s.string())),
});
