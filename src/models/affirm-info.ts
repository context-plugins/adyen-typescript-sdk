import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AffirmInfo = {
  pricePlan?: string;
  supportEmail: string;
};

export const affirmInfoSchema: Schema<AffirmInfo> = s.object<AffirmInfo>({
  pricePlan: s.optional(s.string()),
  supportEmail: s.string(),
});
