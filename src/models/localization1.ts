import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Localization1 = {
  language?: string;
  secondaryLanguage?: string;
  timezone?: string;
};

export const localization1Schema: Schema<Localization1> = s.object<Localization1>({
  language: s.optional(s.string()),
  secondaryLanguage: s.optional(s.string()),
  timezone: s.optional(s.string()),
});
