import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Action to realise on a transaction. In an `EnableService` request message:
 *   - Starts a transaction by a swipe-ahead mechanism, with the services which are enabled.
 *   - Aborts a swipe-ahead transaction or started by a `CardAcquisition`, and not followed by a
 *     service request from the Sale System to complete the transaction. Possible values:
 * * **AbortTransaction**
 * * **StartTransaction**
 */
export const TransactionAction1 = {
  StartTransaction: "StartTransaction",
  AbortTransaction: "AbortTransaction",
} as const;
export type TransactionAction1 = (typeof TransactionAction1)[keyof typeof TransactionAction1] | (string & {});

export const transactionAction1Schema: EnumSchema<TransactionAction1> =
  s.enumOf<TransactionAction1>(TransactionAction1);
