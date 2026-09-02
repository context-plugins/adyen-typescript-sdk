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

export type MandateBankAccount2 = {
  accountHolder: MandatePartyIdentification2;
  accountIdentification: MandateAccountIdentification2;
};

export const mandateBankAccount2Schema: Schema<MandateBankAccount2> = s.object<MandateBankAccount2>({
  accountHolder: mandatePartyIdentification2Schema,
  accountIdentification: mandateAccountIdentification2Schema,
});
