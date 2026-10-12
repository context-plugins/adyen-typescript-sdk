import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of BankAccountIdentification, BRLocalAccountIdentification1. */
export type BrLocalAccountIdentification1 = {
  /** **brLocal** @default "brLocal" */
  type?: string;
  /** The bank account number, without separators or whitespace. */
  accountNumber: string;
  /** The 3-digit bank code, with leading zeros. */
  bankCode: string;
  /** The bank account branch number, without separators or whitespace. */
  branchNumber: string;
  /** The 8-digit ISPB, with leading zeros. */
  ispb?: string;
};

export const brLocalAccountIdentification1Schema: Schema<BrLocalAccountIdentification1> =
  s.object<BrLocalAccountIdentification1>({
    type: s.defaulted(s.string(), "brLocal"),
    accountNumber: s.string(),
    bankCode: s.string(),
    branchNumber: s.string(),
    ispb: s.optional(s.string()),
  });
