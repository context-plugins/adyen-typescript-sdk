import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Various amounts related to the payment response from the POI System. Amounts approved by the POI
 * and the Acquirer for the payment and loyalty transaction, containing:
 *   * The authorised amount to be paid.
 *   * The amount of the rebates.
 *   * The amount of financial fees.
 *   * The cash back part of the requested amount for a payment with cash back.
 *   * The tip part of the requested amount for a payment with tip.
 */
export type AmountsResp1 = {
  /** Currency of a monetary amount. */
  currency?: string;
  /** Amount requested by the Sale for the payment. */
  authorizedAmount: number;
  /** Sum of rebates in amount (total amount or line item amount) for all the loyalty programs. */
  totalRebatesAmount?: number;
  /** Total amount of financial fees. */
  totalFeesAmount?: number;
  /** The cash-back part of the amount requested by the Sale for the payment. */
  cashBackAmount?: number;
  /**
   * Amount paid for a tip. Allow the printing of the tip on the receipt, and to qualify the tip
   * part of the amount.
   */
  tipAmount?: number;
};

export const amountsResp1Schema: Schema<AmountsResp1> = s.object<AmountsResp1>({
  currency: s.optional(s.string()),
  authorizedAmount: s.float64(),
  totalRebatesAmount: s.optional(s.float64()),
  totalFeesAmount: s.optional(s.float64()),
  cashBackAmount: s.optional(s.float64()),
  tipAmount: s.optional(s.float64()),
  _keysMap: {
    currency: "Currency",
    authorizedAmount: "AuthorizedAmount",
    totalRebatesAmount: "TotalRebatesAmount",
    totalFeesAmount: "TotalFeesAmount",
    cashBackAmount: "CashBackAmount",
    tipAmount: "TipAmount",
  },
});
