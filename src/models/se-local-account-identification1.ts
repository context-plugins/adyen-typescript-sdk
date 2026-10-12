import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of BankAccountIdentification, SELocalAccountIdentification1. */
export type SeLocalAccountIdentification1 = {
  /** **seLocal** @default "seLocal" */
  type?: string;
  /**
   * The 7- to 10-digit bank account number
   * ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)), without the clearing number,
   * separators, or whitespace.
   */
  accountNumber: string;
  /**
   * The 4- to 5-digit clearing number
   * ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or
   * whitespace.
   */
  clearingNumber: string;
};

export const seLocalAccountIdentification1Schema: Schema<SeLocalAccountIdentification1> =
  s.object<SeLocalAccountIdentification1>({
    type: s.defaulted(s.string(), "seLocal"),
    accountNumber: s.string(),
    clearingNumber: s.string(),
  });
