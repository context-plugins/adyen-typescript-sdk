import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PredefinedContent1 = {
  referenceId: string;
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
