import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FraudInfo1 = {
  cardDoesNotBelongToCardholder: boolean;
  cardWasCounterfeited: boolean;
  descriptionOfIssue: string;
  reportOnly?: boolean;
};

export const fraudInfo1Schema: Schema<FraudInfo1> = s.object<FraudInfo1>({
  cardDoesNotBelongToCardholder: s.boolean(),
  cardWasCounterfeited: s.boolean(),
  descriptionOfIssue: s.string(),
  reportOnly: s.optional(s.boolean()),
});
