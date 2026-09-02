import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PredefinedContent = {
  referenceId: string;
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
