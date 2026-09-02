import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type StarUpdateInfo1 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const starUpdateInfo1Schema: Schema<StarUpdateInfo1> = s.object<StarUpdateInfo1>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
