import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountIdentification3Schema,
  type AccountIdentification3,
} from "./unions/account-identification3.js";

export type BankAccountInfo = {
  accountIdentification?: AccountIdentification3;
  accountType?: string;
  bankName?: string;
  countryCode?: string;
  trustedSource?: boolean;
};

export const bankAccountInfoSchema: Schema<BankAccountInfo> = s.object<BankAccountInfo>({
  accountIdentification: s.optional(s.lazy(() => accountIdentification3Schema)),
  accountType: s.optional(s.string()),
  bankName: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  trustedSource: s.optional(s.boolean()),
});
