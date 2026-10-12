import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information related to the software and hardware feature of the Sale Terminal. Present if the
 * login involve a Sale Terminal.
 */
export type SaleTerminalData2 = {
  /**
   * Identification of a group of transactions on a POI Terminal, having the same Sale features.
   * Could be used to group POI for reconciliation or other purpose defined by the Sale System. The
   * default value is assigned by the Login Request.
   */
  totalsGroupId?: string;
};

export const saleTerminalData2Schema: Schema<SaleTerminalData2> = s.object<SaleTerminalData2>({
  totalsGroupId: s.optional(s.string()),
  _keysMap: {
    totalsGroupId: "TotalsGroupID",
  },
});
