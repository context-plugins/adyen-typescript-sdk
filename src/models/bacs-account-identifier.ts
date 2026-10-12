import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BacsAccountIdentifier = {
  /** The account number of the bank account. */
  accountNumber: string;
  /** A number that identifies the specific bank and branch where a UK bank account is held. */
  sortCode: string;
};

export const bacsAccountIdentifierSchema: Schema<BacsAccountIdentifier> = s.object<BacsAccountIdentifier>({
  accountNumber: s.string(),
  sortCode: s.string(),
});
