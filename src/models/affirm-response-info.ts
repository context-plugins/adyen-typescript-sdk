import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AffirmResponseInfo = {
  publicApiKey?: string;
};

export const affirmResponseInfoSchema: Schema<AffirmResponseInfo> = s.object<AffirmResponseInfo>({
  publicApiKey: s.optional(s.string()),
});
