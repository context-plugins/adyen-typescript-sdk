import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type TaxTotal = {
  amount?: Amount;
};

export const taxTotalSchema: Schema<TaxTotal> = s.object<TaxTotal>({
  amount: s.optional(s.lazy(() => amountSchema)),
});
