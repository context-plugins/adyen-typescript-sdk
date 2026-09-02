import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CollectInformation1 = {
  bankDetails?: boolean;
  businessDetails?: boolean;
  individualDetails?: boolean;
  legalArrangementDetails?: boolean;
  pciQuestionnaire?: boolean;
  shareholderDetails?: boolean;
};

export const collectInformation1Schema: Schema<CollectInformation1> = s.object<CollectInformation1>({
  bankDetails: s.optional(s.boolean()),
  businessDetails: s.optional(s.boolean()),
  individualDetails: s.optional(s.boolean()),
  legalArrangementDetails: s.optional(s.boolean()),
  pciQuestionnaire: s.optional(s.boolean()),
  shareholderDetails: s.optional(s.boolean()),
});
