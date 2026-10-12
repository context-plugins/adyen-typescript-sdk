import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { totalDetailSchema, type TotalDetail } from "./total-detail.js";
import { totalFilter2Schema, type TotalFilter2 } from "./total-filter2.js";

/** Content of the Get Totals Request message. */
export type GetTotalsRequest2 = {
  /**
   * Indicates the hierarchical structure of the reconciliation result of the Sale to POI
   * reconciliation. Required to present totals per value of element included in this cluster (POI
   * Terminal, Sale Terminal, Cashier, Shift, TotalsGroupID). Possible values:
   * * **OperatorID**
   * * **POIID**
   * * **SaleID**
   * * **ShiftNumber**
   * * **TotalsGroupID**
   */
  totalDetails?: TotalDetail[];
  /**
   * Filter to compute the totals. Used for the Get Totals, to request totals for a (or a
   * combination of) particular value of the POI Terminal, Sale Terminal, Cashier, Shift, or
   * TotalsGroupID.
   */
  totalFilter?: TotalFilter2;
};

export const getTotalsRequest2Schema: Schema<GetTotalsRequest2> = s.object<GetTotalsRequest2>({
  totalDetails: s.optional(s.array(s.lazy(() => totalDetailSchema))),
  totalFilter: s.optional(s.lazy(() => totalFilter2Schema)),
  _keysMap: {
    totalDetails: "TotalDetails",
    totalFilter: "TotalFilter",
  },
});
