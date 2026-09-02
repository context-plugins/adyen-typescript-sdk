import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type BcmcUpdateInfo1 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const bcmcUpdateInfo1Schema: Schema<BcmcUpdateInfo1> = s.object<BcmcUpdateInfo1>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
