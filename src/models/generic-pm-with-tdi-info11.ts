import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type GenericPmWithTdiInfo11 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiInfo11Schema: Schema<GenericPmWithTdiInfo11> = s.object<GenericPmWithTdiInfo11>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
