import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type GenericPmWithTdiInfo6 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiInfo6Schema: Schema<GenericPmWithTdiInfo6> = s.object<GenericPmWithTdiInfo6>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
