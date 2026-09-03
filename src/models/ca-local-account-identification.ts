import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountType2Schema, type AccountType2 } from "./account-type2.js";

export type CaLocalAccountIdentification = {
  accountNumber: string;
  accountType?: AccountType2;
  institutionNumber: string;
  transitNumber: string;
  type: "caLocal";
};

export const caLocalAccountIdentificationSchema: Schema<CaLocalAccountIdentification> =
  s.object<CaLocalAccountIdentification>({
    accountNumber: s.string(),
    accountType: s.optional(s.lazy(() => accountType2Schema)),
    institutionNumber: s.string(),
    transitNumber: s.string(),
    type: s.literal("caLocal"),
  });
