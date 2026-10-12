import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of BankAccountIdentification, IbanAccountIdentification1. */
export type IbanAccountIdentification1 = {
  /** **iban** @default "iban" */
  type?: string;
  /** The bank's 8- or 11-character BIC or SWIFT code. */
  bic?: string;
  /**
   * The international bank account number as defined in the
   * [ISO-13616](https://www.iso.org/standard/81090.html) standard.
   */
  iban: string;
};

export const ibanAccountIdentification1Schema: Schema<IbanAccountIdentification1> =
  s.object<IbanAccountIdentification1>({
    type: s.defaulted(s.string(), "iban"),
    bic: s.optional(s.string()),
    iban: s.string(),
  });
