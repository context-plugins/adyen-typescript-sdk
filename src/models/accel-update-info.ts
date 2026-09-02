import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type AccelUpdateInfo = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const accelUpdateInfoSchema: Schema<AccelUpdateInfo> = s.object<AccelUpdateInfo>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
