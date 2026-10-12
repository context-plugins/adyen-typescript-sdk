import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The institutional sector the organization operates within. */
export const InstitutionalSector = {
  NonFinancialCorporation: "nonFinancialCorporation",
  CentralBank: "centralBank",
  CreditInstitutions: "creditInstitutions",
  DepositTakingCorporations: "depositTakingCorporations",
  MoneyMarketFunds: "moneyMarketFunds",
  NonMmfInvestmentFunds: "nonMMFInvestmentFunds",
  FinancialVehicleCorporation: "financialVehicleCorporation",
  OtherFinancialIntermediaries: "otherFinancialIntermediaries",
  FinancialAuxiliaries: "financialAuxiliaries",
  CaptiveFinancialInstitutionsAndMoneyLenders: "captiveFinancialInstitutionsAndMoneyLenders",
  InsuranceCorporations: "insuranceCorporations",
  PensionFunds: "pensionFunds",
  CentralGovernment: "centralGovernment",
  StateGovernment: "stateGovernment",
  LocalGovernment: "localGovernment",
  SocialSecurityFunds: "socialSecurityFunds",
  NonProfitInstitutionsServingHouseholds: "nonProfitInstitutionsServingHouseholds",
} as const;
export type InstitutionalSector =
  | (typeof InstitutionalSector)[keyof typeof InstitutionalSector]
  | (string & {});

export const institutionalSectorSchema: EnumSchema<InstitutionalSector> =
  s.enumOf<InstitutionalSector>(InstitutionalSector);
