import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { processingTypeSchema, type ProcessingType } from "./processing-type.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type StarInfo2 = {
  processingType: ProcessingType;
  transactionDescription?: TransactionDescriptionInfo1;
};

export const starInfo2Schema: Schema<StarInfo2> = s.object<StarInfo2>({
  processingType: processingTypeSchema,
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
