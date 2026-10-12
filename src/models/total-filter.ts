import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TotalFilter = {
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

export const totalFilterSchema: Schema<TotalFilter> = s.object<TotalFilter>({
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
