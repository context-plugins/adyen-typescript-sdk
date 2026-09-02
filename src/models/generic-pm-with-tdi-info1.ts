import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type GenericPmWithTdiInfo1 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiInfo1Schema: Schema<GenericPmWithTdiInfo1> = s.object<GenericPmWithTdiInfo1>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
