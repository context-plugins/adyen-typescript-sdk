import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PatchableFraudInfo = {
  cardDoesNotBelongToCardholder?: boolean;
  cardWasCounterfeited?: boolean;
  descriptionOfIssue?: string;
  reportOnly?: boolean | null;
};

export const patchableFraudInfoSchema: Schema<PatchableFraudInfo> = s.object<PatchableFraudInfo>({
  cardDoesNotBelongToCardholder: s.optional(s.boolean()),
  cardWasCounterfeited: s.optional(s.boolean()),
  descriptionOfIssue: s.optional(s.string()),
  reportOnly: s.optionalNullable(s.boolean()),
});
