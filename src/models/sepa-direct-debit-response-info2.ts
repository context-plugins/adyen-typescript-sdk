import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

/** **sepadirectdebit** details */
export type SepaDirectDebitResponseInfo2 = {
  /** Creditor id */
  creditorId?: string;
  /** Information regarding the transaction description. */
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const sepaDirectDebitResponseInfo2Schema: Schema<SepaDirectDebitResponseInfo2> =
  s.object<SepaDirectDebitResponseInfo2>({
    creditorId: s.optional(s.string()),
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
  });
