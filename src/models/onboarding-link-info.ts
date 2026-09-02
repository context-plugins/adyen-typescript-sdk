import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { onboardingLinkSettings2Schema, type OnboardingLinkSettings2 } from "./onboarding-link-settings2.js";

export type OnboardingLinkInfo = {
  locale?: string;
  redirectUrl?: string;
  settings?: OnboardingLinkSettings2;
  themeId?: string;
};

export const onboardingLinkInfoSchema: Schema<OnboardingLinkInfo> = s.object<OnboardingLinkInfo>({
  locale: s.optional(s.string()),
  redirectUrl: s.optional(s.string()),
  settings: s.optional(s.lazy(() => onboardingLinkSettings2Schema)),
  themeId: s.optional(s.string()),
});
