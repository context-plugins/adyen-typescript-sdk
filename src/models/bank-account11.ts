import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountIdentification2Schema,
  type AccountIdentification2,
} from "./unions/account-identification2.js";

export type BankAccount11 = {
  accountIdentification: AccountIdentification2;
};

export const bankAccount11Schema: Schema<BankAccount11> = s.object<BankAccount11>({
  accountIdentification: accountIdentification2Schema,
});
