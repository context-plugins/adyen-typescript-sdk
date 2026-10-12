import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SplitDcc = {
  accountHolderPercentage?: number;
};

export const splitDccSchema: Schema<SplitDcc> = s.object<SplitDcc>({
  accountHolderPercentage: s.optional(s.int()),
});
