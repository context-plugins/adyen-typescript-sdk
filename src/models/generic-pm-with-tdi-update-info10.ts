import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

/**
 * Details to provide if `type` is **jcb**. For merchants operating in Japan, `midNumber`,
 * `reuseMidNumber`, and `serviceLevel` fields are required. For merchants operating outside of
 * Japan, these fields are not required.
 */
export type GenericPmWithTdiUpdateInfo10 = {
  /**
   * Information regarding the transaction description. > You cannot configure the transaction
   * description in the test environment.
   */
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiUpdateInfo10Schema: Schema<GenericPmWithTdiUpdateInfo10> =
  s.object<GenericPmWithTdiUpdateInfo10>({
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
  });
