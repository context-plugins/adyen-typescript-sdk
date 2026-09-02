import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type SepaDirectDebitInfo2 = {
  creditorId?: string;
  transactionDescription?: TransactionDescriptionInfo1;
};

export const sepaDirectDebitInfo2Schema: Schema<SepaDirectDebitInfo2> = s.object<SepaDirectDebitInfo2>({
  creditorId: s.optional(s.string()),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
