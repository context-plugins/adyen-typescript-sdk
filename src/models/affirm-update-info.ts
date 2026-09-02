import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AffirmUpdateInfo = {
  pricePlan?: string;
};

export const affirmUpdateInfoSchema: Schema<AffirmUpdateInfo> = s.object<AffirmUpdateInfo>({
  pricePlan: s.optional(s.string()),
});
