import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of BankAccountIdentification, PLLocalAccountIdentification1. */
export type PlLocalAccountIdentification1 = {
  /** **plLocal** @default "plLocal" */
  type?: string;
  /**
   * The 26-digit bank account number ([Numer
   * rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or
   * whitespace.
   */
  accountNumber: string;
};

export const plLocalAccountIdentification1Schema: Schema<PlLocalAccountIdentification1> =
  s.object<PlLocalAccountIdentification1>({
    type: s.defaulted(s.string(), "plLocal"),
    accountNumber: s.string(),
  });
