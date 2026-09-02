import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MinorUnitsMonetaryValue = {
  amount?: number;
  currencyCode?: string;
};

export const minorUnitsMonetaryValueSchema: Schema<MinorUnitsMonetaryValue> =
  s.object<MinorUnitsMonetaryValue>({
    amount: s.optional(s.number()),
    currencyCode: s.optional(s.string()),
  });
