import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { splitAmountSchema, type SplitAmount } from "./split-amount.js";
import { type11Schema, type Type11 } from "./type11.js";

export type Split = {
  account?: string;
  amount?: SplitAmount;
  description?: string;
  reference?: string;
  type: Type11;
};

export const splitSchema: Schema<Split> = s.object<Split>({
  account: s.optional(s.string()),
  amount: s.optional(s.lazy(() => splitAmountSchema)),
  description: s.optional(s.string()),
  reference: s.optional(s.string()),
  type: type11Schema,
});
