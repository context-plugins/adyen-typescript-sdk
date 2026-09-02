import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { processingTypeSchema, type ProcessingType } from "./processing-type.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type AccelInfo1 = {
  processingType: ProcessingType;
  transactionDescription?: TransactionDescriptionInfo1;
};

export const accelInfo1Schema: Schema<AccelInfo1> = s.object<AccelInfo1>({
  processingType: processingTypeSchema,
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
