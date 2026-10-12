import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

/** Details to provide if `type` is **sepadirectdebit**. */
export type SepaDirectDebitInfo2 = {
  /** Creditor id */
  creditorId?: string;
  /**
   * Information regarding the transaction description. > You cannot configure the transaction
   * description in the test environment.
   */
  transactionDescription?: TransactionDescriptionInfo1;
};

export const sepaDirectDebitInfo2Schema: Schema<SepaDirectDebitInfo2> = s.object<SepaDirectDebitInfo2>({
  creditorId: s.optional(s.string()),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
