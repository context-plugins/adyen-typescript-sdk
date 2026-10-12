import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Identifiers relevant for Australian banking, specifically for BSB (Bank-State-Branch) numbers.
 */
export type BsbAccountIdentifier2 = {
  /** The account number of the bank account. */
  accountNumber: string;
  /** The BSB (Bank-State-Branch) code. */
  bsbCode: string;
};

export const bsbAccountIdentifier2Schema: Schema<BsbAccountIdentifier2> = s.object<BsbAccountIdentifier2>({
  accountNumber: s.string(),
  bsbCode: s.string(),
});
