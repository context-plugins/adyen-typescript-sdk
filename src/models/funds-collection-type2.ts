import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FundsCollectionType2 = {
  UnscheduledRepayment: "UnscheduledRepayment",
  Revocation: "Revocation",
} as const;
export type FundsCollectionType2 =
  | (typeof FundsCollectionType2)[keyof typeof FundsCollectionType2]
  | (string & {});

export const fundsCollectionType2Schema: EnumSchema<FundsCollectionType2> =
  s.enumOf<FundsCollectionType2>(FundsCollectionType2);
