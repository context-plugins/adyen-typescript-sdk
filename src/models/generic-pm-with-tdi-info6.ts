import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

/** Details to provide if `type` is **ideal**. */
export type GenericPmWithTdiInfo6 = {
  /**
   * Information regarding the transaction description. > You cannot configure the transaction
   * description in the test environment.
   */
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiInfo6Schema: Schema<GenericPmWithTdiInfo6> = s.object<GenericPmWithTdiInfo6>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
