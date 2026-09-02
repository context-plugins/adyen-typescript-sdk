import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type NyceUpdateInfo1 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const nyceUpdateInfo1Schema: Schema<NyceUpdateInfo1> = s.object<NyceUpdateInfo1>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
