import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FundsCollectionType = {
  UnscheduledRepayment: "UnscheduledRepayment",
  Revocation: "Revocation",
} as const;
export type FundsCollectionType =
  | (typeof FundsCollectionType)[keyof typeof FundsCollectionType]
  | (string & {});

export const fundsCollectionTypeSchema: EnumSchema<FundsCollectionType> =
  s.enumOf<FundsCollectionType>(FundsCollectionType);
