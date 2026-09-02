import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifiers1Schema, type AccountIdentifiers1 } from "./account-identifiers1.js";
import { accountPartySchema, type AccountParty } from "./account-party.js";
import { accountType11Schema, type AccountType11 } from "./account-type11.js";

export type VerifiedAccount = {
  accountId: string;
  accountName: string;
  accountNumber: string;
  accountType: AccountType11;
  bankName?: string;
  currency: string;
  identifiers: AccountIdentifiers1;
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
