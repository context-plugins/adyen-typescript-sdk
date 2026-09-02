import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransType = {
  _01: "01",
  _03: "03",
  _10: "10",
  _11: "11",
  _28: "28",
} as const;
export type TransType = (typeof TransType)[keyof typeof TransType] | (string & {});

export const transTypeSchema: EnumSchema<TransType> = s.enumOf<TransType>(TransType);
