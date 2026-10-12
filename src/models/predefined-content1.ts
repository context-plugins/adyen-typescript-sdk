import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Reference of a predefined message to display or print. Mandatory, if `OutputFormat` is
 * MessageRef, not allowed otherwise.
 */
export type PredefinedContent1 = {
  /** Identification of a predefined message to display or print. */
  referenceId: string;
  /** Identification of a language. */
  language?: string;
};

export const predefinedContent1Schema: Schema<PredefinedContent1> = s.object<PredefinedContent1>({
  referenceId: s.string(),
  language: s.optional(s.string()),
  _keysMap: {
    referenceId: "ReferenceID",
    language: "Language",
  },
});
