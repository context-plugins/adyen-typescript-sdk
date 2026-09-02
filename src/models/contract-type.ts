import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ContractType = {
  CashAdvance: "cashAdvance",
  Loan: "loan",
} as const;
export type ContractType = (typeof ContractType)[keyof typeof ContractType] | (string & {});

export const contractTypeSchema: EnumSchema<ContractType> = s.enumOf<ContractType>(ContractType);
