import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Reference of a predefined message to display or print. It conveys information related to the
 * predefined message.
 */
export type PredefinedContent = {
  /** Identification of a predefined message to display or print. */
  referenceId: string;
  /** Identification of a language. */
  language?: string;
};

export const predefinedContentSchema: Schema<PredefinedContent> = s.object<PredefinedContent>({
  referenceId: s.string(),
  language: s.optional(s.string()),
  _keysMap: {
    referenceId: "ReferenceID",
    language: "Language",
  },
});
