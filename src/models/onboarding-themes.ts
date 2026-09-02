import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { onboardingThemeSchema, type OnboardingTheme } from "./onboarding-theme.js";

export type OnboardingThemes = {
  next?: string;
  previous?: string;
  themes: OnboardingTheme[];
};

export const onboardingThemesSchema: Schema<OnboardingThemes> = s.object<OnboardingThemes>({
  next: s.optional(s.string()),
  previous: s.optional(s.string()),
  themes: s.array(s.lazy(() => onboardingThemeSchema)),
});
