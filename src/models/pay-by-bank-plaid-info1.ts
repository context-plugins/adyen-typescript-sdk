import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type PayByBankPlaidInfo1 = {
  logo?: string;
  transactionDescription?: TransactionDescriptionInfo1;
};

export const payByBankPlaidInfo1Schema: Schema<PayByBankPlaidInfo1> = s.object<PayByBankPlaidInfo1>({
  logo: s.optional(s.string()),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
