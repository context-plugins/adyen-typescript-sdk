import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OnboardingLinkSettings2 = {
  acceptedCountries?: string[];
  allowBankAccountFormatSelection?: boolean;
  allowDebugUi?: boolean;
  allowIntraRegionCrossBorderPayout?: boolean;
  changeLegalEntityType?: boolean;
  editPrefilledCountry?: boolean;
  enforceLegalAge?: boolean;
  hideOnboardingIntroductionIndividual?: boolean;
  hideOnboardingIntroductionOrganization?: boolean;
  hideOnboardingIntroductionSoleProprietor?: boolean;
  hideOnboardingIntroductionTrust?: boolean;
  instantBankVerification?: boolean;
  requirePciSignEcomMoto?: boolean;
  requirePciSignEcommerce?: boolean;
  requirePciSignPos?: boolean;
  requirePciSignPosMoto?: boolean;
  transferInstrumentLimit?: number;
};

export const onboardingLinkSettings2Schema: Schema<OnboardingLinkSettings2> =
  s.object<OnboardingLinkSettings2>({
    acceptedCountries: s.optional(s.array(s.string())),
    allowBankAccountFormatSelection: s.optional(s.boolean()),
    allowDebugUi: s.optional(s.boolean()),
    allowIntraRegionCrossBorderPayout: s.optional(s.boolean()),
    changeLegalEntityType: s.optional(s.boolean()),
    editPrefilledCountry: s.optional(s.boolean()),
    enforceLegalAge: s.optional(s.boolean()),
    hideOnboardingIntroductionIndividual: s.optional(s.boolean()),
    hideOnboardingIntroductionOrganization: s.optional(s.boolean()),
    hideOnboardingIntroductionSoleProprietor: s.optional(s.boolean()),
    hideOnboardingIntroductionTrust: s.optional(s.boolean()),
    instantBankVerification: s.optional(s.boolean()),
    requirePciSignEcomMoto: s.optional(s.boolean()),
    requirePciSignEcommerce: s.optional(s.boolean()),
    requirePciSignPos: s.optional(s.boolean()),
    requirePciSignPosMoto: s.optional(s.boolean()),
    transferInstrumentLimit: s.optional(s.number()),
  });
