import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type NyceUpdateInfo = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const nyceUpdateInfoSchema: Schema<NyceUpdateInfo> = s.object<NyceUpdateInfo>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
