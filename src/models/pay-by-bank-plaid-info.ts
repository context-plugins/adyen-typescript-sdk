import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type PayByBankPlaidInfo = {
  logo?: string;
  transactionDescription?: TransactionDescriptionInfo1;
};

export const payByBankPlaidInfoSchema: Schema<PayByBankPlaidInfo> = s.object<PayByBankPlaidInfo>({
  logo: s.optional(s.string()),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
