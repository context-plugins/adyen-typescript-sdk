import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { processingTypeSchema, type ProcessingType } from "./processing-type.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type NyceInfo = {
  processingType: ProcessingType;
  transactionDescription?: TransactionDescriptionInfo1;
};

export const nyceInfoSchema: Schema<NyceInfo> = s.object<NyceInfo>({
  processingType: processingTypeSchema,
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
