import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountIdentification21Schema,
  type AccountIdentification21,
} from "./unions/account-identification21.js";

export type BankAccountInfo1 = {
  accountIdentification?: AccountIdentification21;
  accountType?: string;
  bankName?: string;
  countryCode?: string;
  trustedSource?: boolean;
};

export const bankAccountInfo1Schema: Schema<BankAccountInfo1> = s.object<BankAccountInfo1>({
  accountIdentification: s.optional(s.lazy(() => accountIdentification21Schema)),
  accountType: s.optional(s.string()),
  bankName: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  trustedSource: s.optional(s.boolean()),
});
