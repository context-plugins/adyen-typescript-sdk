import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

/** Details to provide if `type` is **girocard**. */
export type GenericPmWithTdiInfo5 = {
  /**
   * Information regarding the transaction description. > You cannot configure the transaction
   * description in the test environment.
   */
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiInfo5Schema: Schema<GenericPmWithTdiInfo5> = s.object<GenericPmWithTdiInfo5>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
