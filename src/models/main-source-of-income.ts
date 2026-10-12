import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The organization's main source of income. Only required if `businessType` is **other**.
 *
 * Possible values: **businessOperation**, **realEstateSales**, **investmentInterestOrRoyalty**,
 * **propertyRental**, **other**.
 */
export const MainSourceOfIncome = {
  BusinessOperation: "businessOperation",
  RealEstateSales: "realEstateSales",
  InvestmentInterestOrRoyalty: "investmentInterestOrRoyalty",
  PropertyRental: "propertyRental",
  Other: "other",
} as const;
export type MainSourceOfIncome = (typeof MainSourceOfIncome)[keyof typeof MainSourceOfIncome] | (string & {});

export const mainSourceOfIncomeSchema: EnumSchema<MainSourceOfIncome> =
  s.enumOf<MainSourceOfIncome>(MainSourceOfIncome);
