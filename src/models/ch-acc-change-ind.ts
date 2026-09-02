import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChAccChangeInd = {
  _01: "01",
  _02: "02",
  _03: "03",
  _04: "04",
} as const;
export type ChAccChangeInd = (typeof ChAccChangeInd)[keyof typeof ChAccChangeInd] | (string & {});

export const chAccChangeIndSchema: EnumSchema<ChAccChangeInd> = s.enumOf<ChAccChangeInd>(ChAccChangeInd);
