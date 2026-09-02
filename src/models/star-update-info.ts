import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type StarUpdateInfo = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const starUpdateInfoSchema: Schema<StarUpdateInfo> = s.object<StarUpdateInfo>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
