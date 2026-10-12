import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Identifies the type of transaction being authenticated. Length: 2 characters. Allowed values:
 * * **01** — Goods/Service Purchase
 * * **03** — Check Acceptance
 * * **10** — Account Funding
 * * **11** — Quasi-Cash Transaction
 * * **28** — Prepaid Activation and Load
 */
export const TransType = {
  _01: "01",
  _03: "03",
  _10: "10",
  _11: "11",
  _28: "28",
} as const;
export type TransType = (typeof TransType)[keyof typeof TransType] | (string & {});

export const transTypeSchema: EnumSchema<TransType> = s.enumOf<TransType>(TransType);
