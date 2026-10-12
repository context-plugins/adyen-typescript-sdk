import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Action to realise on a transaction. In an `EnableService` request message:
 *   - Starts a transaction by a swipe-ahead mechanism, with the services which are enabled.
 *   - Aborts a swipe-ahead transaction or started by a `CardAcquisition`, and not followed by a
 *     service request from the Sale System to complete the transaction. Possible values:
 * * **StartTransaction**
 * * **AbortTransaction**
 */
export const TransactionAction = {
  StartTransaction: "StartTransaction",
  AbortTransaction: "AbortTransaction",
} as const;
export type TransactionAction = (typeof TransactionAction)[keyof typeof TransactionAction] | (string & {});

export const transactionActionSchema: EnumSchema<TransactionAction> =
  s.enumOf<TransactionAction>(TransactionAction);
