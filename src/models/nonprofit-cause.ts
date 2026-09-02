import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NonprofitCause = {
  bannerUrl: string;
  description: string;
  id?: string;
  locales: string[];
  name: string;
};

export const nonprofitCauseSchema: Schema<NonprofitCause> = s.object<NonprofitCause>({
  bannerUrl: s.string(),
  description: s.string(),
  id: s.optional(s.string()),
  locales: s.array(s.string()),
  name: s.string(),
});
