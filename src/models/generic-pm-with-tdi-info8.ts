import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

/**
 * Details to provide if `type` is **maestro**. In the US, `maestro` is not supported; use
 * `maestro_usa` instead.
 */
export type GenericPmWithTdiInfo8 = {
  /**
   * Information regarding the transaction description. > You cannot configure the transaction
   * description in the test environment.
   */
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiInfo8Schema: Schema<GenericPmWithTdiInfo8> = s.object<GenericPmWithTdiInfo8>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
