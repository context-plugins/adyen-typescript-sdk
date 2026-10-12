import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The form of legal arrangement. Required if `type` is **Trust** or **Partnership**.
 *
 * The possible values depend on the `type`.
 *
 * - For `type` **Trust**: **CashManagementTrust**, **CorporateUnitTrust**, **DeceasedEstate**,
 *   **DiscretionaryInvestmentTrust**, **DiscretionaryServicesManagementTrust**,
 *   **DiscretionaryTradingTrust**, **FirstHomeSaverAccountsTrust**, **FixedTrust**,
 *   **FixedUnitTrust**, **HybridTrust**, **ListedPublicUnitTrust**, **OtherTrust**,
 *   **PooledSuperannuationTrust**, **PublicTradingTrust**, or **UnlistedPublicUnitTrust**.
 *
 * - For `type` **Partnership**: **LimitedPartnership**, **FamilyPartnership**, or
 *   **OtherPartnership**
 */
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
