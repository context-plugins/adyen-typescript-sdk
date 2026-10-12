import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of BankAccountIdentification, CZLocalAccountIdentification1. */
export type CzLocalAccountIdentification1 = {
  /** **czLocal** @default "czLocal" */
  type?: string;
  /**
   * The 2- to 16-digit bank account number (Číslo účtu) in the following format:
   *
   * - The optional prefix (předčíslí).
   *
   * - The required second part (základní část) which must be at least two non-zero digits.
   *
   * Examples:
   *
   * - **19-123457** (with prefix)
   *
   * - **123457** (without prefix)
   *
   * - **000019-0000123457** (with prefix, normalized)
   *
   * - **000000-0000123457** (without prefix, normalized)
   */
  accountNumber: string;
  /** The 4-digit bank code (Kód banky), without separators or whitespace. */
  bankCode: string;
};

export const czLocalAccountIdentification1Schema: Schema<CzLocalAccountIdentification1> =
  s.object<CzLocalAccountIdentification1>({
    type: s.defaulted(s.string(), "czLocal"),
    accountNumber: s.string(),
    bankCode: s.string(),
  });
