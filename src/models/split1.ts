import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { splitAmountSchema, type SplitAmount } from "./split-amount.js";
import { type60Schema, type Type60 } from "./type60.js";

export type Split1 = {
  account?: string;
  amount?: SplitAmount;
  description?: string;
  reference?: string;
  type: Type60;
};

export const split1Schema: Schema<Split1> = s.object<Split1>({
  account: s.optional(s.string()),
  amount: s.optional(s.lazy(() => splitAmountSchema)),
  description: s.optional(s.string()),
  reference: s.optional(s.string()),
  type: type60Schema,
});
