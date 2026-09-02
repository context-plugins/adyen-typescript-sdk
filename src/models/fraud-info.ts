import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FraudInfo = {
  cardDoesNotBelongToCardholder: boolean;
  cardWasCounterfeited: boolean;
  descriptionOfIssue: string;
  reportOnly?: boolean;
};

export const fraudInfoSchema: Schema<FraudInfo> = s.object<FraudInfo>({
  cardDoesNotBelongToCardholder: s.boolean(),
  cardWasCounterfeited: s.boolean(),
  descriptionOfIssue: s.string(),
  reportOnly: s.optional(s.boolean()),
});
