import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type PayByBankPlaidUpdateInfo1 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const payByBankPlaidUpdateInfo1Schema: Schema<PayByBankPlaidUpdateInfo1> =
  s.object<PayByBankPlaidUpdateInfo1>({
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
  });
