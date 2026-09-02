import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChAccAgeInd = {
  _01: "01",
  _02: "02",
  _03: "03",
  _04: "04",
  _05: "05",
} as const;
export type ChAccAgeInd = (typeof ChAccAgeInd)[keyof typeof ChAccAgeInd] | (string & {});

export const chAccAgeIndSchema: EnumSchema<ChAccAgeInd> = s.enumOf<ChAccAgeInd>(ChAccAgeInd);
