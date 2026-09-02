import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolder11Schema, type AccountHolder11 } from "./account-holder11.js";
import { accountIdentification1Schema, type AccountIdentification1 } from "./account-identification1.js";

export type Counterparty11 = {
  accountHolder: AccountHolder11;
  accountIdentification: AccountIdentification1;
};

export const counterparty11Schema: Schema<Counterparty11> = s.object<Counterparty11>({
  accountHolder: accountHolder11Schema,
  accountIdentification: accountIdentification1Schema,
});
