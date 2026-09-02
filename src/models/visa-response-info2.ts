import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

export type VisaResponseInfo2 = {
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const visaResponseInfo2Schema: Schema<VisaResponseInfo2> = s.object<VisaResponseInfo2>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
});
