import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An object containing the details of the existing grant., Contains information about the balances
 * of the disbursement., Contains information about the balances of the grant.
 */
export type CapitalBalance = {
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes).
   */
  currency: string;
  /** Fee amount. */
  fee: number;
  /** Principal amount. */
  principal: number;
  /** Total amount. A sum of principal amount and fee amount. */
  total: number;
};

export const capitalBalanceSchema: Schema<CapitalBalance> = s.object<CapitalBalance>({
  currency: s.string(),
  fee: s.int(),
  principal: s.int(),
  total: s.int(),
});
