import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { partyIdentification3Schema, type PartyIdentification3 } from "./party-identification3.js";
import {
  accountIdentification21Schema,
  type AccountIdentification21,
} from "./unions/account-identification21.js";

export type BankAccountV3 = {
  accountHolder: PartyIdentification3;
  accountIdentification: AccountIdentification21;
  storedPaymentMethodId?: string;
};

export const bankAccountV3Schema: Schema<BankAccountV3> = s.object<BankAccountV3>({
  accountHolder: partyIdentification3Schema,
  accountIdentification: accountIdentification21Schema,
  storedPaymentMethodId: s.optional(s.string()),
});
