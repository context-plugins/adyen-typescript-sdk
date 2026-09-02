import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountType2Schema, type AccountType2 } from "./account-type2.js";

export type CaLocalAccountIdentification1 = {
  type: string;
  accountNumber: string;
  accountType?: AccountType2;
  institutionNumber: string;
  transitNumber: string;
};

export const caLocalAccountIdentification1Schema: Schema<CaLocalAccountIdentification1> =
  s.object<CaLocalAccountIdentification1>({
    type: s.string(),
    accountNumber: s.string(),
    accountType: s.optional(s.lazy(() => accountType2Schema)),
    institutionNumber: s.string(),
    transitNumber: s.string(),
  });
