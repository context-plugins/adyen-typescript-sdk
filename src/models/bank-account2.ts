import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountIdentification2Schema,
  type AccountIdentification2,
} from "./unions/account-identification2.js";

export type BankAccount2 = {
  /**
   * Contains the bank account details. The fields required in this object depend on the country of
   * the bank account and the currency of the transfer.
   */
  accountIdentification: AccountIdentification2;
};

export const bankAccount2Schema: Schema<BankAccount2> = s.object<BankAccount2>({
  accountIdentification: accountIdentification2Schema,
});
