import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** *affirm** details */
export type AffirmResponseInfo1 = {
  /** Affirm public API key */
  publicApiKey?: string;
};

export const affirmResponseInfo1Schema: Schema<AffirmResponseInfo1> = s.object<AffirmResponseInfo1>({
  publicApiKey: s.optional(s.string()),
});
