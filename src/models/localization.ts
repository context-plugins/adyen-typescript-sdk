import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Localization = {
  language?: string;
  secondaryLanguage?: string;
  timezone?: string;
};

export const localizationSchema: Schema<Localization> = s.object<Localization>({
  language: s.optional(s.string()),
  secondaryLanguage: s.optional(s.string()),
  timezone: s.optional(s.string()),
});
