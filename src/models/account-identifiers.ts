import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achAccountIdentifier1Schema, type AchAccountIdentifier1 } from "./ach-account-identifier1.js";
import { bacsAccountIdentifier2Schema, type BacsAccountIdentifier2 } from "./bacs-account-identifier2.js";
import { bsbAccountIdentifier2Schema, type BsbAccountIdentifier2 } from "./bsb-account-identifier2.js";
import { eftAccountIdentifier2Schema, type EftAccountIdentifier2 } from "./eft-account-identifier2.js";
import { ibanAccountIdentifier2Schema, type IbanAccountIdentifier2 } from "./iban-account-identifier2.js";
import { rixAccountIdentifier2Schema, type RixAccountIdentifier2 } from "./rix-account-identifier2.js";

export type AccountIdentifiers = {
  /**
   * Identifiers relevant for Automated Clearing House (ACH) payments, primarily used in the United
   * States.
   */
  ach?: AchAccountIdentifier1;
  /**
   * Identifiers relevant for Bankers' Automated Clearing Services (BACS) payments, primarily used
   * in the United Kingdom.
   */
  bacs?: BacsAccountIdentifier2;
  /**
   * Identifiers relevant for Australian banking, specifically for BSB (Bank-State-Branch) numbers.
   */
  bsb?: BsbAccountIdentifier2;
  /** Identifiers relevant for Electronic Funds Transfer (EFT) payments, commonly used in Canada. */
  eft?: EftAccountIdentifier2;
  /** The international bank account number as defined in the ISO-13616 standard. */
  iban?: IbanAccountIdentifier2;
  /**
   * Identifiers relevant for the Rix (Russian Interbank eXchange) system, used for interbank
   * payments within Russia.
   */
  rix?: RixAccountIdentifier2;
};

export const accountIdentifiersSchema: Schema<AccountIdentifiers> = s.object<AccountIdentifiers>({
  ach: s.optional(s.lazy(() => achAccountIdentifier1Schema)),
  bacs: s.optional(s.lazy(() => bacsAccountIdentifier2Schema)),
  bsb: s.optional(s.lazy(() => bsbAccountIdentifier2Schema)),
  eft: s.optional(s.lazy(() => eftAccountIdentifier2Schema)),
  iban: s.optional(s.lazy(() => ibanAccountIdentifier2Schema)),
  rix: s.optional(s.lazy(() => rixAccountIdentifier2Schema)),
});
