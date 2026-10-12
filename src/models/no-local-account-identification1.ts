import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of BankAccountIdentification, NOLocalAccountIdentification1. */
export type NoLocalAccountIdentification1 = {
  /** **noLocal** @default "noLocal" */
  type?: string;
  /** The 11-digit bank account number, without separators or whitespace. */
  accountNumber: string;
};

export const noLocalAccountIdentification1Schema: Schema<NoLocalAccountIdentification1> =
  s.object<NoLocalAccountIdentification1>({
    type: s.defaulted(s.string(), "noLocal"),
    accountNumber: s.string(),
  });
