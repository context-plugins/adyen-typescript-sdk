import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Localization = {
  /** Language of the terminal. */
  language?: string;
  /** Secondary language of the terminal. */
  secondaryLanguage?: string;
  /** The time zone of the terminal. */
  timezone?: string;
};

export const localizationSchema: Schema<Localization> = s.object<Localization>({
  language: s.optional(s.string()),
  secondaryLanguage: s.optional(s.string()),
  timezone: s.optional(s.string()),
});
