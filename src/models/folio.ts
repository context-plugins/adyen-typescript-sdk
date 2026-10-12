import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Folio = {
  /**
   * The folio cash advances, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   * * **additionalData key:** `lodging.folioCashAdvances`
   */
  cashAdvances?: number;
  /**
   * The card acceptor's internal invoice or billing ID reference number.
   * * Format: Alphanumeric
   * * Must not start with a space
   * * Must not contain any special characters
   * * Must not be all zeros.
   * * **additionalData key:** `lodging.folioNumber`
   */
  number?: string;
};

export const folioSchema: Schema<Folio> = s.object<Folio>({
  cashAdvances: s.optional(s.int()),
  number: s.optional(s.string()),
});
