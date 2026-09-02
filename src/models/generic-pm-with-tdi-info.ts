import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type GenericPmWithTdiInfo = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiInfoSchema: Schema<GenericPmWithTdiInfo> = s.object<GenericPmWithTdiInfo>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
