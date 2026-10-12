import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of BankAccountIdentification, SGLocalAccountIdentification1. */
export type SgLocalAccountIdentification1 = {
  /** **sgLocal** @default "sgLocal" */
  type?: string;
  /** The 4- to 19-digit bank account number, without separators or whitespace. */
  accountNumber: string;
  /** The bank's 8- or 11-character BIC or SWIFT code. */
  bic: string;
};

export const sgLocalAccountIdentification1Schema: Schema<SgLocalAccountIdentification1> =
  s.object<SgLocalAccountIdentification1>({
    type: s.defaulted(s.string(), "sgLocal"),
    accountNumber: s.string(),
    bic: s.string(),
  });
