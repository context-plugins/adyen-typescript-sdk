import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountType2Schema, type AccountType2 } from "./account-type2.js";

export type UsLocalAccountIdentification1 = {
  type: string;
  accountNumber: string;
  accountType?: AccountType2;
  routingNumber: string;
};

export const usLocalAccountIdentification1Schema: Schema<UsLocalAccountIdentification1> =
  s.object<UsLocalAccountIdentification1>({
    type: s.string(),
    accountNumber: s.string(),
    accountType: s.optional(s.lazy(() => accountType2Schema)),
    routingNumber: s.string(),
  });
