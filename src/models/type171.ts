import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of trust.
 *
 * See possible values for trusts in
 * [Australia](https://docs.adyen.com/platforms/verification-requirements/?tab=trust_3_4#trust-types-in-australia)
 * and [New
 * Zealand](https://docs.adyen.com/platforms/verification-requirements/?tab=trust_3_4#trust-types-in-new-zealand).
 */
export const Type171 = {
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
export type Type171 = (typeof Type171)[keyof typeof Type171] | (string & {});

export const type171Schema: EnumSchema<Type171> = s.enumOf<Type171>(Type171);
