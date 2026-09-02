import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type GenericPmWithTdiInfo10 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiInfo10Schema: Schema<GenericPmWithTdiInfo10> = s.object<GenericPmWithTdiInfo10>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
