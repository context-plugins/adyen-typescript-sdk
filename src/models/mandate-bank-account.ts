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
  accountHolder: MandatePartyIdentification2;
  accountIdentification: MandateAccountIdentification2;
};

export const mandateBankAccountSchema: Schema<MandateBankAccount> = s.object<MandateBankAccount>({
  accountHolder: mandatePartyIdentification2Schema,
  accountIdentification: mandateAccountIdentification2Schema,
});
