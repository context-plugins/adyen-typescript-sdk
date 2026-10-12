import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Identifiers relevant for Bankers' Automated Clearing Services (BACS) payments, primarily used in
 * the United Kingdom.
 */
export type BacsAccountIdentifier2 = {
  /** The account number of the bank account. */
  accountNumber: string;
  /** A number that identifies the specific bank and branch where a UK bank account is held. */
  sortCode: string;
};

export const bacsAccountIdentifier2Schema: Schema<BacsAccountIdentifier2> = s.object<BacsAccountIdentifier2>({
  accountNumber: s.string(),
  sortCode: s.string(),
});
