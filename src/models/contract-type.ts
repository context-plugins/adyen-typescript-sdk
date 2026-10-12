import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The contract type of the grant offer. Possible value: **cashAdvance**, **loan**., The contract
 * type of the offer.
 *
 * Possible values:
 * * **loan**
 * * **cashAdvance**
 */
export const ContractType = {
  CashAdvance: "cashAdvance",
  Loan: "loan",
} as const;
export type ContractType = (typeof ContractType)[keyof typeof ContractType] | (string & {});

export const contractTypeSchema: EnumSchema<ContractType> = s.enumOf<ContractType>(ContractType);
