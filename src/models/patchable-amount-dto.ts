import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PatchableAmountDto = {
  currency?: string;
  value?: number;
};

export const patchableAmountDtoSchema: Schema<PatchableAmountDto> = s.object<PatchableAmountDto>({
  currency: s.optional(s.string()),
  value: s.optional(s.number()),
});
