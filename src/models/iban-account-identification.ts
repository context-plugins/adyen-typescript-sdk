import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IbanAccountIdentification = {
  /** The bank's 8- or 11-character BIC or SWIFT code. */
  bic?: string;
  /**
   * The international bank account number as defined in the
   * [ISO-13616](https://www.iso.org/standard/81090.html) standard.
   */
  iban: string;
  /** **iban** @default "iban" */
  type?: "iban";
};

export const ibanAccountIdentificationSchema: Schema<IbanAccountIdentification> =
  s.object<IbanAccountIdentification>({
    bic: s.optional(s.string()),
    iban: s.string(),
    type: s.defaulted(s.literal("iban"), "iban"),
  });
