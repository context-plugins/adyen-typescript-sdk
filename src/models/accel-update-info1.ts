import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type AccelUpdateInfo1 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const accelUpdateInfo1Schema: Schema<AccelUpdateInfo1> = s.object<AccelUpdateInfo1>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
