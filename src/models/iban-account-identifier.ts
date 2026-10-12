import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IbanAccountIdentifier = {
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

export const ibanAccountIdentifierSchema: Schema<IbanAccountIdentifier> = s.object<IbanAccountIdentifier>({
  bban: s.string(),
  bic: s.string(),
  iban: s.string(),
});
