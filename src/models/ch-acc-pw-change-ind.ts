import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the length of time since the cardholder’s account with the 3DS Requestor had a password
 * change or account reset. Allowed values:
 * * **01** — No change
 * * **02** — Changed during this transaction
 * * **03** — Less than 30 days
 * * **04** — 30–60 days
 * * **05** — More than 60 days
 */
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
