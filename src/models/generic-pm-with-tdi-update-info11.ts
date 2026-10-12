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
export type GenericPmWithTdiUpdateInfo11 = {
  /**
   * Information regarding the transaction description. > You cannot configure the transaction
   * description in the test environment.
   */
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiUpdateInfo11Schema: Schema<GenericPmWithTdiUpdateInfo11> =
  s.object<GenericPmWithTdiUpdateInfo11>({
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
  });
