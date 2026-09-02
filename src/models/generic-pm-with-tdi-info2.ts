import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type GenericPmWithTdiInfo2 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiInfo2Schema: Schema<GenericPmWithTdiInfo2> = s.object<GenericPmWithTdiInfo2>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
