import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type214 = {
  Business: "business",
  Employment: "employment",
  Donations: "donations",
  Inheritance: "inheritance",
  FinancialAid: "financialAid",
  RentalIncome: "rentalIncome",
  DividendIncome: "dividendIncome",
  RoyaltyIncome: "royaltyIncome",
  ThirdPartyFunding: "thirdPartyFunding",
  PensionIncome: "pensionIncome",
  InsuranceSettlement: "insuranceSettlement",
  CryptocurrencyIncome: "cryptocurrencyIncome",
  AssetSale: "assetSale",
  Loans: "loans",
  GamblingWinnings: "gamblingWinnings",
} as const;
export type Type214 = (typeof Type214)[keyof typeof Type214] | (string & {});

export const type214Schema: EnumSchema<Type214> = s.enumOf<Type214>(Type214);
