import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { partyIdentification3Schema, type PartyIdentification3 } from "./party-identification3.js";
import {
  accountIdentification2Schema,
  type AccountIdentification2,
} from "./unions/account-identification2.js";

export type BankAccountV31 = {
  accountHolder: PartyIdentification3;
  accountIdentification: AccountIdentification2;
  storedPaymentMethodId?: string;
};

export const bankAccountV31Schema: Schema<BankAccountV31> = s.object<BankAccountV31>({
  accountHolder: partyIdentification3Schema,
  accountIdentification: accountIdentification2Schema,
  storedPaymentMethodId: s.optional(s.string()),
});
