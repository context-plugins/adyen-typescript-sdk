import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  mandateAccountIdentification2Schema,
  type MandateAccountIdentification2,
} from "./mandate-account-identification2.js";
import {
  mandatePartyIdentification2Schema,
  type MandatePartyIdentification2,
} from "./mandate-party-identification2.js";

export type MandateBankAccount = {
  /** Contains information about the owner of the counterparty bank account. */
  accountHolder: MandatePartyIdentification2;
  /**
   * Contains the bank account details of the counterparty. The fields required in this object
   * depend on the country of the bank account and the currency of the transfer.
   */
  accountIdentification: MandateAccountIdentification2;
};

export const mandateBankAccountSchema: Schema<MandateBankAccount> = s.object<MandateBankAccount>({
  accountHolder: mandatePartyIdentification2Schema,
  accountIdentification: mandateAccountIdentification2Schema,
});
