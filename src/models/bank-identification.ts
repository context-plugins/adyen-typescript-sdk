import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { identificationTypeSchema, type IdentificationType } from "./identification-type.js";

export type BankIdentification = {
  /**
   * Two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country
   * code.
   */
  country?: string;
  /** The bank identification code. */
  identification?: string;
  /**
   * The type of the identification.
   *
   * Possible values: **iban**, **routingNumber**, **sortCode**, **bic**.
   */
  identificationType?: IdentificationType;
};

export const bankIdentificationSchema: Schema<BankIdentification> = s.object<BankIdentification>({
  country: s.optional(s.string()),
  identification: s.optional(s.string()),
  identificationType: s.optional(s.lazy(() => identificationTypeSchema)),
});
