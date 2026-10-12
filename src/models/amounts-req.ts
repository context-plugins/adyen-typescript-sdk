import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Various amounts related to the payment request from the Sale System. */
export type AmountsReq = {
  /** Currency of a monetary amount. */
  currency: string;
  /** Amount requested by the Sale for the payment. */
  requestedAmount: number;
  /** The cash-back part of the amount requested by the Sale for the payment. */
  cashBackAmount?: number;
  /**
   * Amount paid for a tip. Allow the printing of the tip on the receipt, and to qualify the tip
   * part of the amount.
   */
  tipAmount?: number;
  /**
   * Amount already paid in case of split payment. Depending on the context, a split payment is
   * either a split amount, or a split basket (required by some payment means as fleet cards). The
   * PaidAmount is present when the split payment is a split of the amount. Split of the basket
   * involves two Sale Transactions, and does not have to be recognised by the POI.
   */
  paidAmount?: number;
  /**
   * Minimum amount the Sale System is allowed to deliver for this payment. For the
   * OneTimeReservation, when the maximum amount is unknown, the Sale System indicates the minimum
   * amount it allows.
   */
  minimumAmountToDeliver?: number;
  /**
   * Maximum amount which could be requested for cash-back to the Sale System. Allows the Cashier to
   * limit the amount value of cash-back to deliver to the Customer.
   */
  maximumCashBackAmount?: number;
  /**
   * Minimum amount of a split, which could be requested by a Customer.Allows the Merchant to limit
   * the number of split requested by the Customer.
   */
  minimumSplitAmount?: number;
};

export const amountsReqSchema: Schema<AmountsReq> = s.object<AmountsReq>({
  currency: s.string(),
  requestedAmount: s.float64(),
  cashBackAmount: s.optional(s.float64()),
  tipAmount: s.optional(s.float64()),
  paidAmount: s.optional(s.float64()),
  minimumAmountToDeliver: s.optional(s.float64()),
  maximumCashBackAmount: s.optional(s.float64()),
  minimumSplitAmount: s.optional(s.float64()),
  _keysMap: {
    currency: "Currency",
    requestedAmount: "RequestedAmount",
    cashBackAmount: "CashBackAmount",
    tipAmount: "TipAmount",
    paidAmount: "PaidAmount",
    minimumAmountToDeliver: "MinimumAmountToDeliver",
    maximumCashBackAmount: "MaximumCashBackAmount",
    minimumSplitAmount: "MinimumSplitAmount",
  },
});
