import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SplitAmount = {
  currency?: string;
  value: number;
};

export const splitAmountSchema: Schema<SplitAmount> = s.object<SplitAmount>({
  currency: s.optional(s.string()),
  value: s.number(),
});
