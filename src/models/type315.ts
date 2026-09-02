import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type315 = {
  BusinessTrust: "businessTrust",
  CashManagementTrust: "cashManagementTrust",
  CharitableTrust: "charitableTrust",
  CorporateUnitTrust: "corporateUnitTrust",
  DeceasedEstate: "deceasedEstate",
  DiscretionaryTrust: "discretionaryTrust",
  DiscretionaryInvestmentTrust: "discretionaryInvestmentTrust",
  DiscretionaryServicesManagementTrust: "discretionaryServicesManagementTrust",
  DiscretionaryTradingTrust: "discretionaryTradingTrust",
  FamilyTrust: "familyTrust",
  FirstHomeSaverAccountsTrust: "firstHomeSaverAccountsTrust",
  FixedTrust: "fixedTrust",
  FixedUnitTrust: "fixedUnitTrust",
  HybridTrust: "hybridTrust",
  ListedPublicUnitTrust: "listedPublicUnitTrust",
  OtherTrust: "otherTrust",
  PooledSuperannuationTrust: "pooledSuperannuationTrust",
  PublicTradingTrust: "publicTradingTrust",
  UnlistedPublicUnitTrust: "unlistedPublicUnitTrust",
} as const;
export type Type315 = (typeof Type315)[keyof typeof Type315] | (string & {});

export const type315Schema: EnumSchema<Type315> = s.enumOf<Type315>(Type315);
