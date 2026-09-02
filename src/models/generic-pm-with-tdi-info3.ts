import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type GenericPmWithTdiInfo3 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiInfo3Schema: Schema<GenericPmWithTdiInfo3> = s.object<GenericPmWithTdiInfo3>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
