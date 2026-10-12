import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of BankAccountIdentification, NZLocalAccountIdentification1. */
export type NzLocalAccountIdentification1 = {
  /** **nzLocal** @default "nzLocal" */
  type?: string;
  /**
   * The 15-16 digit bank account number. The first 2 digits are the bank number, the next 4 digits
   * are the branch number, the next 7 digits are the account number, and the final 2-3 digits are
   * the suffix.
   */
  accountNumber: string;
};

export const nzLocalAccountIdentification1Schema: Schema<NzLocalAccountIdentification1> =
  s.object<NzLocalAccountIdentification1>({
    type: s.defaulted(s.string(), "nzLocal"),
    accountNumber: s.string(),
  });
