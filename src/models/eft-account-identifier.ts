import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EftAccountIdentifier = {
  /** The account number of the bank account. */
  accountNumber: string;
  /**
   * Identifies the specific branch where the account is held within the Canadian banking system.
   */
  branch: string;
  /** The financial institution that identifies the bank in Canada. */
  institution: string;
};

export const eftAccountIdentifierSchema: Schema<EftAccountIdentifier> = s.object<EftAccountIdentifier>({
  accountNumber: s.string(),
  branch: s.string(),
  institution: s.string(),
});
