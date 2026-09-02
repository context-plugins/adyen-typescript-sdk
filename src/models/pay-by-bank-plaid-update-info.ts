import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type PayByBankPlaidUpdateInfo = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const payByBankPlaidUpdateInfoSchema: Schema<PayByBankPlaidUpdateInfo> =
  s.object<PayByBankPlaidUpdateInfo>({
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
  });
