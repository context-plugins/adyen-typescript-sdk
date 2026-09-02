import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChAccPwChangeInd = {
  _01: "01",
  _02: "02",
  _03: "03",
  _04: "04",
  _05: "05",
} as const;
export type ChAccPwChangeInd = (typeof ChAccPwChangeInd)[keyof typeof ChAccPwChangeInd] | (string & {});

export const chAccPwChangeIndSchema: EnumSchema<ChAccPwChangeInd> =
  s.enumOf<ChAccPwChangeInd>(ChAccPwChangeInd);
