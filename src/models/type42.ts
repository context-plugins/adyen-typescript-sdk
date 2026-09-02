import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type42 = {
  OnlineBankingPl: "onlineBanking_PL",
  Eps: "eps",
  OnlineBankingSk: "onlineBanking_SK",
  OnlineBankingCz: "onlineBanking_CZ",
  OnlinebankingIn: "onlinebanking_IN",
} as const;
export type Type42 = (typeof Type42)[keyof typeof Type42] | (string & {});

export const type42Schema: EnumSchema<Type42> = s.enumOf<Type42>(Type42);
