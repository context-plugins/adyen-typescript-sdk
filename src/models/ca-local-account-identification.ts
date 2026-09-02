import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountType2Schema, type AccountType2 } from "./account-type2.js";
import { type171Schema, type Type171 } from "./type171.js";

export type CaLocalAccountIdentification = {
  accountNumber: string;
  accountType?: AccountType2;
  institutionNumber: string;
  transitNumber: string;
  type: Type171;
};

export const caLocalAccountIdentificationSchema: Schema<CaLocalAccountIdentification> =
  s.object<CaLocalAccountIdentification>({
    accountNumber: s.string(),
    accountType: s.optional(s.lazy(() => accountType2Schema)),
    institutionNumber: s.string(),
    transitNumber: s.string(),
    type: type171Schema,
  });
