import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { partyIdentification3Schema, type PartyIdentification3 } from "./party-identification3.js";
import {
  accountIdentification2Schema,
  type AccountIdentification2,
} from "./unions/account-identification2.js";

/** Contains information about the counterparty bank account. */
export type BankAccountV31 = {
  /** Information about the owner of the bank account. */
  accountHolder: PartyIdentification3;
  /**
   * Contains the bank account details. The fields required in this object depend on the country of
   * the bank account and the currency of the transfer.
   */
  accountIdentification: AccountIdentification2;
  /**
   * The unique token that identifies the stored bank account details of the counterparty for a
   * payout.
   */
  storedPaymentMethodId?: string;
};

export const bankAccountV31Schema: Schema<BankAccountV31> = s.object<BankAccountV31>({
  accountHolder: partyIdentification3Schema,
  accountIdentification: accountIdentification2Schema,
  storedPaymentMethodId: s.optional(s.string()),
});
