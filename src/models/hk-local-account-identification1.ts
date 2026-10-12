import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of BankAccountIdentification, HKLocalAccountIdentification1. */
export type HkLocalAccountIdentification1 = {
  /** **hkLocal** @default "hkLocal" */
  type?: string;
  /**
   * The 9- to 17-digit bank account number, without separators or whitespace. Starts with the
   * 3-digit branch code.
   */
  accountNumber: string;
  /** The 3-digit clearing code, without separators or whitespace. */
  clearingCode: string;
};

export const hkLocalAccountIdentification1Schema: Schema<HkLocalAccountIdentification1> =
  s.object<HkLocalAccountIdentification1>({
    type: s.defaulted(s.string(), "hkLocal"),
    accountNumber: s.string(),
    clearingCode: s.string(),
  });
