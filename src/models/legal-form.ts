import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LegalForm = {
  CashManagementTrust: "CashManagementTrust",
  CorporateUnitTrust: "CorporateUnitTrust",
  DeceasedEstate: "DeceasedEstate",
  DiscretionaryInvestmentTrust: "DiscretionaryInvestmentTrust",
  DiscretionaryServicesManagementTrust: "DiscretionaryServicesManagementTrust",
  DiscretionaryTradingTrust: "DiscretionaryTradingTrust",
  FirstHomeSaverAccountsTrust: "FirstHomeSaverAccountsTrust",
  FixedTrust: "FixedTrust",
  FixedUnitTrust: "FixedUnitTrust",
  HybridTrust: "HybridTrust",
  ListedPublicUnitTrust: "ListedPublicUnitTrust",
  OtherTrust: "OtherTrust",
  PooledSuperannuationTrust: "PooledSuperannuationTrust",
  PublicTradingTrust: "PublicTradingTrust",
  UnlistedPublicUnitTrust: "UnlistedPublicUnitTrust",
  LimitedPartnership: "LimitedPartnership",
  FamilyPartnership: "FamilyPartnership",
  OtherPartnership: "OtherPartnership",
} as const;
export type LegalForm = (typeof LegalForm)[keyof typeof LegalForm] | (string & {});

export const legalFormSchema: EnumSchema<LegalForm> = s.enumOf<LegalForm>(LegalForm);
