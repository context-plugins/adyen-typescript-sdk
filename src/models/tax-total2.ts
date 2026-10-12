import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

/** Total tax amount from the order. */
export type TaxTotal2 = {
  amount?: Amount;
};

export const taxTotal2Schema: Schema<TaxTotal2> = s.object<TaxTotal2>({
  amount: s.optional(s.lazy(() => amountSchema)),
});
