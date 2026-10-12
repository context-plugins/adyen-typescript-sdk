import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CzLocalAccountIdentification = {
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
  /** **czLocal** @default "czLocal" */
  type?: "czLocal";
};

export const czLocalAccountIdentificationSchema: Schema<CzLocalAccountIdentification> =
  s.object<CzLocalAccountIdentification>({
    accountNumber: s.string(),
    bankCode: s.string(),
    type: s.defaulted(s.literal("czLocal"), "czLocal"),
  });
