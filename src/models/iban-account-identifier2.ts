import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The international bank account number as defined in the ISO-13616 standard. */
export type IbanAccountIdentifier2 = {
  /** The Basic Bank Account Number (BBAN) component of the IBAN. */
  bban: string;
  /** BIC of a bank account. */
  bic: string;
  /**
   * The international bank account number as defined in the
   * [ISO-13616](https://www.iso.org/standard/81090.html) standard. This is the national identifier
   * for the bank account, following the country-specific format, and is part of the full IBAN.
   */
  iban: string;
};

export const ibanAccountIdentifier2Schema: Schema<IbanAccountIdentifier2> = s.object<IbanAccountIdentifier2>({
  bban: s.string(),
  bic: s.string(),
  iban: s.string(),
});
