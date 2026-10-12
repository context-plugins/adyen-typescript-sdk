import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Settings for localization. */
export type Localization1 = {
  /** Language of the terminal. */
  language?: string;
  /** Secondary language of the terminal. */
  secondaryLanguage?: string;
  /** The time zone of the terminal. */
  timezone?: string;
};

export const localization1Schema: Schema<Localization1> = s.object<Localization1>({
  language: s.optional(s.string()),
  secondaryLanguage: s.optional(s.string()),
  timezone: s.optional(s.string()),
});
