import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AffirmResponseInfo1 = {
  publicApiKey?: string;
};

export const affirmResponseInfo1Schema: Schema<AffirmResponseInfo1> = s.object<AffirmResponseInfo1>({
  publicApiKey: s.optional(s.string()),
});
