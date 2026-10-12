import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Filter to compute the totals. Used for the Get Totals, to request totals for a (or a combination
 * of) particular value of the POI Terminal, Sale Terminal, Cashier, Shift, or TotalsGroupID.
 */
export type TotalFilter2 = {
  /** Identification of a POI System or a POI Terminal for the Sale to POI protocol. */
  poiid?: string;
  /** Identification of a Sale System or a Sale Terminal for the Sale to POI protocol. */
  saleId?: string;
  /** Identification of the Cashier or Operator. */
  operatorId?: string;
  /** Shift number. */
  shiftNumber?: string;
  /**
   * Sent if totals in the response have to be computed only for this particular value of
   * TotalsGroupID.
   */
  totalsGroupId?: string;
};

export const totalFilter2Schema: Schema<TotalFilter2> = s.object<TotalFilter2>({
  poiid: s.optional(s.string()),
  saleId: s.optional(s.string()),
  operatorId: s.optional(s.string()),
  shiftNumber: s.optional(s.string()),
  totalsGroupId: s.optional(s.string()),
  _keysMap: {
    poiid: "POIID",
    saleId: "SaleID",
    operatorId: "OperatorID",
    shiftNumber: "ShiftNumber",
    totalsGroupId: "TotalsGroupID",
  },
});
