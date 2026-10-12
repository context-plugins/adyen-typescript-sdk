import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of BankAccountIdentification, AULocalAccountIdentification1. */
export type AuLocalAccountIdentification1 = {
  /** **auLocal** @default "auLocal" */
  type?: string;
  /** The bank account number, without separators or whitespace. */
  accountNumber: string;
  /**
   * The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch),
   * without separators or whitespace.
   */
  bsbCode: string;
};

export const auLocalAccountIdentification1Schema: Schema<AuLocalAccountIdentification1> =
  s.object<AuLocalAccountIdentification1>({
    type: s.defaulted(s.string(), "auLocal"),
    accountNumber: s.string(),
    bsbCode: s.string(),
  });
