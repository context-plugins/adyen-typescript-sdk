import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type31 = {
  OnlineBankingPl: "onlineBanking_PL",
  Eps: "eps",
  OnlineBankingSk: "onlineBanking_SK",
  OnlineBankingCz: "onlineBanking_CZ",
  OnlinebankingIn: "onlinebanking_IN",
} as const;
export type Type31 = (typeof Type31)[keyof typeof Type31] | (string & {});

export const type31Schema: EnumSchema<Type31> = s.enumOf<Type31>(Type31);
