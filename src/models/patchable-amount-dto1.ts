import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PatchableAmountDto1 = {
  currency?: string;
  value?: number;
};

export const patchableAmountDto1Schema: Schema<PatchableAmountDto1> = s.object<PatchableAmountDto1>({
  currency: s.optional(s.string()),
  value: s.optional(s.number()),
});
