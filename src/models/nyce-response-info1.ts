import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { processingTypeSchema, type ProcessingType } from "./processing-type.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

export type NyceResponseInfo1 = {
  processingType?: ProcessingType;
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const nyceResponseInfo1Schema: Schema<NyceResponseInfo1> = s.object<NyceResponseInfo1>({
  processingType: s.optional(s.lazy(() => processingTypeSchema)),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
});
