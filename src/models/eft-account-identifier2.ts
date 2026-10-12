import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Identifiers relevant for Electronic Funds Transfer (EFT) payments, commonly used in Canada. */
export type EftAccountIdentifier2 = {
  /** The account number of the bank account. */
  accountNumber: string;
  /**
   * Identifies the specific branch where the account is held within the Canadian banking system.
   */
  branch: string;
  /** The financial institution that identifies the bank in Canada. */
  institution: string;
};

export const eftAccountIdentifier2Schema: Schema<EftAccountIdentifier2> = s.object<EftAccountIdentifier2>({
  accountNumber: s.string(),
  branch: s.string(),
  institution: s.string(),
});
