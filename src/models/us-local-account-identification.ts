import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountType2Schema, type AccountType2 } from "./account-type2.js";

export type UsLocalAccountIdentification = {
  accountNumber: string;
  accountType?: AccountType2;
  routingNumber: string;
  type: "usLocal";
};

export const usLocalAccountIdentificationSchema: Schema<UsLocalAccountIdentification> =
  s.object<UsLocalAccountIdentification>({
    accountNumber: s.string(),
    accountType: s.optional(s.lazy(() => accountType2Schema)),
    routingNumber: s.string(),
    type: s.literal("usLocal"),
  });
