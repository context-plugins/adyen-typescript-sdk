import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OnboardingLink = {
  url?: string;
};

export const onboardingLinkSchema: Schema<OnboardingLink> = s.object<OnboardingLink>({
  url: s.optional(s.string()),
});
