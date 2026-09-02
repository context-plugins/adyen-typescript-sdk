import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AffirmInfo1 = {
  pricePlan?: string;
  supportEmail: string;
};

export const affirmInfo1Schema: Schema<AffirmInfo1> = s.object<AffirmInfo1>({
  pricePlan: s.optional(s.string()),
  supportEmail: s.string(),
});
