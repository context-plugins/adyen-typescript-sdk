import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AcctType = {
  _01: "01",
  _02: "02",
  _03: "03",
} as const;
export type AcctType = (typeof AcctType)[keyof typeof AcctType] | (string & {});

export const acctTypeSchema: EnumSchema<AcctType> = s.enumOf<AcctType>(AcctType);
