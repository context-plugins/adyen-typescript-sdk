import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Balance = {
  /** The balance available for use. */
  available: number;
  /** The sum of the transactions that have already been settled. */
  balance: number;
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes) of the balance.
   */
  currency: string;
  /** The sum of the transactions that will be settled in the future. */
  pending?: number;
  /**
   * The balance that will become the available balance after the pending balance is settled.
   *
   * The pending available balance is equal to the lower of the following:
   * - The `pending` balance
   * - The `pending` balance plus the `available` balance.
   */
  pendingAvailable?: number;
  /** The balance currently held in reserve. */
  reserved: number;
};

export const balanceSchema: Schema<Balance> = s.object<Balance>({
  available: s.int(),
  balance: s.int(),
  currency: s.string(),
  pending: s.optional(s.int()),
  pendingAvailable: s.optional(s.int()),
  reserved: s.int(),
});
