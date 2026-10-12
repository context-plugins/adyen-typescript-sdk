import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the source of funds.
 *
 *
 *
 * Possible values:
 * * **business**
 * * **employment**
 * * **donations**
 * * **inheritance**
 * * **financialAid**
 * * **rentalIncome**
 * * **dividendIncome**
 * * **royaltyIncome**
 * * **thirdPartyFunding**
 * * **pensionIncome**
 * * **insuranceSettlement**
 * * **cryptocurrencyIncome**
 * * **assetSale**
 * * **loans**
 * * **gamblingWinnings**
 */
export const Type74 = {
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
export type Type74 = (typeof Type74)[keyof typeof Type74] | (string & {});

export const type74Schema: EnumSchema<Type74> = s.enumOf<Type74>(Type74);
