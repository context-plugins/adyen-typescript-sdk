import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountType2Schema, type AccountType2 } from "./account-type2.js";
import { type301Schema, type Type301 } from "./type301.js";

export type UsLocalAccountIdentification = {
  accountNumber: string;
  accountType?: AccountType2;
  routingNumber: string;
  type: Type301;
};

export const usLocalAccountIdentificationSchema: Schema<UsLocalAccountIdentification> =
  s.object<UsLocalAccountIdentification>({
    accountNumber: s.string(),
    accountType: s.optional(s.lazy(() => accountType2Schema)),
    routingNumber: s.string(),
    type: type301Schema,
  });
