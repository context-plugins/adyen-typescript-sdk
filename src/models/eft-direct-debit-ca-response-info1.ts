import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

export type EftDirectDebitCaResponseInfo1 = {
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const eftDirectDebitCaResponseInfo1Schema: Schema<EftDirectDebitCaResponseInfo1> =
  s.object<EftDirectDebitCaResponseInfo1>({
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
  });
