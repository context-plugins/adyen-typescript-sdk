import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RixAccountIdentifier = {
  /** The account number of the bank account. */
  accountNumber: string;
  /** The 4- to 5-digit clearing number, without separators or whitespace. */
  clearingNumber: string;
};

export const rixAccountIdentifierSchema: Schema<RixAccountIdentifier> = s.object<RixAccountIdentifier>({
  accountNumber: s.string(),
  clearingNumber: s.string(),
});
