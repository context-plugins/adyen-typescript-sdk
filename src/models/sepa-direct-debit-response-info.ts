import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

export type SepaDirectDebitResponseInfo = {
  creditorId?: string;
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const sepaDirectDebitResponseInfoSchema: Schema<SepaDirectDebitResponseInfo> =
  s.object<SepaDirectDebitResponseInfo>({
    creditorId: s.optional(s.string()),
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
  });
