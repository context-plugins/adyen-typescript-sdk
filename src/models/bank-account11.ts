import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountIdentification2Schema,
  type AccountIdentification2,
} from "./unions/account-identification2.js";

/** Contains information about the bank account. */
export type BankAccount11 = {
  /**
   * Contains the bank account details. The fields required in this object depend on the country of
   * the bank account and the currency of the transfer.
   */
  accountIdentification: AccountIdentification2;
};

export const bankAccount11Schema: Schema<BankAccount11> = s.object<BankAccount11>({
  accountIdentification: accountIdentification2Schema,
});
