import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OnboardingLink = {
  /**
   * The URL of the hosted onboarding page where you need to redirect your user. This URL:
   *
   *  - Expires after 4 minutes.
   *
   * - Can only be used once.
   *
   * - Can only be clicked once by the user.
   *
   * If the link expires, you need to create a new link.
   */
  url?: string;
};

export const onboardingLinkSchema: Schema<OnboardingLink> = s.object<OnboardingLink>({
  url: s.optional(s.string()),
});
