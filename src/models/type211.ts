import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type211 = {
  BankAccountVerification: "BANK_ACCOUNT_VERIFICATION",
  CardVerification: "CARD_VERIFICATION",
  CompanyVerification: "COMPANY_VERIFICATION",
  IdentityVerification: "IDENTITY_VERIFICATION",
  LegalArrangementVerification: "LEGAL_ARRANGEMENT_VERIFICATION",
  NonprofitVerification: "NONPROFIT_VERIFICATION",
  PassportVerification: "PASSPORT_VERIFICATION",
  PayoutMethodVerification: "PAYOUT_METHOD_VERIFICATION",
  PciVerification: "PCI_VERIFICATION",
} as const;
export type Type211 = (typeof Type211)[keyof typeof Type211] | (string & {});

export const type211Schema: EnumSchema<Type211> = s.enumOf<Type211>(Type211);
