import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolder11Schema, type AccountHolder11 } from "./account-holder11.js";
import { accountIdentification1Schema, type AccountIdentification1 } from "./account-identification1.js";

export type Counterparty2 = {
  accountHolder: AccountHolder11;
  accountIdentification: AccountIdentification1;
};

export const counterparty2Schema: Schema<Counterparty2> = s.object<Counterparty2>({
  accountHolder: accountHolder11Schema,
  accountIdentification: accountIdentification1Schema,
});
