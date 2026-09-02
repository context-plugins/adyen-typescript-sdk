import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OnboardingTheme = {
  createdAt: Date;
  description?: string;
  id: string;
  properties: Record<string, string>;
  updatedAt?: Date;
};

export const onboardingThemeSchema: Schema<OnboardingTheme> = s.object<OnboardingTheme>({
  createdAt: s.dateTime(),
  description: s.optional(s.string()),
  id: s.string(),
  properties: s.record(s.string(), s.string()),
  updatedAt: s.optional(s.dateTime()),
});
