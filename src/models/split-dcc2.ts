import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SplitDcc2 = {
  accountHolderPercentage?: number;
};

export const splitDcc2Schema: Schema<SplitDcc2> = s.object<SplitDcc2>({
  accountHolderPercentage: s.optional(s.number()),
});
