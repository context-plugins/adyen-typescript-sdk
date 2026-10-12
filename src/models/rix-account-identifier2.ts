import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Identifiers relevant for the Rix (Russian Interbank eXchange) system, used for interbank payments
 * within Russia.
 */
export type RixAccountIdentifier2 = {
  /** The account number of the bank account. */
  accountNumber: string;
  /** The 4- to 5-digit clearing number, without separators or whitespace. */
  clearingNumber: string;
};

export const rixAccountIdentifier2Schema: Schema<RixAccountIdentifier2> = s.object<RixAccountIdentifier2>({
  accountNumber: s.string(),
  clearingNumber: s.string(),
});
