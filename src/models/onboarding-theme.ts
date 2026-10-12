import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OnboardingTheme = {
  /** The creation date of the theme. */
  createdAt: Date;
  /** The description of the theme. */
  description?: string;
  /** The unique identifier of the theme. */
  id: string;
  /** The properties of the theme. */
  properties: Record<string, string>;
  /** The date when the theme was last updated. */
  updatedAt?: Date;
};

export const onboardingThemeSchema: Schema<OnboardingTheme> = s.object<OnboardingTheme>({
  createdAt: s.dateTime(),
  description: s.optional(s.string()),
  id: s.string(),
  properties: s.record(s.string(), s.string()),
  updatedAt: s.optional(s.dateTime()),
});
