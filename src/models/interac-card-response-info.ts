import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

export type InteracCardResponseInfo = {
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const interacCardResponseInfoSchema: Schema<InteracCardResponseInfo> =
  s.object<InteracCardResponseInfo>({
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
  });
