import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AffirmResponseInfo = {
  /** Affirm public API key */
  publicApiKey?: string;
};

export const affirmResponseInfoSchema: Schema<AffirmResponseInfo> = s.object<AffirmResponseInfo>({
  publicApiKey: s.optional(s.string()),
});
