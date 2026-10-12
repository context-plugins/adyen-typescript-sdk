import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifiers1Schema, type AccountIdentifiers1 } from "./account-identifiers1.js";
import { accountPartySchema, type AccountParty } from "./account-party.js";
import { accountType11Schema, type AccountType11 } from "./account-type11.js";

export type VerifiedAccount = {
  /** The unique identifier for the bank account. */
  accountId: string;
  /**
   * The name of the bank account. This name is assigned by the banking institution, and it
   * describes the type of bank account.
   */
  accountName: string;
  /** The account number of the bank account. */
  accountNumber: string;
  /**
   * The type of the bank account. Possible values are **CURRENT**, **SAVINGS**, **BUSINESS**,
   * **CREDIT_CARD**, **LOAN**, **UNKNOWN**.
   */
  accountType: AccountType11;
  /** The name of the banking institution where the bank account is held. */
  bankName?: string;
  /** The currency of the funds in the bank account. */
  currency: string;
  /**
   * Contains various codes and details used to uniquely identify the bank account across different
   * regions.
   */
  identifiers: AccountIdentifiers1;
  /** Contains details of all parties associated with the report. */
  parties: AccountParty[];
};

export const verifiedAccountSchema: Schema<VerifiedAccount> = s.object<VerifiedAccount>({
  accountId: s.string(),
  accountName: s.string(),
  accountNumber: s.string(),
  accountType: accountType11Schema,
  bankName: s.optional(s.string()),
  currency: s.string(),
  identifiers: accountIdentifiers1Schema,
  parties: s.array(s.lazy(() => accountPartySchema)),
});
