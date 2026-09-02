import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AffirmUpdateInfo1 = {
  pricePlan?: string;
};

export const affirmUpdateInfo1Schema: Schema<AffirmUpdateInfo1> = s.object<AffirmUpdateInfo1>({
  pricePlan: s.optional(s.string()),
});
